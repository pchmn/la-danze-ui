import { AnimateSwitchContext } from '@la-danze-ui/animation/AnimateRoutingContext/AnimateRoutingContext';
import { AnimateRoutingProps } from '@la-danze-ui/animation/models/animate-routing-props';
import { MountTransition } from '@la-danze-ui/animation/MountTransition/MountTransition';
import React, { useContext } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import invariant from 'tiny-invariant';

export interface AnimateRouteProps extends RouteProps, AnimateRoutingProps {}

export function AnimateRoute({
  children,
  exit = 'out',
  initial = 'initial',
  animate = 'in',
  animationType,
  variants,
  fullHeight,
  style,
  ...otherProps
}: AnimateRouteProps): JSX.Element {
  invariant(useContext(AnimateSwitchContext), `You can't use <AnimateRoute> outside <AnimateSwitch>`);

  return (
    <Route {...otherProps}>
      <MountTransition
        exit={exit}
        initial={initial}
        animate={animate}
        animationType={animationType}
        variants={variants}
        fullHeight={fullHeight}
        style={style}
      >
        {children}
      </MountTransition>
    </Route>
  );
}
