using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace api.Models
{
    public class Donator
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; protected set; }
        [BsonElement("name")]
        public string Name { get; set; }
        [BsonElement("date")]
        public string Date { get; set; }
        [BsonElement("perfil_pic")]
        public string PerfilPic { get; set; }
        [BsonElement("phone")]
        public string Phone { get; set; }
        [BsonElement("email")]
        public string Email { get; set; }
        [BsonElement("password")]
        public string Password { get; set; }
    }
}