import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    body1: {
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.9rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "2rem",
      },
    },
  },
});
