package com.example.pi2.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
@AllArgsConstructor
@Entity
@Data
public class Favorite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private String user;

    @ManyToOne
    private Recipe recipe;


}
