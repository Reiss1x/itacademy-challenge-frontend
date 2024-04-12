package org.reis.itacademychallenge;

import org.apache.catalina.User;
import org.reis.itacademychallenge.entity.UserEntity;
import org.reis.itacademychallenge.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ItacademyChallengeApplication {

	public static void main(String[] args) {
		SpringApplication.run(ItacademyChallengeApplication.class, args);
	}

}
