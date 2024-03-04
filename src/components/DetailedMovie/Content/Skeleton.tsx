import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.scss';

const Skeleton = () => {
  return (
    <div className={styles.detailedContent}>
      <div className={styles.mainContent}>
        <div className={styles.mainContent__thumbnail}>
          <div className={styles.mainContent__thumbnailContainer}>
            <div
              className={clsx(styles.mainContent__thumbnail, 'skeleton-cover')}
            />
          </div>
        </div>
        <div className={styles.mainContent__content}>
          <div className="skeleton-block-60" />

          <div className="skeleton-block-20" />
          <div className="skeleton-block-20" />
          <div className="skeleton-block-40" />
          <div className="skeleton-block-100" />
        </div>
      </div>

      {Array.from({ length: 4 }).map(() => (
        <div className="skeleton-block-60" />
      ))}
    </div>
  );
};

export default Skeleton;
