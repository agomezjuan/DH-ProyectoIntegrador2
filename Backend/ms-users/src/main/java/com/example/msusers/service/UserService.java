package com.example.msusers.service;

import com.example.msusers.configuration.ClientConfig;
import com.example.msusers.dto.UserDTO;
import com.example.msusers.repository.UserRepository;
import jakarta.ws.rs.core.Response;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Collections;
@Service
public class UserService {

    private UserRepository userRepository;

    private final Keycloak keycloak;

    private final ClientConfig clientConfig;

    @Value("${keycloakProperties.realm}")
    private String realm;


    public UserService(UserRepository userRepository, Keycloak keycloak, ClientConfig clientConfig) {
        this.userRepository = userRepository;
        this.keycloak = keycloak;
        this.clientConfig = clientConfig;
    }

    public Integer createUser(UserDTO user){

        UserRepresentation userRepresentation = new UserRepresentation();

        userRepresentation.setFirstName(user.getFirstName());
        userRepresentation.setLastName(user.getLastName());
        userRepresentation.setEmail(user.getEmail());
        userRepresentation.setEnabled(true);

        CredentialRepresentation credentialRepresentation = new CredentialRepresentation();
        credentialRepresentation.setTemporary(false);
        credentialRepresentation.setType(CredentialRepresentation.PASSWORD);
        credentialRepresentation.setValue(user.getPassword());

        userRepresentation.setCredentials(Collections.singletonList(credentialRepresentation));

        Keycloak keycloakBuilder= clientConfig.buildClientWithToken();

        Response response = keycloakBuilder.realm(realm).users().create(userRepresentation);

        response.close();
        return response.getStatus();

    }




}
