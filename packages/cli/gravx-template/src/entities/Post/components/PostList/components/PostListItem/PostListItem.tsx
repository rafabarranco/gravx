import type { FC } from 'react';
import { Link } from 'react-router-dom';

import type { IPostListItemProps } from './types';

const PostListItem: FC<IPostListItemProps> = ({ post }) => (
  <Link to={`/post/${post.id}`}>{post.title}</Link>
);

export default PostListItem;
