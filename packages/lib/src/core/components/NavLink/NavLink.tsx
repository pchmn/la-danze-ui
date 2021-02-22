import React, { useEffect, useState } from 'react';
import {
  NavLink as OriginalNavLink,
  NavLinkProps as OriginalNavLinkProps,
  useLocation,
  useRouteMatch
} from 'react-router-dom';

export interface NavLinkProps extends OriginalNavLinkProps, React.RefAttributes<HTMLAnchorElement> {
  to: string;
  safeOnClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  noRefresh?: boolean;
  onActive?: (active: boolean) => void;
  sensitive?: boolean;
}

function NavLinkComponent(
  {
    to,
    exact,
    strict,
    sensitive,
    children,
    onClick,
    onActive,
    location,
    isActive,
    safeOnClick,
    noRefresh,
    ...otherProps
  }: NavLinkProps,
  ref?: React.ForwardedRef<any>
) {
  const [active, setActive] = useState(false);
  const match = useRouteMatch({ path: to, exact, strict, sensitive });
  location = useLocation();

  function checkActive(): boolean {
    if (isActive && location) {
      return isActive(match, location);
    }
    return !!match;
  }

  useEffect(() => {
    if (onActive) {
      onActive(active);
    }
  }, [active]);

  useEffect(() => {
    setActive(checkActive());
  }, [location]);

  function handleOnClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    if (checkActive() && noRefresh) {
      event.preventDefault();
    } else if (safeOnClick) {
      safeOnClick(event);
    }
    if (onClick) {
      onClick(event);
    }
  }

  return (
    <OriginalNavLink to={to} onClick={handleOnClick} isActive={checkActive} ref={ref} {...otherProps}>
      {children}
    </OriginalNavLink>
  );
}

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(NavLinkComponent);
