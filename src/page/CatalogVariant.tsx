import { FlexBox, GridBox, TextManrope } from "@/components"
import { TFlexBoxPartItem } from "@/components/FlexBoxPartPage/types"
import { mockCatalogVariant } from "@/constants"
import { useCSSMedia } from "@/utils"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

type Items = {
    items: TFlexBoxPartItem[]
    title: string
}


type Variant = {
    man: Items[],
    woman: Items[]
}

const mockVariant: Variant = {
    man: [
        {
            items: mockCatalogVariant,
            title: 'Мужская коллекция'
        },
    ],
    woman: [
        {
            items: mockCatalogVariant,
            title: 'Женская коллекция'
        },
    ],
}

export const CatalogVariant = () => {
    const { variant } = useParams()
    const isMobile = useCSSMedia()

    const catalogVariant = mockVariant[variant as keyof Variant]


    return (
        <GridBox paddingTop='4rem' gap='1rem'>
            {catalogVariant.map(({ items, title }) => (
                <GridBox gridTemplateColumns='1fr'>
                    <TextManrope style={{ color: 'black', textDecoration: 'none', fontSize: 32, fontWeight: '100' }}>
                        {title}
                    </TextManrope>
                    <GridBox gridTemplateColumns={`repeat(${isMobile ? 1 : 3}, 1fr)`}>
                        {items.map(({ img, navPath }, i) => (
                            <GridBox key={`${img}_${navPath}_${i}`}>
                                <Link to={navPath} style={{ display: 'flex', flexDirection: 'column', width: '100%', height: isMobile ? '720px' : '100%', color: 'black', textDecoration: 'none', fontSize: 32, fontWeight: '100' }}>
                                    <FlexBox width='100%' height='960px' sx={{ backgroundImage: `url(${img})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />
                                </Link>
                            </GridBox>
                        ))}
                    </GridBox>
                </GridBox>
            ))}
        </GridBox>
    )
}
