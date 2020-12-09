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
    [Route("[controller]")]
    public class TestController : ControllerBase
    {        

        [HttpGet]
        public string Get()
        {
            return "Test Api Get Function From Test Controller";
        }

        [HttpGet]
        public IActionResult Login([FromBody] Login login)
        {
            return Ok(login);
        }
    }
}
