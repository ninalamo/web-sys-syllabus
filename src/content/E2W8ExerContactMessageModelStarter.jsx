export default function E2W8ExerContactMessageModelStarter() {
  const code = `// ContactMessage Model — Starter
using System.ComponentModel.DataAnnotations;

public class ContactMessage
{
    // TODO: Add [Required] annotation
    public string Name { get; set; }

    // TODO: Add [Required] and [EmailAddress] annotations
    public string Email { get; set; }

    // TODO: Add [Required] and [MinLength(20)] annotations
    public string Message { get; set; }
}
`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">contact-message-model-starter.cs</span>
        <span className="code-lang">CSHARP</span>
      </div>
      <pre className="language-csharp"><code className="language-csharp">{code}</code></pre>
    </div>
  )
}
