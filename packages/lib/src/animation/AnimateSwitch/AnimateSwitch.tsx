import { AnimatePresence } from "framer-motion";
import React from "react";
import { Switch, SwitchProps, useLocation } from "react-router-dom";
import { AnimateRoute } from "../AnimateRoute/AnimateRoute";
import { MountTransitionProps } from "../MountTransition/MountTransition";


interface AnimateSwitchProps extends SwitchProps, MountTransitionProps {
  switchKey?: string | number;
}

export function AnimateSwitch({
  children,
  location,
  switchKey,
  exit,
  initial,
  animate,
  animationType,
  variants,
  fullHeight,
  ...otherProps }: AnimateSwitchProps): JSX.Element {
  const originalLocation = useLocation();

  function childrenWithProps() {

    return React.Children.map(children, child => {
      // checking isValidElement is the safe way and avoids a typescript error too
      if (React.isValidElement(child) && child.type === AnimateRoute) {
        return React.cloneElement(child, {
          exit: child.props.exit || exit,
          initial: child.props.initial || initial,
          animate: child.props.animate || animate,
          animationType: child.props.animationType || animationType,
          variants: child.props.variants || variants,
          fullHeight: child.props.fullHeight || fullHeight
        });
      }
      return child;
    });
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location || originalLocation} key={switchKey || location?.pathname} {...otherProps}>
        {childrenWithProps()}
      </Switch>
    </AnimatePresence>
  );
}