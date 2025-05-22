import type { FC } from 'react';
import classNames from 'classnames';

import type { IScreenTitleProps } from './types';

import styles from './ScreenTitle.module.scss';

const ScreenTitle: FC<IScreenTitleProps> = ({ className = '', screenTitle }) => (
  <div className={classNames(styles.Title, className)} role="heading" aria-level={1}>
    {screenTitle}
  </div>
);

export default ScreenTitle;
