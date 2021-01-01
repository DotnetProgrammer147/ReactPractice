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
        private EFRepository _repository;
        public AccountController(EFRepository repository)
        {
            _repository = repository;
        }  

        [Route("Register")]
        [HttpPost]
        public async Task<JsonResult> Register(SignUpModel signUpCredentials)
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
            
            var status = await _repository.Insert(user);
            if (status)
            {
                return new JsonResult(new Response { Status = "Success", Message = "User Created Successfully!" });
            }
            else
            {
                return new JsonResult(new Response { Status = "Failed", Message = "User Not Created!" });
            }
        }

        [Route("Login")]
        [HttpPost]
        public async Task<JsonResult> Login(LoginModel login)
        {
            if(login == null)
            {
                return new JsonResult("Login is Null");
            }
            else
            {
                var user = await _repository.GetUserByEmail(login.Email);
                if (user != null)
                {
                    return new JsonResult(new Response { Status = "Success", Message = "Login Successfully" });
                }
                else
                {
                    return new JsonResult(new Response { Status = "Invalid", Message = "Invalid User." });
                }
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
