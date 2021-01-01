using System.Threading.Tasks;
using System.Collections.Generic;
using test_api.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
namespace test_api.DAL
{
    public class EFRepository
    {
        private ApplicationDBContext _context;
        
        public EFRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<bool> Insert(object entity)
        {
            _context.Add(entity);
            return await SaveChanges();
        }

        public async Task<bool> Delete(object entity)
        {
            _context.Remove(entity);
            return await SaveChanges();
        }

        public async Task<bool> Update(object entity)
        {
            _context.Update(entity);
            return await SaveChanges();
        }

        public async Task<bool> SaveChanges()
        {
           return await _context.SaveChangesAsync() > 0;
        }


        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users.ToListAsync();
            return users;
        }

        public async Task<User> GetUserByEmail(string email)
        {
            var user = await _context.Users.FirstOrDefaultAsync(p => p.Email == email);
            return user;
        }
        
    }
}