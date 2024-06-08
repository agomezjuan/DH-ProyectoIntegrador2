// import httpService from './httpService';

// export const getRecipes = async () => {
//   try {
//     const response = await httpService.get('/recipes');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching recipes:', error);
//     throw error;
//   }
// };

import axios from 'axios';

export const getRecipes = async () => {
  try {
    const response = await axios.get('http://localhost:8090/api/v1/recipes');
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};
