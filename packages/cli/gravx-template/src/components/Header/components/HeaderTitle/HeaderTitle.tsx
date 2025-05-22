import { useMemo, type FC } from 'react';
import type { IHeaderTitleProps } from './type';

import styles from './HeaderTitle.module.scss';
import { useNavigate } from 'react-router-dom';

const HeaderTitle: FC<IHeaderTitleProps> = ({ className = '' }) => {
  const screenTitle = useMemo(() => 'GravX', []);
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={className}
      aria-label="Go to home"
      onClick={() => navigate('')}
      tabIndex={0}
      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
    >
      <span className={styles.HeaderTitleGradient}>{screenTitle}</span>
    </button>
  );
};

export default HeaderTitle;
