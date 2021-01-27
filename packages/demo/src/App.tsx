import { ListItemIcon, ListItemText } from '@material-ui/core';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import SlowMotionVideoOutlinedIcon from '@material-ui/icons/SlowMotionVideoOutlined';
import { AnimateRoute, AnimateSwitch, DrawerContainer, DrawerListItem, DrawerTemplate, LaDanzeDrawer, LaDanzeTheme, MainContainer, useAnimateSwitch, useLaDanzeDrawer } from 'la-danze-ui';
import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import logo from '../logo.svg';
import { AnimationsExample } from './AnimationsExample/AnimationsExample';
import { FormsExample } from './FormsExample/FormsExample';

export function App() {
  const location = useLocation();
  const { switchKey, setSwitchKey } = useAnimateSwitch(location.pathname);
  const { open } = useLaDanzeDrawer();

  console.log('drawer open', open);

  function Drawer() {
    return (
      <LaDanzeDrawer logo={logo} title="La Danze UI">
        <DrawerListItem onClick={() => setSwitchKey("/forms")} to="/forms" title="Forms" selected={location.pathname.includes('/forms')} key="Mon compte">
          <ListItemIcon><ListAltOutlinedIcon /></ListItemIcon>
          <ListItemText primary="Forms" />
        </DrawerListItem>
        <DrawerListItem onClick={() => setSwitchKey("/animations")} to="/animations" title="Animations" selected={location.pathname.includes('/animations')} key="Animations">
          <ListItemIcon><SlowMotionVideoOutlinedIcon /></ListItemIcon>
          <ListItemText primary="Animations" />
        </DrawerListItem>
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
          <AnimateSwitch animationType="fade" switchKey={switchKey}>
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
