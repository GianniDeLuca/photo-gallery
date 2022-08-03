import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export const NavBar = () => {
  const router = useRouter();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={2}
    >
      <Typography onClick={() => router.push("/")}>Full Name</Typography>
      <MenuOutlinedIcon />
    </Box>
  );
};
