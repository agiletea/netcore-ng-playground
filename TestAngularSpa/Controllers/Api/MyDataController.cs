using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TestAngularSpa.Models;

namespace TestAngularSpa.Controllers.Api
{
	[Route("api/[controller]")]
	public class MyDataController : Controller
    {
	    [HttpGet]
	    public async Task<IActionResult> GetMyData()
	    {
			// simulat length op
		    await Task.Delay(3000);

		    return Ok(GetData());
	    }

	    private static MyDataModel[] GetData()
	    {
		    return new[]
		    {
			    new MyDataModel
			    {
				    Id = 1,
				    Name = "Name 1",
				    Description = "Description 1"
			    },
			    new MyDataModel
			    {
				    Id = 2,
				    Name = "Name 2",
				    Description = "Description 3"
			    },
			    new MyDataModel
			    {
				    Id = 3,
				    Name = "Name 3",
				    Description = "Description 3"
			    }
		    };
	    }
    }
}
