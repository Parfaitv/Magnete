import { FlexBox, GridBox, TextManrope } from "@/components"
import { mockCatalog } from "@/constants"
import { useCSSMedia } from "@/utils"
import { Link } from "react-router-dom"

export const Catalog = () => {
    const isMobile = useCSSMedia()
    return (
        <GridBox paddingTop='4rem' flexDirection='column' gap='1rem'>
            <TextManrope style={{ color: 'black', textDecoration: 'none', fontSize: 32, fontWeight: '100' }}>
                Каталог
            </TextManrope>
            <GridBox gridTemplateColumns='1fr' gap='1rem'>
                {mockCatalog.map(({ title, navPath, items }, i) => (
                    <GridBox key={`${title}_${i}`} gridTemplateColumns='1fr' gap='1rem'>
                        <TextManrope as={Link} to={navPath} style={{ color: 'black', textDecoration: 'none', fontSize: 32, fontWeight: '100' }}>
                            {title}
                        </TextManrope>
                        <GridBox gridTemplateColumns={`repeat(3,1fr)`}>
                            {items.map(({ img, navPath }, k) => (
                                <Link key={`${img}_${navPath}_${k}`} to={navPath} style={{ display: 'flex', flexDirection: 'column', width: '100%', height: isMobile ? '720px' : '100%', color: 'black', textDecoration: 'none', fontSize: 32, fontWeight: '100' }}>
                                    <FlexBox width='100%' height='960px' sx={{ backgroundImage: `url(${img})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />
                                </Link>
                            ))}
                        </GridBox>
                    </GridBox>
                ))}
            </GridBox>
        </GridBox>
    )
}
