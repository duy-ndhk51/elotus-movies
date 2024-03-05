import { type FC } from 'react';

import s from './styles.module.scss';

const CardListSkeleton: FC = () => {
  return (
    <article className={s.cardList}>
      <div className={s.cardList__thumbnailContainer}>
        <div className="skeleton-cover" />
      </div>
      <div className={s.cardList__content}>
        <div className="skeleton-block-40" />
        <div className="skeleton-block-80" />
        <div className={s.cardList__contentMeta}>
          <div className="skeleton-block-20" />
        </div>
        <div className="skeleton-block-40 margin-top-auto" />
      </div>
    </article>
  );
};

export default CardListSkeleton;
