import http from './httpService';
import { loginService } from './httpService';

export const loginRequest = async (data) => {
  const formBody = Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

  try {
    const response = await loginService.post(
      '/api/v1/users/login',
      data
    );

    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const registerRequest = async (data) => {
  try {
    const response = await http.post('/api/v1/users/register', data);
    console.log('Response:', response.data);
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
