package com.example.pi2.service;

import com.example.pi2.domain.RecipeDto;
import com.example.pi2.exceptions.ResourceNotFoundException;
import com.example.pi2.domain.FavoriteDto;
import com.example.pi2.model.Favorite;
import com.example.pi2.model.Recipe;
import com.example.pi2.repository.FavoriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FavoritesService {
    @Autowired
    private FavoriteRepository favoriteRepository;

    @Autowired
    private RecipeService recipeService;

    @Autowired
    private DtoMapper mapper;

    public List<FavoriteDto> getRecipesFavoriteByUser(String userid) {
        return favoriteRepository.findByUser(userid).stream().map(this::mapToDto).toList();
    }

    public FavoriteDto saveRecipeFavorite(String userid, Integer recipeid) throws ResourceNotFoundException {
        Recipe recipe = recipeService.getRecipeById(recipeid);
        Favorite favorite = new Favorite();
        favorite.setUser(userid);
        favorite.setRecipe(recipe);
        favorite = favoriteRepository.save(favorite);
        return this.mapToDto(favorite);
    }


    public void deleteRecipeFavorite(Long favoriteId) {
        favoriteRepository.deleteById(favoriteId);
    }

    public void deleteRecipeFavoriteByUser(String username, Long recipeId) {
        List<Favorite> favorites = favoriteRepository.findByUser(username);
        Optional<Favorite> favoriteOptional = favorites.stream()
                .filter(favorite -> favorite.getRecipe().getId() == recipeId.intValue())
                .findFirst();
        favoriteOptional.ifPresent(favorite -> favoriteRepository.deleteById(favorite.getId()));
    }


    private FavoriteDto mapToDto(Favorite favorite) {
        FavoriteDto favoriteDto = new FavoriteDto();
        favoriteDto.setFavoriteId(favorite.getId());
        RecipeDto recipeDto = mapper.toRecipeDto(favorite.getRecipe());
        recipeDto.setFavorite(true);
        favoriteDto.setRecipe(recipeDto);
        return favoriteDto;
    }
}
