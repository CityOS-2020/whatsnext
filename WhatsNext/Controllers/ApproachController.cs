using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WhatsNext.
using WhatsNext.Entities;
using WhatsNext.Repository;

namespace WhatsNext.Controllers
{
    public class ApproachController : ApiController
    {
        // GET: api/Approach
        public IEnumerable<User> Get()
        {
            using (var unitOfWork = new UnitOfWork(new WhatsNextEntities()))
            {
                return unitOfWork.Users.GetAll();
            }
        }

        // GET: api/Approach/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Approach
        public void Post([FromBody]User value)
        {
        }

        // PUT: api/Approach/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Approach/5
        public void Delete(int id)
        {
        }
    }
}
