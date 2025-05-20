import { createBrowserRouter } from 'react-router-dom';

import Layout from '../../containers/Layout/Layout';

import postRoutes from '../../entities/Post/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [...postRoutes],
  },
]);
export default router;
