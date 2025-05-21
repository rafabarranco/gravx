import { useCallback, type FC } from 'react';
import { useView } from '@gravx/core';

import type { IPost } from '../../types';
import PostListItem from './components/PostListItem/PostListItem';

const BASE_API_URL = 'https://jsonplaceholder.typicode.com/';

const PostList: FC = () => {
  const { data: posts, error, loading } = useView<IPost[]>({ url: `${BASE_API_URL}posts` });

  const renderPosts = useCallback(
    () =>
      posts &&
      posts.length > 0 && (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <PostListItem post={post} />
            </li>
          ))}
        </ul>
      ),
    [posts],
  );

  if (loading) return <div>Loading...</div>;

  if (error) return <></>;

  if (!posts || posts?.length < 1) return <div>No posts found</div>;

  return renderPosts();
};

export default PostList;
