import httpService from './httpService';

export const BASE_URL = '/api/v1/favorites';

export const getFavorites = async (token, username) => {
  try {
    const response = await httpService.get(`${BASE_URL}?username=${username}`, {
      headers: "Authorization: Bearer "+token
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching favorites for user: '+username, error);
    throw error;
  }
};

export const deleteFavorite = async (token, id) => {
  try {
    const response = await httpService.delete(`${BASE_URL}/${id}`, {
      headers: "Authorization: Bearer "+token
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting favorite: ' + id, error);
    throw error;
  }
};

export const deleteFavoriteByUser = async (token, username, recipeId) => {
  try {
    const response = await httpService.delete(`${BASE_URL}/user?username=${username}&id=${recipeId}`,{
      headers: "Authorization: Bearer "+token
    });
    return response.data;
  } catch (error) {
    console.error(`Error deleting favorite recipe: ${recipeId} for user: ${username}`, error);
    throw error;
  }
};

export const saveFavorite = async (token, username, recipeId) => {
  try {
    const response = await httpService.post(`${BASE_URL}`, {
      "username": username,
      "recipeId": recipeId
    }, {
      headers: "Authorization: Bearer "+token
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching favorites for user: '+username, error);
    throw error;
  }
};

export default {saveFavorite, deleteFavorite, deleteFavoriteByUser, getFavorites};
