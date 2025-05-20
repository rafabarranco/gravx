import { useState, useEffect, useCallback } from 'react';
import type { IFetchOptions, IUseFetchResult } from './types';

const normalizeHeaders = (headers: HeadersInit = {}): Record<string, string> => {
  if (headers instanceof Headers) {
    const result: Record<string, string> = {};
    headers.forEach((value, key) => {
      result[key] = value;
    });
    return result;
  }

  if (Array.isArray(headers)) {
    return Object.fromEntries(headers);
  }

  return { ...headers };
};

const useFetch = <
  TResponse = unknown,
  TRequest extends BodyInit | object | null | undefined = object | null,
>(
  url?: string,
  options: IFetchOptions<TRequest> = {},
): IUseFetchResult<TResponse, TRequest> => {
  const { method = 'GET', body = undefined, headers = {}, immediate = true, ...rest } = options;

  const [data, setData] = useState<TResponse>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  const execute = useCallback(
    async (overrideOptions?: IFetchOptions<TRequest>): Promise<TResponse | undefined> => {
      setLoading(true);
      setError(undefined);

      try {
        const finalMethod = overrideOptions?.method || method;
        const finalBody = overrideOptions?.body ?? body;

        const baseHeaders = normalizeHeaders(headers);
        const overrideHeaders = normalizeHeaders(overrideOptions?.headers);
        const finalHeaders = { ...baseHeaders, ...overrideHeaders };

        let preparedBody: BodyInit | null | undefined = undefined;

        if (finalBody && finalMethod !== 'GET' && finalMethod !== 'HEAD') {
          if (
            finalBody instanceof FormData ||
            finalBody instanceof URLSearchParams ||
            finalBody instanceof Blob
          ) {
            preparedBody = finalBody as BodyInit;
          } else if (typeof finalBody === 'string') {
            preparedBody = finalBody;
          } else {
            preparedBody = JSON.stringify(finalBody);
            if (!finalHeaders['Content-Type']) {
              finalHeaders['Content-Type'] = 'application/json';
            }
          }
        }

        const fetchOptions: RequestInit = {
          method: finalMethod,
          headers: finalHeaders,
          body: preparedBody,
          ...rest,
        };

        const response = await fetch(url ? url : overrideOptions?.url as string, fetchOptions);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get('Content-Type');
        const parsedData =
          contentType && contentType.includes('application/json')
            ? await response.json()
            : await response.text();

        setData(parsedData as TResponse);
        return parsedData as TResponse;
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [url, method],
  );

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { data, loading, error, execute };
};

export default useFetch;
