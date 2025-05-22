import { type FC, useEffect } from 'react';

import useTheme from '../../store/theme/useTheme';

import HeaderTitle from './components/HeaderTitle/HeaderTitle';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

import styles from './Header.module.scss';

const Header: FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <header className={styles.Header} role="banner" aria-label="Site header">
      <HeaderTitle />
      <ThemeToggle />
    </header>
  );
};

export default Header;
