import { forwardRef } from 'react'

const Content = forwardRef(function Content({ html, loading, error, fontSize }, ref) {
  if (loading) {
    return (
      <div className="content">
        <div className="loading">Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="content">
        <div className="error">
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  if (!html) return null

  return (
    <div className="content" ref={ref}>
      <div
        className="content-inner"
        style={{ fontSize: `${fontSize}%` }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
})

export default Content
