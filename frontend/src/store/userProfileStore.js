import { create } from 'zustand';
import http from '@/api/httpService';

export const useUserProfileStore = create((set) => ({
  userData: {
    firstName: '',
    lastName: '',
    email: ''
  },
  favoriteRecipes: [],
  planner: {
    sunday: { id: 'sunday' },
    monday: { id: 'monday' },
    tuesday: { id: 'tuesday' },
    wednesday: { id: 'wednesday' },
    thursday: { id: 'thursday' },
    friday: { id: 'friday' },
    saturday: { id: 'saturday' }
  },

  // Acción para actualizar los datos del usuario
  updateUserData: (newData) =>
    set((state) => ({
      userData: {
        ...state.userData,
        ...newData
      }
    })),

  // Acción asíncrona para agregar una receta a favoritos
  addFavoriteRecipe: async (recipe) => {
    try {
      // Asumiendo que tienes una API que acepta POST a /api/favorites
      const response = await http.post('/api/favorites', recipe);
      if (response.status === 200) {
        // Actualizar el estado solo si la respuesta es exitosa
        set((state) => ({
          favoriteRecipes: [...state.favoriteRecipes, response.data]
        }));
      } else {
        throw new Error('Failed to add recipe');
      }
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  },

  // Acción asíncrona para eliminar una receta de favoritos
  removeFavoriteRecipe: async (recipeId) => {
    try {
      const response = await http.delete(`/api/favorites/${recipeId}`);
      if (response.status === 200) {
        set((state) => ({
          favoriteRecipes: state.favoriteRecipes.filter(
            (recipe) => recipe.id !== recipeId
          )
        }));
      } else {
        throw new Error('Failed to remove recipe');
      }
    } catch (error) {
      console.error('Error removing recipe:', error);
    }
  },

  fetchFavoriteRecipes: async (token, username) => {
    try {
      const favorites = await http.get(`/api/favorites/?username=${username}`);
      set({ favoriteRecipes: favorites });
    } catch (error) {
      console.error('Error fetching favorite recipes:', error);
    }
  },

  // Acción asíncrona para obtener el planner
  fetchPlanner: async () => {
    try {
      const response = await http.get('/api/planner');
      if (response.status === 200) {
        set({ planner: response.data });
      } else {
        throw new Error('Failed to fetch planner');
      }
    } catch (error) {
      console.error('Error fetching planner:', error);
    }
  },

  // Accion para actualizar el planner
  addRecipeToPlanner: (day, recipe) => {
    set((state) => ({
      planner: {
        ...state.planner,
        [day]: { ...recipe, id: day, recipeId: recipe.id }
      }
    }));
  }
}));

export default useUserProfileStore;
