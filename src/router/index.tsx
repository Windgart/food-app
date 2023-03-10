import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, ErrorPage, Orders, MealsMenu, Favorites } from '@/pages';
import { ROUTES } from '@/utils/constants';

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />,
  },
  {
    path: ROUTES.menu,
    element: <MealsMenu />,
  },
  {
    path: ROUTES.myOrders,
    element: <Orders />,
  },
  {
    path: ROUTES.myFavorites,
    element: <Favorites />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
