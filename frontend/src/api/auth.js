import http from './httpService';
import { loginService } from './httpService';

const USERS_BASE_URL = 'api/v1/users'

export const loginRequest = async (data) => {
  try {
    const response = await loginService.post(`${USERS_BASE_URL}/login`,data);
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const registerRequest = async (data) => {
  try {
    const response = await http.post(`${USERS_BASE_URL}/register`, data);
    console.log('Response:', response.data);
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const resetPasswordRequest = async (data) => {
  try {
    const response = await http.post(`${USERS_BASE_URL}/reset`, data) 
    console.log('Response:', response.data);
    return response;
  } catch (error) {
    if (error.response && error.response.status === 409) {
      return false; 
    }
    console.error('Error:', error);
    throw error;
  }
};

export const updateUserDataRequest = async (data, token) => {
  try {
    const response = await http.put(`${USERS_BASE_URL}/profile`, data, {
      headers: 'Authorization: Bearer '+ token
    } );
    console.log('Response:', response.data);
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};


