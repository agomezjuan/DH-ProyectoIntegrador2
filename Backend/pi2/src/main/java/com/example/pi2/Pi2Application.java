package com.example.pi2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class Pi2Application {

	public static void main(String[] args) {
		SpringApplication.run(Pi2Application.class, args);
	}

}