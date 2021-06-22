using System.Collections.Generic;
using System.Threading.Tasks;
using api.Models;
using MongoDB.Bson;
using MongoDB.Driver;

namespace api.Business.Services
{
    public class DonatorService
    {
       private readonly Data.MongoDBContext _db;
       private readonly IMongoCollection<Donator> _donators; 
       private readonly long _donatorsCount;

       public DonatorService(Data.MongoDBContext db)
       {
           _db = db;
           _donators = _db.DB.GetCollection<Donator>(typeof(Donator).Name.ToLower());
           _donatorsCount = _donators.Find(_ => true).CountDocuments();
       }

        public void Insert(Donator donator)
        {
            _donators.InsertOne(donator);
        }

        public void Remove(string id)
        {
            ObjectId objId = new ObjectId(id);
            FilterDefinition<Donator> filter = Builders<Donator>.Filter.Empty;
            _donators.DeleteOneAsync(filter);
        }

        public void Update(string id, Donator donator)
        {
            ObjectId objId = new ObjectId(id);
            FilterDefinition<Donator> filter = Builders<Donator>.Filter.Empty;
            UpdateDefinition<Donator> update = Builders<Donator>.Update.Unset(c => c.Name == donator.Name);
            _donators.UpdateOne(filter, update);
        }

        public Donator Get(string id)
        {
            ObjectId objId = new ObjectId(id);
            FilterDefinition<Donator> filter = Builders<Donator>.Filter.Empty;
            return _donators.FindAsync(filter).Result.FirstOrDefault();
        }

        public List<Donator> GetAll()
        {
            FilterDefinition<Donator> filter = Builders<Donator>.Filter.Empty;
            return _donators.FindAsync(filter).Result.ToList();
        }
       
    }
}