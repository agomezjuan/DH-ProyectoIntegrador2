package com.example.pi2.model;

import jakarta.persistence.*;
import lombok.*;
@AllArgsConstructor
@Data
@Entity
@Table(name = "categoryxrecipes")
public class CategoryXRecipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;
    @ManyToOne
    @JoinColumn(name = "recipe_id", referencedColumnName = "id")
    private Recipe recipe;
}
