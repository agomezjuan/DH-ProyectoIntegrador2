import httpService from './httpService';

export const getRecipes = async () => {
  try {
    const response = await httpService.get('/api/v1/recipes/pagination');
    return response.data.content;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export const getRecipeById = async (id) => {
  try {
    const response = await httpService.get(`/api/v1/recipes/${id}`);
    console.log('Detail', response.data)
    return response.data; 
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

