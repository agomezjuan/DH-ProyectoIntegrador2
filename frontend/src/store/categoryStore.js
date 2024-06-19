import {create} from 'zustand';
import { getCategories, getCategoryByName } from '../api/category';

export const useCategoriesStore = create((set) => ({
  categories: [],
  selectedCategory: null,
  error: null,
  load: false,

  fetchCategories: async () => {
    set({ load: true, error: null });
    try {
      const categories = await getCategories();
      set({ 
        categories,
        load: false 
      });
    } catch (error) {
      set({ error: error.message, load: false });
    }
  },
  fetchCategoryByName: async (name) => {
    set({ load: true, error: null });
    try {
      const categoryByName = await getCategoryByName(name);
      set({ categoryByName, load: false });
    } catch (error) {
      set({ error: error.message, load: false });
    }
  },
  setSelectedCategory: (category) => {
    set({ selectedCategory: category });
  },
}));
