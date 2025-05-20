import { useCallback } from 'react';
import useFetch from '../../hooks/fetch/useFetch';
import type { IRemoveProps, IUseDeleteProps } from './types';

function useDelete<TResponse = null>({ url, immediate = false }: IUseDeleteProps) {
  const { data, loading, error, execute } = useFetch<TResponse>(url, {
    method: 'DELETE',
    immediate,
  });

  const remove = useCallback(
    ({ url }: IRemoveProps) => {
      return execute({ method: 'DELETE', url });
    },
    [execute],
  );

  return { data, loading, error, remove };
}

export default useDelete;
