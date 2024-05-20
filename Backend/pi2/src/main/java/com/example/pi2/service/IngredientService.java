package com.example.pi2.service;

import com.example.pi2.entity.Ingredient;
import com.example.pi2.exceptions.ResourceAlreadyExistExeption;
import com.example.pi2.exceptions.ResourceNotFoundException;

import java.util.List;
import java.util.Optional;

public interface IngredientService {

	  Optional<Ingredient> findById(Integer id) throws ResourceNotFoundException;
	  Optional<Ingredient> findByName(String name) throws ResourceNotFoundException;

	  Ingredient insertIngredient(Ingredient ingredient) throws ResourceAlreadyExistExeption;

	  List<Optional<Ingredient>> findAll();
}
