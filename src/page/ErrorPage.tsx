import { FlexBox } from "@/components"
import NotFound from '@/picture/NotFound.jpg'
import { Button } from "@mui/material"
import { useNavigate } from "react-router"

export const ErrorPage = () => {
    const navigate = useNavigate()

    return (
        <FlexBox justifyContent='center' alignItems='center' flexDirection='column' width='100%' height='100vh'>
            <FlexBox
                width='100%'
                height='100%'
                sx={{
                    background: `center / contain no-repeat url(${NotFound})`
                }}
            />
            <Button variant="outlined" onClick={() => navigate('/')}>
                Return to HomePage
            </Button>
        </FlexBox>
    )
}
