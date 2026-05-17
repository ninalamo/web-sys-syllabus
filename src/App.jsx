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
          <Suspense fallback={<div className="loading">Loading…</div>}>
            {CurrentComponent
              ? <CurrentComponent />
              : <p className="error">Content not found.</p>
            }
          </Suspense>
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
