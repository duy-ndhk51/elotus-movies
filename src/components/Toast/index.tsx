import { useSignals } from '@preact/signals-react/runtime';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import type { FC } from 'react';
import React, { useEffect } from 'react';

import { ClientRouting } from '@/constants/routing';
import { enableToast, toastError, useToastSignal } from '@/stores/toast';

import FallbackSVG from '../FallbackSVG';
import styles from './styles.module.scss';

const SVG = dynamic(() => import('react-inlinesvg'), { ssr: false });

const DEFAULT_TIMEOUT = 3000;
const Toast: FC = () => {
  useSignals();
  const { dismissToast } = useToastSignal();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (enableToast.value) {
        dismissToast();
      }
    }, DEFAULT_TIMEOUT);
    return () => {
      clearTimeout(timer);
    };
  }, [enableToast.value]);

  return (
    <div className={clsx(styles.toast, !!enableToast.value && styles.show)}>
      <span className={styles.toast__errorIcon}>
        <SVG
          src={`${ClientRouting.publicSVGs}/close.svg`}
          width={16}
          height={16}
          loader={<FallbackSVG size={16} />}
        />
      </span>
      {toastError.value}
    </div>
  );
};

export default Toast;
