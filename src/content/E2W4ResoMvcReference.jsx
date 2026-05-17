export default function E2W4ResoMvcReference() {
  return (
    <div className="page-content">
      <h1>Week 4: MVC Big Picture Reference</h1>
      <h2>MVC Pipeline</h2>
      <pre><code>Browser -&gt; URL -&gt; Route -&gt; Controller -&gt; Model -&gt; View -&gt; HTML -&gt; Browser</code></pre>
      <h2>Folder Structure</h2>
      <table><thead><tr>
        <th>Folder</th>
        <th>Purpose</th>
      </tr></thead><tbody>
      <tr>
        <td><code>/Controllers</code></td>
        <td>C# logic — traffic cops</td>
      </tr>
      <tr>
        <td><code>/Models</code></td>
        <td>Data shapes and business rules</td>
      </tr>
      <tr>
        <td><code>/Views</code></td>
        <td>Razor HTML templates</td>
      </tr>
      <tr>
        <td><code>Program.cs</code></td>
        <td>App entry point and configuration</td>
      </tr>
      <h2>Razor Syntax Basics</h2>
      <pre><code>&lt;!-- Inline expression --&gt;
      &lt;h1&gt;Welcome, @Model.UserName&lt;/h1&gt;
      
      &lt;!-- Code block --&gt;
      @if(Model.IsAdmin)
      &#123;
      &lt;button&gt;Delete&lt;/button&gt;
      &#125;
      
      &lt;!-- Foreach loop --&gt;
      @foreach(var item in Model.Items)
      &#123;
      &lt;li&gt;@item.Name&lt;/li&gt;
      &#125;</code></pre>
      <h2>Default Route Convention</h2>
      <pre><code>&#123;controller=Home&#125;/&#123;action=Index&#125;/&#123;id?&#125;</code></pre>
      <h2>Scaffold an MVC Project</h2>
      <pre><code>dotnet new mvc -n HelloMvc
      cd HelloMvc
      dotnet run</code></pre></tbody></table>
    </div>
  )
}
