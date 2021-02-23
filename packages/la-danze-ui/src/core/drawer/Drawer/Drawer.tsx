import { useOpenDrawer } from '@la-danze-ui/core/drawer/hooks/useOpenDrawer.hook';
import { makeStyles, Theme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import MuiDrawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import React, { useContext } from 'react';
import invariant from 'tiny-invariant';
import { DrawerContext } from '../DrawerContext/DrawerContext';

export interface DrawerProps {
  logo: string;
  title: string;
}

const drawerWidth = 290;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    padding: '2px 0',
    borderRadius: '0',
    background: theme.palette.background.paper,
    '& .title': {
      display: 'inline-block',
      '& img': {
        width: '32px',
        verticalAlign: 'middle',
        marginRight: '12px'
      },
      '& span': {
        fontWeight: 700,
        verticalAlign: 'middle'
      }
    }
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
    transition: 'all 0.225s',
    '& svg': {
      verticalAlign: 'middle'
    }
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    '@media (max-width: 380px)': {
      width: '75%'
    }
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(9) + 1,
    [theme.breakpoints.up('md')]: {
      width: '85px'
    }
  },
  toolbar: {
    height: '150px',
    position: 'relative',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    [theme.breakpoints.down('md')]: {
      height: '90px'
    }
  },
  logo: {
    position: 'absolute',
    top: '20px',
    paddingLeft: '21.5px',
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    '&.logoOpen': {
      top: '50%',
      transform: 'translateY(-50%)'
    },
    [theme.breakpoints.down('md')]: {
      top: '50%',
      transform: 'translateY(-50%)'
    },
    '& img': {
      width: '42px',
      verticalAlign: 'middle',
      marginRight: '21.5px',
      [theme.breakpoints.down('md')]: {
        width: '32px',
        marginRight: '12px'
      }
    },
    '& span': {
      verticalAlign: 'middle',
      fontWeight: 700
    }
  },
  toggleButton: {
    position: 'absolute',
    top: '85px',
    left: '50%',
    transform: 'translateX(-25%)',
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '&.toggleButtonOpen': {
      transform: 'rotate(180deg) translateY(50%)',
      right: '18.5px',
      left: '230px',
      top: '50%'
    }
  },
  listItem: {
    padding: '6px 10px',
    margin: '0 20px 10px 20px',
    width: 'auto',
    borderRadius: '6px',
    '& .MuiListItemIcon-root': {
      color: theme.palette.grey[400]
    },
    '& .MuiListItemText-root span': {
      fontSize: '0.95rem',
      fontWeight: 500,
      color: theme.palette.grey[400]
    },
    '&.active': {
      '& .MuiListItemIcon-root': {
        color: theme.palette.primary.main
      },
      '& .MuiListItemText-root span': {
        color: theme.palette.primary.main
      }
    }
  },
  tooltip: {
    fontSize: '1rem',
    marginLeft: '30px'
  }
}));

export function Drawer({ children, logo, title }: React.PropsWithChildren<DrawerProps>): JSX.Element {
  const matches = useMediaQuery((theme: Theme) => {
    invariant(theme, `You can't use <Drawer> outside <LaDanzeTheme> or material-ui <Theme.Provider>`);
    return theme.breakpoints.down('md');
  });
  invariant(
    useContext(DrawerContext) === 'drawerContainer',
    `You can't use <Drawer> outside a <DrawerContainer>`
  );
  const [open, setOpen] = useOpenDrawer();
  const classes = useStyles();

  function toggleDrawer() {
    setOpen(!open);
  }

  function DrawerContent() {
    return (
      <DrawerContext.Provider value="drawer">
        <div className={classes.toolbar}>
          <div className={`${classes.logo} ${open ? 'logoOpen' : ''}`}>
            <img src={logo} alt="logo" />
            <span>{title}</span>
          </div>
          <Hidden mdDown implementation="css">
            <IconButton
              color="inherit"
              aria-label="toggle drawer"
              onClick={toggleDrawer}
              edge="start"
              className={`${classes.toggleButton} ${open ? 'toggleButtonOpen' : ''}`}
            >
              <SvgIcon>
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
              </SvgIcon>
            </IconButton>
          </Hidden>
        </div>
        {children}
      </DrawerContext.Provider>
    );
  }

  return (
    <>
      {matches ? (
        <>
          <AppBar position="fixed" className={classes.appBar} elevation={1}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="toggle mobile drawer"
                edge="start"
                onClick={toggleDrawer}
                className={classes.menuButton}
              >
                <svg aria-label="Menu" width="30" height="30" viewBox="0 0 30 30" role="img" focusable="false">
                  <title>Menu</title>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M4 7h22M4 15h22M4 23h22"
                  ></path>
                </svg>
              </IconButton>
              <div className="title">
                <img src={logo} alt="logo" />
                <span>{title}</span>
              </div>
            </Toolbar>
          </AppBar>

          <SwipeableDrawer
            aria-label="drawer"
            container={window?.document.body}
            variant="temporary"
            anchor={'left'}
            open={open}
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })}
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {DrawerContent()}
          </SwipeableDrawer>
        </>
      ) : (
        <MuiDrawer
          aria-label="drawer"
          variant="permanent"
          className={`${clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}`}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
          }}
        >
          {DrawerContent()}
        </MuiDrawer>
      )}
    </>
  );
}
