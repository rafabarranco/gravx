import { useCallback, useMemo, type FC } from 'react';
import { useParams } from 'react-router-dom';
import { useView } from '@gravx/core';

import type { IPost } from '../../types';
import type { IPostViewProps } from './types';

const PostView: FC<IPostViewProps> = ({ isEditing = false }) => {
  const baseApiUrl = useMemo(() => 'https://jsonplaceholder.typicode.com/', []);
  const params = useParams();

  const { data: post } = useView<IPost>({ url: `${baseApiUrl}posts/${params.id}` });

  const renderEdit = useCallback(
    () => <div>This is the EDIT mode of the Post {post?.title}</div>,
    [post?.title],
  );

  const renderView = useCallback(
    () => <div>This is the VIEW mode of the Post {post?.title}</div>,
    [post?.title],
  );

  if (!post) return <div>Loading...</div>;

  return isEditing ? renderEdit() : renderView();
};

export default PostView;
