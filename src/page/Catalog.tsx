import { FlexBox, GridBox, TextManrope } from "@/components";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store";
import { useCSSMedia } from "@/utils";

export const Catalog = () => {
  const isMobile = useCSSMedia();
  const navigate = useNavigate();
  const catalogState = useAppSelector((state) => state.reducer.catalogPage);

  return (
    <GridBox paddingTop="4rem" gap="1rem">
      <TextManrope
        style={{
          color: "black",
          textDecoration: "none",
          fontSize: 32,
          fontWeight: "100",
        }}
      >
        Каталог
      </TextManrope>
      <GridBox gridTemplateColumns="1fr" gap="1rem">
        {catalogState.map(({ items, navPath, title }, i) => (
          <GridBox key={`${title}_${i}`} gridTemplateColumns="1fr" gap="1rem">
            <TextManrope
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: 32,
                fontWeight: "100",
              }}
              onClick={() => navigate(navPath)}
            >
              {title}
            </TextManrope>
            <GridBox gridTemplateColumns={"repeat(3,1fr)"}>
              {items.map(({ img, navPath }, k) => (
                <Link
                  key={`${img}_${navPath}_${k}`}
                  to={navPath}
                  style={{
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
              ))}
            </GridBox>
          </GridBox>
        ))}
      </GridBox>
    </GridBox>
  );
};
