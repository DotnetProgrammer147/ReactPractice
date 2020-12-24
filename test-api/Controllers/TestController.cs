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
        
        [Route("LoginNew")]
        [HttpPost]
        public JsonResult LoginNew(LoginModel login)
        {
            if(login == null)
            {
                return new JsonResult("Login is Null");
            }
            return new JsonResult(login);
        }
    }
}
