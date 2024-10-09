import { useWindowSize } from '@uidotdev/usehooks';

export const useCSSMedia = (size: number | undefined = 768) => {
  const { width } = useWindowSize();
  // console.log(width);

  return width === null || width <= size;
};
