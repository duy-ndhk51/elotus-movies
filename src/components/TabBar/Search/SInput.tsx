import { useRouter } from 'next/navigation';
import type { InputHTMLAttributes } from 'react';
import React, { forwardRef, useCallback } from 'react';

import { EMovieType } from '@/constants/movie';

import styles from './styles.module.scss';

const SInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  const { onKeyDown, ...restProps } = props;
  const router = useRouter();
  const handleEnterPage = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (typeof onKeyDown === 'function') {
        onKeyDown(event);
      }
      if (event.key === 'Enter') {
        router.push(
          `/?type=${EMovieType.All}&keyword=${event.currentTarget.value}`,
        );
      }
    },
    [router],
  );

  return (
    <input
      ref={ref}
      className={styles.sinput}
      type="text"
      onKeyDown={handleEnterPage}
      placeholder="Enter a keyword"
      {...restProps}
    />
  );
});

export default SInput;
