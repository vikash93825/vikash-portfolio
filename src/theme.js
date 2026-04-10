import { createTheme } from "@mui/material/styles";
import { themeTokens as t } from "./themeTokens";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: t.neon,
      dark: t.cyanDark,
      contrastText: "#000000",
    },
    secondary: {
      main: t.textOnDark,
      contrastText: "#000000",
    },
    background: {
      default: t.darkBg,
      paper: t.darkPaper,
    },
    text: {
      primary: t.textOnDark,
      secondary: t.mutedOnDark,
    },
    divider: t.borderOnDark,
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: ['"Inter"', '"Quicksand"', "system-ui", "sans-serif"].join(","),
    h1: { fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.02em" },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600, letterSpacing: "0.06em" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: t.darkBg,
          color: t.textOnDark,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: `1px solid ${t.borderOnDark}`,
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.45)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(0, 0, 0, 0.55)",
          borderBottom: `1px solid ${t.borderOnDark}`,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          color: t.textOnDark,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: "rgba(248, 250, 252, 0.35)",
          color: t.textOnDark,
          "&:hover": {
            borderColor: t.neon,
            backgroundColor: "rgba(45, 212, 191, 0.08)",
          },
        },
        containedPrimary: {
          background: t.gradientVibrant,
          color: "#020617",
          "&:hover": {
            background: t.gradientVibrant,
            filter: "brightness(1.08)",
          },
        },
      },
    },
  },
});
