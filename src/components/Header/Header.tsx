import { Snackbar } from "@mui/material"
import { copyTextToClipboard, useCSSMedia } from "../../utils";
import { SyntheticEvent, useEffect, useState } from "react";
import { Icon } from "../Icon";
import { FlexBox } from "../FlexBox";
import { TextManrope } from "../TextManrope";

export const Header = () => {
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const isMobile = useCSSMedia(525)

    const logit = () => {
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

    const scroll = scrollY > 24

    return (
        <FlexBox sx={{ background: scroll ? 'rgb(245 245 245 / 30%)' : 'transparent', backdropFilter: scroll ? 'blur(6px)' : undefined, transition: '1s ease-in-out' }} position='fixed' top={0} height='4rem' width='100%'>
            <FlexBox width='100%' justifyContent='space-between' alignItems='center' padding='0 10px'>
                <FlexBox justifyContent='center' alignItems='center' padding='10px 0' gap='8px'>
                    <Icon icon="storeLogo" />
                    <Icon icon="storeName" />
                </FlexBox>
                {
                    !isMobile && <FlexBox flexDirection='column' justifyContent='end' alignItems='end'>
                        <TextManrope fontWeight='600' onClick={handleClick} sx={{ cursor: 'pointer' }}>8 (812) xxx-xx-xx</TextManrope>
                        <Snackbar
                            open={openSnackBar}
                            autoHideDuration={2000}
                            onClose={handleClose}
                            message="Номер телефона успешно скопирован!"
                        />
                        <TextManrope>Бесплатная доставка по всей России</TextManrope>
                    </FlexBox>
                }
            </FlexBox>
        </FlexBox >
    )
}
