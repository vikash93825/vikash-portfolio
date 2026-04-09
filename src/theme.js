import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#06b6d4",
    },
    secondary: {
      main: "#7c3aed",
    },
    background: {
      default: "#070a10",
      paper: "rgba(255, 255, 255, 0.06)",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.92)",
      secondary: "rgba(255, 255, 255, 0.68)",
    },
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: ['"Quicksand"', "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial"].join(
      ","
    ),
    h1: { fontFamily: '"Varela", sans-serif', letterSpacing: "2px" },
    h2: { fontFamily: '"Varela", sans-serif', letterSpacing: "2px" },
    h3: { fontFamily: '"Varela", sans-serif', letterSpacing: "2px" },
    h4: { fontFamily: '"Varela", sans-serif', letterSpacing: "2px" },
    h5: { fontFamily: '"Varela", sans-serif', letterSpacing: "2px" },
    h6: { fontFamily: '"Varela", sans-serif', letterSpacing: "2px" },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.35)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(7,10,16,0.6)",
          borderBottom: "1px solid rgba(255,255,255,0.10)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        },
      },
    },
  },
});

