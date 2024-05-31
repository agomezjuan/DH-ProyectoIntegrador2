package com.example.pi2.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.LinkedList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "recipes")
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String urlImg;
    private LinkedList<String> preparationSteps;
    // TODO falta completar relacion con la entidad Category
//    private List<Category> categories;
//    private List<Ingredient> ingredients;
}
