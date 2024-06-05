package com.example.pi2.feign;

import com.example.msusers.configuration.FeignAuthInterceptor;
import com.example.pi2.model.Recipe;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "ms-users", url = "http://localhost:8089", configuration = FeignAuthInterceptor.class)
public interface RecipeClient {


    @GetMapping("/recipes/{id}")
    Recipe getRecipeById(@PathVariable("id") Long id);

    @GetMapping("/recipes")
    List<Recipe> getAllRecipes();




}
