import { useCallback } from 'react';
import type { ICreateProps, IUseCreateProps } from './types';
import useFetch from '../../hooks/fetch/useFetch';

const useCreate = <
  TResponse,
  TRequest extends object | BodyInit | null | undefined = Partial<TResponse>,
>({
  url,
  immediate = false,
}: IUseCreateProps) => {
  const { data, loading, error, execute } = useFetch<TResponse, TRequest>(url!, {
    method: 'POST',
    immediate,
  });

  const create = useCallback(
    ({ url, body }: ICreateProps<TRequest>): Promise<TResponse | undefined> => {
      return execute({
        url,
        method: 'POST',
        body,
      });
    },
    [execute],
  );

  return { data, loading, error, create };
};

export default useCreate;
