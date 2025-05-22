import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Post: FC = () => (
  <div role="region" aria-label="Post content">
    <Outlet />
  </div>
);

export default Post;
