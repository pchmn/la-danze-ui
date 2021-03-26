import { createMuiTheme, darkScrollbar, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';
import React from 'react';
import '../theme.scss';

export const theme = createMuiTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E74C3C'
    },
    secondary: {
      main: '#FFB74D'
    },
    background: {
      default: '#18191b',
      paper: '#242527'
    },
    error: {
      main: '#f48536'
    }
  },
  typography: {
    fontFamily: [
      'Segoe UI',
      'Work Sans',
      'Open Sans',
      'sans-serif',
      'BlinkMacSystemFont',
      'Roboto',
      'Helvetica Neue',
      'Arial'
    ].join(',')
  },
  shape: {
    borderRadius: 7
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'initial'
        },
        sizeMedium: {
          fontSize: '0.95rem',
          padding: '6px 20px'
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
        fullWidth: true,
        variant: 'outlined'
      }
    },
    MuiDrawer: {
      styleOverrides: {
        // Name of the slot
        paper: {
          padding: '0',
          borderRadius: '0',
          width: 'inherit'
        },
        paperAnchorDockedLeft: {
          borderRight: 'none',
          boxShadow:
            '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar()
      }
    }
  }
});

export function Theme({ children }: React.PropsWithChildren<React.ReactNode>): JSX.Element {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
