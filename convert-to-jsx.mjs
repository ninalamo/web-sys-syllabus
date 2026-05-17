import fs from 'fs'
import path from 'path'

const ROOT = process.cwd()
const SRC = path.join(ROOT, 'src', 'content')

if (!fs.existsSync(SRC)) fs.mkdirSync(SRC, { recursive: true })

const CHAPTERS = [
  {
    id: 'e2',
    title: 'Elective 2: Building Web Products',
    items: [
      { title: 'Syllabus', file: '/elective-2-building-web-products.htm' },
      { title: 'Week 1: C# Translation Bootcamp', file: '/elective-2/week-01-csharp-translation-bootcamp.htm' },
      { title: 'Week 2: Interfaces & DI Mental Model', file: '/elective-2/week-02-interfaces-and-di-mental-model.htm' },
      { title: 'Week 3: HTTP & The Web', file: '/elective-2/week-03-http-and-the-web.htm' },
      { title: 'Week 4: MVC Big Picture', file: '/elective-2/week-04-mvc-big-picture.htm' },
      { title: 'Week 5: Routing Deep-Dive', file: '/elective-2/week-05-routing-deep-dive.htm' },
      { title: 'Week 6: Controllers & Action Results', file: '/elective-2/week-06-controllers-and-action-results.htm' },
      { title: 'Week 7: Views & Layouts', file: '/elective-2/week-07-views-and-layouts.htm' },
      { title: 'Week 8: Model Binding & Validation', file: '/elective-2/week-08-model-binding-and-validation.htm' },
      { title: 'Week 9: EF Core Fundamentals', file: '/elective-2/week-09-ef-core-fundamentals.htm' },
      { title: 'Week 10: Relationships & Data Display', file: '/elective-2/week-10-relationships-and-data-display.htm' },
      { title: 'Week 11: Consuming APIs with HttpClient', file: '/elective-2/week-11-consuming-apis-with-httpclient.htm' },
      { title: 'Week 12: Mini-Capstone Checkpoint', file: '/elective-2/week-12-mini-capstone-checkpoint.htm' },
      { title: 'Week 13: Authentication & Authorization', file: '/elective-2/week-13-authentication-and-authorization.htm' },
      { title: 'Week 14: Security Fundamentals', file: '/elective-2/week-14-security-fundamentals.htm' },
      { title: 'Week 15: Capstone Sprint', file: '/elective-2/week-15-capstone-sprint.htm' },
      { title: 'Week 16: Capstone Final', file: '/elective-2/week-16-capstone-final-deploy-and-present.htm' },
      { title: 'Full Discussions', file: '/elective-2-discussions.htm' },
    ],
  },
  {
    id: 'e3',
    title: 'Elective 3: Production-Grade Products',
    items: [
      { title: 'Syllabus', file: '/elective-3-production-grade-products.htm' },
      { title: 'Week 1: Modern JavaScript Review', file: '/elective-3/week-01-modern-javascript-review.htm' },
      { title: 'Week 2: Async JavaScript Deep-Dive', file: '/elective-3/week-02-async-javascript-deep-dive.htm' },
      { title: 'Week 3: TypeScript Essentials', file: '/elective-3/week-03-typescript-essentials.htm' },
      { title: 'Week 4: Dev Tooling & Workflow', file: '/elective-3/week-04-dev-tooling-and-workflow.htm' },
      { title: 'Week 5: Component Thinking in Vanilla JS', file: '/elective-3/week-05-component-thinking-in-vanilla-js.htm' },
      { title: 'Week 6: React Fundamentals', file: '/elective-3/week-06-react-fundamentals.htm' },
      { title: 'Week 7: Effects & Data Fetching', file: '/elective-3/week-07-effects-and-data-fetching.htm' },
      { title: 'Week 8: React Router & SPA Concepts', file: '/elective-3/week-08-react-router-and-spa-concepts.htm' },
      { title: 'Week 9: API Design Philosophy', file: '/elective-3/week-09-api-design-philosophy.htm' },
      { title: 'Week 10: ASP.NET Core Web API', file: '/elective-3/week-10-aspnet-core-web-api.htm' },
      { title: 'Week 11: Frontend-Backend Integration', file: '/elective-3/week-11-frontend-backend-integration.htm' },
      { title: 'Week 12: API Versioning & Documentation', file: '/elective-3/week-12-api-versioning-and-documentation.htm' },
      { title: 'Week 13: Auth Deep-Dive', file: '/elective-3/week-13-auth-deep-dive.htm' },
      { title: 'Week 14: Testing', file: '/elective-3/week-14-testing.htm' },
      { title: 'Week 15: CI/CD & Deployment', file: '/elective-3/week-15-ci-cd-and-deployment.htm' },
      { title: 'Week 16: Capstone Final', file: '/elective-3/week-16-capstone-final.htm' },
      { title: 'Full Discussions', file: '/elective-3-discussions.htm' },
    ],
  },
  {
    id: 'appendix',
    title: 'Appendices',
    items: [
      { title: 'Teaching Script Format', file: '/teaching-script-format.htm' },
    ],
  },
]

