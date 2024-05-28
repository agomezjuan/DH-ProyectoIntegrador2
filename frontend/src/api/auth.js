import axios from "../libs/axios";

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
};

export const loginRequest = async (data) =>
  axios
    .post(
      'http://localhost:8089/realms/proyecto-integrador/protocol/openid-connect/token',
      data,
      config
    )
    .then((response) => {
      console.log('Response:', response.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    export const registerRequest = async (data) => {
      try {
        const response = await axios.post('http://localhost:8090/api/v1/users/register', data);
        console.log('Response:', response.data);
        return response;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    };

