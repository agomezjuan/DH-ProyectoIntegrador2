package com.digitalhouse.msgateway.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
public class SecurityConfiguration {

    @Bean
    public SecurityWebFilterChain filterChain(ServerHttpSecurity httpSecurity){
        httpSecurity
                .authorizeExchange(auth ->
                        auth
                                .anyExchange()
                                .authenticated()
                ).oauth2Login(Customizer.withDefaults());
        return httpSecurity.build();
    }
}