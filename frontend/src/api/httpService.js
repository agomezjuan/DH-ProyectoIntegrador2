import axios from 'axios';
import { fetchRecipes as fetchMockRecipes } from '@/mocks/recipeMock';

const httpService = axios.create({
  baseURL: import.meta.env.VITE_GATEWAY_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const loginService = axios.create({
  baseURL: import.meta.env.VITE_GATEWAY_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default httpService;

// Request interceptor (Outgoing)
httpService.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (config.url === '/api/mock/recipes') {
      return fetchMockRecipes().then((data) => {
        return {
          ...config,
          adapter: () => Promise.resolve({ data: data, status: 200 })
        };
      });
    }

    // Request authorization
    const session = localStorage.getItem('auth');
    const token = session && JSON.parse(session).state.token;

    console.log('Token:', token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Request error
    return Promise.reject(error);
  }
);

// Response interceptor (Incoming) - Optional
httpService.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    if (response.data && Array.isArray(response.data)) {
      return Promise.resolve({ ...response, data: response.data });
    }

    // Response data
    console.log('Interceptor Response (Incoming) ', response);

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger

    // Do something with response error
    return Promise.reject(error);
  }
);

export const getRecipes = () => {
  return httpService.get('/api/v1/recipes');
};
