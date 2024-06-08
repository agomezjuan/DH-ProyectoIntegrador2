package com.example.pi2.controller;

import com.example.pi2.domain.CategoryWithRecipeDto;
import com.example.pi2.model.Category;
import com.example.pi2.service.CategoryService;
import com.example.pi2.service.DtoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private DtoMapper mapper;

    @GetMapping
    public List<CategoryWithRecipeDto> getAllCategories() {
        return categoryService.findAll().stream().map(mapper::toFullCategoryDto).toList();
    }

    @GetMapping("/{id}")
    public CategoryWithRecipeDto getCategoryById(@PathVariable Integer id) {
        return mapper.toFullCategoryDto(categoryService.findById(id));
    }

    @GetMapping("/name/{name}")
    public CategoryWithRecipeDto getCategoryByName(@PathVariable String name) {
        return mapper.toFullCategoryDto(categoryService.findByName(name));
    }
    @PostMapping
    public CategoryWithRecipeDto createCategory(@RequestBody Category category) {
        return mapper.toFullCategoryDto(categoryService.save(category));
    }

    @PutMapping("/{id}")
    public CategoryWithRecipeDto updateCategory(@PathVariable Integer id, @RequestBody Category category) {
        Category existingCategory = categoryService.findById(id);
        if (existingCategory != null) {
            existingCategory.setName(category.getName());
//            existingCategory.setRecipe(category.getRecipe());
            return mapper.toFullCategoryDto(categoryService.save(existingCategory));
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteCategory(@PathVariable Integer id) {
        categoryService.deleteById(id);
    }
}
