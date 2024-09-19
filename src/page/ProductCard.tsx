import { FlexBox, GridBox, Image, TextManrope } from "@/components"
import { mockProductCards } from "@/constants"
import { useCSSMedia } from "@/utils"
import { Button } from "@mui/material"
import { useNavigate, useParams } from "react-router"

export const ProductCard = () => {
    const isMobile = useCSSMedia()
    const navigate = useNavigate()
    const { id } = useParams()
    if (Number(id) > mockProductCards.length || Number(id) < 0) {
        navigate('/error')
    }
    const { consist, description, images, name, sizes, price, article } = mockProductCards[Number(id)]

    return (
        <GridBox paddingTop='4rem' flexDirection='column' gap='1rem' gridTemplateColumns={isMobile ? '1fr' : '2fr 1fr'}>
            <GridBox>
                {images.map((item, i) => (
                    <Image src={item} alt={i + 'sdfssx'} />
                ))}
            </GridBox>
            <div>
                <FlexBox flexDirection='column' gap='8px'>
                    <TextManrope>MAGNETE</TextManrope>
                    <TextManrope variant="h4">{name}</TextManrope>
                    <TextManrope variant="h5">{price} руб.</TextManrope>
                    <TextManrope variant="body2" color="textSecondary">
                        {article}
                    </TextManrope>
                    <TextManrope variant="body1">
                        {description}
                    </TextManrope>
                    <TextManrope variant="body1">
                        Состав: {consist}
                    </TextManrope>
                    <TextManrope variant="body1">Размеры: {sizes.join(', ')}</TextManrope>
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
// import { useState } from 'react'
// import Box from '@mui/material/Box';
// import { useTheme } from '@mui/material/styles';
// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import { mockProductCard } from "@/constants"
// import Button from '@mui/material/Button';
// import { Icon, Image } from '@/components';

// export const ProductCard = () => {
//     const theme = useTheme();
//     const [activeStep, setActiveStep] = useState(0);
//     const maxSteps = mockProductCard.images.length;

//     const handleNext = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     };

//     const handleBack = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     };

//     return (
//         <Box paddingTop='4rem' sx={{ width: 'fit-content', flexGrow: 1 }}>
//             <Paper
//                 square
//                 elevation={0}
//                 sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     pl: 2,
//                     bgcolor: 'background.default',
//                 }}
//             >
//                 <Image src={mockProductCard.images[activeStep]} alt={'dsf'} />
//             </Paper>
//             <MobileStepper
//                 variant="text"
//                 steps={maxSteps}
//                 position="static"
//                 activeStep={activeStep}
//                 nextButton={
//                     <Button
//                         size="small"
//                         onClick={handleNext}
//                         disabled={activeStep === maxSteps - 1}
//                     >
//                         Next
//                         {theme.direction === 'rtl' ? (
//                             <Icon icon='instagram' />
//                         ) : (
//                             <Icon icon='telegram' />
//                         )}
//                     </Button>
//                 }
//                 backButton={
//                     <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//                         {theme.direction === 'rtl' ? (
//                             <Icon icon='instagram' />
//                         ) : (
//                             <Icon icon='telegram' />
//                         )}
//                         Back
//                     </Button>
//                 }
//             />
//         </Box>
//     );
// }