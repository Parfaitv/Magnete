import styled, { css } from "styled-components"
import { icons } from "../icon"
import { TIconProps } from "@/types"
import { CSSProperties } from "react"

type TIcon = {
    icon: keyof typeof icons
} & TIconProps

type TIconStyledProps = {
    $width?: CSSProperties['width']
    $height?: CSSProperties['height']
    $color?: CSSProperties['color']
    $onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const getHeight = ({ $height }: Pick<TIconStyledProps, '$height'>) => {
    if ($height) {
        return css`
            & > svg {
                height: ${typeof $height === 'number' ? `${$height}px` : $height}
            }
        `
    }
}

const getWidth = ({ $width }: Pick<TIconStyledProps, '$width'>) => {
    if ($width) {
        return css`
            & > svg {
                width: ${typeof $width === 'number' ? `${$width}px` : $width}
            }
        `
    }
}

const getFillStyle = ({ $color }: Pick<TIconStyledProps, '$color'>) => {
    if ($color) {
        return css`
            & > svg > path {
                fill: ${$color}
            }
        `
    }
}

const IconStyled = styled.span<TIconStyledProps>`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    cursor: ${({ $onClick }) => $onClick ? 'pointer' : 'default'}
    ${({ $height }) => getHeight({ $height })}
    ${({ $width }) => getWidth({ $width })}
    ${({ $color }) => getFillStyle({ $color })}
`

export const Icon = ({ icon, height, width, onClick, color }: TIcon) => {
    const Icon = icons[icon]
    return (
        <IconStyled $width={width} $height={height} $color={color} $onClick={onClick} onClick={onClick}>
            <Icon />
        </IconStyled>
    )
}
