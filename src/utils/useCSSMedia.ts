import { useWindowSize } from "@uidotdev/usehooks"

export const useCSSMedia = () => {
    const { width } = useWindowSize()
    console.log(width);

    return width === null || width <= 768
}
