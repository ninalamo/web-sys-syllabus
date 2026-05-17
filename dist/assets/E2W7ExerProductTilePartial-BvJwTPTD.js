import{j as e}from"./index-ChWpJeR-.js";function l(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"product-tile-partial.cshtml"}),e.jsx("span",{className:"code-lang",children:"CSHTML"})]}),e.jsx("pre",{className:"language-cshtml",children:e.jsx("code",{className:"language-cshtml",children:`@* _ProductTile.cshtml — Partial View *@
@model Product

<div class="product-tile" style="border:1px solid #ddd; padding:15px; margin:10px; border-radius:8px; display:inline-block; width:200px;">
    <img src="/images/placeholder.png" alt="@Model.Name" style="width:100%; height:120px; background:#eee;" />
    <h4>@Model.Name</h4>
    <p>@Model.Price.ToString("C")</p>
</div>
`})})]})}export{l as default};
