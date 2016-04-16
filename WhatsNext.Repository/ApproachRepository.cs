using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WhatsNext.Entities;
using WhatsNext.Repository.Core;

namespace WhatsNext.Repository
{
    public class ApproachRepository : Repository<Approach>, IApproachRepository
    {
        public ApproachRepository(WhatsNextEntities context)
            : base(context)
        {
        }
    }
}
