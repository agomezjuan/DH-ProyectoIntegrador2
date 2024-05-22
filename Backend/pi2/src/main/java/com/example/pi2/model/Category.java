package com.example.pi2.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.LinkedList;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

//    @ManyToMany(mappedBy = "categories", fetch = FetchType.LAZY)
//    private LinkedList<Recipe> recipe;


}
