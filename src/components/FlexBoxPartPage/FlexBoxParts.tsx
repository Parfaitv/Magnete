import { FlexBox } from "../FlexBox";
import { FlexBoxPartItem } from "./FlexBoxPartItem";
import { FlexBoxPartsProps } from "./types";
import { TextManrope } from "../TextManrope";
import { useCSSMedia } from "@/utils/useCSSMedia";
import { useNavigate } from "react-router-dom";

export const FlexBoxParts = ({
  header,
  items,
  height = "960px",
}: FlexBoxPartsProps) => {
  const isMobile = useCSSMedia();
  const navigate = useNavigate();

  return (
    <FlexBox height="100%" flexDirection="column" gap="1rem">
      {header && (
        <TextManrope
          style={{
            color: "black",
            textDecoration: "none",
            fontSize: 32,
            fontWeight: "100",
            cursor: "pointer",
          }}
          onClick={() => navigate(header.navPath)}
        >
          {header.title}
        </TextManrope>
      )}
      <FlexBox
        flexDirection={isMobile ? "column" : "row"}
        gap="12px"
        justifyContent="space-between"
        width="100%"
        height="100%"
      >
        {items.map(({ img, name, price, navPath }, i) => (
          <FlexBoxPartItem
            key={`${img}_${i}_${name}-${price}`}
            height={height}
            img={img}
            name={name}
            price={price}
            navPath={navPath}
          />
        ))}
      </FlexBox>
    </FlexBox>
  );
};
