using Microsoft.AspNetCore.Mvc;

namespace api.Models
{
    public class Search
    {
        [FromQuery(Name = "n")]
        public string Name { get; set; }
        [FromQuery(Name = "peek")]
        public bool Peek {get; set; }
        [FromQuery(Name = "limit")]
        public int Limit { get; set; }
    }
}