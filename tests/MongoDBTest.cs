using System.IO;
using System.Text;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using Moq;
using Xunit;

namespace tests
{
    public class MongoDBTest
    {
        private Mock<IConfiguration> _config;
        private Mock<IMongoDatabase> _mockDB;
        private Mock<IMongoClient> _mockClient;

        private api.Data.MongoDBContext _context;

        public MongoDBTest()
        {
            _mockDB = new Mock<IMongoDatabase>();
            _mockClient = new Mock<IMongoClient>();
        }

        [Fact]
        public void MongoDB_Constructor_Success()
        {
            // Arrange
            var appSettings = @"{
                ""ConnectionString"" : ""mongodb://test123"",
                ""DatabaseName"" : ""TestDB""
            }";

            var builder = new ConfigurationBuilder();
            builder.AddJsonStream(new MemoryStream(Encoding.UTF8.GetBytes(appSettings)));
            var _config = builder.Build();
            
            // Act
            _context = new api.Data.MongoDBContext(_config);

            // Assert
            Assert.NotNull(_context);
        }
    }
}