import { createTheme } from "@mui/material/styles";
import { themeTokens as t } from "./themeTokens";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: t.cyan,
      dark: t.cyanDark,
      contrastText: "#ffffff",
    },
    secondary: {
      main: t.navy,
      contrastText: "#ffffff",
    },
    background: {
      default: t.bg,
      paper: t.paper,
    },
    text: {
      primary: t.navy,
      secondary: t.navyMuted,
    },
    divider: t.border,
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: ['"Quicksand"', "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial"].join(
      ","
    ),
    h1: { fontFamily: '"Varela", sans-serif', letterSpacing: "1px" },
    h2: { fontFamily: '"Varela", sans-serif', letterSpacing: "1px" },
    h3: { fontFamily: '"Varela", sans-serif', letterSpacing: "1px" },
    h4: { fontFamily: '"Varela", sans-serif', letterSpacing: "1px" },
    h5: { fontFamily: '"Varela", sans-serif', letterSpacing: "1px" },
    h6: { fontFamily: '"Varela", sans-serif', letterSpacing: "1px" },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: t.bg,
          color: t.navy,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: `1px solid ${t.border}`,
          boxShadow: "0 8px 30px rgba(11, 31, 58, 0.06)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(255, 255, 255, 0.9)",
          borderBottom: `1px solid ${t.border}`,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          color: t.navy,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: t.borderStrong,
          color: t.navy,
          "&:hover": {
            borderColor: t.cyan,
            backgroundColor: "rgba(43, 184, 224, 0.06)",
          },
        },
        containedPrimary: {
          background: t.gradientVibrant,
          "&:hover": {
            background: t.gradientVibrant,
            filter: "brightness(1.04)",
          },
        },
      },
    },
  },
});
