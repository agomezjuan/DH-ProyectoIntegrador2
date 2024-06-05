import axios from "axios";

const configLogin = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  }
};



export const loginRequest = async (data) => {
  const formBody = Object.keys(data).map(key => 
    encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
  ).join('&');
  try {
    const response = await axios.post(
      'http://localhost:8089/realms/proyecto-integrador/protocol/openid-connect/token',
      formBody,
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
        const response = await axios.post('http://localhost:56499/users/register', data, configRegister);
        console.log('Response:', response.data);
        return response;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    };

