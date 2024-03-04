'use client';

import { useSignals } from '@preact/signals-react/runtime';
import { clsx } from 'clsx';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { type FC, useCallback } from 'react';

import { ClientRouting } from '@/constants/routing';
import { useCurrentParams } from '@/hooks/useCurrentParams';
import { totalPages } from '@/stores/movies';

import PInput from './PInput';
import styles from './styles.module.scss';

const SVG = dynamic(() => import('react-inlinesvg'), { ssr: false });
const Pagination: FC = () => {
  useSignals();
  const { currentPage, currentType } = useCurrentParams();
  const router = useRouter();

  const handleEnterPage = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        const value = Number(event.currentTarget.value);
        if (value >= 1 && value <= totalPages.value) {
          router.push(`/?page=${value}&type=${currentType}`);
        }
      }
    },
    [router, currentType],
  );

  return (
    <nav className={styles.pagination}>
      <Link
        className={clsx(styles.pagination__link)}
        href={`/?page=${currentPage - 1}&type=${currentType}`}
        onClick={(e) => {
          if (currentPage <= 1) {
            e.preventDefault();
          }
        }}
      >
        <SVG
          className={styles.pagination__linkPrev}
          src={`${ClientRouting.publicSVGs}/caret-right.svg`}
          width={18}
          height={18}
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
        href={`/?page=${currentPage + 1}&type=${currentType}`}
        onClick={(e) => {
          if (currentPage > totalPages.value) {
            e.preventDefault();
          }
        }}
      >
        <SVG
          src={`${ClientRouting.publicSVGs}/caret-right.svg`}
          width={18}
          height={18}
        />
      </Link>
    </nav>
  );
};

export default Pagination;
