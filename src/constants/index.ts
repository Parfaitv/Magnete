import { TFlexBoxPartItem } from "@/components/FlexBoxPartPage/types"
import CatalogCard from '@/picture/CatalogCard.png'
import Clasic from '@/picture/Clasic.png'
import Base from '@/picture/Base.png'
import BlackMagnete from '@/picture/BlackMagnete.png'
import Knitted from '@/picture/Knitted.png'
import Sport from '@/picture/Sport.png'
import Card from '@/picture/Card.png'
import CardItem from '@/picture/CardItem.png'

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
        navPath: '/catalog/woman/clasic'
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
    { img: BlackMagnete, navPath: '/catalog/woman/blackMagnete' },
    { img: Base, navPath: '/catalog/woman/base' }
]

export const mockAdvertisingBlock = [CatalogCard, CatalogCard, CatalogCard]

export const mockCatalog = [
    {
        title: 'Мужская коллекция',
        navPath: '/catalog/man',
        items: [
            {
                img: CatalogCard,
                navPath: '/catalog/man/clasic'
            },
            {
                img: CatalogCard,
                navPath: '/catalog/man/base'
            },
            {
                img: CatalogCard,
                navPath: '/catalog/man/sport'
            }
        ],
    },
    {
        title: 'Женская коллекция',
        navPath: '/catalog/woman',
        items: [
            {
                img: CatalogCard,
                navPath: '/catalog/woman/clasic'
            },
            {
                img: CatalogCard,
                navPath: '/catalog/woman/base'
            },
            {
                img: CatalogCard,
                navPath: '/catalog/woman/blacMagnete'
            },
            {
                img: CatalogCard,
                navPath: '/catalog/woman/knitted'
            },
            {
                img: CatalogCard,
                navPath: '/catalog/woman/sport'
            }
        ],
    },
    {
        title: 'Новая коллекция',
        navPath: '/catalog/new-collection',
        items: [
            {
                img: CatalogCard,
                navPath: '/catalog/new-collection/1'
            },
            {
                img: CatalogCard,
                navPath: '/catalog/woman/new-collection/2'
            },
            {
                img: CatalogCard,
                navPath: '/catalog/woman/new-collection/3'
            },
            {
                img: CatalogCard,
                navPath: '/catalog/woman/new-collection/4'
            },
            {
                img: CatalogCard,
                navPath: '/catalog/woman/new-collection/5'
            },
            {
                img: CatalogCard,
                navPath: '/catalog/woman/new-collection/6'
            },
        ],
    },

]

export const mockCatalogVariant: TFlexBoxPartItem[] = [
    {
        img: CatalogCard,
        navPath: '/catalog/man/clasic'
    },
    {
        img: CatalogCard,
        navPath: '/catalog/man/base'
    },
    {
        img: CatalogCard,
        navPath: '/catalog/man/sport'
    }
]

export const mockWomanCatalogVariant: TFlexBoxPartItem[] = [
    {
        img: CatalogCard,
        navPath: '/catalog/woman/clasic'
    },
    {
        img: CatalogCard,
        navPath: '/catalog/woman/base'
    },
    {
        img: CatalogCard,
        navPath: '/catalog/woman/sport'
    },
    {
        img: CatalogCard,
        navPath: '/catalog/woman/knitted'
    },
    {
        img: CatalogCard,
        navPath: '/catalog/woman/blackMagnete'
    }
]

export const mockCatalogManView: TFlexBoxPartItem[] = [
    {
        img: CatalogCard,
        navPath: '/catalog/man/clasic/1'
    },
    {
        img: CatalogCard,
        navPath: '/catalog/man/clasic/2'
    },
    {
        img: CatalogCard,
        navPath: '/catalog/man/clasic/3'
    }
]

export const mockCatalogWomanView: TFlexBoxPartItem[] = [
    {
        img: CatalogCard,
        navPath: '/catalog/woman/clasic/1'
    },
    {
        img: CatalogCard,
        navPath: '/catalog/woman/clasic/2'
    },
    {
        img: CatalogCard,
        navPath: '/catalog/woman/clasic/3'
    }
]

type TProductCardItem = {
    images: string[];
    name: string;
    description: string;
    consist: string;
    article: string
    sizes: string[];
    price: number
}

export const mockProductCards: TProductCardItem[] = [
    {
        images: [CardItem, CardItem, CardItem],
        name: 'Name name name',
        description: 'Описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара.',
        consist: 'consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.',
        sizes: ['XXS', 'XS', 'S', 'M', 'L', 'Xl', 'XXL', 'XXXL'],
        article: 'Артикул товара: xxxxxxxx',
        price: 6000
    },
    {
        images: [CardItem, CardItem, CardItem],
        name: 'Name name name',
        description: 'Описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара.',
        consist: 'consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.',
        sizes: ['XXS', 'XS', 'S', 'M', 'L', 'Xl', 'XXL', 'XXXL'],
        article: 'Артикул товара: xxxxxxxx',
        price: 7000
    },
    {
        images: [CardItem, CardItem, CardItem],
        name: 'Name name name',
        description: 'description, description, description, description, description, description, description, description, description, description, description, description, description, description, description, description.',
        consist: 'consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.',
        sizes: ['XXS', 'XS', 'S', 'M', 'L', 'Xl', 'XXL', 'XXXL'],
        article: 'Артикул товара: xxxxxxxx',
        price: 8000
    },
]
