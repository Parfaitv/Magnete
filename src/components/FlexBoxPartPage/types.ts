import { CSSProperties } from "react";
import { StartPageCatalog, TFlexBoxPartItem } from "@/types";

export type FlexBoxPartItemProps = TFlexBoxPartItem & {
  height: CSSProperties["height"];
};

export type FlexBoxPartsProps = StartPageCatalog & {
  height?: CSSProperties["height"];
};
