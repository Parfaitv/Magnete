import { Button, CircularProgress } from "@mui/material";
import { FlexBox, GridBox, Image, TextManrope } from "@/components";
import { ManView, ProductPageItem, TUseParams } from "@/types";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/store";
import { useCSSMedia } from "@/utils";
import { useParams } from "react-router";

export const ProductCard = () => {
  const isMobile = useCSSMedia();
  const { id, variant, view } = useParams<TUseParams>();
  const [product, setProduct] = useState<ProductPageItem>();
  const { man, woman } = useAppSelector((state) => state.reducer.productPage);

  useEffect(() => {
    if (variant === "woman" && view) {
      const filterProduct = woman[view].find((item) => item.id === id);
      setProduct(filterProduct);
    } else {
      const filterProduct = man[view as ManView].find((item) => item.id === id);
      setProduct(filterProduct);
    }
  }, [variant, view, id, man, woman]);

  if (!product) {
    return <CircularProgress size="lg" />;
  }

  return (
    <GridBox
      paddingTop="4rem"
      flexDirection="column"
      gap="1rem"
      gridTemplateColumns={isMobile ? "1fr" : "2fr 1fr"}
    >
      <GridBox>
        {product.images.map((item, i) => (
          <Image key={`${i}_${id}`} src={item} alt={i + "sdfssx"} />
        ))}
      </GridBox>
      <div>
        <FlexBox flexDirection="column" gap="8px">
          <TextManrope>MAGNETE</TextManrope>
          <TextManrope variant="h4">{product.name}</TextManrope>
          <TextManrope variant="h5">{product.price} руб.</TextManrope>
          <TextManrope variant="body2" color="textSecondary">
            {product.article}
          </TextManrope>
          <TextManrope variant="body1">{product.description}</TextManrope>
          <TextManrope variant="body1">Состав: {product.consist}</TextManrope>
          <TextManrope variant="body1">
            Размеры: {product.sizes.join(", ")}
          </TextManrope>
          <GridBox gridTemplateColumns="1fr 1fr">
            <GridBox>
              <Button variant="contained" color="primary">
                Заказать
              </Button>
            </GridBox>
            <GridBox>
              <Button variant="outlined" color="primary">
                Заказать
              </Button>
            </GridBox>
          </GridBox>
        </FlexBox>
      </div>
    </GridBox>
  );
};
