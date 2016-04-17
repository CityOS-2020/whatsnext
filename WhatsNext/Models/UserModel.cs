using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WhatsNext.Models
{
    public class UserModel
    {
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }
        public string UserName { get; set; }
        public string HomeTown { get; set; }
        public List<ApproachModel> Approaches { get; set; }
        public List<InterestModel> Interests { get; set; } 
        public string ImgUrl { get; set; }

        public UserModel()
        {
            this.Approaches = new List<ApproachModel>();
            this.Interests = new List<InterestModel>();
        }
    }
}