import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './Main.module.scss';

const Main: FC = () => (
  <main className={styles.Main} role="main">
    <Outlet />
  </main>
);

export default Main;
