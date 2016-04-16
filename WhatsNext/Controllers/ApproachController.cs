using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WhatsNext.Entities;
using WhatsNext.Repository;

namespace WhatsNext.Controllers
{
    public class ApproachController : ApiController
    {
        // GET: api/Approach
        public IHttpActionResult Get()
        {
            try
            {
                using (var unitOfWork = new UnitOfWork(new WhatsNextEntities()))
                {
                    var approaches = from a in unitOfWork.Approaches.GetAll()
                        select new
                        {
                            id = a.Id,
                            username = a.User.UserName,
                            eventTime = a.EventTime
                        };
                    if (approaches == null)
                        return NotFound();

                    return Ok(approaches.ToList());
                }
            }
            catch (System.Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        // GET: api/Approach/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Approach
        [ResponseType(typeof(Approach))]
        public IHttpActionResult Post(Approach approach)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            using (var unitOfWork = new UnitOfWork(new WhatsNextEntities()))
            {
                unitOfWork.Approaches.Add(approach);
                unitOfWork.SaveChanges();
            }

            return CreatedAtRoute("DefaultApi", new { id = approach.Id }, approach);

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
