package com.example.pi2.controller;

import com.example.pi2.domain.FavoriteRequestDto;
import com.example.pi2.domain.UserDto;
import com.example.pi2.exceptions.ResourceNotFoundException;
import com.example.pi2.feign.UserClient;
import com.example.pi2.model.Favorite;
import com.example.pi2.service.FavoritesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/favorites")
public class FavoritesController {

    @Autowired
    private UserClient userClient;
    @Autowired
    private FavoritesService favoritesService;

    @GetMapping
    public List<Favorite> getRecipesFavoritesByUsername(@RequestParam String username) throws ResourceNotFoundException {
        UserDto user = userClient.findByUsername(username);
        if (user != null) {
            return favoritesService.getRecipesFavoriteByUser(username);
        } else {
            throw new ResourceNotFoundException ("User not found");
        }
    }

    @PostMapping
    public Favorite saveRecipeFavorite(@RequestBody FavoriteRequestDto favoriteRequestDto) throws ResourceNotFoundException {
        UserDto user = userClient.findByUsername(favoriteRequestDto.getUsername());
        if (user != null) {
            return favoritesService.saveRecipeFavorite(favoriteRequestDto.getUsername(), favoriteRequestDto.getRecipeId());
        } else {
            throw new ResourceNotFoundException("User not found");
        }
    }
    @DeleteMapping("/{id}")
    public void deleteRecipeFavorite(@PathVariable(name = "id") Long id) {
        favoritesService.deleteRecipeFavorite(id);
    }
}
