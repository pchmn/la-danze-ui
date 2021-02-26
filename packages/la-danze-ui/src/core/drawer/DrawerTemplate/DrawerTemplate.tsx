import { DrawerContext } from '@la-danze-ui/core/drawer/DrawerContext/DrawerContext';
import { makeStyles, Theme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import invariant from 'tiny-invariant';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing(4)} ${theme.spacing(2)}`
    },
    height: 'fit-content'
  }
}));

export function DrawerTemplate({ children }: React.PropsWithChildren<React.ReactNode>): JSX.Element {
  const classes = useStyles();
  const matches = useMediaQuery((theme: Theme) => {
    invariant(theme, `You can't use <DrawerTemplate> outside <Theme> or material-ui <Theme.Provider>`);
    return theme.breakpoints.down('md');
  });
  let drawerContainer: any;
  let mainContainer: any;
  getContainers();

  function getContainers() {
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        if (child.type === DrawerContainer) {
          drawerContainer = child;
        } else if (child.type === MainContainer) {
          mainContainer = child;
        } else {
          invariant(false, `<DrawerTemplate> can only have <DrawerContainer> and <MainContainer> as children`);
        }
      }
      if (drawerContainer && mainContainer) {
        return;
      }
    });

    invariant(drawerContainer, `<DrawerTemplate> must contains a <DrawerContainer>`);
    invariant(mainContainer, `<DrawerTemplate> must contains a <MainContainer>`);
  }

  return (
    <DrawerContext.Provider value="drawerTemplate">
      <div className={`${classes.root}`}>
        <CssBaseline />
        {drawerContainer}
        <main className={classes.content}>
          {matches && <div className={classes.toolbar} aria-label="mobile toolbar" />}
          {mainContainer}
        </main>
      </div>
    </DrawerContext.Provider>
  );
}

export function DrawerContainer({ children }: React.PropsWithChildren<React.ReactNode>): JSX.Element {
  return <DrawerContext.Provider value="drawerContainer">{children}</DrawerContext.Provider>;
}

export function MainContainer({ children }: React.PropsWithChildren<React.ReactNode>): JSX.Element {
  return <>{children}</>;
}
