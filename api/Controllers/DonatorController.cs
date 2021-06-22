using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace api.Controllers
{
    [ApiController]
    [Route("donator")]
    public class DonatorController:ControllerBase
    {
        Data.MongoDBContext _mongoDB;
        IMongoCollection<Donator> _donatorsCollection;

        public DonatorController(Data.MongoDBContext mongoDB)
        {
            _mongoDB = mongoDB;
            _donatorsCollection = _mongoDB.DB.GetCollection<Donator>(typeof(Donator).Name.ToLower());
        }

        [HttpPost]
        public ActionResult PostDonator([FromBody] Donator donator)
        {
            _donatorsCollection.InsertOne(donator);
            return Created("", "Doador adicionado com sucesso!");
        }

        [HttpDelete]
        [Authorize]
        [Route("{id}")]
        public ActionResult DeleteDonator(int id)
        {
            return Ok();
        }

        [HttpPut]
        [Authorize]
        [Route("{id}")]
        public ActionResult UpdateAllDonator(int id)
        {
            return Ok();
        }
    }
}