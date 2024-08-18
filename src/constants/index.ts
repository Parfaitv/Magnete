import { TFlexBoxPartItem } from "@/components/FlexBoxPartPage/types";
import mainPage from '@/picture/mainPage.png'
import clasicPicture from '@/picture/Clasic.png'

export const mockFLexBoxPartItems: TFlexBoxPartItem[] = [
    {
        img: mainPage,
        name: "Название 1",
        price: '3999',
        navPath: '/catalog/new-collection/woman/1'
    },
    {
        img: clasicPicture,
        name: "Название 2",
        price: '3999',
        navPath: '/catalog/new-collection/woman/2'
    },
    {
        img: mainPage,
        name: "Название 3",
        price: '3999',
        navPath: '/catalog/new-collection/woman/3'
    }
]
export const mockGridBoxPartItems = [
    { url: clasicPicture, navPath: '/catalog/woman/clasic' },
    { url: mainPage, navPath: '/catalog/woman/sport' },
    { url: mainPage, navPath: '/catalog/woman/knitted' },
    { url: clasicPicture, navPath: '/catalog/woman/black-magnete' },
    { url: mainPage, navPath: '/catalog/woman/base' }
]