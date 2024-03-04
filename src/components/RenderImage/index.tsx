import type { ImageProps } from 'next/image';
import Image from 'next/image';
import { forwardRef, useMemo } from 'react';

import { ClientRouting } from '@/constants/routing';

type RenderImageProps = Omit<ImageProps, 'src'> & {
  src?: ImageProps['src'] | null;
  cropSize?: 'w500' | 'w400' | 'w300' | 'w200' | 'original';
};
const RenderImage = forwardRef<HTMLImageElement, RenderImageProps>(
  ({ cropSize = 'original', ...props }, ref) => {
    const { src, ...restProps } = props;

    const finalSrc = useMemo(() => {
      return src
        ? `${process.env.NEXT_PUBLIC_THUMBNAIL_ENDPOINT}/${cropSize}/${src}`
        : `${ClientRouting.publicImages}/placeholder.png`;
    }, [cropSize, src]);
    return (
      <Image
        {...restProps}
        src={finalSrc}
        ref={ref}
        placeholder="blur"
        blurDataURL={finalSrc}
      />
    );
  },
);

RenderImage.displayName = 'Render Image';

export default RenderImage;
export type { ImageProps };
