package com.explorenest.hyun.explorenestv2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
public class ExploreNestV2Application {

	@RequestMapping("/")
	static String home() {
		return "Hello World!";
	}

	public static void main(String[] args) {
		SpringApplication.run(ExploreNestV2Application.class, args);
	}

}
