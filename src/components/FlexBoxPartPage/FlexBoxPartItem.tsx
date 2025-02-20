import { FlexBox } from "@/components/FlexBox";
import { FlexBoxPartItemProps } from "./types";
import { Link } from "react-router-dom";
import { TextManrope } from "../TextManrope";
import { Image } from "../Image";

export const FlexBoxPartItem = ({
  img,
  name,
  price,
  navPath,
}: FlexBoxPartItemProps) => (
  <Link
    to={navPath}
    style={{
      display: "flex",
      flexDirection: "column",
      color: "black",
      textDecoration: "none",
      fontSize: 32,
      fontWeight: "100",
    }}
  >
    <Image
      src={img}
      alt={img + name}
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "625px",
        maxHeight: "945px",
      }}
    />
    <FlexBox flexDirection="column" justifyContent="center" alignItems="center">
      {name && (
        <TextManrope fontSize={18} fontWeight="bold">
          {name}
        </TextManrope>
      )}
      {price && <TextManrope>{price} ₽</TextManrope>}
    </FlexBox>
  </Link>
);
