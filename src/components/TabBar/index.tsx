'use client';

import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { usePathname, useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

import { EMovieType } from '@/constants/movie';
import { ClientRouting } from '@/constants/routing';
import { useCurrentParams } from '@/hooks/useCurrentParams';

import FallbackSVG from '../FallbackSVG';
import Pagination from '../Pagination';
import Search from './Search';
import styles from './styles.module.scss';

const SVG = dynamic(() => import('react-inlinesvg'), { ssr: true });
const TabBar = () => {
  const { currentType } = useCurrentParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleRoutingToType = useCallback(
    (type: EMovieType) => {
      router.push(`${pathname}?type=${type}`);
    },
    [pathname, router],
  );

  return (
    <div className={styles.tabBar}>
      <button
        type="button"
        className={clsx(
          styles.tabBar__button,
          styles.tabBar__item,
          currentType === EMovieType.TopRated && styles.active,
        )}
        onClick={() => {
          handleRoutingToType(EMovieType.TopRated);
        }}
        title="Top Rated"
      >
        <SVG
          src={`${ClientRouting.publicSVGs}/top-rated.svg`}
          width={24}
          height={24}
          loader={<FallbackSVG />}
        />
      </button>
      <button
        type="button"
        className={clsx(
          styles.tabBar__button,
          styles.tabBar__item,
          currentType === EMovieType.NowPlaying && styles.active,
        )}
        onClick={() => {
          handleRoutingToType(EMovieType.NowPlaying);
        }}
        title="Now Playing"
      >
        <SVG
          src={`${ClientRouting.publicSVGs}/now-playing.svg`}
          width={24}
          height={24}
          loader={<FallbackSVG />}
        />
      </button>
      <Search />
      <div className={styles.tabBar__item}>
        <Pagination />
      </div>
    </div>
  );
};

export default TabBar;
