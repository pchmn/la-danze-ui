import { AnimateLink } from '@la-danze-ui/animation/AnimateLink/AnimateLink';
import { AnimationKey } from '@la-danze-ui/animation/hooks/useAnimationKey.hook';
import { NavLinkProps } from '@la-danze-ui/core/components/NavLink/NavLink';
import { useOpenDrawer } from '@la-danze-ui/core/drawer/hooks/useOpenDrawer.hook';
import { useIsMount } from '@la-danze-ui/core/hooks/useIsMount.hook';
import { makeStyles, Theme } from '@material-ui/core';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React, { useContext, useState } from 'react';
import invariant from 'tiny-invariant';
import { DrawerContext } from '../DrawerContext/DrawerContext';

const useStyles = makeStyles((theme) => ({
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
  }
}));

type PartialNavLinkProps = Pick<NavLinkProps, 'isActive' | 'onActive' | 'safeOnClick' | 'onClick'>;

interface DrawerListItemProps extends ListItemProps<any>, PartialNavLinkProps {
  title: string;
  selected?: boolean;
  to: string;
  animationKey?: AnimationKey;
  noRefresh?: boolean;
  exact?: boolean;
  strict?: boolean;
}

const useTooltipStyles = makeStyles(() => ({
  tooltip: {
    fontSize: '1rem',
    marginLeft: '40px'
  }
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
  ...otherProps
}: DrawerListItemProps): JSX.Element {
  const matches = useMediaQuery((theme: Theme) => {
    invariant(theme, `You can't use <DrawerListItem> outside <Theme> or material-ui <Theme.Provider>`);
    return theme.breakpoints.down('md');
  });
  invariant(
    useContext(DrawerContext) === 'drawer',
    `You can't use <DrawerListItem> outside <Drawer>`
  );
  const classes = useStyles();
  const tooltipClasses = useTooltipStyles();
  const [open, setOpen] = useOpenDrawer();
  const [active, setActive] = useState(false);
  const isMount = useIsMount();

  function handleOnClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
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
      onActive={handleOnActive}
    >
      <Tooltip classes={tooltipClasses} title={open ? '' : title} placement="right">
        <ListItem
          className={`${classes.listItem} ${active ? 'active' : ''}`}
          selected={active}
          button
          key={title}
          {...otherProps}
        >
          {children}
        </ListItem>
      </Tooltip>
    </AnimateLink>
  );
}