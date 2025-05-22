import type { FC } from 'react';

import styles from './Footer.module.scss';

const Footer: FC = () => (
  <footer className={styles.Footer} role="contentinfo" aria-label="Site footer">
    &copy; 2025 <span className={styles.GradientText}>GravX</span>. All rights reserved.
  </footer>
);

export default Footer;
