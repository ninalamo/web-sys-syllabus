import { forwardRef } from 'react'

const Content = forwardRef(function Content({ children, fontSize }, ref) {
  return (
    <div className="content" ref={ref}>
      <div
        className="content-inner"
        style={{ fontSize: `${fontSize}%` }}
      >
        {children}
      </div>
    </div>
  )
})

export default Content
