import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, ErrorPage } from '@/pages';
import { ROUTES } from '@/utils/constants';

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />,
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
