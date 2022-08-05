import { Box } from "@mui/material";
import { FC } from "react";

interface Props {
  direction?: string;
  children: React.ReactNode;
}

export const Nav: FC<Props> = ({ direction = "row", children }) => {
  return (
    <nav>
      <Box
        display="flex"
        flexDirection={direction === "row" ? "row" : "column"}
      >
        {children}
      </Box>
    </nav>
  );
};
