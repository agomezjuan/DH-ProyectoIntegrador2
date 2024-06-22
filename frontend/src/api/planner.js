import httpService from './httpService';

export const BASE_URL = '/api/v1/planner';

export const getPlanner = async (token) => {
  try {
    const response = await httpService.get(`${BASE_URL}/userid`, {
      headers: "Authorization: Bearer "+token
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching planner: '+error);
    throw error;
  }
};

export const downloadReport = async (token, userid) => {
  try {
    const response = await httpService.get(`${BASE_URL}/getcsv`, {
      headers: "Authorization: Bearer "+token,
      params: {
        "idUser": userid
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error download report: ' + error);
    throw error;
  }
};

export const deletePlannerByUser = async (token) => {
  try {
    const response = await httpService.delete(`${BASE_URL}/byUserId`,{
      headers: "Authorization: Bearer "+token
    });
    return response;
  } catch (error) {
    console.error(`Error deleting planner: `, error);
    throw error;
  }
};

export const savePlanner = async (token, planner) => {
  try {
    const response = await httpService.post(`${BASE_URL}`, {
      planner
    }, {
      headers: "Authorization: Bearer "+token
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching save planner: '+error);
    throw error;
  }
};

export default {savePlanner, downloadReport, deletePlannerByUser, getPlanner};
