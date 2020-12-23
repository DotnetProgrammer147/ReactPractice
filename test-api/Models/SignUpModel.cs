using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace test_api.Models
{    
    public class SignUpModel
    {
        public string FullName { get; set; }     
        public string DoB { get; set; } 
        public string Gender { get; set; }         
        public string Email { get; set; }        
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }     
    }
}
