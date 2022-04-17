import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
    palette: {
      divider: string;
      primary: {
        light: string;
        main: string;
        rating: string;
        contrastText: string;
      };
      secondary: {
        light: string;
        main: string;
        contrastText: string;
      };
    };
  }
}

export const theme = createTheme({
  palette: {
    divider: "#d1d7dc",
    primary: { light: "#cec0fc", main: "#5624d0", contrastText: "#1c1d1f" },
    secondary: {
      light: "#f3ca8c",
      main: "#e59819",
      contrastText: "#6a6f73",
    },
  },
});
