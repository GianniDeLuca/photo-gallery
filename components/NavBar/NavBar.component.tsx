import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export const NavBar = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
      mb={2}
    >
      <Typography onClick={() => router.push("/")}>Full Name</Typography>
      <MenuOutlinedIcon />
    </Box>
  );
};
