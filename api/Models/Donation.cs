using System;
using System.Collections.Generic;

namespace api.Models
{
    public class Donation
    {
        public String Id { get; set; }
        public String IdDonator { get; set; }
        public List<string> Items { get; set; }
        public DateTime Date { get; set; }

    }
}