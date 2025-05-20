export type IUseUpdateProps =
  | { url: string; immediate: true }
  | { url?: string; immediate?: false };

export interface IUpdateProps<TRequest> {
  body: TRequest;
  method: 'PUT' | 'PATCH';
  url: string;
}
