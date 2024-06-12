import { create } from 'zustand';
import { getRecipes } from '@/api/httpService';

export const useSearchStore = create((set) => ({
  searchText: '',
  results: [],
  loading: false,

  // Acción asíncrona para buscar recetas
  searchRecipes: async (query) => {
    try {
      set({ loading: true, searchText: query.trim() });

      const response = await getRecipes();
      console.log('response', response);
      if (response.status === 200) {
        const recipes = response.data.filter((recipe) =>
          recipe.recipe.name.toLowerCase().includes(query.trim().toLowerCase())
        );
        console.log('recipes', recipes);
        set({
          results: recipes
        });
      } else {
        throw new Error('Failed to search recipes');
      }
    } catch (error) {
      console.error('Error searching recipes:', error);
    } finally {
      set({ loading: false });
    }
  }
}));
