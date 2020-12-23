using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using test_api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace test_api.DAL
{
    public class ApplicationDBContext:DbContext
    {
        
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {
            
        }


        public DbSet<User> Users { get; set; }
    }
}