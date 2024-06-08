import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from '@/pages/Home';
import { RegisterPage } from '@/pages/RegisterPage';
import { LoginPage } from '@/pages/LoginPage';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ViewRecipe } from '@/pages/ViewRecipe/ViewRecipe';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/recipe',
    element: <ViewRecipe />
  },
  {
    path: '*',
    element: <div>Página no encontrada</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
