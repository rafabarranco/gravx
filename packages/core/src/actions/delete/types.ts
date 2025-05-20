export type IUseDeleteProps =
  | { url: string; immediate: true }
  | { url?: string; immediate?: false };

export interface IRemoveProps {
  url: string;
}
