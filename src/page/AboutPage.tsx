import { GridBox, TextManrope, FlexBox } from "@/components"
import { AdvertisingBlock } from "@/components/AdvertisingBlock"
import { mockAdvertisingBlock } from "@/constants"

export const AboutPage = () => {
    return (
        <GridBox paddingTop='4rem' gridTemplateRows='15em 1fr' gap='1rem'>
            <FlexBox justifyContent='start' width='100%' flexDirection='column' gap='1em'>
                <TextManrope fontSize={34} fontWeight='600'>
                    О бренде
                </TextManrope>
                <TextManrope fontSize={24}>
                    Описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда
                </TextManrope>
            </FlexBox>
            <AdvertisingBlock items={mockAdvertisingBlock} />
        </GridBox>
    )
}
