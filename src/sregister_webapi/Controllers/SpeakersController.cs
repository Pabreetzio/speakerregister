﻿using System.Net.Http;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using sregister_webapi.Interfaces;
using sregister_webapi.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace sregister_webapi.Controllers
{
    [Route("api/speakers")]
    [Authorize]
    public class SpeakersController : Controller
    {
        private readonly ISpeakerRepository _speakerRepository;

        public SpeakersController(ISpeakerRepository speakerRepository)
        {
            _speakerRepository = speakerRepository;
        }

        // GET: api/speakers
        [HttpGet]
        public IEnumerable<Speaker> Get()
        {
            return _speakerRepository.GetSpeakers();
        }

        //GET api/speakers/5
        [HttpGet("{id}")]
        public Speaker Get(int id)
        {
            return _speakerRepository.LoadSpeaker(id);
        }

        // POST api/speakers
        [HttpPost]
        public Speaker Post([FromBody]Speaker speaker)
        {
            return _speakerRepository.SaveSpeaker(speaker);
        }

        // PUT api/speakers/5
        [HttpPut("{id}")]
        public Speaker Put(int id, [FromBody]Speaker speaker)
        {
            speaker.Id = id;
            return _speakerRepository.SaveSpeaker(speaker);
        }

        // DELETE api/speakers/5
        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            return _speakerRepository.DeleteSpeaker(id);
        }
        
        // PUT api/speaker/5/register
        [HttpPut("{id}/register")]
        public HttpResponseMessage Register(int id) {
            return new HttpResponseMessage { StatusCode = System.Net.HttpStatusCode.NotImplemented };
        }
    }
}
