using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WhatsNext.Entities;
using WhatsNext.Repository.Core;

namespace WhatsNext.Repository
{
    public class ContentRepository : Repository<Content>, IContentRepository
    {
        public ContentRepository(WhatsNextEntities context)
            : base(context)
        {
        }
    }
}
