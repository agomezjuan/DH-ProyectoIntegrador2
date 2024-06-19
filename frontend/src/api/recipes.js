import httpService from './httpService';

export const getRecipes = async (page = 0, username) => {
  try {
    const response = await httpService.get(`/api/v1/recipes/pagination?page=${page}&username=${username}`);
    return response.data.content;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export const getRecipeById = async (id) => {
  try {
    const response = await httpService.get(`/api/v1/recipes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

