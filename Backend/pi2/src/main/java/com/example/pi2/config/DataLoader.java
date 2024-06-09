package com.example.pi2.config;

import com.example.pi2.exceptions.ResourceAlreadyExistExeption;
import com.example.pi2.exceptions.ResourceNotFoundException;
import com.example.pi2.model.Category;
import com.example.pi2.model.Recipe;
import com.example.pi2.service.CategoryService;
import com.example.pi2.service.RecipeService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.List;

@Slf4j
@Component
public class DataLoader {

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    RecipeService recipeService;

    @Autowired
    CategoryService categoryService;

    @EventListener
    public void onApplicationEvent(ContextRefreshedEvent event) throws IOException {
        PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
        Resource[] recipes = resolver.getResources("recipes/*.json");
        for (Resource r : recipes) {
            Category category = getCategory(r);
            handleRecipeCreation(r, category);
        }
    }

    private void handleRecipeCreation(Resource r, Category category) throws IOException {
        List<Recipe> listOfRecipes = objectMapper.readValue(r.getInputStream(), new TypeReference<>() {
        });
        for (Recipe recipe : listOfRecipes) {
            try {
                recipe = recipeService.createRecipe(recipe);
                recipeService.associateCategories(recipe.getId(), List.of(category.getName()));
            } catch (ResourceNotFoundException |ResourceAlreadyExistExeption e) {
                log.info("Skipping...");
            }
        }
    }

    private Category getCategory(Resource r) {
        String categoryName = r.getFilename().split("-")[1].toUpperCase();
        categoryName = categoryName.substring(0, categoryName.lastIndexOf("."));
        Category category = categoryService.findByName(categoryName);
        if(category == null) {
            category = new Category();
            category.setName(categoryName);
            category.setUrlImg(CategoryImgs.valueOf(categoryName).getUrl());
            categoryService.save(category);
        }
        return category;
    }


}

@Getter
@AllArgsConstructor
enum CategoryImgs {
    CARNE("https://thefoodtech.com/wp-content/uploads/2020/05/carne-de-res.jpg"),
    CERDO("https://comecarne.org/wp-content/uploads/2017/11/cosas-que-no-sabias-cerdo-700x300.jpg"),
    PASTAS("https://hips.hearstapps.com/hmg-prod/images/pasta-seca-elle-gourmet-65116a334e827.jpg?crop=0.668xw:1.00xh;0.278xw,0&resize=640:*"),
    PATATAS("https://img2.rtve.es/i/?w=1600&i=1680518974198.jpg"),
    POLLO("https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/BF5ZMLR24NHKJHJJ3L23WDFF7Q.jpg"),
    SALMON("https://www.eluniversal.com.mx/resizer/rJN_FK1BZxLyzw5dq868B2SksYQ=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/JLFCNMIZVFHV7AGB6AG2XG3AGQ.jpg");

    private String url;
}
