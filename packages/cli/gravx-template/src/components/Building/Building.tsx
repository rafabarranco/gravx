import { type FC } from 'react';

import styles from './Building.module.scss';

const Building: FC = () => (
  <div
    className={styles.Building}
    aria-label="Page under construction"
    role="alert"
    tabIndex={0}
    aria-live="polite"
  >
    <p className={styles.BuildingMessage}>This page is under construction. Stay tuned!</p>
  </div>
);

export default Building;