const ALL_ITEMS = CHAPTERS.flatMap((s) => s.items)

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

function componentNameFromFile(file) {
  const base = path.basename(file, '.htm')
  const cleaned = base.replace(/^week-\d+-/, '').replace(/[- ]/g, ' ')
  return sanitizeComponentName(cleaned)
}

// ─── HTML extraction ──────────────────────────────────────────────────────────

function extractContent(html) {
  // Try <main class="content"> first
  const mainMatch = html.match(/<main\s+class="content">([\s\S]*?)<\/main>/i)
  if (mainMatch) return mainMatch[1].trim()

  // Strip head / scripts / nav / aside
  let body = html.replace(/<head>[\s\S]*?<\/head>/i, '')
  body = body.replace(/<script[\s\S]*?<\/script>/gi, '')
  body = body.replace(/<nav[\s\S]*?<\/nav>/gi, '')
  body = body.replace(/<aside[\s\S]*?<\/aside>/gi, '')

  const bodyMatch = body.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  if (bodyMatch) return bodyMatch[1].trim()

  return body.trim()
}

// ─── HTML → JSX transforms ────────────────────────────────────────────────────

/** Decode the HTML entities present in the htm files */
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

/**
 * Convert an inline style string like "color: red; font-size: 14px"
 * to a JSX style object literal string: {{ color: 'red', fontSize: '14px' }}
 */
function styleStringToJsx(styleStr) {
  const pairs = styleStr.split(';').filter(Boolean)
  const obj = pairs.map((pair) => {
    const colonIdx = pair.indexOf(':')
    if (colonIdx === -1) return null
    const prop = pair.slice(0, colonIdx).trim()
    const val = pair.slice(colonIdx + 1).trim()
    // camelCase the CSS property
    const camel = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
    // Escape single quotes inside value
    const safeVal = val.replace(/'/g, "\\'")
    return `${camel}: '${safeVal}'`
  }).filter(Boolean).join(', ')
  return `{{ ${obj} }}`
}

/** Apply all HTML → JSX attribute and element transformations */
function htmlToJsx(html) {
  // 1. Decode entities so we get raw text
  let jsx = decodeHtmlEntities(html)

  // 2. class= → className=
  jsx = jsx.replace(/\bclass=/g, 'className=')

  // 3. for= → htmlFor=  (label for)
  jsx = jsx.replace(/\bfor=/g, 'htmlFor=')

  // 4. inline style string → JSX object
  //    style="..." → style={{ ... }}
  jsx = jsx.replace(/\bstyle="([^"]*)"/g, (_, styleStr) => `style=${styleStringToJsx(styleStr)}`)

  // 5. Self-close void elements
  const voidTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img',
                    'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']
  for (const tag of voidTags) {
    // <tag> or <tag ...attrs> — add /> if not already self-closed
    jsx = jsx.replace(
      new RegExp(`<(${tag})(\\s[^>]*)?>(?!/)`, 'gi'),
      (_, t, attrs) => `<${t}${attrs || ''} />`
    )
  }

  // 6. Remove <style>...</style> blocks (they're already in index.css)
  jsx = jsx.replace(/<style[\s\S]*?<\/style>/gi, '')

  // 7. Escape curly braces in text nodes only — we replace bare { and } that
  //    are NOT part of an attribute value or tag with JSX-safe versions.
  //    Strategy: protect already-JSX attribute braces, then escape remaining.
  //    Simple approach: escape { → &#123; } → &#125; only outside tags.
  jsx = jsx.replace(/>([^<]*)</g, (match, text) => {
    const escaped = text.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;')
    return `>${escaped}<`
  })

  return jsx
}

