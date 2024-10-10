import { Box } from "@mui/material";
import { ComponentProps } from "react";

type GridBoxProps = ComponentProps<typeof Box>;

export const GridBox = (props: GridBoxProps) => (
  <Box display="grid" {...props} />
);
