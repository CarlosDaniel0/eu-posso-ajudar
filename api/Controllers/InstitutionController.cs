using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;
using BC = BCrypt.Net.BCrypt;

namespace api.Controllers
{
    [ApiController]
    [Route("institution")]
    public class InstitutionController:ControllerBase
    {
        private readonly IConfiguration _config;
        Data.MongoDBContext _mongoDB;
        IMongoCollection<Institution> _institutionsCollection;
        public InstitutionController(Data.MongoDBContext mongoDB, IConfiguration configuration)
        {
            _mongoDB = mongoDB;
            _config = configuration;
            _institutionsCollection = _mongoDB.DB.GetCollection<Institution>(typeof(Institution).Name.ToLower());
        }

        
        [HttpPost]
        public async Task<ActionResult> PostInstitution([FromBody] Institution institution)
        {
            // institution.Id = ObjectId.GenerateNewId().ToString();
            string hashPassword = BC.HashPassword(institution.Password);
            institution.Password = hashPassword;
            
            await _institutionsCollection.InsertOneAsync(institution);
            
            FilterDefinition<Institution> filter = Builders<Institution>.Filter.Where(x => x.Email == institution.Email && x.Password == institution.Password);
            
            Institution getInstitution = await _institutionsCollection.Find(filter).FirstOrDefaultAsync();

            return Created("", new {
                Status = 201,                
                Message = "Instituição adicionada com sucesso!",
                Data = new {
                    InsertedId = getInstitution.Id
                }
            });
        }

        [HttpPatch]
        [Route("{id}")]
        public ActionResult PatchInstitution(string id, [FromBody] Institution data)
        {
            FilterDefinition<Institution> filter = Builders<Institution>.Filter.Where(x => x.Id == id);
            Institution institution = _institutionsCollection.Find(filter).FirstOrDefault();
            
            institution.Name = data.Name;
            institution.WebSite = data.WebSite;
            institution.Services = data.Services;
            institution.Bio = data.Bio;
            institution.StartDate = data.StartDate;
            
            Console.WriteLine($"{institution}");
            _institutionsCollection.ReplaceOneAsync(filter, institution);
            return Ok("Instituição Atualizada com sucesso!");
        }

        [HttpPost]
        [Route("{id}/profile")]
        public async Task<ActionResult> PostProfilePictureInstitution(string id, IFormFile profile_pic)
        {
            int limit = 3 * 1024 * 1024; // 3 Mb 
            
            if (profile_pic.Length > limit) {
                return BadRequest("O arquivo excedeu o tamanho máximo");
            }

            var filePath = Path.Combine(_config["StoredFilesPath"], $"{Path.GetRandomFileName()}.png");
            using (var stream = System.IO.File.Create(filePath))
            {
                await profile_pic.CopyToAsync(stream);
            }

            return Ok(new {
                status = 200,
                upload = "success!",
                profile_pic
            });
        }

        [HttpPost]
        [Route("{id}/images")]
        public async Task<ActionResult> PostImagesInstitution(string id, List<IFormFile> images)
        {
            int limit = 3 * 1024 * 1024; // 3 Mb 
            
            foreach (var file in images) {
                if (file.Length > limit) {
                    return BadRequest("O arquivo excedeu o tamanho máximo");
                }

                var filePath = Path.Combine(_config["StoredFilesPath"], $"{Path.GetRandomFileName()}.png");
                using (var stream = System.IO.File.Create(filePath))
                {
                    await file.CopyToAsync(stream);
                }
            }

            return Ok(new {
                status = 200,
                upload = "success!",
                images
            });
        }

        [HttpGet]
        [Route("search")]
        public ActionResult GetInstitutions([FromQuery] Search search)
        {
            FilterDefinition<Institution> filter;
            if (search.Name != "")
                filter = Builders<Institution>.Filter.Empty;
            else  
                filter = Builders<Institution>.Filter.Regex("name", new BsonRegularExpression(search.Name, "i"));
            
            List<Institution> institutions = _institutionsCollection.Find(filter).ToList();
            return Ok(institutions);
        }

        [HttpPost]
        [Authorize]
        [Route("{id}/donate")]
        public ActionResult Donate(string id, Donation donation)
        {
            FilterDefinition<Institution> filter = Builders<Institution>.Filter.Where(x => x.Id == id);
            UpdateDefinition<Institution> update = Builders<Institution>.Update.Push("donations", donation);
            
            try { 
                _institutionsCollection.UpdateOne(filter, update);
            } catch (Exception ex) {
                return BadRequest($"Não foi possível encontrar a instituição de destino {ex.Message}");
            }
            // Institution institution = _institutionsCollection.Find(filter).SingleOrDefault();
            
            
            
            return Ok($"Doação de { string.Join(" ", donation.Items) } para Instituição fui concluída com sucesso!");
        }

        [HttpDelete]
        [Authorize]
        [Route("{id}")]
        public ActionResult DeleteInstitution(string id)
        {
            FilterDefinition<Institution> filter = Builders<Institution>.Filter.Where(x => x.Id == id);
            _institutionsCollection.DeleteOne(filter);
            return Ok("Instituição removida com sucesso!");
        }
    }
}