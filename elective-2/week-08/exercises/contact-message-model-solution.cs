// ContactMessage Model — Solution
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
