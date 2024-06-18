package com.example.msusers.service;

import com.example.msusers.configuration.ClientConfig;
import com.example.msusers.dto.UserDTO;
import com.example.msusers.exceptions.ResourceNotFoundException;
import com.example.msusers.repository.UserRepository;
import jakarta.ws.rs.core.Response;
import org.apache.commons.lang.StringUtils;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.representations.AccessTokenResponse;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class UserService {

    private final Keycloak keycloak;
    private final ClientConfig clientConfig;
    private UserRepository userRepository;
    @Value("${keycloakProperties.realm}")
    private String realm;


    public UserService(UserRepository userRepository, Keycloak keycloak, ClientConfig clientConfig) {
        this.userRepository = userRepository;
        this.keycloak = keycloak;
        this.clientConfig = clientConfig;
    }

    public Integer createUser(UserDTO user) {

        UserRepresentation userRepresentation = new UserRepresentation();

        userRepresentation.setFirstName(user.getFirstName());
        userRepresentation.setLastName(user.getLastName());
        userRepresentation.setEmail(user.getEmail());
        userRepresentation.setUsername(user.getEmail());
        userRepresentation.setEnabled(true);
        userRepresentation.setEmailVerified(true);

        CredentialRepresentation credentialRepresentation = new CredentialRepresentation();
        credentialRepresentation.setTemporary(false);
        credentialRepresentation.setType(CredentialRepresentation.PASSWORD);
        credentialRepresentation.setValue(user.getPassword());

        userRepresentation.setCredentials(Collections.singletonList(credentialRepresentation));

        Response response = keycloak.realm(realm).users().create(userRepresentation);

        response.close();
        return response.getStatus();

    }

    public UserDTO findByUsername(String username) throws ResourceNotFoundException {
        UserRepresentation userById = keycloak.realm(realm)
                .users()
                .searchByUsername(username, true)
                .stream()
                .findFirst()
                .orElseThrow(() -> new ResourceNotFoundException(String.format("Username: %s not found", username)));
        return this.mapToDto(userById);
    }

    private UserDTO mapToDto(UserRepresentation user) {
        UserDTO dto = new UserDTO();
        dto.setEmail(user.getEmail());
        dto.setEnabled(user.isEnabled());
        dto.setId(user.getId());
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        dto.setUsername(user.getEmail());
        return dto;
    }

    public AccessTokenResponse loginUser(UserDTO userDTO) {
        return clientConfig.getUserAccessToken(userDTO.getUsername(), userDTO.getPassword());
    }

    public UserDTO modifyUser(UserDTO user) {

        Keycloak keycloakBuilder = clientConfig.buildClient();

        UserRepresentation userRepresentation = new UserRepresentation();

        if(isNotBlankOrNull(user.getFirstName())){
            userRepresentation.setFirstName(user.getFirstName());
        }
        if(isNotBlankOrNull(user.getLastName())){
            userRepresentation.setLastName(user.getLastName());}

        if(isNotBlankOrNull(user.getPassword())){
            CredentialRepresentation credentialRepresentation = new CredentialRepresentation();
            credentialRepresentation.setTemporary(false);
            credentialRepresentation.setType(CredentialRepresentation.PASSWORD);
            credentialRepresentation.setValue(user.getPassword());

            userRepresentation.setCredentials(Collections.singletonList(credentialRepresentation));
        }

        keycloakBuilder.realm(realm).users().get(user.getId()).update(userRepresentation);

        UserDTO userAfterUpdate = mapToDto(keycloakBuilder.realm(realm).users().get(user.getId()).toRepresentation());

        return userAfterUpdate;

    }

    public HttpStatus resetPassword(UserDTO user){

        HttpStatus status = null;

        CredentialRepresentation credentialRepresentation = new CredentialRepresentation();
        credentialRepresentation.setTemporary(false);
        credentialRepresentation.setType(CredentialRepresentation.PASSWORD);
        credentialRepresentation.setValue(user.getPassword());

        List<UserRepresentation> userRepresentations = keycloak.realm(realm).users().searchByEmail(user.getEmail(), true);
        if(!userRepresentations.isEmpty() && userRepresentations.size() == 1){
            for (UserRepresentation u: userRepresentations
            ) {
                keycloak.realm(realm).users().get(u.getId()).resetPassword(credentialRepresentation);
                status = HttpStatus.OK;
            }
        }else {
            status = HttpStatus.CONFLICT;
        }
        return status;
    }

    private Boolean isNotBlankOrNull(String attr){
        return StringUtils.isNotBlank(attr);
    }

}
