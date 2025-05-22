import type { FC } from 'react';

import type { IPostListItemProps } from './types';

import styles from './PostlistItem.module.scss';

const PostListItem: FC<IPostListItemProps> = ({ post }) => (
  <div className={styles.PostListItem}>{post.title}</div>
);

export default PostListItem;
