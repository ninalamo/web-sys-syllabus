export default function E2W1ResoQuickReferenceCard() {
  return (
    <div className="page-content">
      <h1>Week 1: Quick-Reference Card</h1>
      <h2>C# Syntax at a Glance</h2>
      <h3>Hello World</h3>
      <pre><code>Console.WriteLine("Hello, World!");</code></pre>
      <h3>Variables</h3>
      <pre><code>string name = "Alice";
      int age = 25;
      double price = 19.99;
      var inferred = "C# infers the type";  // string</code></pre>
      <h3>Read Input</h3>
      <pre><code>var input = Console.ReadLine();</code></pre>
      <h3>String Interpolation</h3>
      <pre><code>Console.WriteLine($"Hello, &#123;name&#125;!");</code></pre>
      <h3>If/Else</h3>
      <pre><code>if (condition)
      &#123;
      // ...
      &#125;
      else if (otherCondition)
      &#123;
      // ...
      &#125;
      else
      &#123;
      // ...
      &#125;</code></pre>
      <h3>For Loop</h3>
      <pre><code>for (var i = 0; i &lt; 10; i++)
      &#123;
      Console.WriteLine(i);
      &#125;</code></pre>
      <h3>Foreach Loop</h3>
      <pre><code>foreach (var item in collection)
      &#123;
      Console.WriteLine(item);
      &#125;</code></pre>
      <h3>Class with Properties</h3>
      <pre><code>public class Person
      &#123;
      public string Name &#123; get; set; &#125;
      public int Age &#123; get; set; &#125;
      &#125;</code></pre>
      <h3>Switch Expression (C# 8+)</h3>
      <pre><code>var result = op switch
      &#123;
      "+" =&gt; a + b,
      "-" =&gt; a - b,
      _ =&gt; 0
      &#125;;</code></pre>
      <h3>Build &amp; Run</h3>
      <pre><code>dotnet new console -o MyApp
      dotnet run</code></pre>
    </div>
  )
}
