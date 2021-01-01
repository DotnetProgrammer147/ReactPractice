using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using test_api.DAL;
using test_api.Models;
namespace test_api.Factories
{    
    public class EntityFactory
    {
        public static User Create(SignUpModel model) 
        {
            User user = new User()
            {
                FullName = model.FullName,
                DoB = model.DoB,
                Email = model.Email,
                Gender = model.Gender,
                Password = model.Password,
                ConfirmPassword = model.ConfirmPassword
            };

            return user;
        }
    }
}