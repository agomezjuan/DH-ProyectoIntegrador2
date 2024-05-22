package com.example.pi2.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;

import java.util.LinkedList;

@Data
@Entity
public class Category {
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Getter
    private String name;

    @OneToMany(mappedBy = "categories", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private LinkedList<Recipe> recipe;

    // Getters y Setters

}
