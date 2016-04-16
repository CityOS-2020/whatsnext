using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WhatsNext.Models
{
    public class InterestModel
    {
        public long FKUser
        {
            get; set;
        }
        public string Name { get; set; }
    }
}