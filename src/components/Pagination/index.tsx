'use client';

import { useSignals } from '@preact/signals-react/runtime';
import { clsx } from 'clsx';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { type FC, useCallback } from 'react';

import { EMovieType } from '@/constants/movie';
import { ClientRouting } from '@/constants/routing';
import { useCurrentParams } from '@/hooks/useCurrentParams';
import { totalPages } from '@/stores/movies';

import FallbackSVG from '../FallbackSVG';
import PInput from './PInput';
import styles from './styles.module.scss';

const SVG = dynamic(() => import('react-inlinesvg'), { ssr: true });
const Pagination: FC = () => {
  useSignals();
  const { currentPage, currentType, currentKeyword } = useCurrentParams();
  const router = useRouter();

  const handleEnterPage = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        const value = Number(event.currentTarget.value);
        if (value >= 1 && value <= totalPages.value) {
          let queryString = `/?page=${value}&type=${currentType}`;
          if (currentType === EMovieType.All) {
            queryString += `&keyword=${currentKeyword}`;
          }
          router.push(queryString);
        }
      }
    },
    [router, currentType, currentKeyword],
  );

  const generateNavigationLink = useCallback(
    (type: 'prev' | 'next') => {
      const page = type === 'prev' ? currentPage - 1 : currentPage + 1;
      let queryString = `/?page=${page}&type=${currentType}`;

      if (currentType === EMovieType.All) {
        queryString += `&keyword=${currentKeyword}`;
      }
      return queryString;
    },
    [currentType, currentPage, currentKeyword],
  );

  return (
    <nav className={styles.pagination}>
      <Link
        className={clsx(styles.pagination__link)}
        href={generateNavigationLink('prev')}
        onClick={(e) => {
          if (currentPage <= 1) {
            e.preventDefault();
          }
        }}
      >
        <SVG
          className={styles.pagination__linkPrev}
          src={`${ClientRouting.publicSVGs}/caret-right.svg`}
          width={16}
          height={16}
          loader={<FallbackSVG size={16} />}
        />
      </Link>

      <div className={styles.pagination__inputContainer}>
        <div className={styles.pagination__inputWrapper}>
          <PInput
            type="number"
            onKeyDown={handleEnterPage}
            className={styles.pagination__input}
            min={1}
            max={totalPages.value}
            value={String(currentPage)}
          />
        </div>
        <span>/</span>
        <span>{totalPages}</span>
      </div>

      <Link
        className={styles.pagination__link}
        href={generateNavigationLink('next')}
        onClick={(e) => {
          if (currentPage >= totalPages.value) {
            e.preventDefault();
          }
        }}
      >
        <SVG
          src={`${ClientRouting.publicSVGs}/caret-right.svg`}
          width={16}
          height={16}
          loader={<FallbackSVG size={16} />}
        />
      </Link>
    </nav>
  );
};

export default Pagination;
