import dynamic from 'next/dynamic';
import { type FC, useCallback } from 'react';

import { ClientRouting } from '@/constants/routing';
import { useMoviesSignal } from '@/stores/movies';
import abbreviateNumber from '@/utils/abbreviateNumber';

import RenderImage from '../RenderImage';
import s from './styles.module.scss';

const SVG = dynamic(() => import('react-inlinesvg'), { ssr: false });

interface ICardProps {
  id: number;
  thumbnail: string;
  rating: number;
  title: string;
  overview: string;
  voteCount: number;
}

const Card: FC<ICardProps> = ({
  thumbnail,
  rating,
  title,
  voteCount,
  id,
  overview,
}) => {
  const { setCurrentMovieID } = useMoviesSignal();
  const handleOnClick = useCallback(() => {
    setCurrentMovieID(String(id));
  }, [id]);
  return (
    <article className={s.cardList} id={String(id)} onClick={handleOnClick}>
      <div className={s.cardList__thumbnailContainer}>
        <RenderImage
          src={thumbnail}
          alt={title}
          fill
          className={s.cardList__thumbnail}
          loading="lazy"
          sizes="(max-width: 300px) 100vw, 300px"
        />
      </div>
      <div className={s.cardList__content}>
        <h3 className={s.cardList__title}>{title}</h3>
        <p className={s.cardList__overview}>{overview}</p>
        <div className={s.cardList__contentMeta}>
          <p className={s.cardList__contentRating}>
            <SVG
              src={`${ClientRouting.publicSVGs}/star.svg`}
              width={18}
              height={18}
            />
            <span>{rating.toFixed(1)}</span>
          </p>
          <span className="italic">({abbreviateNumber(voteCount)})</span>
        </div>
        <button type="button" className={s.cardList__button}>
          View Detail
        </button>
      </div>
    </article>
  );
};

export default Card;
