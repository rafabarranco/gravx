import { useCallback, type FC } from 'react';
import classNames from 'classnames';

import useTheme from '../../store/theme/useTheme';

import type { ThemeToggleProps } from './types';

import styles from './ThemeToggle.module.scss';

const ThemeToggle: FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  const icons = {
    light: { default: '☀️', hover: '🌖' },
    dark: { default: '🌖', hover: '☀️' },
  };

  const { default: icon, hover: hoverIcon } = icons[theme];

  const handleToggle = useCallback(() => {
    toggleTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, toggleTheme]);

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle theme"
      className={classNames(styles.ThemeToggle, className)}
    >
      <span className={styles.IconDefault}>{icon}</span>
      <span className={styles.IconHover}>{hoverIcon}</span>
    </button>
  );
};

export default ThemeToggle;
