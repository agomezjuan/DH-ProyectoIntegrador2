package com.example.pi2.service;

import com.example.pi2.exceptions.ResourceNotFoundException;
import com.example.pi2.model.Favorite;
import com.example.pi2.model.Recipe;
import com.example.pi2.repository.FavoriteRepository;
import com.example.pi2.repository.RecipeRepository;
import org.springframework.stereotype.Service;

@Service
public class FavoriteService {

private FavoriteRepository favoriteRepository;
private RecipeRepository recipeRepository;

    public Favorite getFavoriteRecipeById(Long id) throws ResourceNotFoundException {

        Favorite favorite = favoriteRepository.findById(id).orElse(null);
        if (favorite == null) {
            throw new ResourceNotFoundException("Favorite Recipe not found with id: " + id);
        }
        return favorite;

    }




}
