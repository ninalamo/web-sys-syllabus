import fs from 'fs'
import path from 'path'

const ROOT = process.cwd()
const SRC = path.join(ROOT, 'src', 'content')

if (!fs.existsSync(SRC)) fs.mkdirSync(SRC, { recursive: true })

// ─── Name helpers ────────────────────────────────────────────────────────────

function toPascalCase(str) {
  return str
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join('')
}

function sanitizeComponentName(name) {
  let s = name.replace(/['':]/g, '').trim()
  s = toPascalCase(s)
  if (/^\d/.test(s)) s = 'W' + s
  return s.replace(/[^a-zA-Z0-9_$]/g, '')
}

function uniqueComponentName(relativeFile) {
  const file = relativeFile.replace(/\\/g, '/')
  
  // Subfolder item path matches: elective-(2|3)/week-(\d+)/(resources|exercises|presentations)/(.+)
  const subMatch = file.match(/elective-(\d+)\/week-(\d+)\/(resources|exercises|presentations)\/(.+)$/i)
  if (subMatch) {
    const [, electiveNum, weekNum, category, filenameRaw] = subMatch
    const filename = path.basename(filenameRaw, path.extname(filenameRaw))
    const cleanCategory = category.slice(0, 4) // "reso", "exer", "pres"
    const cleanFilename = sanitizeComponentName(filename)
    return `E${electiveNum}W${parseInt(weekNum)}${toPascalCase(cleanCategory)}${cleanFilename}`
  }
  
  // Main week page, e.g. "elective-2/week-01-csharp-translation-bootcamp.htm"
  const weekMatch = file.match(/elective-(\d+)\/week-(\d+)-(.+)\.htm$/i)
  if (weekMatch) {
    const [, electiveNum, weekNum, rest] = weekMatch
    const cleanRest = rest.replace(/\.htm$/i, '')
    return sanitizeComponentName(cleanRest)
  }
  
  // Root level page, e.g. "elective-2-building-web-products.htm"
  const base = path.basename(file, path.extname(file))
  return sanitizeComponentName(base)
}

function getTitleFromHtml(htmlContent, fallback) {
  const hMatch = htmlContent.match(/<(h[1-2])[^>]*>([\s\S]*?)<\/\1>/i)
  if (hMatch) {
    const text = hMatch[2].replace(/<[^>]*>/g, '').trim()
    const decoded = text
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, ' ')
    if (/^Week \d+:\s*/i.test(decoded)) {
      return decoded.replace(/^Week \d+:\s*/i, '')
    }
    return decoded
  }

  const match = htmlContent.match(/<title>([\s\S]*?)<\/title>/i)
  if (match && match[1].trim()) {
    const text = match[1].trim()
      .replace(/Week \d+:\s*/gi, '')
      .replace(/Elective \d+:\s*/gi, '')
      .replace(/\s*—\s*Placeholder/gi, '')
    if (!text.endsWith('.htm') && !text.endsWith('.md')) {
      return text
    }
  }
  return fallback
}

function formatTitleFromFilename(filename) {
  const base = path.basename(filename, path.extname(filename))
  return base
    .replace(/[-_]/g, ' ')
    .replace(/\b[a-z]/g, (c) => c.toUpperCase())
}

function getLanguageClass(ext, filename) {
  const lowExt = ext.toLowerCase()
  if (lowExt === '.cs') return 'language-csharp'
  if (lowExt === '.js') return 'language-javascript'
  if (lowExt === '.jsx') return 'language-jsx'
  if (lowExt === '.ts') return 'language-typescript'
  if (lowExt === '.tsx') return 'language-tsx'
  if (lowExt === '.json') return 'language-json'
  if (lowExt === '.cshtml') return 'language-cshtml'
  if (lowExt === '.css') return 'language-css'
  if (lowExt === '.md') return 'language-markdown'
  if (lowExt === '.yml' || lowExt === '.yaml' || filename.includes('yml') || filename.includes('yaml')) return 'language-yaml'
  return 'language-text'
}

