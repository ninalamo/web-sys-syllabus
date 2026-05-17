import{j as e}from"./index-Dh6XhhbZ.js";function r(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"contact-message-model-solution.cs"}),e.jsx("span",{className:"code-lang",children:"CSHARP"})]}),e.jsx("pre",{className:"language-csharp",children:e.jsx("code",{className:"language-csharp",children:`// ContactMessage Model — Solution
using System.ComponentModel.DataAnnotations;

public class ContactMessage
{
    [Required(ErrorMessage = "Name is required")]
    public string Name { get; set; }

    [Required(ErrorMessage = "Email is required")]
    [EmailAddress(ErrorMessage = "Invalid email format")]
    public string Email { get; set; }

    [Required(ErrorMessage = "Message is required")]
    [MinLength(20, ErrorMessage = "Message must be at least 20 characters")]
    public string Message { get; set; }
}
`})})]})}export{r as default};
