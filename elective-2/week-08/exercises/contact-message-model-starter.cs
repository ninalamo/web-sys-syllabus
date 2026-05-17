// ContactMessage Model — Starter
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
