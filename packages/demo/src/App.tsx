import { List, ListItemIcon, ListItemText } from '@material-ui/core';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import SlowMotionVideoOutlinedIcon from '@material-ui/icons/SlowMotionVideoOutlined';
import { AnimateRoute, AnimateSwitch, DrawerContainer, DrawerListItem, DrawerTemplate, LaDanzeDrawer, LaDanzeTheme, MainContainer, useAnimationKey, useLaDanzeDrawer } from 'la-danze-ui';
import React from 'react';
import { Redirect } from 'react-router-dom';
import logo from '../logo.svg';
import { AnimationsExample } from './AnimationsExample/AnimationsExample';
import { FormsExample } from './FormsExample/FormsExample';

export function App() {
  const [open] = useLaDanzeDrawer();
  const animationKey = useAnimationKey();

  console.log('drawer open', open);

  function Drawer() {
    return (
      <LaDanzeDrawer logo={logo} title="La Danze UI">
        <List>
          <DrawerListItem animationKey={animationKey} to="/forms" title="Forms">
            <ListItemIcon><ListAltOutlinedIcon /></ListItemIcon>
            <ListItemText primary="Forms" />
          </DrawerListItem>
          <DrawerListItem animationKey={animationKey} to="/animations" title="Animations">
            <ListItemIcon><SlowMotionVideoOutlinedIcon /></ListItemIcon>
            <ListItemText primary="Animations" />
          </DrawerListItem>
        </List>
      </LaDanzeDrawer>
    );
  }

  return (
    <LaDanzeTheme>
      <DrawerTemplate>

        <DrawerContainer>
          {Drawer()}
        </DrawerContainer>

        <MainContainer>
          <AnimateSwitch animationType="fade" animationKey={animationKey} exit="out">
            <AnimateRoute path="/forms">
              <FormsExample />
            </AnimateRoute>
            <AnimateRoute path="/animations">
              <AnimationsExample />
            </AnimateRoute>
            <AnimateRoute exact path="/">
              <Redirect to="/animations" />
            </AnimateRoute>
          </AnimateSwitch>
        </MainContainer>

      </DrawerTemplate>
    </LaDanzeTheme>
  );
}
