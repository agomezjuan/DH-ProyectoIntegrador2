package com.digitalhouse.msgateway.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
public class SecurityConfiguration {

    @Bean
    public SecurityWebFilterChain filterChain(ServerHttpSecurity httpSecurity) {
        httpSecurity
                .csrf(ServerHttpSecurity.CsrfSpec::disable)
                .cors(ServerHttpSecurity.CorsSpec::disable)
                .authorizeExchange(auth ->
                        auth
                                .pathMatchers("/actuator/**").permitAll()
                                .pathMatchers("/api/v1/actuator/**").permitAll()
                                .pathMatchers("/api/v1/users/register/**").permitAll()
                                .pathMatchers("/api/v1/users/login/**").permitAll()
                                .pathMatchers("/api/v1/categories/**").permitAll()
                                .pathMatchers("/api/v1/recipes/**").permitAll()
                                .anyExchange()
                                .authenticated()
                ).oauth2Login(Customizer.withDefaults())
                .oauth2ResourceServer(ServerHttpSecurity.OAuth2ResourceServerSpec::jwt);
        return httpSecurity.build();
    }
}
