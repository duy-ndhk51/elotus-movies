import clsx from 'clsx';
import type { ImageProps } from 'next/image';
import Image from 'next/image';
import { forwardRef, useMemo, useState } from 'react';

import { ClientRouting } from '@/constants/routing';

import styles from './styles.module.scss';

type RenderImageProps = Omit<ImageProps, 'src'> & {
  src?: ImageProps['src'] | null;
  cropSize?: 'w500' | 'w400' | 'w300' | 'w200' | 'original';
};
const RenderImage = forwardRef<HTMLImageElement, RenderImageProps>(
  ({ cropSize = 'original', ...props }, ref) => {
    const { src, ...restProps } = props;
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const finalSrc = useMemo(() => {
      return src
        ? `${process.env.NEXT_PUBLIC_THUMBNAIL_ENDPOINT}/${cropSize}/${src}`
        : `${ClientRouting.publicImages}/placeholder.png`;
    }, [cropSize, src]);
    return (
      <Image
        {...restProps}
        className={clsx(
          styles.renderImage,
          props.className,
          !isLoading && styles.show,
        )}
        src={finalSrc}
        ref={ref}
        onLoad={() => {
          setIsLoading(false);
        }}
      />
    );
  },
);

RenderImage.displayName = 'Render Image';

export default RenderImage;
export type { ImageProps };
