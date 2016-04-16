using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using WhatsNext.Entities;
using WhatsNext.Repository;

namespace WhatsNext.Controllers
{
    [EnableCors("http://localhost:25592", "*", "*")]
    public class UsersController : ApiController
    {
        // GET: api/Users
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Users/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Users
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Users/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        [HttpPut]
        [ResponseType(typeof(User))]
        [EnableCors("http://localhost:25592", "*", "*")]
        public IHttpActionResult Put(User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                using (var unitOfWork = new UnitOfWork(new WhatsNextEntities()))
                {
                    User theUser = unitOfWork.Users.Get(user.Id);
                    //theUser.Interests.Clear();
                    foreach (var interest in user.Interests)
                    {
                        theUser.Interests.Remove(interest);
                        unitOfWork.SaveChanges();
                    }

                    theUser.UserName = user.UserName;
                    theUser.FirstName = user.FirstName;
                    theUser.LastName = user.LastName;
                    theUser.MiddleName = user.MiddleName;
                    theUser.HomeTown = user.HomeTown;

                    foreach (var interest in user.Interests)
                    {
                        theUser.Interests.Add(interest);
                    }

                    unitOfWork.SaveChanges();

                    return CreatedAtRoute("DefaultApi", new { id = user.Id }, user);
                }
            }
            catch (System.Exception ex)
            {
                return InternalServerError(ex);
            }

        }


        // DELETE: api/Users/5
        public void Delete(int id)
        {
        }
    }
}
