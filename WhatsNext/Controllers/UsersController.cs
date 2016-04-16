using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using WhatsNext.Entities;
using WhatsNext.Models;
using WhatsNext.Repository;

namespace WhatsNext.Controllers
{
    [EnableCors("http://localhost:25592", "*", "*")]
    public class UsersController : ApiController
    {
        // GET: api/Users

        [EnableCors("http://localhost:25592", "*", "*")]
        public IHttpActionResult Get()
        {
            try
            {
                using (var unitOfWork = new UnitOfWork(new WhatsNextEntities()))
                {
                    var users = unitOfWork.Users.GetAll();
                    var userModels = new List<UserModel>();

                    if (users == null)
                        return NotFound();

                    var interests = unitOfWork.Interests.GetAll();
                    var approaches = unitOfWork.Approaches.GetAll();

                    foreach (var user in users)
                    {
                        var userModel = new UserModel();
                        userModel.Id = user.Id;
                        userModel.FirstName = user.FirstName;
                        userModel.LastName = user.LastName;
                        userModel.MiddleName = user.MiddleName;
                        userModel.HomeTown = user.HomeTown;
                        userModel.UserName = userModel.UserName;

                        foreach (var interest in interests)
                        {
                            if (interest.FKUser == user.Id)
                            {
                                var interestModel = new InterestModel
                                {
                                    FKUser = user.Id,
                                    Name = interest.Name
                                };
                                userModel.Interests.Add(interestModel);
                            }
                        }

                        foreach (var approach in approaches)
                        {
                            if (approach.FKUser == user.Id)
                            {
                                var approachModel = new ApproachModel()
                                {
                                    FKUser = user.Id,
                                };
                                userModel.Approaches.Add(approachModel);
                            }
                        }
                        userModels.Add(userModel);
                    }

                    //return Ok(users.ToList());
                    return Ok(userModels);
                }
            }
            catch (System.Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        // GET: api/Users/5
        [EnableCors("http://localhost:25592", "*", "*")]
        [Route("api/users/{userId}")]
        public IHttpActionResult Get(long userId)
        {
            try
            {
                using (var unitOfWork = new UnitOfWork(new WhatsNextEntities()))
                {
                    var user = unitOfWork.Users.Get(userId);

                    if (user == null)
                        return NotFound();

                    var interests = unitOfWork.Interests.GetAll();
                    var approaches = unitOfWork.Approaches.GetAll();

                    var userModel = new UserModel();
                    userModel.Id = user.Id;
                    userModel.FirstName = user.FirstName;
                    userModel.LastName = user.LastName;
                    userModel.MiddleName = user.MiddleName;
                    userModel.HomeTown = user.HomeTown;
                    userModel.UserName = userModel.UserName;

                    foreach (var interest in interests)
                    {
                        if (interest.FKUser == user.Id)
                        {
                            var interestModel = new InterestModel
                            {
                                FKUser = user.Id,
                                Name = interest.Name
                            };
                            userModel.Interests.Add(interestModel);
                        }
                    }

                    foreach (var approach in approaches)
                    {
                        if (approach.FKUser == user.Id)
                        {
                            var approachModel = new ApproachModel()
                            {
                                FKUser = user.Id,
                            };
                            userModel.Approaches.Add(approachModel);
                        }
                    }

                    //return Ok(users.ToList());
                    return Ok(userModel);
                }
            }
            catch (System.Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        // POST: api/Users
        public void Post([FromBody]string value)
        {
        }

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
                    IEnumerable<Interest> allInterests = unitOfWork.Interests.GetAll();
                    //theUser.Interests.Clear();
                    foreach (var interest in allInterests)
                    {
                        if (interest.FKUser == user.Id)
                        {
                            unitOfWork.Interests.Remove(interest);
                            unitOfWork.SaveChanges();
                        }
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
