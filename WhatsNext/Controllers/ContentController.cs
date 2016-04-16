using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WhatsNext.Entities;
using WhatsNext.Repository;

namespace WhatsNext.Controllers
{
    public class ContentController : ApiController
    {
        // GET: api/Content
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}
        [EnableCors("http://localhost:25592", "*", "*")]
        public IHttpActionResult Get()
        {
            try
            {
                using (var unitOfWork = new UnitOfWork(new WhatsNextEntities()))
                {
                    var content = from a in unitOfWork.Content.GetAll()
                                     select new
                                     {
                                         id = a.Id,
                                         imgUrl = a.ImgUrl
                                     };
                    if (content == null)
                        return NotFound();

                    return Ok(content.ToList());
                }
            }
            catch (System.Exception ex)
            {
                return InternalServerError(ex);
            }
        }
        // GET: api/Content/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Content
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Content/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Content/5
        public void Delete(int id)
        {
        }
    }
}
