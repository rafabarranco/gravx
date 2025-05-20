import { TRequestMethod } from '../../hooks/fetch/types';

export interface IUseViewResult<T> {
  data: T | undefined;
  loading: boolean;
  error: unknown;
  view: ({ url }: IViewProps) => Promise<T | undefined>;
}

export type IUseViewProps = { url: string; immediate: true } | { url?: string; immediate?: false };

export interface IViewProps {
  url: string;
}
