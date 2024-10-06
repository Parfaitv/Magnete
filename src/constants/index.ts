import { TFlexBoxPartItem } from "@/components/FlexBoxPartPage/types"
import CatalogCard from '@/picture/CatalogCard.png'
import Clasic from '@/picture/Clasic.png'
import Base from '@/picture/Base.png'
import BlackMagnete from '@/picture/BlackMagnete.png'
import Knitted from '@/picture/Knitted.png'
import Sport from '@/picture/Sport.png'
import Card from '@/picture/Card.png'
import CardItem from '@/picture/CardItem.png'
import { ManView, ProductPageItem, WomanView } from "@/types"

export const mockCollection: TFlexBoxPartItem[] = [
    {
        img: Card,
        name: "Название 1",
        price: '3999',
        navPath: '/catalog/newCollection/1'
    },
    {
        img: Card,
        name: "Название 2",
        price: '3999',
        navPath: '/catalog/newCollection/2'
    },
    {
        img: Card,
        name: "Название 3",
        price: '3999',
        navPath: '/catalog/newCollection/3'
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
                navPath: '/catalog/woman/blackMagnete'
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
        navPath: '/catalog/newCollection',
        items: [
            {
                img: CatalogCard,
                navPath: '/catalog/newCollection/1'
            },
            {
                img: CatalogCard,
                navPath: '/catalog/woman/newCollection/2'
            },
            {
                img: CatalogCard,
                navPath: '/catalog/woman/newCollection/3'
            }
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

export const mockNewCollectionCatalogVariant: TFlexBoxPartItem[] = [
    {
        img: CatalogCard,
        navPath: '/catalog/newCollection/1'
    },
    {
        img: CatalogCard,
        navPath: '/catalog/newCollection/2'
    },
    {
        img: CatalogCard,
        navPath: '/catalog/newCollection/3'
    },
]

export const mockCatalogManView: Record<ManView, TFlexBoxPartItem[]> = {
    base: [
        {
            img: CatalogCard,
            navPath: '/catalog/man/base/1'
        },
        {
            img: CatalogCard,
            navPath: '/catalog/man/base/2'
        },
        {
            img: CatalogCard,
            navPath: '/catalog/man/base/3'
        }
    ],
    clasic: [
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
    ],
    sport: [
        {
            img: CatalogCard,
            navPath: '/catalog/man/sport/1'
        },
        {
            img: CatalogCard,
            navPath: '/catalog/man/sport/2'
        },
        {
            img: CatalogCard,
            navPath: '/catalog/man/sport/3'
        }
    ]
}

export const mockCatalogWomanView: Record<WomanView, TFlexBoxPartItem[]> = {
    base: [
        {
            img: CatalogCard,
            navPath: '/catalog/woman/base/1'
        },
        {
            img: CatalogCard,
            navPath: '/catalog/woman/base/2'
        },
        {
            img: CatalogCard,
            navPath: '/catalog/woman/base/3'
        }
    ],
    clasic: [
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
    ],
    sport: [
        {
            img: CatalogCard,
            navPath: '/catalog/woman/sport/1'
        },
        {
            img: CatalogCard,
            navPath: '/catalog/woman/sport/2'
        },
        {
            img: CatalogCard,
            navPath: '/catalog/woman/sport/3'
        }
    ],
    blackMagnete: [
        {
            img: CatalogCard,
            navPath: '/catalog/woman/blackMagnete/1'
        },
        {
            img: CatalogCard,
            navPath: '/catalog/woman/blackMagnete/2'
        },
        {
            img: CatalogCard,
            navPath: '/catalog/woman/blackMagnete/3'
        }
    ],
    knitted: [
        {
            img: CatalogCard,
            navPath: '/catalog/woman/knitted/1'
        },
        {
            img: CatalogCard,
            navPath: '/catalog/woman/knitted/2'
        },
        {
            img: CatalogCard,
            navPath: '/catalog/woman/knitted/3'
        }
    ]
}

export const mockProductCards: ProductPageItem[] = [
    {
        id: '1',
        images: [CardItem, CardItem, CardItem],
        name: 'Название 1',
        description: 'Описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара.',
        consist: 'consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.',
        sizes: ['XXS', 'XS', 'S', 'M', 'L', 'Xl', 'XXL', 'XXXL'],
        article: 'Артикул товара: xxxxxxxx',
        price: 6000
    },
    {
        id: '2',
        images: [CardItem, CardItem, CardItem],
        name: 'Название 2',
        description: 'Описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара.',
        consist: 'consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.',
        sizes: ['XXS', 'XS', 'S', 'M', 'L', 'Xl', 'XXL', 'XXXL'],
        article: 'Артикул товара: xxxxxxxx',
        price: 7000
    },
    {
        id: '3',
        images: [CardItem, CardItem, CardItem],
        name: 'Название 3',
        description: 'description, description, description, description, description, description, description, description, description, description, description, description, description, description, description, description.',
        consist: 'consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.',
        sizes: ['XXS', 'XS', 'S', 'M', 'L', 'Xl', 'XXL', 'XXXL'],
        article: 'Артикул товара: xxxxxxxx',
        price: 8000
    },
]
