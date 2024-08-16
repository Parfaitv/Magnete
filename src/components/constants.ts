import { TFlexBoxPartItem } from "./FlexBoxPartPage/types";
import mainPage from '@/picture/mainPage.png'
import clasicPicture from '@/picture/Clasic.png'

export const mockFLexBoxPartItems: TFlexBoxPartItem[] = [
    {
        img: mainPage,
        name: "Название 1",
        price: '3999'
    },
    {
        img: mainPage,
        name: "Название 2",
        price: '3999'
    },
    {
        img: mainPage,
        name: "Название 3",
        price: '3999'
    }
]
export const mockGridBoxPartItems = [
    { url: clasicPicture, navPath: 'path' },
    { url: mainPage, navPath: 'path' },
    { url: mainPage, navPath: 'path' },
    { url: clasicPicture, navPath: 'path' },
    { url: mainPage, navPath: 'path' }
]