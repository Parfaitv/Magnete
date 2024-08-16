import { Box } from "@mui/material";
import { TextManrope } from "../TextManrope";
import { Image } from "../Image";
import { GridBox } from "../GridBox";

type Item = {
    url: string
    navPath: string
}

type GridBoxPartPageProps = {
    items: Item[]
    title: string
}

export const GridBoxPartPage = ({ items, title }: GridBoxPartPageProps) => {
    const { 0: item1, 1: item2, 2: item3, 3: item4, 4: item5 } = Object.assign({}, items)

    return (
        <GridBox padding='48px 10px 0 10px' gridTemplateColumns='1fr'>
            <Box>
                <TextManrope fontSize={24} paddingLeft='10px' >{title}</TextManrope>
            </Box>
            <GridBox gridTemplateColumns='repeat(4, 1fr)' gridTemplateRows='repeat(3, 300px)'>
                <Image src={item1.url} alt="Классика" style={{ maxHeight: '600px', gridColumn: '1/3', gridRow: '1/3' }} />
                <GridBox gridTemplateColumns='1fr 1fr' gridColumn='3/5' maxHeight='300px'>
                    <Image src={item2.url} alt="Спорт" />
                    <Image src={item3.url} alt="Трикотаж" />
                </GridBox>
                < Image src={item4.url} alt="Black Magnete" style={{ gridColumn: '3/5', gridRow: '2/4', maxHeight: '600px' }} />
                < Image src={item5.url} alt="База" style={{ gridColumn: '1/3', gridRow: '3/5', maxHeight: '300px' }} />
            </GridBox>
        </GridBox>
    )
}
