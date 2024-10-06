import { FlexBox, GridBox, Image, TextManrope } from "@/components"
import { useAppSelector } from "@/store"
import { useCSSMedia } from "@/utils"
import { Button } from "@mui/material"
import { Navigate, useParams } from "react-router"

export const CollectionCard = () => {
    const isMobile = useCSSMedia()
    const { id } = useParams()
    const product = useAppSelector((state) => state.reducer.productPage.newCollection.find((item) => item.id === id))

    if (!product) {
        return <Navigate to='/404' />
    }

    return (
        <GridBox paddingTop='4rem' flexDirection='column' gap='1rem' gridTemplateColumns={isMobile ? '1fr' : '2fr 1fr'}>
            <GridBox>
                {product.images.map((item, i) => (
                    <Image key={`${i}_${id}`} src={item} alt={i + 'sdfssx'} />
                ))}
            </GridBox>
            <div>
                <FlexBox flexDirection='column' gap='8px'>
                    <TextManrope>MAGNETE</TextManrope>
                    <TextManrope variant="h4">{product.name}</TextManrope>
                    <TextManrope variant="h5">{product.price} руб.</TextManrope>
                    <TextManrope variant="body2" color="textSecondary">
                        {product.article}
                    </TextManrope>
                    <TextManrope variant="body1">
                        {product.description}
                    </TextManrope>
                    <TextManrope variant="body1">
                        Состав: {product.consist}
                    </TextManrope>
                    <TextManrope variant="body1">Размеры: {product.sizes.join(', ')}</TextManrope>
                    <GridBox gridTemplateColumns='1fr 1fr'>
                        <GridBox>
                            <Button variant="contained" color="primary">
                                Заказать
                            </Button>
                        </GridBox>
                        <GridBox>
                            <Button variant="outlined" color="primary">
                                Заказать
                            </Button>
                        </GridBox>
                    </GridBox>
                </FlexBox>
            </div>
        </GridBox>
    )
}
