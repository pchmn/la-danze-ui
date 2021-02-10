import React from "react";
import { NavLink, NavLinkProps } from "../../core/components/NavLink/NavLink";
import { AnimationKey } from "../AnimateSwitch/AnimateSwitch.hooks";

export interface AnimateLinkProps extends NavLinkProps {
  animationKey?: AnimationKey;
}

export const AnimateLink = React.forwardRef<any, AnimateLinkProps>(
  (
    {
      children,
      animationKey,
      noRefresh = false,
      safeOnClick,
      onClick,
      ...otherProps
    },
    ref
  ) => {

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
      <NavLink
        noRefresh={noRefresh}
        safeOnClick={handleSafeOnClick}
        onClick={handleOnClick}
        ref={ref}
        {...otherProps}
      >
        {children}
      </NavLink>
    );
  }
);