// ─── JSX indentation ─────────────────────────────────────────────────────────

/**
 * Rudimentary pretty-printer: indent each tag line based on nesting depth.
 * Good enough for readable output – not a full formatter.
 */
function indentJsx(jsx) {
  const lines = jsx.split('\n')
  let depth = 0
  return lines.map((line) => {
    const trimmed = line.trim()
    if (!trimmed) return ''

    // Decrease indent before closing tags
    if (/^<\//.test(trimmed)) depth = Math.max(0, depth - 1)

    const indented = '  '.repeat(depth) + trimmed

    // Increase indent after opening tags (not self-closing, not DOCTYPE)
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
        // Mismatched closing tag, ignore
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
  // 1. Escape C# generics like <IActionResult>, <INotificationService, EmailService>, <UserService>, etc.
  // These contain uppercase letters and are not valid layout HTML tags.
  let cleaned = html.replace(/<([A-Z][A-Za-z0-9_,\s]*)>/g, '&lt;$1&gt;')

  // 2. Escape literal unclosed <h1> tags used in the text (like "the <h1> to show 6" or "touch the <h1>")
  cleaned = cleaned.replace(/\b(the|a|an|your|this)\s+<h1>/gi, '$1 &lt;h1&gt;')
  cleaned = cleaned.replace(/<h1>\s+(to show|is|should)\b/gi, '&lt;h1&gt; $1')
  cleaned = cleaned.replace(/touch the\s+<h1>/gi, 'touch the &lt;h1&gt;')

  // 3. Balance mismatched/unclosed tags (like blockquotes)
  return balanceHtmlTags(cleaned)
}

// ─── Main generation loop ─────────────────────────────────────────────────────

let successCount = 0
let skipCount = 0

for (const item of ALL_ITEMS) {
  const filePath = path.join(ROOT, item.file.replace(/^\//, ''))
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP (not found): ${item.file}`)
    skipCount++
    continue
  }

  const html = fs.readFileSync(filePath, 'utf8')
  const rawContent = extractContent(html)
  const preprocessed = preprocessHtml(rawContent)
  const jsxContent = htmlToJsx(preprocessed)
  const indented = indentJsx(jsxContent)
  const compName = componentNameFromFile(item.file)

  const componentCode = `export default function ${compName}() {
  return (
    <div className="page-content">
${indented.split('\n').map((l) => '      ' + l).join('\n')}
    </div>
  )
}
`

  const outPath = path.join(SRC, `${compName}.jsx`)
  fs.writeFileSync(outPath, componentCode, 'utf8')
  console.log(`OK: ${item.file} → src/content/${compName}.jsx`)
  successCount++
}

// ─── Generate index.js ────────────────────────────────────────────────────────

const exportLines = ALL_ITEMS.map((item) => {
  const name = componentNameFromFile(item.file)
  return `export { default as ${name} } from './${name}'`
}).join('\n')

fs.writeFileSync(path.join(SRC, 'index.js'), exportLines + '\n', 'utf8')
console.log(`\nDone: ${successCount} generated, ${skipCount} skipped.`)
console.log(`Generated src/content/index.js with ${ALL_ITEMS.length} exports`)
