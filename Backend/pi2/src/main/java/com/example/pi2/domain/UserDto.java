package com.example.pi2.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data

public class UserDto {
    private String id;
    private String userName;
    private String email;
    private String firstName;
    private String lastName;
    private boolean enabled;
    private String password;
}
