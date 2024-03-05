import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';

import { EMovieType } from '@/constants/movie';
import { ClientRouting } from '@/constants/routing';
import useClickOutside from '@/hooks/useclickOutside';
import { useCurrentParams } from '@/hooks/useCurrentParams';

import tabbarStyles from '../styles.module.scss';
import SInput from './SInput';

const SVG = dynamic(() => import('react-inlinesvg'), { ssr: false });

const Search = () => {
  const [enableSearch, setEnableSearch] = useState(false);
  const { currentType } = useCurrentParams();
  const inputRef = useRef<HTMLInputElement>(null);
  useClickOutside(inputRef, () => {
    setEnableSearch(false);
  });
  return (
    <>
      <button
        className={clsx(
          tabbarStyles.tabBar__button,
          tabbarStyles.tabBar__item,
          currentType === EMovieType.All && tabbarStyles.active,
        )}
        type="button"
        onClick={() => setEnableSearch(true)}
      >
        <SVG
          src={`${ClientRouting.publicSVGs}/search.svg`}
          width={24}
          height={24}
        />
      </button>
      {enableSearch && <SInput ref={inputRef} />}
    </>
  );
};

export default Search;
