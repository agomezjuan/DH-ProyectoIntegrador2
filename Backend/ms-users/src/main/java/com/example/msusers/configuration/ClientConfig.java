package com.example.msusers.configuration;

import lombok.extern.slf4j.Slf4j;
import org.keycloak.OAuth2Constants;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.KeycloakBuilder;
import org.keycloak.admin.client.resource.RealmResource;
import org.keycloak.admin.client.token.TokenManager;
import org.keycloak.representations.AccessTokenResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Slf4j
@Configuration
public class ClientConfig {

    @Value("${keycloakProperties.serverUrl}")
    private String serverUrl;

    @Value("${keycloakProperties.realm}")
    private String realm;

    @Value("${keycloakProperties.clientId}")
    private String clientId;

    @Value("${keycloakProperties.clientSecret}")
    private String clientSecret;

    @Bean
    public Keycloak buildClient() {
        return KeycloakBuilder.builder().
                serverUrl(serverUrl)
                .realm(realm)
                .clientId(clientId)
                .clientSecret(clientSecret)
                .grantType(OAuth2Constants.CLIENT_CREDENTIALS)
                .build();
    }

    @Bean
    public RealmResource getRealmResource(Keycloak keycloak) {
        return keycloak.realm(realm);
    }

    public AccessTokenResponse getUserAccessToken(String username, String password) {
        return KeycloakBuilder.builder().
                serverUrl(serverUrl)
                .realm(realm)
                .clientId(clientId)
                .clientSecret(clientSecret)
                .grantType(OAuth2Constants.PASSWORD)
                .username(username)
                .password(password)
                .build()
                .tokenManager()
                .getAccessToken();
    }
}
