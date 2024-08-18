import { Image, FlexBoxParts, GridBoxPartPage, GridBox } from '@/components'
import { mockFLexBoxPartItems, mockGridBoxPartItems } from '@/constants'
import mainPage from '@/picture/mainPage.png'

export const StartPage = () => {
    return (
        <GridBox gridTemplateRows='repeat(4, 1fr)' gap='3rem'>
            <Image alt="Основная картинка" src={mainPage} />
            <FlexBoxParts
                header={{ title: 'Новая коллекция', navPath: '/catalog/new-collection' }}
                items={mockFLexBoxPartItems}
            />
            <GridBoxPartPage items={mockGridBoxPartItems} header={{ title: "Каталог/Женская одежда", navPath: '/catalog/woman' }} />
            <FlexBoxParts header={{ title: 'Мужская коллекция', navPath: '/catalog/man' }} items={mockFLexBoxPartItems} />
        </GridBox>
    )
}
