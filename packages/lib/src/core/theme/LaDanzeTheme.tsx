import { ThemeProvider, unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";
import React from 'react';
import "./theme.scss";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#E74C3C',
    },
    secondary: {
      main: '#FFB74D',
    },
  },
  typography: {
    fontFamily: [
      '"Work Sans"',
      '"Open Sans"',
      'sans-serif',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial'
    ].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export function LaDanzeTheme({ children }: React.PropsWithChildren<React.ReactNode>) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
