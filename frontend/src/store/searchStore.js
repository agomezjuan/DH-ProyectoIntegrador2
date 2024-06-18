import { create } from 'zustand';
import { getRecipes } from '@/api/httpService';

const normalizeText = (text) => {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
};


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
        const normalizedQuery = normalizeText(query.trim());
        const recipes = response.data.filter((recipe) =>
          normalizeText(recipe.recipe.name).includes(normalizedQuery)
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
