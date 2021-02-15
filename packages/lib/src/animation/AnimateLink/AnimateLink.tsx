import { AnimationKey } from '@la-danze-ui/animation';
import { NavLink, NavLinkProps } from '@la-danze-ui/core';
import React from 'react';

export interface AnimateLinkProps extends NavLinkProps {
  animationKey?: AnimationKey;
}

function AnimateLinkComponent(
  { children, animationKey, noRefresh = false, safeOnClick, onClick, ...otherProps }: AnimateLinkProps,
  ref: React.ForwardedRef<any>
) {
  function handleOnClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    if (!noRefresh) {
      animationKey?.updateKey();
    }
    if (onClick) {
      onClick(event);
    }
  }

  function handleSafeOnClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    animationKey?.updateKey();
    if (safeOnClick) {
      safeOnClick(event);
    }
  }

  return (
    <NavLink noRefresh={noRefresh} safeOnClick={handleSafeOnClick} onClick={handleOnClick} ref={ref} {...otherProps}>
      {children}
    </NavLink>
  );
}

export const AnimateLink = React.forwardRef<any, AnimateLinkProps>(AnimateLinkComponent);
