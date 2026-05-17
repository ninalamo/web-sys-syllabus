import{j as e}from"./index-u8WTylHP.js";function a(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"http-client-starter.cs"}),e.jsx("span",{className:"code-lang",children:"CSHARP"})]}),e.jsx("pre",{className:"language-csharp",children:e.jsx("code",{className:"language-csharp",children:`# HTTP HttpClient Starter

\`\`\`csharp
using var client = new HttpClient();
var response = await client.GetAsync("https://api.github.com/users/octocat");
response.EnsureSuccessStatusCode();
var body = await response.Content.ReadAsStringAsync();
Console.WriteLine(body);
\`\`\`
`})})]})}export{a as default};
