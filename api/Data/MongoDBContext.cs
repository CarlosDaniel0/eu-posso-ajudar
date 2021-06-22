using System;
using api.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Conventions;
using MongoDB.Driver;

namespace api.Data
{
    public class MongoDBContext
    {
        public IMongoDatabase DB { get; set; }
        public MongoDBContext(IConfiguration configuration)
        {
            try {
                var settings = MongoClientSettings.FromUrl(new MongoUrl(configuration["ConnectionString"]));
                var client = new MongoClient(settings);
                DB = client.GetDatabase(configuration["DatabaseName"]);
                MapClasses();
            } catch (Exception ex)
            {
                throw new MongoException("It's not possible connect to MongoDB", ex);
            }
        }
        
        private void MapClasses()
        {
            var conventionPack = new ConventionPack { new CamelCaseElementNameConvention() };
            ConventionRegistry.Register("camelCase", conventionPack, t => true);

            if (!BsonClassMap.IsClassMapRegistered(typeof(Donator)))
            {
                BsonClassMap.RegisterClassMap<Donator>(i => {
                    i.AutoMap();
                    i.SetIgnoreExtraElements(true);
                });
            }

            if (!BsonClassMap.IsClassMapRegistered(typeof(Institution)))
            {
                BsonClassMap.RegisterClassMap<Institution>(i => {
                    i.AutoMap();
                    i.SetIgnoreExtraElements(true);
                });
            }
        }
    }
}