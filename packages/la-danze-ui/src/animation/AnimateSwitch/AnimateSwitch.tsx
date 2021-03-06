import { AnimateRoute } from '@la-danze-ui/animation/AnimateRoute/AnimateRoute';
import { AnimateSwitchContext } from '@la-danze-ui/animation/AnimateRoutingContext/AnimateRoutingContext';
import { AnimationKey } from '@la-danze-ui/animation/hooks/useAnimationKey.hook';
import { AnimateRoutingProps } from '@la-danze-ui/animation/models/animate-routing-props';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Switch, SwitchProps, useLocation } from 'react-router-dom';
import invariant from 'tiny-invariant';

export interface AnimateSwitchProps extends React.Attributes, SwitchProps, AnimateRoutingProps {
  animationKey?: AnimationKey;
}

export function AnimateSwitch({
  children,
  location,
  animationKey,
  key,
  exit = 'out',
  initial = 'initial',
  animate = 'in',
  animationType,
  variants,
  fullHeight,
  style,
  ...otherProps
}: AnimateSwitchProps): JSX.Element {
  if (!location) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    location = useLocation();
  }

  function childrenWithProps() {
    return React.Children.map(children, (child) => {
      // checking isValidElement is the safe way and avoids a typescript error too
      if (React.isValidElement(child) && child.type === AnimateRoute) {
        return React.cloneElement(child, {
          exit: child.props.exit || exit,
          initial: child.props.initial || initial,
          animate: child.props.animate || animate,
          animationType: child.props.animationType || animationType,
          variants: child.props.variants || variants,
          fullHeight: child.props.fullHeight || fullHeight,
          style: child.props.style || style
        });
      }
      invariant(false, `You can't use other element than <AnimateRoute> in <AnimateSwitch>`);
    });
  }

  return (
    <AnimateSwitchContext.Provider value="animateSwitch">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={key || animationKey?.key || location.key} {...otherProps}>
          {childrenWithProps()}
        </Switch>
      </AnimatePresence>
    </AnimateSwitchContext.Provider>
  );
}
