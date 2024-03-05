import { useSignals } from '@preact/signals-react/runtime';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import React from 'react';

import { ClientRouting } from '@/constants/routing';
import { currentViewType, EViewType, useViewTypeSignal } from '@/stores/view';

import FallbackSVG from '../FallbackSVG';
import styles from './styles.module.scss';

const SVG = dynamic(() => import('react-inlinesvg'), { ssr: true });
const SelectView = () => {
  const { setCurrentViewType } = useViewTypeSignal();
  useSignals();
  return (
    <div className={styles.selectView}>
      <button
        className={clsx(
          styles.selectView__button,
          currentViewType.value === EViewType.Grid && styles.active,
        )}
        onClick={() => setCurrentViewType(EViewType.Grid)}
        type="button"
      >
        <SVG
          src={`${ClientRouting.publicSVGs}/grid.svg`}
          width={24}
          height={24}
          loader={<FallbackSVG size={24} />}
        />
      </button>
      <button
        className={clsx(
          styles.selectView__button,
          currentViewType.value === EViewType.List && styles.active,
        )}
        onClick={() => setCurrentViewType(EViewType.List)}
        type="button"
      >
        <SVG
          src={`${ClientRouting.publicSVGs}/list.svg`}
          width={24}
          height={24}
          loader={<FallbackSVG size={24} />}
        />
      </button>
    </div>
  );
};

export default SelectView;
