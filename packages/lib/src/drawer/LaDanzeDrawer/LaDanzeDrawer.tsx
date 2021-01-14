import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React from "react";
import { LinkProps } from "react-router-dom";
import { RouterLink } from "../../core/components/RouterLink/RouterLink";
import { useLaDanzeDrawer } from "./LaDanzeDrawer.hooks";
import styles from './LaDanzeDrawer.module.scss';

export interface LaDanzeDrawerProps {
  logoSrc: string;
}

export function LaDanzeDrawer({ children, logoSrc }: React.PropsWithChildren<LaDanzeDrawerProps>): JSX.Element {
  const { classes, open, setOpen } = useLaDanzeDrawer();
  const matches = useMediaQuery('(max-width: 600px)');

  function toggleDrawer() {
    setOpen(!open);
  }

  function childrenWithProps() {
    return React.Children.map(children, child => {
      // checking isValidElement is the safe way and avoids a typescript error too
      if (React.isValidElement<any>(child) && child.type === DrawerListItem) {
        return React.cloneElement(child, {
          onClick: matches ? (e: any) => { toggleDrawer(); child.props.onClick(e) } : child.props.onClick,
          open
        });
      }
      return child;
    });
  }

  function DrawerContent() {
    return (
      <>
        <div className={styles.toolbar}>
          <div className={`${styles.logo} ${open ? styles.logoOpen : ''}`}>
            <img src={logoSrc} alt="logo" />
            <span>La Danze en LDC</span>
          </div>
          <Hidden xsDown implementation="css">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              edge="start"
              className={`${styles.toggleButton} ${open ? styles.toggleButtonOpen : ''}`}
            >
              <ChevronRightOutlinedIcon />
            </IconButton>
          </Hidden>
        </div>
        <List className={`${styles.drawerList} ${open ? styles.drawerListOpen : ''}`}>
          {childrenWithProps()}
        </List>
      </>
    );
  }

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <>
      {matches
        ? <>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggleDrawer}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>

          <SwipeableDrawer
            container={container}
            variant="temporary"
            anchor={'left'}
            open={open}
            className={`${styles.LaDanzeDrawer} ${styles.MobileDrawer}`}
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
          })} ${styles.LaDanzeDrawer}`}
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



interface DrawerListItemProps extends LinkProps {
  title: string;
  open?: boolean;
  selected?: boolean;
  to: string;
  onClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void);
  elementOnClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void);
}

const useStylesBootstrap = makeStyles(() => ({
  tooltip: {
    fontSize: '1rem',
    marginLeft: '30px'
  },
}));

export function DrawerListItem({ children, open, title, selected, to, onClick, elementOnClick, ...otherProps }: DrawerListItemProps): JSX.Element {
  const classes = useStylesBootstrap();

  return (
    <RouterLink to={to} onClick={onClick} elementOnClick={elementOnClick} {...otherProps}>
      <Tooltip classes={classes} title={open ? '' : title} placement="right">
        <ListItem selected={selected} button key={title}>
          {children}
        </ListItem>
      </Tooltip>
    </RouterLink>
  );
}