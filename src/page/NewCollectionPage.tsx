import { FlexBox, GridBox, TextManrope } from "@/components";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/store";
import { useCSSMedia } from "@/utils";

export const NewCollectionPage = () => {
  const isMobile = useCSSMedia();
  const { items, title } = useAppSelector(
    (state) => state.reducer.catalogVariantPage.newCollection
  );

  return (
    <GridBox paddingTop="4rem" gap="1rem">
      <GridBox gridTemplateColumns="1fr" gap="1rem">
        <TextManrope
          style={{
            color: "black",
            textDecoration: "none",
            fontSize: 32,
            fontWeight: "100",
          }}
        >
          {title}
        </TextManrope>
        <GridBox gridTemplateColumns={`repeat(${isMobile ? 1 : 3}, 1fr)`}>
          {items.map(({ img, navPath }, k) => (
            <GridBox key={`${img}_${navPath}_${k}`}>
              <Link
                to={navPath}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: isMobile ? "720px" : "100%",
                  color: "black",
                  textDecoration: "none",
                  fontSize: 32,
                  fontWeight: "100",
                }}
              >
                <FlexBox
                  width="100%"
                  height="960px"
                  sx={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                />
              </Link>
            </GridBox>
          ))}
        </GridBox>
      </GridBox>
    </GridBox>
  );
};
