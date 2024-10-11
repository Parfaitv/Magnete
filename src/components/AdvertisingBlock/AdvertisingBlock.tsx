import { GridBox } from "../GridBox";
import { Image } from "../Image";

type AdvertisingBlockProps = {
  items: string[];
};

export const AdvertisingBlock = ({ items }: AdvertisingBlockProps) => {
  return (
    <GridBox gridTemplateColumns="repeat(3, 1fr)">
      {items.map((img, i) => (
        <GridBox key={img + i} width="100%" height="960px">
          <Image src={img} alt={img + i} />
        </GridBox>
      ))}
    </GridBox>
  );
};
