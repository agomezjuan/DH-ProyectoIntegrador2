package com.example.msusers.domain;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
public class User {
    private String id;
    private String userName;
    private String email;
    private String firstName;
    private String lastName;
    private boolean enabled;
    private String password;

    public User(String userName, String email, String firstName, String lastName, boolean enabled, String password) {
        this.userName = userName;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.enabled = enabled;
        this.password = password;
    }

    public User(String id, String userName , String email) {
        this.id = id;
        this.userName = userName;
        this.email = email;
    }
}