function escapeCodeString(code) {
  return code
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${')
}

// ─── HTML extraction ──────────────────────────────────────────────────────────

function extractContent(html) {
  const mainMatch = html.match(/<main\s+class="content">([\s\S]*?)<\/main>/i)
  if (mainMatch) return mainMatch[1].trim()

  let body = html.replace(/<head>[\s\S]*?<\/head>/i, '')
  body = body.replace(/<script[\s\S]*?<\/script>/gi, '')
  body = body.replace(/<nav[\s\S]*?<\/nav>/gi, '')
  body = body.replace(/<aside[\s\S]*?<\/aside>/gi, '')

  const bodyMatch = body.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  if (bodyMatch) return bodyMatch[1].trim()

  return body.trim()
}

// ─── HTML → JSX transforms ────────────────────────────────────────────────────

function decodeHtmlEntities(str) {
  return str
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, '\u00a0')
    .replace(/&#(\d+);/g, (match, codeStr) => {
      const code = Number(codeStr)
      if (code === 38 || code === 60 || code === 62 || code === 123 || code === 125) {
        return match
      }
      return String.fromCharCode(code)
    })
}

function styleStringToJsx(styleStr) {
  const pairs = styleStr.split(';').filter(Boolean)
  const obj = pairs.map((pair) => {
    const colonIdx = pair.indexOf(':')
    if (colonIdx === -1) return null
    const prop = pair.slice(0, colonIdx).trim()
    const val = pair.slice(colonIdx + 1).trim()
    const camel = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
    const safeVal = val.replace(/'/g, "\\'")
    return `${camel}: '${safeVal}'`
  }).filter(Boolean).join(', ')
  return `{{ ${obj} }}`
}

function htmlToJsx(html) {
  let jsx = decodeHtmlEntities(html)
  jsx = jsx.replace(/\bclass=/g, 'className=')
  jsx = jsx.replace(/\bfor=/g, 'htmlFor=')
  jsx = jsx.replace(/\bstyle="([^"]*)"/g, (_, styleStr) => `style=${styleStringToJsx(styleStr)}`)

  const voidTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img',
                    'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']
  for (const tag of voidTags) {
    jsx = jsx.replace(
      new RegExp(`<(${tag})(\\s[^>]*)?>(?!/)`, 'gi'),
      (_, t, attrs) => `<${t}${attrs || ''} />`
    )
  }

  jsx = jsx.replace(/<style[\s\S]*?<\/style>/gi, '')

  jsx = jsx.replace(/>([^<]*)</g, (match, text) => {
    const escaped = text.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;')
    return `>${escaped}<`
  })

  return jsx
}

