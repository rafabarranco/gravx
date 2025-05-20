import { useCallback } from 'react';
import useFetch from '../../hooks/fetch/useFetch';
import type { IUseViewProps, IUseViewResult, IViewProps } from './types';

const useView = <T,>({ url, immediate = true }: IUseViewProps): IUseViewResult<T> => {
  const { data, loading, error, execute } = useFetch<T>(url, {
    method: 'GET',
    immediate,
  });

  const view = useCallback(
    async ({ url }: IViewProps): Promise<T | undefined> => {
      return await execute({ url, method: 'GET' });
    },
    [execute],
  );

  return { data, loading, error, view };
};

export default useView;
