using api.Models;

namespace api.Business.Repositories
{
    public interface IJWTService
    {
        public string GenerateToken(User user); 
    }
}