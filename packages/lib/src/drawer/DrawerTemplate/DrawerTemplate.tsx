import { makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
      paddingTop: theme.spacing(4)
    },
    height: 'fit-content'
  }
}));

export function DrawerTemplate({ children }: React.PropsWithChildren<React.ReactNode>): JSX.Element {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width: 600px)');
  const { drawerContainer, mainContainer } = getContainers();

  function getContainers() {
    let drawerContainer: any;
    let mainContainer: any;

    React.Children.forEach(children, child => {
      if (React.isValidElement(child)) {
        if (child.type === DrawerContainer) {
          drawerContainer = child;
        } else if (child.type === MainContainer) {
          mainContainer = child;
        }
      }
      if (drawerContainer && mainContainer) {
        return;
      }
    });

    if (!drawerContainer || !mainContainer) {
      throw new Error('DrawerTemplate must have a DrawerContainer and a MainContainer');
    }
    return { drawerContainer, mainContainer };
  }

  return (
    <>
      <div className={`${classes.root}`}>
        <CssBaseline />
        {drawerContainer}
        <main className={classes.content}>
          {matches &&
            <div className={classes.toolbar} />
          }
          {mainContainer}
        </main>
      </div>
    </>
  );
}

export function DrawerContainer({ children }: React.PropsWithChildren<React.ReactNode>): JSX.Element {
  return <>{children}</>;
}

export function MainContainer({ children }: React.PropsWithChildren<React.ReactNode>): JSX.Element {
  return <>{children}</>;
}