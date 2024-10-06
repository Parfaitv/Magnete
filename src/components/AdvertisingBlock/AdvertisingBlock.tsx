import { GridBox } from "../GridBox"

type AdvertisingBlockProps = {
    items: string[]
}

export const AdvertisingBlock = ({ items }: AdvertisingBlockProps) => {
    return (
        <GridBox gridTemplateColumns='repeat(3, 1fr)'>
            {items.map((img) => (
                <GridBox width='100%' height='960px' sx={{ backgroundImage: `url(${img})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />
            ))}
        </GridBox>
    )
}
