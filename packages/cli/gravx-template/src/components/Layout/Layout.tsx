import type { FC } from 'react';

import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const Layout: FC = () => (
  <div className={styles.Layout}>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default Layout;
