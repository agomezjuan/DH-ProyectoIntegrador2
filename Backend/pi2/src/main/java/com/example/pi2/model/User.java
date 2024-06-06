package com.example.pi2.model;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
@Entity
public class User {
    private String id;
    private String nombre;
    private String email;



}
