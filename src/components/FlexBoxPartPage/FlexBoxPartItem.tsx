import { FlexBox } from "@/components/FlexBox"
import { TFlexBoxPartItem } from "./types"
import { TextManrope } from "../TextManrope"

export const FlexBoxPartItem = ({ img, name, price }: TFlexBoxPartItem) => {
    return (
        <FlexBox flexWrap='nowrap' flexDirection='column' gap='6px'>
            <FlexBox flex={1}>
                <img width='100%' src={img} />
            </FlexBox>
            <FlexBox flexDirection='column' justifyContent='center' alignItems='center'>
                <TextManrope fontSize={18} fontWeight='bold'>{name}</TextManrope>
                <TextManrope>{price} ₽</TextManrope>
            </FlexBox>
        </FlexBox>
    )
}
