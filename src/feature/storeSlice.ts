import { createSlice } from '@reduxjs/toolkit';
import mainPage from '@/picture/mainPage.png'
import { mockCatalog, mockCatalogManView, mockCatalogVariant, mockCatalogWomanView, mockCollection, mockGridBoxPartItems, mockManCatalog, mockNewCollectionCatalogVariant, mockProductCards, mockWomanCatalogVariant } from '@/constants';
import CatalogCard from '@/picture/CatalogCard.png'
import { StoreState } from '@/types';

const initialState: StoreState = {
    startPage: {
        mainPage,
        newCollection: {
            header: { title: 'Новая коллекция', navPath: '/catalog/newCollection' },
            items: mockCollection,
        },
        womanCatalog: {
            header: { title: "Каталог/Женская одежда", navPath: '/catalog/woman' },
            items: mockGridBoxPartItems
        },
        manCatalog: {
            header: { title: 'Мужская коллекция', navPath: '/catalog/man' },
            items: mockManCatalog
        },
    },
    catalogPage: mockCatalog,
    catalogVariantPage: {
        man: {
            items: mockCatalogVariant,
            title: 'Мужская коллекция'
        },
        woman: {
            items: mockWomanCatalogVariant,
            title: 'Женская коллекция'
        },
        newCollection: {
            items: mockNewCollectionCatalogVariant,
            title: 'Новая коллекция'
        },
    },
    catalogViewPage: {
        man: {
            clasic: {
                items: mockCatalogManView.clasic,
                title: 'Классика'
            },
            base: {
                items: mockCatalogManView.base,
                title: 'База'
            },
            sport: {
                items: mockCatalogManView.sport,
                title: 'Спорт'
            },
        },
        woman: {
            clasic: {
                items: mockCatalogWomanView.clasic,
                title: 'Классика'
            },
            base: {
                items: mockCatalogWomanView.base,
                title: 'База'
            },
            sport: {
                items: mockCatalogWomanView.sport,
                title: 'Спорт'
            },
            knitted: {
                items: mockCatalogWomanView.knitted,
                title: 'Трикотаж'
            },
            blackMagnete: {
                items: mockCatalogWomanView.blackMagnete,
                title: 'Black Magnete'

            }
        }
    },
    deliveryPage: {
        advertisingBlock: [CatalogCard, CatalogCard, CatalogCard],
        description: 'Инструкция, Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция',
        title: 'Доставка и оплата'
    },
    aboutPage: {
        advertisingBlock: [CatalogCard, CatalogCard, CatalogCard],
        description: 'Описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда',
        title: 'О бренде'
    },
    productPage: {
        man: {
            base: mockProductCards,
            clasic: mockProductCards,
            sport: mockProductCards
        },
        woman: {
            base: mockProductCards,
            clasic: mockProductCards,
            sport: mockProductCards,
            blackMagnete: mockProductCards,
            knitted: mockProductCards
        },
        newCollection: mockProductCards
    }
};

const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {}
});

export const { reducer } = storeSlice