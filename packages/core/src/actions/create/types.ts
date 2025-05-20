export type IUseCreateProps =
  | { url: string; immediate: true; method?: 'POST' }
  | { url?: string; immediate?: false; method?: 'POST' };

export interface ICreateProps<TRequest> {
  url: string;
  body: TRequest;
}
