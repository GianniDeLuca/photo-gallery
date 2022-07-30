import { Box } from "@mui/material";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const BaseLayout: FC<Props> = ({ children }) => {
  return <Box m={3}>{children}</Box>;
};
