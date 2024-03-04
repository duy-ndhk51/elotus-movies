import dynamic from 'next/dynamic';
import { type FC } from 'react';

import RenderImage from '@/components/RenderImage';
import { ClientRouting } from '@/constants/routing';
import type { MovieDetailsResponse } from '@/interfaces/movies';
import { useMoviesSignal } from '@/stores/movies';
import abbreviateNumber from '@/utils/abbreviateNumber';
import formatUSD from '@/utils/formatUSD';

import styles from './styles.module.scss';

const SVG = dynamic(() => import('react-inlinesvg'), { ssr: false });

interface IMovieProps {
  movie: MovieDetailsResponse;
}
const Movie: FC<IMovieProps> = ({ movie }) => {
  const {
    title,
    vote_average: rating,
    vote_count: voteCount,
    poster_path: posterPath,
    budget,
    imdb_id: imdbID,
    overview,
    tagline,
    popularity,
    revenue,
    release_date: releaseDate,
    production_companies: productionCompanies,
    spoken_languages: spokenLanguages,
    genres,
    status,
  } = movie;
  const { clearMovieID, DOMRemoveDisableScroll } = useMoviesSignal();

  return (
    <section className={styles.detailedContent}>
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
            <RenderImage
              src={posterPath}
              alt={title}
              fill
              className={styles.mainContent__thumbnail}
              loading="lazy"
              sizes="(max-width: 300px) 100vw, 300px"
            />
          </div>
        </div>
        <div className={styles.mainContent__content}>
          <h3 className={styles.mainContent__title}>{title}</h3>
          <h3 className={styles.mainContent__overview}>{overview}</h3>
          <div className={styles.mainContent__contentMeta}>
            <div className="flex items-center">
              <p className={styles.mainContent__contentRating}>
                <SVG
                  src={`${ClientRouting.publicSVGs}/star.svg`}
                  width={18}
                  height={18}
                />
                <span>{rating.toFixed(1)}</span>
              </p>
              <p>
                <span className="italic">({abbreviateNumber(voteCount)})</span>
              </p>
            </div>
            <p>
              <a
                href={`https://www.imdb.com/title/${imdbID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex"
              >
                <SVG
                  src={`${ClientRouting.publicSVGs}/imdb.svg`}
                  width={48}
                  height={24}
                />
              </a>
            </p>
          </div>

          <div>
            <p className={styles.metaLabel__container}>
              <span className={styles.metaLabel}>Realease Date:</span>
              {releaseDate}
            </p>
            <p className={styles.metaLabel__container}>
              <span className={styles.metaLabel}>Budget:</span>
              {formatUSD(budget)}
            </p>
            <p className={styles.metaLabel__container}>
              <span className={styles.metaLabel}>Revenue:</span>
              {formatUSD(revenue)}
            </p>
            <p className={styles.metaLabel__container}>
              <span className={styles.metaLabel}>Status:</span>
              {status}
            </p>
            <p className={styles.metaLabel__container}>
              <span className={styles.metaLabel}>popularity:</span>
              {popularity.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {tagline && (
        <div>
          <h4 className={styles.titleLabel}>Tagline</h4>
          <p>{tagline}</p>
        </div>
      )}

      {productionCompanies.length >= 0 && (
        <div>
          <h4 className={styles.titleLabel}>Production Companies</h4>
          <div className={styles.productionCompanies__list}>
            {productionCompanies
              .map(
                ({ name, origin_country: originCountry }) =>
                  `${name} (${originCountry})`,
              )
              .join(', ')}
          </div>
        </div>
      )}
      {genres.length >= 0 && (
        <div>
          <h4 className={styles.titleLabel}>Genres</h4>
          {genres.map(({ name }) => name).join(', ')}
        </div>
      )}
      {spokenLanguages.length >= 0 && (
        <div>
          <h4 className={styles.titleLabel}>Spoken Languages</h4>
          {spokenLanguages
            .map(({ english_name: englishName }) => englishName)
            .join(', ')}
        </div>
      )}
    </section>
  );
};

export default Movie;
