import { Home } from '@/pages/Home';
import { RegisterPage } from '@/pages/RegisterPage';
import { LoginPage } from '@/pages/LoginPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Planner } from './pages/Planner';

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
    path: '/planner',
    element: <Planner />
  },
  {
    path: '*',
    element: <div>Página no encontrada</div>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
