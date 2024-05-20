package com.example.pi2.model;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import lombok.Data;

import java.util.LinkedList;
import java.util.List;

@Data
@Entity
public class Recipe {

    private String name;
    private LinkedList<String> preparationSteps;
    // TODO falta completar relacion con la entidad Category
    private List<Category> categories;
    private List<String> ingredients;
}
