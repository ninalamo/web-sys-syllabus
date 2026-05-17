export default function E2W7ExerProductTilePartial() {
  const code = `@* _ProductTile.cshtml — Partial View *@
@model Product

<div class="product-tile" style="border:1px solid #ddd; padding:15px; margin:10px; border-radius:8px; display:inline-block; width:200px;">
    <img src="/images/placeholder.png" alt="@Model.Name" style="width:100%; height:120px; background:#eee;" />
    <h4>@Model.Name</h4>
    <p>@Model.Price.ToString("C")</p>
</div>
`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">product-tile-partial.cshtml</span>
        <span className="code-lang">CSHTML</span>
      </div>
      <pre className="language-cshtml"><code className="language-cshtml">{code}</code></pre>
    </div>
  )
}
