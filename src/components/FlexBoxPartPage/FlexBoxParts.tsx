import { FlexBox } from "../FlexBox"
import { TFlexBoxPartItem } from "./types"
import { FlexBoxPartItem } from "./FlexBoxPartItem"
import { TextManrope } from "../TextManrope"
import { Link } from "react-router-dom"

type FlexBoxPartsProps = {
    header?: {
        title: string
        navPath: string
    }
    items: TFlexBoxPartItem[]
}

export const FlexBoxParts = ({ header, items }: FlexBoxPartsProps) => {
    return (
        <FlexBox flexDirection='column' gap='1rem'>
            {header &&
                <TextManrope as={Link} to={header.navPath} style={{ color: 'black', textDecoration: 'none', fontSize: 32, fontWeight: '100' }}>
                    {header.title}
                </TextManrope>
            }
            <FlexBox flexDirection='row' gap='12px' justifyContent='space-between' width='100%' height='100%'>
                {items.map(({ img, name, price, navPath }, i) => (
                    <FlexBoxPartItem key={`${img}_${i}_${name}-${price}`} img={img} name={name} price={price} navPath={navPath} />
                ))}
            </FlexBox>
        </FlexBox>
    )
}
