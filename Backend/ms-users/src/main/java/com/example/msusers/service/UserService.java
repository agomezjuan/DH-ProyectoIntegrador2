package com.example.msusers.service;

import com.example.msusers.configuration.ClientConfig;
import com.example.msusers.dto.UserDTO;
import com.example.msusers.exceptions.ResourceNotFoundException;
import jakarta.ws.rs.core.Response;
import org.apache.commons.lang.StringUtils;
import org.keycloak.OAuth2Constants;
import org.keycloak.admin.client.KeycloakBuilder;
import org.keycloak.admin.client.resource.RealmResource;
import org.keycloak.representations.AccessTokenResponse;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class UserService {

    private final RealmResource keycloakRealm;
    private final ClientConfig clientConfig;

    @Autowired
    public UserService(RealmResource keycloakRealm, ClientConfig clientConfig) {
        this.keycloakRealm = keycloakRealm;
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

        Response response = keycloakRealm.users().create(userRepresentation);

        response.close();
        return response.getStatus();

    }

    public UserDTO findByUsername(String username) throws ResourceNotFoundException {
        UserRepresentation userById = keycloakRealm
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

        keycloakRealm.users().get(user.getId()).update(userRepresentation);

        UserDTO userAfterUpdate = mapToDto(keycloakRealm.users().get(user.getId()).toRepresentation());

        return userAfterUpdate;

    }

    public HttpStatus resetPassword(UserDTO user){

        HttpStatus status = null;

        CredentialRepresentation credentialRepresentation = new CredentialRepresentation();
        credentialRepresentation.setTemporary(false);
        credentialRepresentation.setType(CredentialRepresentation.PASSWORD);
        credentialRepresentation.setValue(user.getPassword());

        List<UserRepresentation> userRepresentations = keycloakRealm.users().searchByEmail(user.getEmail(), true);
        if(!userRepresentations.isEmpty() && userRepresentations.size() == 1){
            for (UserRepresentation u: userRepresentations
            ) {
                keycloakRealm.users().get(u.getId()).resetPassword(credentialRepresentation);
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
