import { Nav } from "components/Nav/Nav.component";

import { Box, Drawer } from "@mui/material";
import { useContext } from "react";
import { UIContext } from "contexts/ui/ui.context";

export const SideBar = () => {
  const { openSideBar, toggleSideBar } = useContext(UIContext);
  return (
    <Drawer
      anchor="right"
      open={openSideBar}
      onClose={() => toggleSideBar(false)}
    >
      <Box p={5}>
        <Nav direction="column" />
      </Box>
    </Drawer>
  );
};
