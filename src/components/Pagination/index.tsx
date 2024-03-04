'use client';

import { clsx } from 'clsx';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { FC } from 'react';

import { ClientRouting } from '@/constants/routing';
import { useCurrentPage } from '@/hooks/useCurrentPage';

import styles from './styles.module.scss';

const SVG = dynamic(() => import('react-inlinesvg'), { ssr: false });

interface IPaginationProps {
  totalPages: number;
}
const Pagination: FC<IPaginationProps> = ({ totalPages }) => {
  const currentPage = useCurrentPage();
  const router = useRouter();

  const handleEnterPage = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const value = Number(event.currentTarget.value);
      if (value >= 1 && value <= totalPages) {
        router.push(`/?page=${value}`);
      }
    }
  };

  return (
    <nav className={styles.pagination}>
      {currentPage > 1 && (
        <Link
          className={clsx(styles.pagination__link)}
          href={`/?page=${currentPage - 1}`}
        >
          <SVG
            className={styles.pagination__linkPrev}
            src={`${ClientRouting.publicSVGs}/caret-right.svg`}
            width={24}
            height={24}
          />
        </Link>
      )}

      <div className={styles.pagination__inputContainer}>
        <div className={styles.pagination__inputWrapper}>
          <input
            type="number"
            onKeyDown={handleEnterPage}
            className={styles.pagination__input}
            min={1}
            max={totalPages}
            defaultValue={String(currentPage)}
          />
        </div>
        <span>/</span>
        <span>{totalPages}</span>
      </div>

      {currentPage < totalPages && (
        <Link
          className={styles.pagination__link}
          href={`/?page=${currentPage + 1}`}
        >
          <SVG
            src={`${ClientRouting.publicSVGs}/caret-right.svg`}
            width={24}
            height={24}
          />
        </Link>
      )}
    </nav>
  );
};

export default Pagination;
