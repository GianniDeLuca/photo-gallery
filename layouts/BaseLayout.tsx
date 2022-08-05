import { FC } from "react";
import { UIProvider } from "contexts/ui/ui.provider";

import { NavBar } from "components/NavBar/NavBar.component";
import { SideBar } from "components/SideBar/SideBar.component";

import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <UIProvider>
      <Box p={3} maxWidth={1240} mx="auto">
        <NavBar />
        <SideBar />
        {children}
      </Box>
    </UIProvider>
  );
};
