package com.example.msusers.configuration;

import org.keycloak.OAuth2Constants;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.KeycloakBuilder;
import org.keycloak.representations.AccessTokenResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

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

    public Keycloak buildClientWithToken() {
        return KeycloakBuilder.builder().
                serverUrl(serverUrl)
                .realm(realm)
                .clientId(clientId)
                .authorization(getClientCredentialsToken())
                .build();
    }
    private String getClientCredentialsToken(){
        AccessTokenResponse token = buildClient().tokenManager().getAccessToken();
        return token.getToken();
    }
}
