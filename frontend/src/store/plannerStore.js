import { create } from 'zustand';
import http from '@/api/httpService';

export const usePlannerStore = create((set) => ({
  recipes: {
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: null,
    saturday: null,
    sunday: null
  },
  loading: false,

  // Acción asíncrona para cargar el planner
  fetchPlanner: async () => {
    try {
      set({ loading: true });
      const response = await http.get('/api/planner');
      if (response.status === 200) {
        set({ recipes: response.data });
      } else {
        throw new Error('Failed to fetch planner');
      }
    } catch (error) {
      console.error('Error fetching planner:', error);
    } finally {
      set({ loading: false });
    }
  },

  // Acción asíncrona para agregar una receta al planner
  addRecipe: async (day, recipe) => {
    try {
      const response = await http.post(`/api/planner/${day}`, recipe);
      if (response.status === 201) {
        set((state) => ({
          recipes: {
            ...state.recipes,
            [day]: response.data
          }
        }));
      } else {
        throw new Error('Failed to add recipe');
      }
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  }
}));
