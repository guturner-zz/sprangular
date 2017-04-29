package org.guy.dasboot.services;

import java.util.Random;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RandomNumberService {

		@CrossOrigin(origins = "http://localhost:9080") // Bypasses CORS
		@RequestMapping("/randomNumber")
		public Integer getRandomNumber() {
			Random r = new Random();
			return r.nextInt();
		}
	
}
