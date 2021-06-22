using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using api.Business.Repositories;
using api.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace api.Business.Interfaces
{
    public class JWTService : IJWTService
    {
        private readonly IConfiguration _configuration;

        public JWTService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public string GenerateToken(User user)
        {
            var secret = Encoding.ASCII.GetBytes(_configuration.GetSection("JWTConfigurations:Secret").Value);
            var symmetricSecurityKey = new SymmetricSecurityKey(secret);
            var securityTokenDescription = new SecurityTokenDescriptor 
            {
                Subject = new ClaimsIdentity(
                    new Claim[]
                    {
                        new Claim(ClaimTypes.Name, user.Name.ToString()),
                        new Claim(ClaimTypes.Role, user.Role.ToString()),
                        new Claim(ClaimTypes.Email, user.Email.ToString())
                    }
                ),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256)
            };

            var jwtSecurityTokenHandler = new JwtSecurityTokenHandler();
            var tokenGenereted = jwtSecurityTokenHandler.CreateToken(securityTokenDescription);
            var token = jwtSecurityTokenHandler.WriteToken(tokenGenereted);
            return token;
        }
    }
}