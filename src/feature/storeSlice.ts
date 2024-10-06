import { createSlice } from '@reduxjs/toolkit';
import mainPage from '@/picture/mainPage.png'
import { mockCatalog, mockCatalogManView, mockCatalogVariant, mockCatalogWomanView, mockCollection, mockGridBoxPartItems, mockManCatalog, mockWomanCatalogVariant } from '@/constants';
import CatalogCard from '@/picture/CatalogCard.png'
import { StoreState } from '@/types';


const initialState: StoreState = {
    startPage: {
        mainPage,
        newCollection: {
            header: { title: 'Новая коллекция', navPath: '/catalog/new-collection' },
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
    },
    catalogViewPage: {
        man: {
            clasic: {
                items: mockCatalogManView,
                title: 'Классика'
            },
            base: {
                items: mockCatalogManView,
                title: 'База'
            },
            sport: {
                items: mockCatalogManView,
                title: 'Спорт'
            },
        },
        woman: {
            clasic: {
                items: mockCatalogWomanView,
                title: 'Классика'
            },
            base: {
                items: mockCatalogWomanView,
                title: 'База'
            },
            sport: {
                items: mockCatalogWomanView,
                title: 'Спорт'
            },
            knitted: {
                items: mockCatalogWomanView,
                title: 'Трикотаж'
            },
            blackMagnete: {
                items: mockCatalogWomanView,
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
};

const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {}
});

export const { reducer } = storeSlice