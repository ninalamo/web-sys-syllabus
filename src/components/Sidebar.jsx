import { useState, useMemo, useEffect } from 'react'
import { CHAPTERS, ALL_ITEMS } from '../data'

export default function Sidebar({ currentIndex, onSelect, open }) {
  const [openSections, setOpenSections] = useState(() => {
    const map = {}
    CHAPTERS.forEach((_, i) => { map[i] = true })
    return map
  })
  const [openWeeks, setOpenWeeks] = useState({})
  const [openCategories, setOpenCategories] = useState({})

  const fileToIndexMap = useMemo(() => {
    const map = {}
    ALL_ITEMS.forEach((item, i) => {
      map[item.file] = i
    })
    return map
  }, [])

  // Auto-expand parents of the active item
  useEffect(() => {
    const activeItem = ALL_ITEMS[currentIndex]
    if (!activeItem) return

    CHAPTERS.forEach((chapter) => {
      chapter.items.forEach((week) => {
        if (week.file === activeItem.file) {
          setOpenWeeks((prev) => ({ ...prev, [week.file]: true }))
        } else if (week.children) {
          week.children.forEach((cat) => {
            const found = cat.items.some((sub) => sub.file === activeItem.file)
            if (found) {
              setOpenWeeks((prev) => ({ ...prev, [week.file]: true }))
              setOpenCategories((prev) => ({ ...prev, [`${week.file}/${cat.title}`]: true }))
            }
          })
        }
      })
    })
  }, [currentIndex])

  const toggleSection = (si) => {
    setOpenSections((prev) => ({ ...prev, [si]: !prev[si] }))
  }

  const toggleWeek = (file, e) => {
    e.stopPropagation()
    setOpenWeeks((prev) => ({ ...prev, [file]: !prev[file] }))
  }

  const selectWeek = (file) => {
    const idx = fileToIndexMap[file]
    if (idx !== undefined) {
      onSelect(idx)
      // Open the subfolders when selecting the week
      setOpenWeeks((prev) => ({ ...prev, [file]: true }))
    }
  }

  const toggleCategory = (pathKey, e) => {
    e.stopPropagation()
    setOpenCategories((prev) => ({ ...prev, [pathKey]: !prev[pathKey] }))
  }

  return (
    <div className={`sidebar${open ? '' : ' closed'}`}>
      <div className="sidebar-header">Contents</div>
      {CHAPTERS.map((section, si) => {
        return (
          <div className="sidebar-section" key={section.id}>
            <div
              className="section-title"
              onClick={() => toggleSection(si)}
            >
              <span
                className={`section-arrow${openSections[si] ? ' open' : ''}`}
              >
                &gt;
              </span>
              {section.title}
            </div>
            {openSections[si] && (
              <div className="section-items">
                {section.items.map((item) => {
                  const isWeekActive = fileToIndexMap[item.file] === currentIndex
                  const hasChildren = item.children && item.children.length > 0
                  const isWeekExpanded = openWeeks[item.file]

                  return (
                    <div key={item.file} className="sidebar-week-group">
                      <div
                        className={`sidebar-item week-item${isWeekActive ? ' active' : ''}`}
                        onClick={() => selectWeek(item.file)}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', paddingLeft: '1.25rem' }}
                      >
                        {hasChildren && (
                          <span
                            className={`week-arrow${isWeekExpanded ? ' open' : ''}`}
                            onClick={(e) => toggleWeek(item.file, e)}
                            style={{
                              display: 'inline-block',
                              width: '12px',
                              textAlign: 'center',
                              cursor: 'pointer',
                              color: 'var(--muted)',
                              transition: 'transform 0.2s',
                              userSelect: 'none'
                            }}
                          >
                            ▸
                          </span>
                        )}
                        {!hasChildren && <span style={{ width: '12px' }} />}
                        <span className="item-title-text" style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {item.title}
                        </span>
                      </div>
                      
                      {hasChildren && isWeekExpanded && (
                        <div className="category-group" style={{ paddingLeft: '1.85rem' }}>
                          {item.children.map((cat) => {
                            const pathKey = `${item.file}/${cat.title}`
                            const isCatExpanded = openCategories[pathKey]

                            return (
                              <div key={cat.title} className="sidebar-cat-group" style={{ margin: '0.15rem 0' }}>
                                <div
                                  className="category-title"
                                  onClick={(e) => toggleCategory(pathKey, e)}
                                  style={{
                                    padding: '0.25rem 0.5rem',
                                    fontSize: '0.72rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    color: 'var(--muted)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.3rem',
                                    userSelect: 'none'
                                  }}
                                >
                                  <span
                                    className={`cat-arrow${isCatExpanded ? ' open' : ''}`}
                                    style={{
                                      display: 'inline-block',
                                      transition: 'transform 0.2s',
                                      fontSize: '0.65rem'
                                    }}
                                  >
                                    ▸
                                  </span>
                                  {cat.title}
                                </div>

                                {isCatExpanded && (
                                  <div className="category-items" style={{ paddingLeft: '0.5rem' }}>
                                    {cat.items.map((subItem) => {
                                      const isSubActive = fileToIndexMap[subItem.file] === currentIndex
                                      return (
                                        <div
                                          key={subItem.file}
                                          className={`sidebar-item sub-item${isSubActive ? ' active' : ''}`}
                                          onClick={() => onSelect(fileToIndexMap[subItem.file])}
                                          style={{
                                            paddingLeft: '0.75rem',
                                            fontSize: '0.8rem',
                                            opacity: isSubActive ? 1 : 0.65
                                          }}
                                        >
                                          {subItem.title}
                                        </div>
                                      )
                                    })}
                                  </div>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
