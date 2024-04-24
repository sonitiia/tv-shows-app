import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material";
import "@fontsource/montserrat";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#191919",
    },
    primary: {
      main: "#000000",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
  spacing: 4,
  shape: {
    borderRadius: 4,
    containerBorderRadius: 1,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          "*": {
            boxSizing: "border-box",
            padding: 0,
            margin: 0,
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          padding: "0px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "fit-content",
          height: "fit-content",
          borderRadius: 0,
          textTransform: "none",
          fontWeight: "bold",
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiLink: {
      styleOverrides: {
        root: { width: "fit-content" },
      },
    },
  },
});

const MuiTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiTheme;
