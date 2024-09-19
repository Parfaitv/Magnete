import { Image, FlexBoxParts, GridBoxPartPage, GridBox, FlexBox } from '@/components'
import { mockCollection, mockGridBoxPartItems, mockManCatalog } from '@/constants'
import mainPage from '@/picture/mainPage.png'

export const StartPage = () => {
    return (
        <GridBox gap='3rem'>
            <FlexBox width='100%' height='100%'>
                <Image alt="Основная картинка" src={mainPage} />
            </FlexBox>
            <FlexBoxParts
                header={{ title: 'Новая коллекция', navPath: '/catalog/new-collection' }}
                items={mockCollection}
            />
            <GridBoxPartPage items={mockGridBoxPartItems} header={{ title: "Каталог/Женская одежда", navPath: '/catalog/woman' }} />
            <FlexBoxParts header={{ title: 'Мужская коллекция', navPath: '/catalog/man' }} items={mockManCatalog} />
        </GridBox>
    )
}
