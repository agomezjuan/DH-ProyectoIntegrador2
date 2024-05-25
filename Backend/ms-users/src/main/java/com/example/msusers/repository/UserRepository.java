package com.example.msusers.repository;

import com.example.msusers.domain.User;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {
    public User mapUser(UserRepresentation userRepresentation){
        return new User(userRepresentation.getId(),
                userRepresentation.getUsername(),
                userRepresentation.getEmail());
    }
}
