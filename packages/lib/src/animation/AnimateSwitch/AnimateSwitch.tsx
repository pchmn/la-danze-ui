import { AnimatePresence } from "framer-motion";
import React from "react";
import { Switch, SwitchProps, useLocation } from "react-router-dom";
import { AnimateRoute } from "../AnimateRoute/AnimateRoute";
import { MountTransitionProps } from "../MountTransition/MountTransition";
import { AnimationKey } from "./AnimateSwitch.hooks";

export const AnimateSwitchContext = React.createContext('');

export interface AnimateSwitchProps extends React.Attributes, SwitchProps, MountTransitionProps {
  animationKey?: AnimationKey;
}

export function AnimateSwitch({
  children,
  location,
  animationKey,
  key,
  exit,
  initial,
  animate,
  animationType,
  variants,
  fullHeight,
  ...otherProps }: AnimateSwitchProps): JSX.Element {

  if (!location) {
    location = useLocation();
  }

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
      throw Error('<AnimateSwitch /> can only be used with <AnimateRoute />');
    });
  }

  return (
    <AnimateSwitchContext.Provider value='animateSwitch'>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={key || animationKey?.key || location.key} {...otherProps}>
          {childrenWithProps()}
        </Switch>
      </AnimatePresence>
    </AnimateSwitchContext.Provider>
  );
}