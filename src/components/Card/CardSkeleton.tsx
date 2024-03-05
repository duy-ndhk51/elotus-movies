import { type FC } from 'react';

import s from './styles.module.scss';

const CardSkeleton: FC = () => {
  return (
    <article className={s.card}>
      <div className={s.card__thumbnailContainer}>
        <div className="skeleton-cover" />
      </div>
      <div className={s.card__content}>
        <div className="skeleton-block-40" />
        <div className="skeleton-block-20" />

        <div className="skeleton-block-40" />
      </div>
    </article>
  );
};

export default CardSkeleton;
