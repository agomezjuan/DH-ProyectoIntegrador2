import {create} from 'zustand';
import { getRecipes } from '../api/recipes';

export const useRecipesStore = create((set) => ({
  recipes: [],
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
}));
