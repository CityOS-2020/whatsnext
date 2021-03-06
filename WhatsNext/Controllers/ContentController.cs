﻿using System;
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
                                         imgUrl = a.ImgUrl,
                                         mainText = new { left = a.MainTextLeft, right = a.MainTextRight},
                                         title = new { left = a.TitleLeft, right = a.TitleRight},
                                         message1 = (a.Message1Left != null || a.Message1Right != null) ? new { left = a.Message1Left, right = a.Message1Right } : null,
                                         message2 = (a.Message2Left != null || a.Message2Right != null) ? new { left = a.Message2Left, right = a.Message2Right } : null,
                                         message3 = (a.Message3Left != null || a.Message3Right != null) ? new { left = a.Message3Left, right = a.Message3Right } : null,
                                         message4 = (a.Message4Left != null || a.Message4Right != null) ? new { left = a.Message4Left, right = a.Message4Right } : null,
                                         duration = a.Duration,
                                         animation = a.Animation,
                                         display = a.Display,
                                         mediaType = a.MediaType,
                                         friends = (a.Friends != null)? a.Friends.Split(';').ToList() : new List<string>(),
                                         interests = (a.Interests != null)? a.Interests.Split(';').ToList() : new List<string>()
                                     };

                    var x = content.Where(c => c.display == null).ToList();

                    if (x == null)
                        return NotFound();

                    return Ok(x.ToList());
                }
            }
            catch (System.Exception ex)
            {
                return InternalServerError(ex);
            }
        }
        // GET: api/Content/5
        [EnableCors("http://localhost:25592", "*", "*")]
        [Route("api/content/{userId}")]
        public IHttpActionResult Get(long userId)
        {
            try
            {
                using (var unitOfWork = new UnitOfWork(new WhatsNextEntities()))
                {
                    var interests = from i in unitOfWork.Interests.GetAll()
                        where i.FKUser == userId
                        select i.Name;

                    var content = from c in unitOfWork.Content.GetAll()
                                  select new
                                  {
                                      id = c.Id,
                                      imgUrl = c.ImgUrl,
                                      mainText = new { left = c.MainTextLeft, right = c.MainTextRight },
                                      title = new { left = c.TitleLeft, right = c.TitleRight },
                                      message1 = (c.Message1Left != null || c.Message1Right != null) ? new { left = c.Message1Left, right = c.Message1Right } : null,
                                      message2 = (c.Message2Left != null || c.Message2Right != null) ? new { left = c.Message2Left, right = c.Message2Right } : null,
                                      message3 = (c.Message3Left != null || c.Message3Right != null) ? new { left = c.Message3Left, right = c.Message3Right } : null,
                                      message4 = (c.Message4Left != null || c.Message4Right != null) ? new { left = c.Message4Left, right = c.Message4Right } : null,
                                      duration = c.Duration,
                                      animation = c.Animation,
                                      display = "display",
                                      mediaType = c.MediaType,
                                      friends = (c.Friends != null) ? c.Friends.Split(';').ToList() : new List<string>(),
                                      interests = (c.Interests != null) ? c.Interests.Split(';').ToList() : new List<string>()
                                  };

                    var x = content.Where(c => c.interests.Intersect(interests).Any()).ToList();

                    if (x == null)
                        return NotFound();

                    return Ok(x.ToList());
                }
            }
            catch (System.Exception ex)
            {
                return InternalServerError(ex);
            }
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
