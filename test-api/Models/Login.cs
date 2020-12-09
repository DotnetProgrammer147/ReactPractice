using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace test_api.Models
{    
    public class Login
    {
        public string UserName { get; set; }        
        public string Password { get; set; }
    }
}
