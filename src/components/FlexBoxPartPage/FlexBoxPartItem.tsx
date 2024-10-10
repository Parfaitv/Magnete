import { FlexBox } from "@/components/FlexBox";
import { FlexBoxPartItemProps } from "./types";
import { Link } from "react-router-dom";
import { TextManrope } from "../TextManrope";
import { useCSSMedia } from "@/utils";

export const FlexBoxPartItem = ({
  img,
  name,
  price,
  navPath,
  height,
}: FlexBoxPartItemProps) => {
  const isMobile = useCSSMedia();
  return (
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
        height={height}
        sx={{
          backgroundImage: `url(${img})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <FlexBox
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {name && (
          <TextManrope fontSize={18} fontWeight="bold">
            {name}
          </TextManrope>
        )}
        {price && <TextManrope>{price} ₽</TextManrope>}
      </FlexBox>
    </Link>
  );
};
