using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using test_api.Models;

namespace test_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {        

        [HttpGet]
         [Route("GetString")]
        public string GetString()
        {
            return "Test Api Get Function From Test Controller (API)!";
        }

        
        [HttpPost]
        [Route("Login")]
        public IActionResult Login(string email, string password)
        {
            return Ok(true);
        }


        [Route("LoginNew")]
        [HttpPost]
        public JsonResult LoginNew([FromBody]Login login)
        {
            if(login == null)
            {
                return new JsonResult("Login is Null");
            }
            return new JsonResult(login);// { Email = login.Email, Password = login.Password };
            //return new Login { Email = "test@hotmail.com", Password = "test1234" };
            // int log = 0;
            // if (log != 0)
            // {
            //     return new Response { Status = "Invalid", Message = "Invalid User." };
            // }
            // else
            // {
            //     return new Response { Status = "Success", Message = "Login Successfully" };
            // }
                

        }
    }
}
