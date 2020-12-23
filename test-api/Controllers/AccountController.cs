using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using test_api.Models;
using test_api.DAL;

namespace test_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private ApplicationDBContext _context;
        public AccountController(ApplicationDBContext context)
        {
            _context = context;
        }  

        [Route("Register")]
        [HttpPost]
        public JsonResult Register(SignUpModel signUpCredentials)
        {
            if(signUpCredentials == null)
            {
                return new JsonResult("Credentials Invalid");
            }
            User user = new User()
            {
                FullName = signUpCredentials.FullName,
                DoB = signUpCredentials.DoB,
                Email = signUpCredentials.Email,
                Gender = signUpCredentials.Gender,
                Password = signUpCredentials.Password,
                ConfirmPassword = signUpCredentials.ConfirmPassword
            };
            _context.Add(user);
            var status = _context.SaveChanges() > 0;
            if (status)
            {
                return new JsonResult(new Response { Status = "Success", Message = "User Created Successfully!" });
            }
            else
            {
                return new JsonResult(new Response { Status = "Failed", Message = "User Not Created!" });
            }
            // return new JsonResult(new SignUpModel 
            //                           { 
            //                               FullName = signUpCredentials.FullName, 
            //                               DoB = signUpCredentials.DoB,
            //                               Email = signUpCredentials.Email,
            //                               Gender = signUpCredentials.Gender,
            //                               Password = signUpCredentials.Password,
            //                               ConfirmPassword = signUpCredentials.ConfirmPassword
            //                          });
                

        }

        [Route("Login")]
        [HttpPost]
        public JsonResult Login(LoginModel login)
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
