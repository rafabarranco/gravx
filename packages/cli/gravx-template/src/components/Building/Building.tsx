import { type FC } from 'react';

import styles from './Building.module.scss';

import buildingGif from '../../assets/gif/building.png';

const Building: FC = () => (
  <div className={styles.Building} aria-label="Page under construction" role="alert" tabIndex={0}>
    <img
      className={styles.BuildingGif}
      src={buildingGif}
      alt="Illustration of workers building the page"
    />
    <div className={styles.BuildingText}>
      <h1
        className={styles.BuildingTitle}
        id="building-desc"
        tabIndex={0}
        role="heading"
        aria-level={1}
      >
        Page under construction
      </h1>
      <p className={styles.BuildingDescription} id="building-desc-detail" tabIndex={0}>
        We are working hard to bring you the best experience. Stay tuned!
      </p>
    </div>
  </div>
);

export default Building;
