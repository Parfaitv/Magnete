import { CatalogSecondaryProps, ManView, TUseParams } from "@/types";
import { FlexBox, GridBox, TextManrope } from "@/components";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/store";
import { useCSSMedia } from "@/utils";
import { useParams } from "react-router";

export const CatalogType = () => {
  const { variant, view } = useParams<TUseParams>();
  const isMobile = useCSSMedia();
  const [catalogType, setCatalogType] = useState<CatalogSecondaryProps>();
  const { man: manVariant, woman: womanVariant } = useAppSelector(
    (state) => state.reducer.catalogVariantPage
  );
  const { man: manView, woman: womanView } = useAppSelector(
    (state) => state.reducer.catalogViewPage
  );

  useEffect(() => {
    if (!view && variant) {
      if (variant === "woman") {
        setCatalogType(womanVariant);
      } else {
        setCatalogType(manVariant);
      }
    }

    if (view && variant) {
      if (variant === "woman") {
        setCatalogType(womanView[view]);
      } else {
        setCatalogType(manView[view as ManView]);
      }
    }
  }, [variant, view, womanVariant, manVariant, womanView, manView]);

  if (!catalogType) {
    return <CircularProgress size="lg" />;
  }

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
          {catalogType.title}
        </TextManrope>
        <GridBox gridTemplateColumns={`repeat(${isMobile ? 1 : 3}, 1fr)`}>
          {catalogType.items.map(({ img, navPath }, k) => (
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
