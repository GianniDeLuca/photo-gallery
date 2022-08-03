import { Box, Link } from "@mui/material";
import NextLink from "next/link";
import { FC } from "react";

interface Props {
  direction?: string;
}

export const Nav: FC<Props> = ({ direction = "row" }) => {
  return (
    <Box display="flex" flexDirection={direction === "row" ? "row" : "column"}>
      <NextLink href="/" passHref>
        <Link color="GrayText" fontSize="1.2rem" underline="hover" mr={4}>
          Work
        </Link>
      </NextLink>
      <NextLink href="/" passHref>
        <Link fontSize="1.2rem" underline="hover" color="GrayText">
          Contact
        </Link>
      </NextLink>
    </Box>
  );
};
