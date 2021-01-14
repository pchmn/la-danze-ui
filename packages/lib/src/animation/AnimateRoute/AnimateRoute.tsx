import React from "react";
import { Route, RouteProps } from "react-router-dom";
import { MountTransition, MountTransitionProps } from "../MountTransition/MountTransition";

interface AnimateRouteProps extends RouteProps, MountTransitionProps {
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
  return (
    <Route {...otherProps}>
      <MountTransition exit={exit} initial={initial} animate={animate} animationType={animationType} variants={variants} fullHeight={fullHeight}>
        {children}
      </MountTransition>
    </Route>
  );
}