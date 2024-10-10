import { AdvertisingBlock, FlexBox, GridBox, TextManrope } from "@/components"
import { mockAdvertisingBlock } from "@/constants"
import { useCSSMedia } from "@/utils"

export const DeliveryPage = () => {
    const isMobile = useCSSMedia()
    return (
        <GridBox paddingTop='4rem' gridTemplateRows={isMobile ? "100% 1fr" : "1fr 1fr"} gap='1rem'>
            <FlexBox justifyContent='start' width='100%' flexDirection='column' gap='1em'>
                <TextManrope fontSize={34} fontWeight='600'>
                    Доставка и оплата
                </TextManrope>
                <TextManrope fontSize={24}>
                    Инструкция, Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция
                </TextManrope>
            </FlexBox>
            {!isMobile && <AdvertisingBlock items={mockAdvertisingBlock} />}
        </GridBox>
    )
}
