import { Home } from '@/pages/Home';
import { RegisterPage } from '@/pages/RegisterPage';
import { LoginPage } from '@/pages/LoginPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ViewRecipe } from '@/pages/ViewRecipe';
import { SearchPage } from './pages/SearchPage/SearchPage';
import { PlannerDnD } from './pages/Planner';
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
    path: '/search/:searchText',
    element: <SearchPage />
  },
  {
    path: '/recipe/:id',
    element: <ViewRecipe />
  },
  {
    path: '/planner',
    element: <PlannerDnD />
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
