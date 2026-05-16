import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
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
  const [html, setHtml] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [theme, setTheme] = useState(saved.theme || 'light')
  const [fontSize, setFontSize] = useState(saved.fontSize || 100)
  const contentRef = useRef(null)

  const load = useCallback(async (i) => {
    const item = ALL_ITEMS[i]
    if (!item) return
    setLoading(true)
    setError(null)
    setHtml(null)
    try {
      const res = await fetch(item.file)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const text = await res.text()
      const doc = new DOMParser().parseFromString(text, 'text/html')
      const body = doc.querySelector('body')
      setHtml(body ? body.innerHTML : '<p>No content.</p>')
    } catch (e) {
      setError(`Failed to load "${item.file}": ${e.message}`)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { load(index) }, [index, load])

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

  const goTo = (n) => {
    if (n >= 0 && n < ALL_ITEMS.length) setIndex(n)
  }

  const cycleTheme = () => {
    setTheme((p) => THEMES[(THEMES.indexOf(p) + 1) % THEMES.length])
  }

  const item = ALL_ITEMS[index]

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
        <Content
          ref={contentRef}
          html={html}
          loading={loading}
          error={error}
          fontSize={fontSize}
        />
      </div>
    </div>
  )
}
