package com.example.pi2.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.LinkedList;
import java.util.List;
@AllArgsConstructor
@Data
@Entity
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(unique = true)
    private String name;
    private String urlImg;
    @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
    private List<CategoryXRecipe> categoryXRecipes;
}
