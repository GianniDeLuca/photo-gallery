import NextLink from "next/link";
import { Link } from "@mui/material";
import { FC } from "react";

type IUnderline = "none" | "hover" | "always" | undefined;

interface Props {
  href: string;
  text: string;
  underline?: IUnderline;
  color?: string;
  mr?: number;
  mb?: number;
}

export const NavLink: FC<Props> = ({
  href,
  text,
  underline = "none",
  mr,
  mb,
}) => {
  return (
    <>
      <NextLink href={href} passHref>
        <Link underline={underline} mr={mr} mb={mb}>
          {text}
        </Link>
      </NextLink>
    </>
  );
};
