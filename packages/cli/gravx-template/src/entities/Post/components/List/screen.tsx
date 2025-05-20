import { useCallback, type FC } from 'react';
import { Link } from 'react-router-dom';
import { useView } from '@gravx/core';

import type { IPost } from '../../types';

const BASE_API_URL = 'https://jsonplaceholder.typicode.com/';

const List: FC = () => {
  const { data: posts, error, loading } = useView<IPost[]>({ url: `${BASE_API_URL}posts` });

  const renderPosts = useCallback(
    () =>
      posts &&
      posts.length > 0 && (
        <ul>
          {posts.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/post/${id}`}>{title}</Link>
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

export default List;
