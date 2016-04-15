using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WhatsNext.Repository
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(WhatsNextEntities context)
            : base(context)
        {
        }
    }
}