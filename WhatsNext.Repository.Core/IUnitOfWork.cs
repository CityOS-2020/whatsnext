using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WhatsNext.Repository.Core
{
    public interface IUnitOfWork : IDisposable
    {
        IUserRepository Users { get; }

        int SaveChanges();
    }
}
