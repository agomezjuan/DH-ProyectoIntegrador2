import {create} from 'zustand';
import { getRecipes, getRecipeById } from '../api/recipes';

export const useRecipesStore = create((set) => ({
  recipes: [],
  recipeId: "",
  detail: {},
  error: null,
  loading: false,

  fetchRecipes: async () => {
    set({ loading: true, error: null });
    try {
      const recipes = await getRecipes();
      set({ recipes, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  fetchRecipeById: async (recipeId) => {
    set({ loading: true, error: null });
    try {
      const detail = await getRecipeById(recipeId);
      set({ detail, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));
