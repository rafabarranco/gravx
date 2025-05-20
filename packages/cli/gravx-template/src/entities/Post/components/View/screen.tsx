import { type FC } from 'react';
import { useParams } from 'react-router-dom';

import { useView } from '@gravx/core';
import type { IPost } from '../../types';

const BASE_API_URL = 'https://jsonplaceholder.typicode.com/';

const View: FC = () => {
  const params = useParams();
  const { data: post } = useView<IPost>({ url: `${BASE_API_URL}posts/${params.id}` });

  if (!post) return <div>Loading...</div>;

  return <div>{post?.title}</div>;
};

export default View;
