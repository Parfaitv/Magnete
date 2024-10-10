import { CSSProperties } from "react";

export type TFlexBoxPartItem = {
  img: string;
  name?: string;
  price?: string;
  navPath: string;
};

export type FlexBoxPartItemProps = TFlexBoxPartItem & {
  height: CSSProperties["height"];
};
