import httpService from './httpService';

export const getRecipes = async () => {
  try {
    const response = await httpService.get('/recipes');
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};
