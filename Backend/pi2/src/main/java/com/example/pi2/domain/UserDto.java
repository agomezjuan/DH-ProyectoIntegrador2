package com.example.pi2.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data

public class UserDto {
    private String id;
    private String nombre;
    private String email;
}
