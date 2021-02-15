import { AnimateLink, AnimationKey } from "@la-danze-ui/animation";
import { useIsMount, useLaDanzeDrawer } from "@la-danze-ui/core";
import { makeStyles, Theme } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import clsx from 'clsx';
import React, { useState } from "react";

export interface LaDanzeDrawerProps {
  logo: string;
  title: string;
}

const drawerWidth = 290;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
      display: 'none',
    },
    transition: 'all 0.225s',
    '& svg': {
      verticalAlign: 'middle'
    }
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    '@media (max-width: 380px)': {
      width: '75%'
    },
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(9) + 1,
    [theme.breakpoints.up('md')]: {
      width: '85px',
    },
  },
  toolbar: {
    height: '150px',
    position: 'relative',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    [theme.breakpoints.down('md')]: {
      height: '90px',
    },
  },
  logo: {
    position: 'absolute',
    top: '20px',
    paddingLeft: '21.5px',
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
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
        marginRight: '12px',
      },
    },
    '& span': {
      verticalAlign: 'middle',
      fontWeight: 700
    },
  },
  toggleButton: {
    position: 'absolute',
    top: '85px',
    left: '50%',
    transform: 'translateX(-25%)',
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '&.toggleButtonOpen': {
      transform: 'rotate(180deg) translateY(50%)',
      right: '18.5px',
      left: '230px',
      top: '50%',
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
      },
    }
  },
  tooltip: {
    fontSize: '1rem',
    marginLeft: '30px'
  },
}));

export function LaDanzeDrawer({ children, logo, title }: React.PropsWithChildren<LaDanzeDrawerProps>): JSX.Element {
  const [open, setOpen] = useLaDanzeDrawer();
  const classes = useStyles();
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  function toggleDrawer() {
    setOpen(!open);
  }

  function DrawerContent() {
    return (
      <>
        <div className={classes.toolbar}>
          <div className={`${classes.logo} ${open ? 'logoOpen' : ''}`}>
            <img src={logo} alt="logo" />
            <span>{title}</span>
          </div>
          <Hidden mdDown implementation="css">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              edge="start"
              className={`${classes.toggleButton} ${open ? 'toggleButtonOpen' : ''}`}
            >
              <ChevronRightOutlinedIcon />
            </IconButton>
          </Hidden>
        </div>
        {children}
      </>
    );
  }

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <>
      {matches
        ? <>
          <AppBar position="fixed" className={classes.appBar} elevation={1}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggleDrawer}
                className={classes.menuButton}
              >
                <svg aria-label="Menu" width="30" height="30" viewBox="0 0 30 30" role="img" focusable="false"><title>Menu</title><path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M4 7h22M4 15h22M4 23h22"></path></svg>
              </IconButton>
              <div className="title">
                <img src={logo} alt="logo" />
                <span>{title}</span>
              </div>
            </Toolbar>
          </AppBar>

          <SwipeableDrawer
            container={container}
            variant="temporary"
            anchor={'left'}
            open={open}
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {DrawerContent()}
          </SwipeableDrawer>
        </>
        : <Drawer
          variant="permanent"
          className={`${clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}`}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          {DrawerContent()}
        </Drawer>
      }
    </>
  );
}

interface DrawerListItemProps extends ListItemProps<any> {
  title: string;
  selected?: boolean;
  to: string;
  animationKey: AnimationKey;
  noRefresh?: boolean;
  exact?: boolean;
  strict?: boolean;
  isActive?: (match: any, location: any) => boolean;
  onActive?: (active: boolean) => void;
  safeOnClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void);
  elementOnClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void);
}

const useTooltipStyles = makeStyles(() => ({
  tooltip: {
    fontSize: '1rem',
    marginLeft: '40px'
  },
}));

export function DrawerListItem({
  children,
  to,
  title,
  onClick,
  animationKey,
  noRefresh = true,
  exact,
  strict,
  isActive,
  onActive,
  safeOnClick,
  ...otherProps }: DrawerListItemProps): JSX.Element {
  const classes = useStyles();
  const tooltipClasses = useTooltipStyles();
  const [open, setOpen] = useLaDanzeDrawer();
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const [active, setActive] = useState(false);
  const isMount = useIsMount();


  function handleOnClick(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (matches) {
      setOpen(false);
    }
    if (onClick) {
      onClick(event);
    }
  }

  function handleOnActive(active: boolean) {
    if (isMount) {
      setActive(active);
      if (onActive) {
        onActive(active);
      }
    }
  }

  return (
    <AnimateLink
      animationKey={animationKey}
      to={to}
      noRefresh={noRefresh}
      exact={exact}
      strict={strict}
      safeOnClick={safeOnClick}
      onClick={handleOnClick}
      isActive={isActive}
      onActive={handleOnActive}>
      <Tooltip classes={tooltipClasses} title={open ? '' : title} placement="right">
        <ListItem className={`${classes.listItem} ${active ? 'active' : ''}`} selected={active} button key={title} {...otherProps}>
          {children}
        </ListItem>
      </Tooltip>
    </AnimateLink>
  );
}