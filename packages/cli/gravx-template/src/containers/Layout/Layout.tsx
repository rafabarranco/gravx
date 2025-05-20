import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';

const Layout: FC = () => (
  <div className={styles.Layout}>
    <h1>GravX App</h1>
    <Outlet />
  </div>
);

export default Layout;
