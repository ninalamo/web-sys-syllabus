import { useState, useEffect, useRef, useMemo, useCallback, Suspense } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Content from './components/Content'
import { ALL_ITEMS } from './data'

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

  return (
    <div className="app">
      <Header
        title={item?.title}
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
    </div>
  )
}
