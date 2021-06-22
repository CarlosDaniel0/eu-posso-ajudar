using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Login
    {
        [Required(ErrorMessage = "O Email é obrigatório")]
        public string Email { get; set; }
        [Required(ErrorMessage = "A Senha é obrigatória")]
        public string Password { get; set; }
    }
}