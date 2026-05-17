export default function E2W7ResoViewsAndLayoutsReference() {
  return (
    <div className="page-content">
      <h1>Week 7: Views &amp; Layouts Reference</h1>
      <h2>Layout Pages</h2>
      <pre><code>&lt;!-- _Layout.cshtml --&gt;
      &lt;!DOCTYPE html&gt;
      &lt;html&gt;
      &lt;head&gt;@RenderSection("Head", required: false)&lt;/head&gt;
      &lt;body&gt;
      &lt;nav&gt;My Site&lt;/nav&gt;
      &lt;main&gt;@RenderBody()&lt;/main&gt;
      &lt;footer&gt;2026&lt;/footer&gt;
      &lt;/body&gt;
      &lt;/html&gt;</code></pre>
      <h2>ViewStart &amp; ViewImports</h2>
      <pre><code>// _ViewStart.cshtml — sets default layout
      @&#123;
      Layout = "_Layout";
      &#125;</code></pre>
      <pre><code>// _ViewImports.cshtml — global usings
      @using MyApp.Models
      @addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers</code></pre>
      <h2>Partial Views</h2>
      <pre><code>&lt;!-- Inject a partial view --&gt;
      &lt;partial name="_ProductCard" model="currentItem" /&gt;</code></pre>
      <p>
      Partial views go in <code>Views/Shared/</code> and are prefixed with <code>_</code>.
      </p>
      
      <h2>Razor Syntax</h2>
      
      
      <table><thead><tr>
        <th>Syntax</th>
        <th>Purpose</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td><code>@variable</code></td>
        <td>Inline C# expression</td>
      </tr>
      
      <tr>
        <td><code>@&#123; code &#125;</code></td>
        <td>Code block (doesn't print)</td>
      </tr>
      
      <tr>
        <td><code>@if(cond) &#123; &#125;</code></td>
        <td>Conditional</td>
      </tr>
      
      <tr>
        <td><code>@foreach(var x in list) &#123; &#125;</code></td>
        <td>Loop</td>
      </tr>
      
      <tr>
        <td><code>@Model.Property</code></td>
        <td>Access model data</td>
      </tr>
      </tbody></table>
    </div>
  )
}
