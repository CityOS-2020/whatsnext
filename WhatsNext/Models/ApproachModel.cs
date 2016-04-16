using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WhatsNext.Models
{
    public class ApproachModel
    {
        public long FKUser
        {
            get; set;
        }

        public DateTime EventTime { get; set; }
    }
}