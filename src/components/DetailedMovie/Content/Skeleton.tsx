import clsx from 'clsx';
import dynamic from 'next/dynamic';
import React from 'react';

import { ClientRouting } from '@/constants/routing';
import { useMoviesSignal } from '@/stores/movies';

import styles from './styles.module.scss';

const SVG = dynamic(() => import('react-inlinesvg'), { ssr: false });
const Skeleton = () => {
  const { clearMovieID, DOMRemoveDisableScroll } = useMoviesSignal();
  const handleStopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <section className={styles.detailedContent} onClick={handleStopPropagation}>
      <button
        type="button"
        className={styles.closeButton}
        onClick={() => {
          clearMovieID();
          DOMRemoveDisableScroll();
        }}
      >
        <SVG
          src={`${ClientRouting.publicSVGs}/close.svg`}
          width={24}
          height={24}
        />
      </button>
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
        <div className="skeleton-block-60" key={Math.random()} />
      ))}
    </section>
  );
};

export default Skeleton;
