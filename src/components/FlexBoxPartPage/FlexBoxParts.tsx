import { FlexBox } from "../FlexBox"
import { TFlexBoxPartItem } from "./types"
import { FlexBoxPartItem } from "./FlexBoxPartItem"
import { TextManrope } from "../TextManrope"

export const FlexBoxParts = ({ isMobile, title, items }: { isMobile: boolean, title?: string, items: TFlexBoxPartItem[] }) => {
    return (
        <FlexBox flexDirection='column'>
            <TextManrope fontSize={32} fontWeight='100'>
                {title}
            </TextManrope>
            <FlexBox flexDirection={isMobile ? 'column' : 'row'} gap='12px' flex={1}>
                {items.map(({ img, name, price }, i) => (
                    <FlexBoxPartItem key={`${img}_${i}_${name}-${price}`} img={img} name={name} price={price} />
                ))}
            </FlexBox>
        </FlexBox>
    )
}
