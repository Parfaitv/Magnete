import { CSSProperties } from "react";

// const SrcType = {
//     img: 'img',
//     video: 'video',
// } as const;

// type NavMenu = {
//     id: string;
//     sort: number;
//     title: string;
//     path?: string; //
//     childIds?: string[];
// };

// type GridBoxType = {
//     variant: keyof typeof SrcType;
//     url: string;
//     title: string;
//     navPath: string;
//     positionOfTitle: {
//         vertical: 'top' | 'bottom';
//         horizontal: 'left' | 'right';
//     };
//     fontSize: number;
//     top?: number;
//     bottom?: number;
//     left?: number;
//     right?: number;
// };

// type StartPartOfMain = {
//     type: 'start';
//     variant: keyof typeof SrcType;
//     url: string;
//     placeholder?: string;
// };

// type FlexBoxPartOfMain = {
//     type: 'flex_box';
//     title: string;
//     goods: Array<{
//         variant: keyof typeof SrcType;
//         url: string;
//         name?: string; // Текст под фоткой
//         price?: string;
//         navPath?: string;
//         positionOfTitle?: {
//             vertical: 'top' | 'bottom';
//             horizontal: 'left' | 'right';
//         };
//         title?: string; // Текст на фотке
//         fontSize: number;
//         top?: number;
//         bottom?: number;
//         left?: number;
//         right?: number;
//     }>;
// };

// type GridBoxPartOfMain = {
//     type: 'grid_box';
//     TopLeftBigImg: GridBoxType; // Сверху левая, самая большая
//     TopCentralSmallImg: GridBoxType; // Сверху центральная, мелкая
//     TopRightSmallImg: GridBoxType; // Сверху правая, мелкая
//     BottomLeftSmallImg: GridBoxType; // Снизу слева, самая маленькая
//     BottomRightBigImage: GridBoxType; // Снизу справа, самая большая
// };

// type PartOfMain = StartPartOfMain | GridBoxPartOfMain | FlexBoxPartOfMain;

// type GoodsDetail = {
//     id: string;
//     title: string;
//     price?: string; // Если не был передан, отображается текст, "Нет в на-личи"
//     vendorCode?: string;
//     description?: string;
//     composition?: string[];
//     size?: string[];
//     images: Array<{
//         variant: keyof typeof SrcType;
//         url: string;
//     }>;
// };

// type AboutUs = {
//     title: string;
//     description: string;
//     images: Array<{
//         variant: keyof typeof SrcType;
//         url: string;
//     }>;
// };

// type obj = {
//     menus: Record<NavMenu['id'], NavMenu>;
//     mainScreen: Array<PartOfMain>;
//     catalog: Array<{
//         items: FlexBoxPartOfMain[];
//         type: 'goods' | 'advertising';
//     }>;
//     goodsDetail: Record<GoodsDetail['id'], GoodsDetail>;
// };

// //examples
// const Catalog: NavMenu = {
//     id: 'catalog',
//     title: 'Каталог',
//     path: 'main/catalog',
//     childIds: ['new_collection', 'women_collection', 'man_collection'],
//     sort: 0,
// };

// const NewCollection: NavMenu = {
//     id: 'new_collection',
//     title: 'Новая коллекция',
//     path: 'main/new_collection',
//     sort: 1,
// };

// const Menu: Record<NavMenu['id'], NavMenu> = {
//     catalog: Catalog,
//     new_collection: NewCollection,
// };

// Component types
export type TIconProps = {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  color?: CSSProperties["color"];
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};
