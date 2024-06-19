import {create} from 'zustand';
import { getRecipes, getRecipeById } from '../api/recipes';

export const useRecipesStore = create((set) => ({
  recipes: [],
  detail: {},
  currentPage: 0,
  error: null,
  loading: false,

  fetchRecipes: async (page = 0, username) => {
    set({ loading: true, error: null });
    try {
      const recipes = await getRecipes(page, username);
      set({
        recipes,
        currentPage: page,
        loading: false
      });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  fetchRecipeById: async (id) => {
    set({ loading: true, error: null });
    try {
      const detail = await getRecipeById(id);
      set({ detail, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));
