using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using WhatsNext.Entities;
using WhatsNext.Repository.Core;

namespace WhatsNext.Repository
{
    public class InterestRepository : Repository<Interest>, IInterestRepository
    {
        public InterestRepository(WhatsNextEntities context)
            : base(context)
        {
        }
    }
}
