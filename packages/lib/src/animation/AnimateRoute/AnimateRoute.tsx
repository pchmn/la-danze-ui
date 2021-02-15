import { AnimateSwitchContext, MountTransition } from '@la-danze-ui/animation';
import React, { useContext } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { AnimateRoutingProps } from '../models/animate-routing-props';

export interface AnimateRouteProps extends RouteProps, AnimateRoutingProps {}

export function AnimateRoute({
  children,
  exit,
  initial,
  animate,
  animationType,
  variants,
  fullHeight,
  ...otherProps
}: AnimateRouteProps): JSX.Element {
  if (!useContext(AnimateSwitchContext)) {
    throw Error("You can't use <AnimateRoute /> outside a <AnimateSwitch />");
  }

  return (
    <Route {...otherProps}>
      <MountTransition
        exit={exit}
        initial={initial}
        animate={animate}
        animationType={animationType}
        variants={variants}
        fullHeight={fullHeight}
      >
        {children}
      </MountTransition>
    </Route>
  );
}
