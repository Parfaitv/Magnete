import { FlexBox, GridBox, TextManrope } from "@/components"
import { useAppSelector } from "@/store"
import { CatalogSecondaryProps, ManView, TUseParams } from "@/types"
import { useCSSMedia } from "@/utils"
import { CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

export const CatalogType = () => {
    const { variant, view } = useParams<TUseParams>()
    const isMobile = useCSSMedia()
    const [catalogType, setCatalogType] = useState<CatalogSecondaryProps>()
    const variants = useAppSelector((state) => state.reducer.catalogVariantPage)
    const views = useAppSelector((state) => state.reducer.catalogViewPage)

    useEffect(() => {
        if (!view && variant) {
            if (variant === 'woman') {
                setCatalogType(variants.woman)
            } else {
                setCatalogType(variants.man)
            }

        }

        if (view && variant) {
            if (variant === 'woman') {
                setCatalogType(views.woman[view])
            } else {
                setCatalogType(views.man[view as ManView])
            }
        }
    }, [variant, view])

    if (!catalogType) {
        return <CircularProgress size="lg" />
    }

    return (
        <GridBox paddingTop='4rem' gap='1rem'>
            <GridBox gridTemplateColumns='1fr' gap='1rem'>
                <TextManrope style={{ color: 'black', textDecoration: 'none', fontSize: 32, fontWeight: '100' }}>
                    {catalogType.title}
                </TextManrope>
                <GridBox gridTemplateColumns={`repeat(${isMobile ? 1 : 3}, 1fr)`}>
                    {catalogType.items.map(({ img, navPath }, k) => (
                        <GridBox key={`${img}_${navPath}_${k}`}>
                            <Link to={navPath} style={{ display: 'flex', flexDirection: 'column', width: '100%', height: isMobile ? '720px' : '100%', color: 'black', textDecoration: 'none', fontSize: 32, fontWeight: '100' }}>
                                <FlexBox width='100%' height='960px' sx={{ backgroundImage: `url(${img})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />
                            </Link>
                        </GridBox>
                    ))}
                </GridBox>
            </GridBox>
        </GridBox>
    )
}
