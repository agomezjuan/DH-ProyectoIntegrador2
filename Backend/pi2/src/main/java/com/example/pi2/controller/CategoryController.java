package com.example.pi2.controller;

import com.example.pi2.domain.CategoryDto;
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

    private CategoryDto mapResponseToDto(Category category) {
        return mapper.toCategoryDto(category, true);
    }

    @GetMapping
    public List<CategoryDto> getAllCategories() {
        return categoryService.findAll().stream().map(this::mapResponseToDto).toList();
    }

    @GetMapping("/{id}")
    public CategoryDto getCategoryById(@PathVariable Integer id) {
        return mapResponseToDto(categoryService.findById(id));
    }

    @GetMapping("/name/{name}")
    public CategoryDto getCategoryByName(@PathVariable String name) {
        return mapResponseToDto(categoryService.findByName(name));
    }
    @PostMapping
    public CategoryDto createCategory(@RequestBody Category category) {
        return mapResponseToDto(categoryService.save(category));
    }

    @PutMapping("/{id}")
    public CategoryDto updateCategory(@PathVariable Integer id, @RequestBody Category category) {
        Category existingCategory = categoryService.findById(id);
        if (existingCategory != null) {
            existingCategory.setName(category.getName());
//            existingCategory.setRecipe(category.getRecipe());
            return mapResponseToDto(categoryService.save(existingCategory));
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteCategory(@PathVariable Integer id) {
        categoryService.deleteById(id);
    }
}
