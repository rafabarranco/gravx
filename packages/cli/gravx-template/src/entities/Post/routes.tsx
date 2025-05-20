import Post from './screen';

import List from './components/List/screen';
import View from './components/View/screen';

const postRoutes = [
  {
    path: 'post',
    element: <Post />,
    children: [
      {
        index: true,
        element: <List />,
      },
      {
        path: ':id',
        element: <View />,
      },
    ],
  },
];

export default postRoutes;
