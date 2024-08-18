import { GridBox, FlexBoxParts, TextManrope, FlexBox } from "@/components"
import mainPage from '@/picture/mainPage.png'

export const AboutPage = () => {
    return (
        <GridBox paddingTop='90px' gridTemplateRows='repeat(3, 1fr)' gap='1rem' height='100vh'>
            <FlexBox justifyContent='start' width='100%' flexDirection='column' gap='1em'>
                <TextManrope fontSize={34} fontWeight='600'>
                    О бренде
                </TextManrope>
                <TextManrope fontSize={24}>
                    Описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда
                </TextManrope>
            </FlexBox>
            <GridBox gridRow='2/4'>
                <FlexBoxParts items={[{ img: mainPage, navPath: '/catalog/new-collection/1' }, { img: mainPage, navPath: '/catalog/new-collection/2' }, { img: mainPage, navPath: '/catalog/new-collection/3' }]} />
            </GridBox>
        </GridBox>
    )
}
