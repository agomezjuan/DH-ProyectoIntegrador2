import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { RegisterPage } from '@/pages/RegisterPage';
import { LoginPage } from '@/pages/LoginPage';
import { Planner } from '@/pages/Planner';
import { ViewRecipe } from '@/pages/ViewRecipe';
import { SearchPage } from '@/pages/SearchPage/SearchPage';
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
    path: '/recipe/:recipeId',
    element: <ViewRecipe />
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
