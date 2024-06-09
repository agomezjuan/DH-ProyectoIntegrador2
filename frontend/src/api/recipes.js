import httpService from './httpService';

export const getRecipes = async () => {
  try {
    const response = await httpService.get('http://localhost:8080/recipes/pagination?page=0');
    return response.content;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

// import axios from 'axios';

// export const getRecipes = async () => {
//   try {
//     const response = await axios.get('http://localhost:8080/recipes/pagination?page=0');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching recipes:', error);
//     throw error;
//   }
// };
