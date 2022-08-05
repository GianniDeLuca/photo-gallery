import { useContext } from "react";
import NextLink from "next/link";
import { UIContext } from "contexts/ui/ui.context";

import { Box, useMediaQuery, useTheme, Link } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { Nav } from "components/Nav/Nav.component";
import { NavLink } from "components/NavLink/NavLink.component";

export const NavBar = () => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.up("sm"));
  const { toggleSideBar } = useContext(UIContext);

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
      {isSmallDevice ? (
        <Nav>
          <NavLink href="/" text="Work" mr={3} />
          <NavLink href="/contact" text="Contact" />
        </Nav>
      ) : (
        <MenuOutlinedIcon onClick={() => toggleSideBar(true)} />
      )}
    </Box>
  );
};
