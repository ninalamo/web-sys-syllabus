import { useState } from 'react'
import { CHAPTERS } from '../data'

export default function Sidebar({ currentIndex, onSelect, open }) {
  const [openSections, setOpenSections] = useState(() => {
    const map = {}
    CHAPTERS.forEach((_, i) => { map[i] = true })
    return map
  })

  const toggleSection = (i) => {
    setOpenSections((prev) => ({ ...prev, [i]: !prev[i] }))
  }

  let globalIndex = 0

  return (
    <div className={`sidebar${open ? '' : ' closed'}`}>
      <div className="sidebar-header">Contents</div>
      {CHAPTERS.map((section, si) => {
        const startIndex = globalIndex
        globalIndex += section.items.length
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
            {openSections[si] &&
              section.items.map((item, ii) => {
                const gi = startIndex + ii
                return (
                  <div
                    key={gi}
                    className={`sidebar-item${gi === currentIndex ? ' active' : ''}`}
                    onClick={() => onSelect(gi)}
                  >
                    {item.title}
                  </div>
                )
              })}
          </div>
        )
      })}
    </div>
  )
}
