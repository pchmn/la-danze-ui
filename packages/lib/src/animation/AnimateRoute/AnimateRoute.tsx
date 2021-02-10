import React, { useContext } from "react";
import { Route, RouteProps } from "react-router-dom";
import { AnimateSwitchContext } from "../AnimateSwitch/AnimateSwitch";
import { MountTransition, MountTransitionProps } from "../MountTransition/MountTransition";

export interface AnimateRouteProps extends RouteProps, MountTransitionProps {
}

export function AnimateRoute({
  children,
  exit,
  initial,
  animate,
  animationType,
  variants,
  fullHeight,
  ...otherProps }: AnimateRouteProps): JSX.Element {

  if (!useContext(AnimateSwitchContext)) {
    throw Error('You can\'t use <AnimateRoute /> outside a <AnimateSwitch />');
  }

  return (
    <Route {...otherProps}>
      <MountTransition exit={exit} initial={initial} animate={animate} animationType={animationType} variants={variants} fullHeight={fullHeight}>
        {children}
      </MountTransition>
    </Route>
  );
}