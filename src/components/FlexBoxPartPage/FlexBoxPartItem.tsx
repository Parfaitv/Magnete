import { FlexBox } from "@/components/FlexBox"
import { TFlexBoxPartItem } from "./types"
import { TextManrope } from "../TextManrope"
import { Link } from "react-router-dom"

export const FlexBoxPartItem = ({ img, name, price, navPath }: TFlexBoxPartItem) => {
    return (
        <Link to={navPath} style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '900px', color: 'black', textDecoration: 'none', fontSize: 32, fontWeight: '100' }}>
            <FlexBox width='100%' height='100%' sx={{ backgroundImage: `url(${img})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />
            <FlexBox flexDirection='column' justifyContent='center' alignItems='center'>
                <TextManrope fontSize={18} fontWeight='bold'>{name}</TextManrope>
                <TextManrope>{price} ₽</TextManrope>
            </FlexBox>
        </Link>
    )
}
