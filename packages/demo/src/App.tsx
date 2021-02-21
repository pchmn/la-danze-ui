import { List, ListItemIcon, ListItemText, SvgIcon } from '@material-ui/core';
import {
  AnimateRoute,
  AnimateSwitch,
  DrawerContainer,
  DrawerListItem,
  DrawerTemplate,
  LaDanzeDrawer,
  LaDanzeTheme,
  MainContainer,
  useAnimationKey,
  useLaDanzeDrawer
} from 'la-danze-ui';
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
            <ListItemIcon>
            <SvgIcon>
              <path d="M19 5v14H5V5h14m1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z" />
            </SvgIcon> 
            </ListItemIcon>
            <ListItemText primary="Forms" />
          </DrawerListItem>
          <DrawerListItem animationKey={animationKey} to="/animations" title="Animations">
            <ListItemIcon>
              <SvgIcon>
                <path d="M13.05 9.79L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z" />
              </SvgIcon> 
            </ListItemIcon>
            <ListItemText primary="Animations" />
          </DrawerListItem>
        </List>
      </LaDanzeDrawer>
    );
  }

  return (
    <LaDanzeTheme>
      <DrawerTemplate>
        <DrawerContainer>{Drawer()}</DrawerContainer>

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
