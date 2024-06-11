import httpService from './httpService';

export const getCategories = async () => {
  try {
    const response = await httpService.get(`/api/v1/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const getCategoryByName = async (name) => {
  try {
    const response = await httpService.get(`/api/v1/categories/name/${name}`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching CategoryByName:', error);
    throw error;
  }
};
