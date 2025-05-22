import type { IThemeState, TThemeMode } from './types';

const initialState: IThemeState = {
  mode: (localStorage.getItem('theme-mode') as TThemeMode) || 'dark',
};

export default initialState;
