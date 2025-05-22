import { useCallback } from 'react';
import type { RootState } from '../../core/redux/store';
import { useAppDispatch, useAppSelector } from '../../core/redux/useRedux';
import { setTheme } from './store';
import type { TThemeMode } from './types';

const useTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state: RootState) => state.theme);

  const toggleTheme = useCallback(
    (theme: TThemeMode) => {
      dispatch(setTheme(theme));
    },
    [dispatch],
  );

  return { theme: theme.mode, toggleTheme };
};

export default useTheme;
