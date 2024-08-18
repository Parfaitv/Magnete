import { Box, Snackbar, Typography } from "@mui/material"
import { copyTextToClipboard } from "../../utils";
import { SyntheticEvent, useEffect, useState } from "react";
import { Icon } from "../Icon";

export const Header = () => {
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    function logit() {
        setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
        }
        watchScroll();

        return () => {
            window.removeEventListener("scroll", logit);
        };
    }, []);

    const handleClick = () => {
        copyTextToClipboard('8-812-123-12-12')
        setOpenSnackBar(true)

    };

    const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackBar(false);
    };

    const scroll = scrollY > 80

    return (
        <Box sx={{ background: scroll ? 'rgb(245 245 245 / 30%)' : 'transparent', backdropFilter: scroll ? 'blur(6px)' : undefined, transition: '1s ease-in-out' }} position='fixed' top={0} width='100%'>
            <Box display='flex' justifyContent='space-between' alignItems='center' padding='0 10px'>
                <Box display='flex' justifyContent='center' alignItems='center' padding='10px 0' gap='8px'>
                    <Icon icon="storeLogo" />
                    <Icon icon="storeName" />
                </Box>
                <Box display='flex' flexDirection='column' justifyContent='end' alignItems='end'>
                    <Typography onClick={handleClick} sx={{ cursor: 'pointer' }} fontWeight='600' variant="body1">8 (812) xxx-xx-xx</Typography>
                    <Snackbar
                        open={openSnackBar}
                        autoHideDuration={2000}
                        onClose={handleClose}
                        message="Номер телефона успешно скопирован!"
                    />
                    <Typography variant="body1">Бесплатная доставка по всей России</Typography>
                </Box>
            </Box>
        </Box >
    )
}
