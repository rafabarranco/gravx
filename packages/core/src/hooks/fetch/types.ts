export type TRequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD';

export interface IFetchOptions<
  TRequest extends BodyInit | object | null | undefined = object | null,
> extends Omit<RequestInit, 'body' | 'headers'> {
  method?: TRequestMethod;
  body?: TRequest;
  headers?: HeadersInit;
  immediate?: boolean;
  url?: string;
}

export interface IUseFetchResult<
  TResponse,
  TRequest extends BodyInit | object | null | undefined = object | null,
> {
  data?: TResponse;
  loading: boolean;
  error?: Error;
  execute: (overrideOptions?: IFetchOptions<TRequest>) => Promise<TResponse | undefined>;
}
