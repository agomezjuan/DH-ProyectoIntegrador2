package com.example.pi2.service;

import com.example.pi2.exceptions.ResourceNotFoundException;
import com.example.pi2.model.Favorite;
import com.example.pi2.model.Recipe;
import com.example.pi2.repository.FavoriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoritesService {
    @Autowired
    private FavoriteRepository favoriteRepository;

    @Autowired
    private RecipeService recipeService;

    public List<Favorite> getRecipesFavoriteByUser(String userid) {
        return favoriteRepository.findByUser(userid);
    }

    public Favorite saveRecipeFavorite(String userid, Integer recipeid) throws ResourceNotFoundException {
        Recipe recipe = recipeService.getRecipeById(recipeid);
        Favorite favorite = new Favorite();
        favorite.setUser(userid);
        favorite.setRecipe(recipe);
        return favoriteRepository.save(favorite);
    }


    public void deleteRecipeFavorite(Long favoriteId) {
        favoriteRepository.deleteById(favoriteId);
    }
}