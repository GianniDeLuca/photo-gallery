import { Box, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export const NavBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
      mb={2}
    >
      <Typography>Full Name</Typography>
      <MenuOutlinedIcon />
    </Box>
  );
};
