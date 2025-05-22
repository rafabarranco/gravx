import { useCallback, useMemo, type FC } from 'react';
import { useView } from '@gravx/core';

import PostListItem from './components/PostListItem/PostListItem';

import type { IPost } from '../../types';

import styles from './PostList.module.scss';
import { useNavigate } from 'react-router-dom';

const PostList: FC = () => {
  const navigate = useNavigate();
  const baseAPIUrl = useMemo(() => 'https://jsonplaceholder.typicode.com/', []);

  const { data: posts, error, loading } = useView<IPost[]>({ url: `${baseAPIUrl}posts` });

  const handleOnClick = useCallback(
    (postId: number) => {
      navigate(`/post/${postId}`);
    },
    [navigate],
  );

  const renderPosts = useCallback(
    () =>
      posts &&
      posts.length > 0 && (
        <div className={styles.PostList}>
          {posts.map(post => (
            <div key={post.id} role="button" onClick={() => handleOnClick(post.id)}>
              <PostListItem post={post} />
            </div>
          ))}
        </div>
      ),
    [handleOnClick, posts],
  );

  if (loading) return <div>Loading...</div>;

  if (error) return <></>;

  if (!posts || posts?.length < 1) return <div>No posts found</div>;

  return renderPosts();
};

export default PostList;
