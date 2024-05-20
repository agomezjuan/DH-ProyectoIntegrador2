package com.example.pi2.service.impl;

import com.example.pi2.entity.Ingredient;
import com.example.pi2.exceptions.ResourceAlreadyExistExeption;
import com.example.pi2.exceptions.ResourceNotFoundException;
import com.example.pi2.repository.IngredientRepository;
import com.example.pi2.service.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class IngredientServiceImpl implements IngredientService {

	  @Autowired
	  IngredientRepository ingredientRepository;
	  @Override
	  public Optional<Ingredient> findById(Integer id) throws ResourceNotFoundException{
			Ingredient ingredient;
			Optional<Ingredient> optionalIngredient = ingredientRepository.findById(id);
			if (optionalIngredient.isPresent()){
				ingredient = optionalIngredient.get();
			}else {
				  throw new ResourceNotFoundException("There's no ingredient with that id in the database");
			}
			return Optional.of(ingredient);
	  }

	  @Override
	  public Optional<Ingredient> findByName(String name) throws ResourceNotFoundException{
			Ingredient ingredient;
			Optional<Ingredient> optionalIngredient = ingredientRepository.findByName(name);
			if (optionalIngredient.isPresent()){
				  ingredient = optionalIngredient.get();
			}else {
				  throw new ResourceNotFoundException("There's no ingredient with that id in the database");
			}
			return Optional.of(ingredient);
	  }
	  @Override
	  public Ingredient insertIngredient(Ingredient ingredient) throws ResourceAlreadyExistExeption {
			if(nameAlreadyInUse(ingredient.getName())){
				  throw new ResourceAlreadyExistExeption("An ingredient with that name already exists in the database");
			}
			return ingredientRepository.save(ingredient);
	  }
	  @Override
	  public List<Optional<Ingredient>> findAll() {
			List<Optional<Ingredient>> optionalList = new ArrayList<>();
			List<Ingredient> ingredientList = ingredientRepository.findAll();
			for(Ingredient i : ingredientList){
				  optionalList.add(Optional.of(i));
			}
			return optionalList;
	  }

		// UTILS



	  private boolean nameAlreadyInUse(String name){
			return ingredientRepository.findByName(name).isPresent();
	  }
}





