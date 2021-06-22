using System;
using System.Collections.Generic;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;

namespace api.Controllers
{
    [ApiController]
    [Route("institution")]
    public class InstitutionController:ControllerBase
    {
        Data.MongoDBContext _mongoDB;
        IMongoCollection<Institution> _institutionsCollection;
        public InstitutionController(Data.MongoDBContext mongoDB)
        {
            _mongoDB = mongoDB;
            _institutionsCollection = _mongoDB.DB.GetCollection<Institution>(typeof(Institution).Name.ToLower());
        }

        
        [HttpPost]
        public ActionResult PostInstitution([FromBody] Institution institution)
        {
            _institutionsCollection.InsertOne(institution);
            return Created("", "Instituição adicionada com sucesso!");
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