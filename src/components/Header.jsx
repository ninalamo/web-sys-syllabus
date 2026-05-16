const THEME_LABELS = { light: 'Light', sepia: 'Sepia', dark: 'Dark' }

export default function Header({
  title,
  index,
  total,
  fontSize,
  theme,
  onToggleSidebar,
  onPrev,
  onNext,
  onFontUp,
  onFontDown,
  onCycleTheme,
}) {
  return (
    <div className="header">
      <button className="menu-btn" onClick={onToggleSidebar} title="Toggle sidebar">
        &equiv;
      </button>
      <span className="header-title">{title || ''}</span>
      <span className="header-meta">
        {index + 1}/{total}
      </span>
      <button className="ctrl-btn" onClick={onFontDown} title="Decrease font">
        A&minus;
      </button>
      <button className="ctrl-btn" onClick={onFontUp} title="Increase font">
        A+
      </button>
      <button className="ctrl-btn" onClick={onCycleTheme} title="Cycle theme">
        {THEME_LABELS[theme]}
      </button>
      <button className="nav-btn" disabled={index === 0} onClick={onPrev} title="Previous">
        &larr;
      </button>
      <button
        className="nav-btn"
        disabled={index >= total - 1}
        onClick={onNext}
        title="Next"
      >
        &rarr;
      </button>
    </div>
  )
}
