package com.example.pi2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.cloud.openfeign.EnableFeignClients;

import java.util.List;

@EnableFeignClients
@SpringBootApplication
public class Pi2Application {

	public static void main(String[] args) {
		SpringApplication.run(Pi2Application.class, args);
	}

	@Bean
	FilterRegistrationBean<CorsFilter> simpleCorsFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(Boolean.TRUE);
		// *** URL below needs to match the client URL and port ***
		config.setAllowedOrigins(List.of("http://localhost:5173"));
		config.setAllowedMethods(List.of("*"));
		config.setAllowedHeaders(List.of("*"));
		source.registerCorsConfiguration("/**", config);
		FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter(source));
		bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
		return bean;
	}
}