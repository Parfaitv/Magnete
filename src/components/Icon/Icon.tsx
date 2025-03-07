import styled, { css } from "styled-components";
import { CSSProperties } from "react";
import { TIconProps } from "@/types";
import { icons } from "@/icon";

type TIcon = {
  icon: keyof typeof icons;
} & TIconProps;

type TIconStyledProps = {
  $width?: CSSProperties["width"];
  $height?: CSSProperties["height"];
  $color?: CSSProperties["color"];
};

const getHeight = ({ $height }: Pick<TIconStyledProps, "$height">) => {
  if ($height) {
    return css`
      & > svg {
        height: ${typeof $height === "number" ? `${$height}px` : $height};
      }
    `;
  }
};

const getWidth = ({ $width }: Pick<TIconStyledProps, "$width">) => {
  if ($width) {
    return css`
      & > svg {
        width: ${typeof $width === "number" ? `${$width}px` : $width};
      }
    `;
  }
};

const getFillStyle = ({ $color }: Pick<TIconStyledProps, "$color">) => {
  if ($color) {
    return css`
      & > svg > path {
        fill: ${$color};
      }
    `;
  }
};

const IconStyled = styled.span<TIconStyledProps>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
  ${({ $color }) => getFillStyle({ $color })}
  ${({ $height }) => getHeight({ $height })}
  ${({ $width }) => getWidth({ $width })}
`;

export const Icon = ({ icon, height, width, onClick, color }: TIcon) => {
  const Icon = icons[icon];
  return (
    <IconStyled
      $width={width}
      $height={height}
      $color={color}
      onClick={onClick}
    >
      <Icon />
    </IconStyled>
  );
};
