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
    public class AccountController : ControllerBase
    {  

        [Route("Register")]
        [HttpPost]
        public JsonResult Register(SignUp signUpCredentials)
        {
            if(signUpCredentials == null)
            {
                return new JsonResult("Login is Null");
            }
            return new JsonResult(new SignUp 
                                      { 
                                          FullName = signUpCredentials.FullName, 
                                          DoB = signUpCredentials.DoB,
                                          Email = signUpCredentials.Email,
                                          Gender = signUpCredentials.Gender,
                                          Password = signUpCredentials.Password,
                                          ConfirmPassword = signUpCredentials.ConfirmPassword
                                     });
                

        }

        [Route("Login")]
        [HttpPost]
        public JsonResult Login(Login login)
        {
            if(login == null)
            {
                return new JsonResult("Login is Null");
            }
            else
            {
                var status = AuthenticateUser(login.Email, login.Password);
                if (status)
                {
                    return new JsonResult(new Response { Status = "Success", Message = "Login Successfully" });
                }
                else
                {
                    return new JsonResult(new Response { Status = "Invalid", Message = "Invalid User." });
                }
            }
        }

        public bool AuthenticateUser(string email, string password)
        {
            if(email.Equals("test@gmail.com") && password.Equals("test1234"))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        [Route("LoginNew")]
        [HttpPost]
        public JsonResult LoginNew(Login login)
        {
            if(login == null)
            {
                return new JsonResult("Login is Null");
            }
            return new JsonResult(login);
        }
    }
}
