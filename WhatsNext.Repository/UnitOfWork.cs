using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WhatsNext.Entities;
using WhatsNext.Repository.Core;

namespace WhatsNext.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly WhatsNextEntities _context;

        public IUserRepository Users { get; private set; }
        public IApproachRepository Approaches { get; private set; }

        public UnitOfWork(WhatsNextEntities context)
        {
            _context = context;

            InstantiateRepositories();
        }

        private void InstantiateRepositories()
        {
            Users = new UserRepository(_context);
            Approaches = new ApproachRepository(_context);
        }

        public int SaveChanges()
        {
            return _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
