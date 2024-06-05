package com.example.pi2.controller;

import com.example.pi2.feign.RecipeClient;
import com.example.pi2.model.Favorite;
import com.example.pi2.model.Recipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/pi2")
public class FavoriteController {
    @Autowired
    RecipeClient recipeClient;




}
