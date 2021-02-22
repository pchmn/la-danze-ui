import { AnimationKey } from '@la-danze-ui/animation/hooks/useAnimationKey.hook';
import { NavLink } from '@la-danze-ui/core/components/NavLink/NavLink';
import React from 'react';
import { NavLinkProps as OriginalNavLinkProps } from 'react-router-dom';

export interface AnimateLinkProps extends OriginalNavLinkProps, React.RefAttributes<HTMLAnchorElement> {
  to: string;
  safeOnClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  noRefresh?: boolean;
  onActive?: (active: boolean) => void;
  sensitive?: boolean;
  animationKey?: AnimationKey;
}

function AnimateLinkComponent(
  { children, animationKey, noRefresh = false, safeOnClick, onClick, ...otherProps }: AnimateLinkProps,
  ref?: React.ForwardedRef<any>
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

export const AnimateLink = React.forwardRef<HTMLAnchorElement, AnimateLinkProps>(AnimateLinkComponent);
