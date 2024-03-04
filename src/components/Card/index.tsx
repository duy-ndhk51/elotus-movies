import dynamic from 'next/dynamic';
import type { FC } from 'react';

import { ClientRouting } from '@/constants/routing';

import RenderImage from '../RenderImage';
import s from './styles.module.scss';

const SVG = dynamic(() => import('react-inlinesvg'), { ssr: false });

interface ICardProps {
  id: number;
  thumbnail: string;
  rating: number;
  title: string;
  voteCount: number;
}

const Card: FC<ICardProps> = ({ thumbnail, rating, title, voteCount, id }) => {
  return (
    <article className={s.card} id={String(id)}>
      <div className={s.card__thumbnailContainer}>
        <RenderImage
          src={thumbnail}
          alt={title}
          fill
          cropSize="w500"
          className={s.card__thumbnail}
        />
      </div>
      <div className={s.card__content}>
        <h3 className={s.card__title}>{title}</h3>
        <div className={s.card__contentMeta}>
          <p className={s.card__contentRating}>
            <SVG
              src={`${ClientRouting.publicSVGs}/star.svg`}
              width={18}
              height={18}
            />
            <span>{rating.toFixed(1)}</span>
          </p>
          <p>
            <span>{voteCount}</span>
          </p>
        </div>
        <button type="button" className={s.card__button}>
          View Detail
        </button>
      </div>
    </article>
  );
};

export default Card;