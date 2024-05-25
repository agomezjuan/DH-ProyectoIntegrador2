package com.example.msusers.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private String id;
    private String userName;
    private String email;
    private String firstName;
    private String lastName;
    private boolean enabled;
    private String password;

    public UserDTO(String userName, String email, String firstName, String lastName, boolean enabled, String password) {
        this.userName = userName;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.enabled = enabled;
        this.password = password;
    }



}
