import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/router";

import { Nav } from "components/Nav/Nav.component";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export const NavBar = () => {
  const router = useRouter();
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={2}
    >
      <Typography onClick={() => router.push("/")}>Full Name</Typography>
      {isSmallDevice ? <Nav /> : <MenuOutlinedIcon />}
    </Box>
  );
};
