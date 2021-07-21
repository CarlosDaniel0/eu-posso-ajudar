using System.IO;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using MongoDB.Bson;
using BC = BCrypt.Net.BCrypt;

namespace api.Controllers
{
    [ApiController]
    [Route("donator")]
    public class DonatorController:ControllerBase
    {
        private readonly IConfiguration _config;
        Data.MongoDBContext _mongoDB;
        IMongoCollection<Donator> _donatorsCollection;

        public DonatorController(Data.MongoDBContext mongoDB, IConfiguration configuration)
        {
            _mongoDB = mongoDB;
            _config = configuration;
            _donatorsCollection = _mongoDB.DB.GetCollection<Donator>(typeof(Donator).Name.ToLower());
        }

        [HttpPost]
        public ActionResult PostDonator([FromBody] Donator donator)
        {
            // donator.Id = ObjectId.GenerateNewId().ToString();
            string hashPassword = BC.HashPassword(donator.Password);
            donator.Password = hashPassword;
            
            _donatorsCollection.InsertOne(donator);
            return Created("", "Doador adicionado com sucesso!");
        }

        [HttpPost]
        [Route("{id}/profile")]
        public async Task<ActionResult> PostPictureDonator(string id, IFormFile file)
        {
            int limit = 3 * 1024 * 1024; // 3 Mb 
            
            if (file.Length > limit) {
                return BadRequest("O arquivo excedeu o tamanho máximo");
            }

            var filePath = Path.Combine(_config["StoredFilesPath"], $"{Path.GetRandomFileName()}.png");
            using (var stream = System.IO.File.Create(filePath))
            {
                await file.CopyToAsync(stream);
            }

            return Ok(new {
                status = 200,
                upload = "success!",
                file
            });
        }

        [HttpDelete]
        [Authorize]
        [Route("{id}")]
        public ActionResult DeleteDonator(string id)
        {
            return Ok();
        }

        [HttpPut]
        [Authorize]
        [Route("{id}")]
        public ActionResult UpdateAllDonator(string id)
        {
            return Ok();
        }
    }
}