function indentJsx(jsx) {
  const lines = jsx.split('\n')
  let depth = 0
  return lines.map((line) => {
    const trimmed = line.trim()
    if (!trimmed) return ''
    if (/^<\//.test(trimmed)) depth = Math.max(0, depth - 1)
    const indented = '  '.repeat(depth) + trimmed
    if (/^<[a-zA-Z][^/]*[^/]>$/.test(trimmed) && !/^<!/.test(trimmed)) {
      depth++
    }
    return indented
  }).join('\n')
}

function balanceHtmlTags(html) {
  const tagRegex = /<(\/?)([a-zA-Z1-6]+)(?:\s+[^>]*)?>/g
  let balanced = ''
  let lastIndex = 0
  const stack = []
  const selfClosing = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'])

  let match
  while ((match = tagRegex.exec(html)) !== null) {
    const [fullTag, isClosing, tagNameRaw] = match
    const tagName = tagNameRaw.toLowerCase()
    const tagIndex = match.index

    balanced += html.substring(lastIndex, tagIndex)
    lastIndex = tagRegex.lastIndex

    if (selfClosing.has(tagName)) {
      balanced += fullTag
      continue
    }

    if (isClosing) {
      const stackIdx = stack.lastIndexOf(tagName)
      if (stackIdx !== -1) {
        while (stack.length > stackIdx) {
          const openTag = stack.pop()
          balanced += `</${openTag}>`
        }
      } else {
        continue
      }
    } else {
      if (/^(h[1-6]|hr)$/.test(tagName)) {
        while (stack.length > 0 && (stack[stack.length - 1] === 'blockquote' || stack[stack.length - 1] === 'p')) {
          const openTag = stack.pop()
          balanced += `</${openTag}>`
        }
      }
      stack.push(tagName)
      balanced += fullTag
    }
  }

  balanced += html.substring(lastIndex)

  while (stack.length > 0) {
    const openTag = stack.pop()
    balanced += `</${openTag}>`
  }

  return balanced
}

function preprocessHtml(html) {
  let cleaned = html.replace(/<([A-Z][A-Za-z0-9_,\s]*)>/g, '&lt;$1&gt;')
  cleaned = cleaned.replace(/\b(the|a|an|your|this)\s+<h1>/gi, '$1 &lt;h1&gt;')
  cleaned = cleaned.replace(/<h1>\s+(to show|is|should)\b/gi, '&lt;h1&gt; $1')
  cleaned = cleaned.replace(/touch the\s+<h1>/gi, 'touch the &lt;h1&gt;')
  return balanceHtmlTags(cleaned)
}

// ─── Dynamic Discovery & Tree Construction ────────────────────────────────────

console.log('Discovering files dynamically...')

const CHAPTERS = []
const processedFiles = new Set()
let successCount = 0
let skipCount = 0

// Electives configurations
const electives = [
  {
    id: 'e2',
    title: 'Elective 2: Building Web Products',
    dir: 'elective-2',
    syllabus: 'elective-2-building-web-products.htm',
    discussions: 'elective-2-discussions.htm'
  },
  {
    id: 'e3',
    title: 'Elective 3: Production-Grade Products',
    dir: 'elective-3',
    syllabus: 'elective-3-production-grade-products.htm',
    discussions: 'elective-3-discussions.htm'
  }
]

for (const el of electives) {
  const elChapter = {
    id: el.id,
    title: el.title,
    items: []
  }

  // 1. Syllabus
  const syllabusPath = path.join(ROOT, el.syllabus)
  if (fs.existsSync(syllabusPath)) {
    const compName = uniqueComponentName(el.syllabus)
    elChapter.items.push({
      title: 'Syllabus',
      file: '/' + el.syllabus,
      componentName: compName
    })
    processFile(el.syllabus, compName)
  }

  // 2. Discover weeks
  const elDirPath = path.join(ROOT, el.dir)
  if (fs.existsSync(elDirPath)) {
    const children = fs.readdirSync(elDirPath)
    const weekDirs = children
      .filter((name) => fs.statSync(path.join(elDirPath, name)).isDirectory() && /^week-\d+$/i.test(name))
      .sort()

    for (const weekDir of weekDirs) {
      const weekPath = path.join(elDirPath, weekDir)
      const weekNum = parseInt(weekDir.split('-')[1])

      // Find the main week file in the elective root
      const mainWeekFileMatch = fs.readdirSync(elDirPath).find((name) => {
        return name.toLowerCase().startsWith(`week-${String(weekNum).padStart(2, '0')}-`) && name.endsWith('.htm')
      })

      if (mainWeekFileMatch) {
        const relativeMainPath = `${el.dir}/${mainWeekFileMatch}`
        const compName = uniqueComponentName(relativeMainPath)
        const mainHtml = fs.readFileSync(path.join(ROOT, relativeMainPath), 'utf8')
        const weekTitle = getTitleFromHtml(mainHtml, `Week ${weekNum}`)

        const weekItem = {
          title: `Week ${weekNum}: ${weekTitle}`,
          file: '/' + relativeMainPath,
          componentName: compName,
          children: []
        }

        processFile(relativeMainPath, compName)

        // Find nested subcategories (resources, presentations, exercises)
        const categories = ['resources', 'presentations', 'exercises']
        for (const cat of categories) {
          const catPath = path.join(weekPath, cat)
          if (fs.existsSync(catPath)) {
            const files = fs.readdirSync(catPath)
              .filter((f) => !f.startsWith('.'))
              .sort()

            if (files.length > 0) {
              const catItem = {
                title: cat.charAt(0).toUpperCase() + cat.slice(1),
                items: []
              }

              for (const file of files) {
                const relativeFilePath = `${el.dir}/${weekDir}/${cat}/${file}`
                const fileCompName = uniqueComponentName(relativeFilePath)
                
                let title = formatTitleFromFilename(file)
                if (file.endsWith('.htm') || file.endsWith('.html')) {
                  const subHtml = fs.readFileSync(path.join(ROOT, relativeFilePath), 'utf8')
                  title = getTitleFromHtml(subHtml, title)
                }

                catItem.items.push({
                  title: title,
                  file: '/' + relativeFilePath,
                  componentName: fileCompName
                })

                processFile(relativeFilePath, fileCompName)
              }

              weekItem.children.push(catItem)
            }
          }
        }

        elChapter.items.push(weekItem)
      }
    }
  }

  // 3. Discussions
  const discussionsPath = path.join(ROOT, el.discussions)
  if (fs.existsSync(discussionsPath)) {
    const compName = uniqueComponentName(el.discussions)
    elChapter.items.push({
      title: 'Full Discussions',
      file: '/' + el.discussions,
      componentName: compName
    })
    processFile(el.discussions, compName)
  }

  CHAPTERS.push(elChapter)
}

// 4. Appendices
const teachingScript = 'teaching-script-format.htm'
const appendixChapter = {
  id: 'appendix',
  title: 'Appendices',
  items: []
}
if (fs.existsSync(path.join(ROOT, teachingScript))) {
  const compName = uniqueComponentName(teachingScript)
  appendixChapter.items.push({
    title: 'Teaching Script Format',
    file: '/' + teachingScript,
    componentName: compName
  })
  processFile(teachingScript, compName)
  CHAPTERS.push(appendixChapter)
}

// ─── File conversion engine ──────────────────────────────────────────────────

function processFile(relativeFile, compName) {
  const filePath = path.join(ROOT, relativeFile.replace(/^\//, ''))
  if (processedFiles.has(compName)) return
  processedFiles.add(compName)

  if (!fs.existsSync(filePath)) {
    console.log(`SKIP (not found): ${relativeFile}`)
    skipCount++
    return
  }

  const ext = path.extname(filePath).toLowerCase()
  const filename = path.basename(filePath)

  let componentCode = ''

  if (ext === '.htm' || ext === '.html') {
    const html = fs.readFileSync(filePath, 'utf8')
    const rawContent = extractContent(html)
    const preprocessed = preprocessHtml(rawContent)
    const jsxContent = htmlToJsx(preprocessed)
    const indented = indentJsx(jsxContent)

    componentCode = `export default function ${compName}() {
  return (
    <div className="page-content">
${indented.split('\n').map((l) => '      ' + l).join('\n')}
    </div>
  )
}
`
  } else {
    // Code or text files
    const rawText = fs.readFileSync(filePath, 'utf8')
    const escaped = escapeCodeString(rawText)
    const langClass = getLanguageClass(ext, filename)
    const langLabel = langClass.replace('language-', '').toUpperCase()

    componentCode = `export default function ${compName}() {
  const code = \`${escaped}\`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">${filename}</span>
        <span className="code-lang">${langLabel}</span>
      </div>
      <pre className="${langClass}"><code className="${langClass}">{code}</code></pre>
    </div>
  )
}
`
  }

  const outPath = path.join(SRC, `${compName}.jsx`)
  fs.writeFileSync(outPath, componentCode, 'utf8')
  console.log(`OK: ${relativeFile} → src/content/${compName}.jsx`)
  successCount++
}

// ─── Generate src/data.js dynamically ────────────────────────────────────────

const allExportedComponents = Array.from(processedFiles)

const importsSection = 'import { lazy } from \'react\'\n\n'

const chaptersSection = `export const CHAPTERS = [\n` + CHAPTERS.map((ch) => {
  return `  {\n    id: '${ch.id}',\n    title: '${ch.title}',\n    items: [\n` + ch.items.map((item) => {
    let out = `      {\n        title: '${item.title.replace(/'/g, "\\'")}',\n        file: '${item.file}',\n        component: lazy(() => import('./content/${item.componentName}'))`
    if (item.children && item.children.length > 0) {
      out += `,\n        children: [\n` + item.children.map((cat) => {
        return `          {\n            title: '${cat.title}',\n            items: [\n` + cat.items.map((subItem) => {
          return `              {\n                title: '${subItem.title.replace(/'/g, "\\'")}',\n                file: '${subItem.file}',\n                component: lazy(() => import('./content/${subItem.componentName}'))\n              }`
        }).join(',\n') + `\n            ]\n          }`
      }).join(',\n') + `\n        ]`
    }
    out += `\n      }`
    return out
  }).join(',\n') + `\n    ]\n  }`
}).join(',\n') + `\n]\n`

const flatteningSection = `
function flattenItems(items) {
  const flat = []
  for (const item of items) {
    if (item.component) {
      flat.push(item)
    }
    if (item.children) {
      for (const cat of item.children) {
        flat.push(...flattenItems(cat.items))
      }
    }
  }
  return flat
}

export const ALL_ITEMS = CHAPTERS.flatMap((s) => flattenItems(s.items))
`

fs.writeFileSync(path.join(ROOT, 'src', 'data.js'), importsSection + chaptersSection + flatteningSection, 'utf8')
console.log('\nGenerated src/data.js successfully.')

// ─── Generate src/content/index.js dynamically ────────────────────────────────

const indexExportLines = allExportedComponents.map((name) => {
  return `export { default as ${name} } from './${name}'`
}).join('\n')

fs.writeFileSync(path.join(SRC, 'index.js'), indexExportLines + '\n', 'utf8')
console.log(`Generated src/content/index.js with ${allExportedComponents.length} exports`)
console.log(`\nDone: ${successCount} generated successfully.`)
