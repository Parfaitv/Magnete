import { TFlexBoxPartItem } from "@/components/FlexBoxPartPage/types"
import CatalogCard from '@/picture/CatalogCard.png'
import Clasic from '@/picture/Clasic.png'
import Base from '@/picture/Base.png'
import BlackMagnete from '@/picture/BlackMagnete.png'
import Knitted from '@/picture/Knitted.png'
import Sport from '@/picture/Sport.png'
import Card from '@/picture/Card.png'

export const mockCollection: TFlexBoxPartItem[] = [
    {
        img: Card,
        name: "Название 1",
        price: '3999',
        navPath: '/catalog/new-collection/1'
    },
    {
        img: Card,
        name: "Название 2",
        price: '3999',
        navPath: '/catalog/new-collection/2'
    },
    {
        img: Card,
        name: "Название 3",
        price: '3999',
        navPath: '/catalog/new-collection/3'
    }
]

export const mockManCatalog: TFlexBoxPartItem[] = [
    {
        img: CatalogCard,
        name: "Название 1",
        price: '3999',
        navPath: '/catalog/man/clasic/1'
    },
    {
        img: CatalogCard,
        name: "Название 2",
        price: '3999',
        navPath: '/catalog/man/clasic/2'
    },
    {
        img: CatalogCard,
        name: "Название 3",
        price: '3999',
        navPath: '/catalog/man/clasic/3'
    }
]

export const mockWomanCatalog: TFlexBoxPartItem[] = [
    {
        img: CatalogCard,
        name: "Название 1",
        price: '3999',
        navPath: '/catalog/woman/clasic/1'
    },
    {
        img: CatalogCard,
        name: "Название 2",
        price: '3999',
        navPath: '/catalog/woman/clasic/2'
    },
    {
        img: CatalogCard,
        name: "Название 3",
        price: '3999',
        navPath: '/catalog/woman/clasic/3'
    }
]
export const mockGridBoxPartItems = [
    { img: Clasic, navPath: '/catalog/woman/clasic' },
    { img: Sport, navPath: '/catalog/woman/sport' },
    { img: Knitted, navPath: '/catalog/woman/knitted' },
    { img: BlackMagnete, navPath: '/catalog/woman/black-magnete' },
    { img: Base, navPath: '/catalog/woman/base' }
]

export const mockAdvertisingBlock = [
    { img: CatalogCard },
    { img: CatalogCard },
    { img: CatalogCard },
]