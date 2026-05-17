export default function E2W10ResoRelationshipsReference() {
  return (
    <div className="page-content">
      <h1>Week 10: Relationships &amp; Data Display Reference</h1>
      <h2>1-to-Many Relationship</h2>
      <pre><code>public class Category
      &#123;
      public int Id &#123; get; set; &#125;
      public string Name &#123; get; set; &#125;
      public List&lt;Product&gt; Products &#123; get; set; &#125; // The Many
      &#125;
      
      public class Product
      &#123;
      public int Id &#123; get; set; &#125;
      public string Name &#123; get; set; &#125;
      public int CategoryId &#123; get; set; &#125; // Foreign Key
      public Category Category &#123; get; set; &#125; // Navigation Property
      &#125;</code></pre>
      <h2>Eager Loading with .Include()</h2>
      <pre><code>// WRONG: Products will be null
      var cat = _db.Categories.First(c =&gt; c.Id == 1);
      
      // RIGHT: Products will be populated
      var cat = _db.Categories
      .Include(c =&gt; c.Products)
      .First(c =&gt; c.Id == 1);
      
      // Nested include
      var cats = _db.Categories
      .Include(c =&gt; c.Products)
      .ThenInclude(p =&gt; p.Reviews)
      .ToList();</code></pre>
      <h2>ViewModels</h2>
      <pre><code>public class DashboardViewModel
      &#123;
      public Category Category &#123; get; set; &#125;
      public List&lt;string&gt; RecentNews &#123; get; set; &#125;
      &#125;</code></pre>
      <h2>Safe Null Check in Razor</h2>
      <pre><code>@if(Model.Category?.Products != null)
      &#123;
      foreach(var prod in Model.Category.Products)
      &#123;
      &lt;li&gt;@prod.Name&lt;/li&gt;
      &#125;
      &#125;</code></pre>
    </div>
  )
}
