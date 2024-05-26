import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from '@/pages/Home';
import { Auth } from '@/pages/Auth';
import { Login } from '@/components/LoginForm';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/register',
    element: <Auth />
  },
  {
    path: '/login',
    element: <Login />
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
