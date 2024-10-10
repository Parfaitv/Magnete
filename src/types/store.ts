import { TFlexBoxPartItem } from "@/components/FlexBoxPartPage/types"

export type StartPageCatalog = {
    header: {
        title: string
        navPath: string
    }
    items: TFlexBoxPartItem[]
}

export type Variant = "man" | "woman"

export type ManView = "base" | "clasic" | "sport"

export type WomanView = ManView | "knitted" | "blackMagnete"

export type ViewProps<Keys extends string> = {
    [key in Keys]: CatalogSecondaryProps
}

export type CatalogSecondaryProps = {
    title: string
    items: {
        img: string
        navPath: string
    }[]
}

export type CatalogPageProps = { navPath: string } & CatalogSecondaryProps

export type SecondaryPages = {
    title: string
    description: string
    advertisingBlock: string[]
}

export type ProductPageItem = {
    id: string
    images: string[]
    name: string
    description: string
    consist: string
    article: string
    sizes: string[]
    price: number
}

export type ProductPageProps = {
    man: Record<ManView, ProductPageItem[]>
    woman: Record<WomanView, ProductPageItem[]>
    newCollection: ProductPageItem[]
}

export type StoreState = {
    startPage: {
        mainPage: string
        newCollection: StartPageCatalog
        womanCatalog: StartPageCatalog
        manCatalog: StartPageCatalog
    },
    catalogPage: CatalogPageProps[],
    catalogVariantPage: {
        man: CatalogSecondaryProps
        woman: CatalogSecondaryProps
        newCollection: CatalogSecondaryProps
    }
    catalogViewPage: {
        man: ViewProps<ManView>
        woman: ViewProps<WomanView>
    }
    deliveryPage: SecondaryPages
    aboutPage: SecondaryPages
    productPage: ProductPageProps
}

export type TUseParams = {
    variant: Variant
    view: WomanView | ManView
    id: string
}