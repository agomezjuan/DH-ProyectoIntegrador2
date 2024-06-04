package com.example.pi2.service;

import com.example.pi2.exceptions.ResourceNotFoundException;
import com.example.pi2.model.Category;
import com.example.pi2.model.CategoryXRecipe;
import com.example.pi2.model.Recipe;
import com.example.pi2.repository.CategoryXRecipeRepository;
import com.example.pi2.repository.RecipeRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class RecipeServiceTest {
    private static final Integer ID = 1;
    private static final String TEST = "Test";
    @Mock
    private RecipeRepository recipeRepository;
    @Mock
    private CategoryXRecipeRepository categoryXRecipeRepository;
    @Mock
    private CategoryService categoryService;
    @InjectMocks
    @Spy
    private RecipeService service;

    @Test
    void testGetRecipeById() throws ResourceNotFoundException {
        when(recipeRepository.findById(anyInt())).thenReturn(Optional.of(arrangeRecipe()));
        Recipe recipe = service.getRecipeById(ID);
        Assertions.assertNotNull(recipe);
    }

    @Test
    void testGetRecipeByIdNotFound() {
        when(recipeRepository.findById(anyInt())).thenReturn(Optional.empty());
        Assertions.assertThrows(ResourceNotFoundException.class, () -> service.getRecipeById(ID));
    }

    @Test
    void testGetRecipeByName() throws ResourceNotFoundException {
        when(recipeRepository.findByName(anyString())).thenReturn(Optional.of(arrangeRecipe()));
        Recipe recipe = service.getRecipeByName(TEST);
        Assertions.assertNotNull(recipe);
    }

    @Test
    void testGetRecipeByNameNotFound() {
        when(recipeRepository.findByName(anyString())).thenReturn(Optional.empty());
        Assertions.assertThrows(ResourceNotFoundException.class, () -> service.getRecipeByName(TEST));
    }

    @Test
    void testGetRecipeByNameWithCategory() throws ResourceNotFoundException {
        when(recipeRepository.findByNameWithCategory(anyString())).thenReturn(Optional.of(arrangeRecipe()));
        Recipe recipe = service.getRecipeByNameWithCategory(TEST);
        Assertions.assertNotNull(recipe);
    }

    @Test
    void testGetRecipeByNameWithCategoryNotFound() {
        when(recipeRepository.findByNameWithCategory(anyString())).thenReturn(Optional.empty());
        Assertions.assertThrows(ResourceNotFoundException.class, () -> service.getRecipeByNameWithCategory(TEST));
    }

    @Test
    void testAssociateCategories() throws ResourceNotFoundException {
        when(recipeRepository.findById(anyInt())).thenReturn(Optional.of(arrangeRecipe()));
        when(categoryService.findByName(anyString())).thenReturn(arrangeCategory());
        doReturn(List.of(arrangeCategoryXService())).when(categoryXRecipeRepository).saveAll(anyList());

        service.associateCategories(ID, List.of("Soup"));
        verify(categoryXRecipeRepository).saveAll(anyList());
    }

    @Test
    void testAssociateCategoriesNoMatch() {
        when(recipeRepository.findById(anyInt())).thenReturn(Optional.of(arrangeRecipe()));
        when(categoryService.findByName(anyString())).thenReturn(null);

        Assertions.assertThrows(ResourceNotFoundException.class, () -> service.associateCategories(ID, List.of("Soup")));
    }

    @Test
    void testRemoveCategories() throws ResourceNotFoundException {
        when(recipeRepository.findById(anyInt())).thenReturn(Optional.of(arrangeRecipe()));
        when(categoryService.findByName(anyString())).thenReturn(arrangeCategory());
        when(categoryXRecipeRepository.findByRecipeAndCategory(any(), any())).thenReturn(Optional.of(arrangeCategoryXService()));
        doNothing().when(categoryXRecipeRepository).deleteAll(anyList());

        service.removeCategories(ID, List.of("Soup"));
        verify(categoryXRecipeRepository).deleteAll(anyList());
    }

    @Test
    void testRemoveCategoriesNoMatchByCategoryName() {
        when(recipeRepository.findById(anyInt())).thenReturn(Optional.of(arrangeRecipe()));
        when(categoryService.findByName(anyString())).thenReturn(null);

        Assertions.assertThrows(ResourceNotFoundException.class, () -> service.removeCategories(ID, List.of("Soup")));
    }

    @Test
    void testRemoveCategoriesNoMatchByCxR() throws ResourceNotFoundException {
        when(recipeRepository.findById(anyInt())).thenReturn(Optional.of(arrangeRecipe()));
        when(categoryService.findByName(anyString())).thenReturn(arrangeCategory());
        when(categoryXRecipeRepository.findByRecipeAndCategory(any(), any())).thenReturn(Optional.empty());

        Assertions.assertThrows(ResourceNotFoundException.class, () -> service.removeCategories(ID, List.of("Soup")));
    }

    private Recipe arrangeRecipe() {
        Recipe r = new Recipe();
        r.setId(ID);
        r.setName(TEST);
        return r;
    }

    private Category arrangeCategory() {
        Category c = new Category();
        c.setId(2);
        c.setName("Soup");
        return c;
    }

    private CategoryXRecipe arrangeCategoryXService() {
        CategoryXRecipe cxr = new CategoryXRecipe();
        cxr.setId(3);
        cxr.setRecipe(arrangeRecipe());
        cxr.setCategory(arrangeCategory());
        return cxr;
    }
}
