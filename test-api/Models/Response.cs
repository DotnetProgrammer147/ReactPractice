using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace test_api.Models
{    
    public class Response
    {
        public string Status { set; get; }
        public string Message { set; get; }
    }
}
