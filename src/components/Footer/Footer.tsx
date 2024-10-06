import { Link } from "react-router-dom"
import { FlexBox } from "../FlexBox"
import { TextManrope } from "../TextManrope"
import { Icon } from "../Icon"
import { Snackbar } from "@mui/material"
import { copyTextToClipboard, useCSSMedia } from "@/utils"
import { SyntheticEvent, useState } from "react"

type ItemFooter = {
    text: string
    navPath: string
}

type FooterProps = {
    usefulLinks: ItemFooter[]
    categories: {
        womanCatalog: ItemFooter[]
        manCatalog: ItemFooter[]
    }
}

export const Footer = ({ usefulLinks, categories: { manCatalog, womanCatalog } }: FooterProps) => {
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const isMobile = useCSSMedia()
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

    return (
        <FlexBox width='100%' boxSizing='border-box' padding='4rem 1rem 2rem 1rem' flexDirection={isMobile ? 'column' : 'row'} gap={isMobile ? '1rem' : undefined} justifyContent='space-between' alignItems='start'>
            <FlexBox gap={isMobile ? '1rem' : '5rem'}>
                <FlexBox flexDirection='column' justifyContent='space-between' alignItems='center' >
                    <FlexBox flexDirection='column'>
                        <TextManrope fontSize={24} fontWeight='600'>
                            Полезный ссылки
                        </TextManrope>
                        <FlexBox gap='8px' flexDirection='column'>
                            {usefulLinks.map((link) => (
                                <TextManrope key={`${link.navPath}_${link.text}`} style={{ textDecoration: 'none', color: 'black' }} as={Link} to={link.navPath}>{link.text}</TextManrope>
                            ))}
                        </FlexBox>
                    </FlexBox>
                    {
                        !isMobile &&
                        <FlexBox gap='1rem'>
                            <Icon icon="storeLogo" />
                            <Icon icon="storeName" />
                        </FlexBox>
                    }
                </FlexBox>
                <FlexBox flexDirection='column'>
                    <TextManrope fontSize={24} fontWeight='600'>Категории товаров</TextManrope>
                    <TextManrope fontSize={24}>Женский каталог</TextManrope>
                    <FlexBox gap='8px' flexDirection='column'>
                        {womanCatalog.map((link) => (
                            <TextManrope key={`${link.navPath}_${link.text}`} style={{ textDecoration: 'none', color: 'black' }} as={Link} to={link.navPath}>{link.text}</TextManrope>
                        ))}
                    </FlexBox>
                    <TextManrope fontSize={24}>Мужской каталог</TextManrope>
                    <FlexBox gap='8px' flexDirection='column'>
                        {manCatalog.map((link) => (
                            <TextManrope key={`${link.navPath}_${link.text}`} style={{ textDecoration: 'none black', color: 'black' }} as={Link} to={link.navPath}>{link.text}</TextManrope>
                        ))}
                    </FlexBox>
                </FlexBox>
            </FlexBox>
            <FlexBox flexDirection='column' justifyContent={isMobile ? 'start' : 'end'} alignItems={isMobile ? 'start' : 'center'} gap={isMobile ? '1rem' : undefined}>
                <FlexBox flexDirection='column' width='18rem' gap='1rem'>
                    <FlexBox flexDirection='column'>
                        <TextManrope fontSize={24} fontWeight='600'>
                            Контактные данные
                        </TextManrope>
                        <TextManrope onClick={handleClick} sx={{ cursor: 'pointer' }} fontSize={24} fontWeight='400' variant="body1">8 (812) xxx-xx-xx</TextManrope>
                        <Snackbar
                            open={openSnackBar}
                            autoHideDuration={2000}
                            onClose={handleClose}
                            message="Номер телефона успешно скопирован!"
                        />
                        <TextManrope fontWeight='400' fontSize={24} variant="body1">magnete.spb@mail.ru</TextManrope>
                        <TextManrope variant="body1">бесплатная доставка по России</TextManrope>
                    </FlexBox>
                    <FlexBox justifyContent='space-around'>
                        <Link style={{ backgroundColor: 'black', padding: '1rem', border: '0px solid black', borderRadius: '50%' }} target="_blank" to={'https://web.telegram.org/k/'}>
                            <Icon icon="telegram" />
                        </Link>
                        <Link style={{ backgroundColor: 'black', padding: '1rem', border: '0px solid black', borderRadius: '50%' }} target="_blank" to={'https://instagram.com'}>
                            <Icon icon="instagram" />
                        </Link>
                        <Link style={{ backgroundColor: 'black', padding: '1rem', border: '0px solid black', borderRadius: '50%' }} target="_blank" to={'https://instagram.com'}>
                            <Icon icon="instagram" />
                        </Link>
                    </FlexBox>
                    <FlexBox gap='1rem' flexDirection='column'>
                        <TextManrope>Информация для покупателей. Торговая марка Magnete. Одежда собственного производства.</TextManrope>
                        <TextManrope>Все права защищены. © Magnete, 2022-2024</TextManrope>
                    </FlexBox>
                </FlexBox>
                {
                    isMobile &&
                    <FlexBox gap='1rem'>
                        <Icon icon="storeLogo" />
                        <Icon icon="storeName" />
                    </FlexBox>
                }
            </FlexBox>
        </FlexBox >
    )
}
