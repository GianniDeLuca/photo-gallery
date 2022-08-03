import { Nav } from "components/Nav/Nav.component";

import { Box, Drawer } from "@mui/material";

export const SideBar = () => {
  return (
    <Drawer
      anchor="right"
      open={true}
      //   onClose={}
    >
      <Box p={5}>
        <Nav direction="column" />
      </Box>
    </Drawer>
  );
};
