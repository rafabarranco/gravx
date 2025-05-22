import { createBrowserRouter } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';
import Welcome from '../../components/Welcome/Welcome';

import postRoutes from '../../entities/Post/routes';
import Building from '../../components/Building/Building';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      { index: true, element: <Welcome /> },
      { path: 'docs', element: <Building /> },
      ...postRoutes,
    ],
  },
]);

export default router;
