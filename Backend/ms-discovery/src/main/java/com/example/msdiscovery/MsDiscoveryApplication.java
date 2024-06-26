package com.example.msdiscovery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

import java.util.Arrays;
import java.util.List;

@EnableEurekaServer
@SpringBootApplication
public class MsDiscoveryApplication {

	public static void main(String[] args) {
		SpringApplication.run(MsDiscoveryApplication.class, args);

	}
}
