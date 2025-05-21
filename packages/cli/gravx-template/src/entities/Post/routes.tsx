import Post from './Post';

import PostList from './components/PostList/PostList';
import PostView from './components/PostView/PostView';

const postRoutes = [
  {
    path: 'post',
    element: <Post />,
    children: [
      {
        index: true,
        element: <PostList />,
      },
      {
        path: ':id',
        element: <PostView />,
      },
      {
        path: 'edit/:id',
        element: <PostView isEditing />,
      },
    ],
  },
];

export default postRoutes;
