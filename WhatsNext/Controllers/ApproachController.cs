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
    public class ApproachController : ApiController
    {
        // GET: api/Approach
        [EnableCors("http://localhost:25592", "*", "*")]
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
                            eventTime = a.EventTime,
                            fkUser = a.FKUser
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

            Approach insertedApproach;

            using (var unitOfWork = new UnitOfWork(new WhatsNextEntities()))
            {
                var approachTableEmpty = unitOfWork.Approaches.GetAll().Count() <= 0;

                if (approachTableEmpty)
                {
                    unitOfWork.Approaches.Add(approach);
                    unitOfWork.SaveChanges();

                    insertedApproach = unitOfWork.Approaches.GetAll().First();
                }
                else
                {
                    insertedApproach = new Approach() { Id = 0, FKUser = approach.FKUser};
                }

                
            }

             

            return CreatedAtRoute("DefaultApi", new { id = insertedApproach.Id }, insertedApproach);
        }

        // PUT: api/Approach/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Approach/5
        [ResponseType(typeof(Approach))]
        public IHttpActionResult Delete(long id)
        {
            using (var unitOfWork = new UnitOfWork(new WhatsNextEntities()))
            {
                Approach approach = unitOfWork.Approaches.Get(id);
                if (approach == null)
                {
                    return NotFound();
                }

                unitOfWork.Approaches.Remove(approach);
                unitOfWork.SaveChanges();

                return Ok(approach);
            }
        }
    }
}
