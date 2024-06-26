import { Home } from '@/pages/Home';
import { RegisterPage } from '@/pages/RegisterPage';
import { LoginPage } from '@/pages/LoginPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ViewRecipe } from '@/pages/ViewRecipe';
import { SearchPage } from './pages/SearchPage/SearchPage';
import { UserProfile } from './pages/UserProfile';
import { PasswordReset } from './pages/PasswordReset';
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
    path: '/user/:id',
    element: <UserProfile />
  },
  {
    path: '/change-password',
    element: <PasswordReset />
  },
  {
    path: '*',
    element: (
      <div className='flex items-center justify-center h-full mt-40 text-2xl'>
        Página no encontrada
      </div>
    )
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
