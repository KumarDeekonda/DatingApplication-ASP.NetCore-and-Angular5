using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.Data_Transfer_Objects;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{ 
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly IAuthRepository _repo;
        public AuthController(IAuthRepository repo)
        {
         _repo = repo;

        }
        [HttpPost("register")]

        public async Task<IActionResult> Register([FromBody]UserForRegisterDto userForregisterDto)
        {
            // validate the request

             userForregisterDto.Username = userForregisterDto.Username.ToLower();

             if(await _repo.UserExists(userForregisterDto.Username))
                  return BadRequest("Username is already taken");

            var userToCreate = new User {
                Username = userForregisterDto.Username
            };

            var createUser = await _repo.Register(userToCreate,userForregisterDto.Password);

            return StatusCode(201);
        }
    }
}