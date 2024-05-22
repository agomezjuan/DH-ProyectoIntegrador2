package com.example.pi2.controller;

import com.example.pi2.model.Ingredient;
import com.example.pi2.exceptions.ResourceAlreadyExistExeption;
import com.example.pi2.exceptions.ResourceNotFoundException;
import com.example.pi2.service.impl.IngredientServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ingredient")
public class IngredientController {

	  @Autowired
	  IngredientServiceImpl ingredientService;

	@GetMapping
	  public Optional<Ingredient> getIngredientByIdHandler(@RequestParam Integer id) throws ResourceNotFoundException{
		  return ingredientService.findById(id);
	}

	@GetMapping("/all")
	  public List<Optional<Ingredient>> getAllIngredientHandler(){
		  return ingredientService.findAll();
	}

	@GetMapping("/byName")
	  public Optional<Ingredient> getIngredientByNameHandler(@RequestParam String name) throws ResourceNotFoundException{
		  return ingredientService.findByName(name);
	}

	@PostMapping
	  public Ingredient postIngredientHandler(@RequestBody Ingredient ingredient) throws ResourceAlreadyExistExeption{
		  return ingredientService.insertIngredient(ingredient);
	}


}

