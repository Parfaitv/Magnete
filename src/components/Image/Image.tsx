import { HTMLAttributes } from "react";

type TImageProps = HTMLAttributes<HTMLDivElement> & {
  src: string;
  alt: string;
};

export const Image = ({ src, alt, ...props }: TImageProps) => (
  <div {...props}>
    <img src={src} alt={alt} height="100%" width="100%" />
  </div>
);
