using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace test_api.Models
{
    [Table("Users")]    
    public class User
    {
        [Key]
        [Required]
        public int UserId { get; set; }

        [StringLength(50)]
        public string FullName { get; set; }     

        [StringLength(50)]
        public string DoB { get; set; } 

        [StringLength(50)]
        public string Gender { get; set; }  

        [StringLength(50)]       
        public string Email { get; set; }        

        [StringLength(50)]
        public string Password { get; set; }

        [StringLength(50)]
        public string ConfirmPassword { get; set; }     
    }
}
