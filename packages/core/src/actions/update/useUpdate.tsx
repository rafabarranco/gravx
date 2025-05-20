import { useCallback } from 'react';
import useFetch from '../../hooks/fetch/useFetch';
import type { IUpdateProps, IUseUpdateProps } from './types';

function useUpdate<
  TResponse,
  TRequest extends object | BodyInit | null | undefined = Partial<TResponse>,
>({ url, immediate = false }: IUseUpdateProps) {
  const { data, loading, error, execute } = useFetch<TResponse, TRequest>(url, {
    method: 'PUT',
    immediate,
  });

  const update = useCallback(
    ({ body, method = 'PUT', url }: IUpdateProps<TRequest>) => {
      return execute({
        url,
        method,
        body,
      });
    },
    [execute],
  );

  return { data, loading, error, update };
}

export default useUpdate;
