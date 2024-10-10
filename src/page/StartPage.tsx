import { FlexBox, FlexBoxParts, GridBox, GridBoxPartPage, Image } from "@/components"
import { useAppSelector } from "@/store"

export const StartPage = () => {
    const { mainPage, manCatalog, newCollection, womanCatalog } = useAppSelector(((state) => state.reducer.startPage))

    return (
        <GridBox gap='3rem'>
            <FlexBox width='100%' height='100%'>
                <Image alt="Основная картинка" src={mainPage} />
            </FlexBox>
            <FlexBoxParts
                header={newCollection.header}
                items={newCollection.items}
            />
            <GridBoxPartPage header={womanCatalog.header} items={womanCatalog.items} />
            <FlexBoxParts header={manCatalog.header} items={manCatalog.items} />
        </GridBox>
    )
}
