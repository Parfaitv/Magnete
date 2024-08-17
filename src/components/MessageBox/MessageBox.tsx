import { Button } from "@mui/material"
import { FlexBox } from "../FlexBox"
import { TextManrope } from "../TextManrope"
import { Icon } from "../Icon"

export const MessageBox = ({ title, telegramUrl, instagramUrl }: { title: string, telegramUrl: string, instagramUrl: string }) => {
    return (
        <FlexBox height='4.7em' width='100%' bgcolor='#221121' justifyContent='space-between' gap='3rem' alignItems='center'>
            <FlexBox>
                <TextManrope sx={{
                    textWrap: 'balance'
                }} color='#fff'>
                    {title}
                </TextManrope>
            </FlexBox>
            <FlexBox justifyContent='space-between' alignItems='center' gap='3rem'>
                <Button color="inherit" target="_blank" href={telegramUrl} sx={{
                    background: 'linear-gradient(120deg, #948C9B, #BEA7AB)'
                }}>
                    <FlexBox gap='8px'>
                        <TextManrope>
                            Написать
                        </TextManrope>
                        <Icon icon="telegram" />
                    </FlexBox>
                </Button>
                <Button color="inherit" target="_blank" href={instagramUrl} sx={{
                    background: 'linear-gradient(120deg, #948C9B, #BEA7AB)'
                }}>
                    <FlexBox gap='8px'>
                        <TextManrope>
                            Написать
                        </TextManrope>
                        <Icon icon="instagram" />
                    </FlexBox>
                </Button>
            </FlexBox>
        </FlexBox>
    )
}
