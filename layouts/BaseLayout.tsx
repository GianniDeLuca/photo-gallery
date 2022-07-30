import { FC } from "react";

import { NavBar } from "components/NavBar/NavBar.component";

import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <Box m={3}>
      <NavBar />
      {children}
    </Box>
  );
};
