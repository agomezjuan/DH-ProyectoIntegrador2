import axios from "axios";

const configLogin = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
};

export const loginRequest = async (data) => {
  try {
    const response = await axios.post(
      'http://localhost:8089/realms/proyecto-integrador/protocol/openid-connect/token',
      data,
      configLogin
    );
    console.log('Response:', response.data);
    return response.data; 
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const configRegister = {
  headers: {
    'Content-Type': 'application/json',
  }
};

    export const registerRequest = async (data) => {
      try {
        const response = await axios.post('http://localhost:8090/api/v1/users/register', data, configRegister);
        console.log('Response:', response.data);
        return response;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    };

