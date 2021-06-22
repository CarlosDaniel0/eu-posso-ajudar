using api.Business.Repositories;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace api.Controllers
{
    [ApiController]
    [Route("auth")]
    public class AuthController: ControllerBase
    {
        Data.MongoDBContext _mongoDB;
        IMongoCollection<Donator> _donatorsCollection;
        IMongoCollection<Institution> _institutionsCollection;
        IJWTService _jwtService;
        public AuthController(Data.MongoDBContext mongoDB, IJWTService jwtService)
        {
            _mongoDB = mongoDB;
             _donatorsCollection = _mongoDB.DB.GetCollection<Donator>(typeof(Donator).Name.ToLower());
            _institutionsCollection = _mongoDB.DB.GetCollection<Institution>(typeof(Institution).Name.ToLower());
            _jwtService = jwtService;
        }

        [HttpPost]
        public ActionResult Logar([FromBody] Login login)
        {   
            User user = null;
            Donator donator = _donatorsCollection.Find(Builders<Donator>.Filter.Where(x => x.Email == login.Email && x.Password == login.Password)).SingleOrDefault();
            Institution institution = _institutionsCollection.Find(Builders<Institution>.Filter.Where(x => x.Email == login.Email && x.Password == login.Password)).SingleOrDefault();
            
            if (donator != null) 
                user = new User() 
                {
                    Email=donator.Email, 
                    Name=donator.Name, 
                    Role="Doador"
                };
            else if (institution != null) 
                user = new User() 
                {
                    Email=institution.Email, 
                    Name=institution.Name, 
                    Role="Instituição"
                };
            
            string token;
            if (user != null)
                token =  _jwtService.GenerateToken(user);
            else
                return BadRequest();

            return Ok(new {
                token = token,
                user = user
            });
        }
    }
}