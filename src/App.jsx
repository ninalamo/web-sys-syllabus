import { useState, useEffect, useRef, useMemo, useCallback, Suspense } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Content from './components/Content'
import { ALL_ITEMS, CHAPTERS } from './data'

const THEMES = ['light', 'sepia', 'dark']

export default function App() {
  const saved = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('reader-state') || '{}')
    } catch {
      return {}
    }
  }, [])

  const [index, setIndex] = useState(typeof saved.index === 'number' ? saved.index : 0)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [theme, setTheme] = useState(saved.theme || 'light')
  const [fontSize, setFontSize] = useState(saved.fontSize || 100)
  const contentRef = useRef(null)

  useEffect(() => {
    try {
      localStorage.setItem('reader-state', JSON.stringify({ index, theme, fontSize }))
    } catch {}
  }, [index, theme, fontSize])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0
  }, [index])

  const goTo = useCallback((n) => {
    if (n >= 0 && n < ALL_ITEMS.length) setIndex(n)
  }, [])

  const cycleTheme = () => {
    setTheme((p) => THEMES[(THEMES.indexOf(p) + 1) % THEMES.length])
  }

  const item = ALL_ITEMS[index]
  const CurrentComponent = item?.component

  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const handleScroll = () => {
      setShowScrollTop(el.scrollTop > 300)
    }

    el.addEventListener('scroll', handleScroll)
    // Run once initially
    handleScroll()

    return () => el.removeEventListener('scroll', handleScroll)
  }, [index]) // Re-run when page changes to bind to new reference or reset scroll

  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const headerTitle = useMemo(() => {
    if (!item) return ''
    for (const chapter of CHAPTERS) {
      for (const week of chapter.items) {
        if (week.file === item.file) {
          return `${chapter.title.split(':')[0]} › ${week.title}`
        }
        if (week.children) {
          for (const cat of week.children) {
            const found = cat.items.find((sub) => sub.file === item.file)
            if (found) {
              const weekNum = week.file.match(/week-(\d+)/i)?.[1] || ''
              return `Week ${parseInt(weekNum)} › ${cat.title} › ${found.title}`
            }
          }
        }
      }
    }
    return item.title
  }, [item])

  const fileToIndexMap = useMemo(() => {
    const map = {}
    ALL_ITEMS.forEach((it, i) => {
      map[it.file] = i
    })
    return map
  }, [])

  return (
    <div className="app">
      <Header
        title={headerTitle}
        index={index}
        total={ALL_ITEMS.length}
        fontSize={fontSize}
        theme={theme}
        onToggleSidebar={() => setSidebarOpen((p) => !p)}
        onPrev={() => goTo(index - 1)}
        onNext={() => goTo(index + 1)}
        onFontUp={() => setFontSize((p) => Math.min(140, p + 10))}
        onFontDown={() => setFontSize((p) => Math.max(80, p - 10))}
        onCycleTheme={cycleTheme}
      />
      <div className="reader">
        <Sidebar
          currentIndex={index}
          onSelect={(i) => goTo(i)}
          open={sidebarOpen}
        />
        <Content ref={contentRef} fontSize={fontSize}>
          <Breadcrumbs
            item={item}
            fileToIndexMap={fileToIndexMap}
            onSelect={(i) => goTo(i)}
          />
          <Suspense fallback={<div className="loading">Loading…</div>}>
            {CurrentComponent
              ? <CurrentComponent />
              : <p className="error">Content not found.</p>
            }
          </Suspense>
          {item?.children && (
            <WeeklyDirectory
              weekItem={item}
              fileToIndexMap={fileToIndexMap}
              onSelect={(i) => goTo(i)}
            />
          )}
          <PageNavigation
            currentIndex={index}
            onSelect={(i) => goTo(i)}
          />
        </Content>
      </div>

      <button
        className={`scroll-to-top${showScrollTop ? ' visible' : ''}`}
        onClick={scrollToTop}
        title="Scroll to top"
      >
        ▲
      </button>
    </div>
  )
}

function Breadcrumbs({ item, fileToIndexMap, onSelect }) {
  const segments = useMemo(() => {
    if (!item) return []
    const segs = []

    for (const chapter of CHAPTERS) {
      for (const week of chapter.items) {
        if (week.file === item.file) {
          segs.push({ label: chapter.title.split(':')[0], file: chapter.items[0].file })
          segs.push({ label: week.title, active: true })
          return segs
        }
        if (week.children) {
          for (const cat of week.children) {
            const found = cat.items.find((sub) => sub.file === item.file)
            if (found) {
              segs.push({ label: chapter.title.split(':')[0], file: chapter.items[0].file })
              const weekNum = week.file.match(/week-(\d+)/i)?.[1] || ''
              segs.push({ label: `Week ${parseInt(weekNum)}`, file: week.file })
              segs.push({ label: cat.title })
              segs.push({ label: found.title, active: true })
              return segs
            }
          }
        }
      }
    }

    segs.push({ label: item.title, active: true })
    return segs
  }, [item])

  if (segments.length === 0) return null

  return (
    <div className="breadcrumb-container">
      {segments.map((seg, idx) => {
        const isLinkable = seg.file && fileToIndexMap[seg.file] !== undefined && !seg.active
        return (
          <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            {idx > 0 && <span className="breadcrumb-separator">›</span>}
            <span
              className={`breadcrumb-item${isLinkable ? ' linkable' : ''}${seg.active ? ' active' : ''}`}
              onClick={() => isLinkable && onSelect(fileToIndexMap[seg.file])}
            >
              {seg.label}
            </span>
          </span>
        )
      })}
    </div>
  )
}

function PageNavigation({ currentIndex, onSelect }) {
  const prevItem = currentIndex > 0 ? ALL_ITEMS[currentIndex - 1] : null
  const nextItem = currentIndex < ALL_ITEMS.length - 1 ? ALL_ITEMS[currentIndex + 1] : null

  return (
    <div className="page-nav-container">
      {prevItem ? (
        <div className="page-nav-card prev" onClick={() => onSelect(currentIndex - 1)}>
          <span className="page-nav-label">← Previous</span>
          <span className="page-nav-title">{prevItem.title}</span>
        </div>
      ) : <div className="page-nav-spacer" />}

      {nextItem ? (
        <div className="page-nav-card next" onClick={() => onSelect(currentIndex + 1)}>
          <span className="page-nav-label">Next →</span>
          <span className="page-nav-title">{nextItem.title}</span>
        </div>
      ) : <div className="page-nav-spacer" />}
    </div>
  )
}

function WeeklyDirectory({ weekItem, fileToIndexMap, onSelect }) {
  if (!weekItem || !weekItem.children) return null

  return (
    <div className="weekly-directory">
      <h3 className="directory-title">Weekly Roadmap &amp; Materials</h3>
      <p className="directory-subtitle">Explore the reference resources, slide presentations, and practice exercises for this week.</p>
      
      <div className="directory-grid">
        {weekItem.children.map((category) => {
          const categoryIcon = category.title === 'Resources' ? '📚' : category.title === 'Presentations' ? '🖥️' : '💻'
          return (
            <div key={category.title} className="directory-card">
              <h4 className="category-header">
                <span className="category-icon">{categoryIcon}</span>
                {category.title}
              </h4>
              <ul className="category-list">
                {category.items.map((subItem) => {
                  const idx = fileToIndexMap[subItem.file]
                  return (
                    <li key={subItem.file} className="category-list-item" onClick={() => idx !== undefined && onSelect(idx)}>
                      <span className="item-bullet">▸</span>
                      <span className="item-title-link">{subItem.title}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
