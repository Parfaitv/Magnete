import { Button } from "@mui/material"
import { TextManrope } from "../TextManrope"
import { Icon } from "../Icon"
import { GridBox } from "../GridBox"
import { useCSSMedia } from "@/utils"

export const MessageBox = ({ title, telegramUrl, instagramUrl }: { title: string, telegramUrl: string, instagramUrl: string }) => {
    const isMobile = useCSSMedia()

    return (
        <GridBox bgcolor='#221121' padding='6px 4px' gridTemplateColumns={isMobile ? '1fr' : '2fr 1fr'}>
            <GridBox>
                <TextManrope
                    sx={{
                        textWrap: 'balance'
                    }} color='#fff'
                >
                    {title}
                </TextManrope>
            </GridBox>
            <GridBox gridTemplateColumns={'1fr 1fr'} gap={isMobile ? '1rem' : '3rem'}>
                <GridBox>
                    <Button
                        color="inherit"
                        target="_blank"
                        href={telegramUrl}
                        sx={{
                            background: 'linear-gradient(120deg, #948C9B, #BEA7AB)'
                        }}>
                        <TextManrope>
                            Написать
                        </TextManrope>
                        <Icon icon="telegram" />
                    </Button>
                </GridBox>
                <GridBox>
                    <Button
                        color="inherit"
                        target="_blank"
                        href={instagramUrl}
                        sx={{
                            background: 'linear-gradient(120deg, #948C9B, #BEA7AB)'
                        }}>
                        <TextManrope>
                            Написать
                        </TextManrope>
                        <Icon icon="instagram" />
                    </Button>
                </GridBox>
            </GridBox>
        </GridBox >
    )
}
