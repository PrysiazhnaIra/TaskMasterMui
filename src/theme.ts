import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4caf50", // Зелений
      light: "#81c784",
      dark: "#388e3c",
      contrastText: "#000000",
    },

    secondary: {
      main: "#ff9800", // Помаранчевий
      light: "#ffb74d",
      dark: "#f57c00",
      contrastText: "#000000",
    },
    error: { main: "#f44336" }, // Червоний
    warning: { main: "#ffeb3b" }, // Жовтий
    success: { main: "#4caf50" }, // Зелений
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#81c784", // Світло-зелений
      dark: "#4caf50",
      contrastText: "ffffff",
    },
    secondary: {
      main: "#ffb74d", // Світло-помаранчевий
      dark: "#ff9800",
      contrastText: "ffffff",
    },

    background: {
      default: "#121212", // Колір фону
      paper: "#1e1e1e", // Колір карток/паперу
    },
  },
});
