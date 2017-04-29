package org.guy.dasboot.services;

import java.util.Random;

import org.guy.dasboot.models.RandomNumber;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RandomNumberService {

		@CrossOrigin(origins = "http://localhost:9080") // Bypasses CORS
		@RequestMapping("/randomNumber")
		public RandomNumber getRandomNumber() {
			RandomNumber number = new RandomNumber();
			Random r = new Random();
			
			number.setNum(r.nextInt());
			return number;
		}
	
}
