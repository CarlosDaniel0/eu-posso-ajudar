using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace api.Models
{
    public class Institution
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; protected set; }
        [BsonElement("name")]
        public string Name { get; set; }
        [BsonElement("services")]
        public List<string> Services { get; set; }
        [BsonElement("bio")]
        public string Bio { get; set; }
        [BsonElement("images")]
        public List<string> Images { get; set; }
        [BsonElement("profile_pic")]
        public string ProfilePic { get; set; }
        [BsonElement("start_date")]
        public DateTime StartDate { get; set; }
        [BsonElement("classification")]
        public int Classification { get; protected set; }
        [BsonElement("email")]
        public string Email { get; set; }
        [BsonElement("password")]
        public string Password { get; set; }
        [BsonElement("donations")]
        public List<Donation> Donations { get; protected set; }

    }   
}

// name, services, images, profile_pic, start_date, classification