import { Box, Typography, useMediaQuery, useTheme, Link } from "@mui/material";
import { useRouter } from "next/router";
import NextLink from "next/link";

import { Nav } from "components/Nav/Nav.component";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export const NavBar = () => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={2}
    >
      <NextLink href="/" passHref>
        <Link underline="none" color="GrayText">
          Full Name
        </Link>
      </NextLink>
      {isSmallDevice ? <Nav /> : <MenuOutlinedIcon />}
    </Box>
  );
};
