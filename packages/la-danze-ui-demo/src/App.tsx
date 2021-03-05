import { List, ListItemIcon, ListItemText, SvgIcon } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import {
  AnimateRoute,
  AnimateSwitch,
  Drawer,
  DrawerContainer,
  DrawerListItem,
  DrawerTemplate,
  FlexItem,
  FlexLayout,
  MainContainer,
  Theme,
  useAnimationKey,
  useOpenDrawer
} from 'la-danze-ui';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { AnimationsExample } from './AnimationsExample/AnimationsExample';
import { CoreExamples } from './CoreExamples/CoreExamples';
import { FormsExample } from './FormsExample/FormsExample';
import { ReactComponent as GithubIcon } from '/assets/github.svg';
import logo from '/assets/logo.svg';

export function App() {
  const [open] = useOpenDrawer();
  const animationKey = useAnimationKey();

  console.log('drawer open', open);

  function drawer() {
    return (
      <Drawer logo={logo} title="La Danze UI">
        <FlexLayout flexDirection="column" fullHeight>
          <FlexItem flexGrow={1}>
            <List>
              <DrawerListItem animationKey={animationKey} to="/core" title="Core">
                <ListItemIcon>
                  <SvgIcon>
                    <path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z" />
                  </SvgIcon>
                </ListItemIcon>
                <ListItemText primary="Core" />
              </DrawerListItem>
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
          </FlexItem>

          <FlexItem>
            <Divider variant="middle" style={{ marginBottom: '10px' }} />
            <List>
              <DrawerListItem href="https://pchmn.github.io/la-danze-ui/" title="Documentation">
                <ListItemIcon>
                  <SvgIcon>
                    <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
                    <path d="M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zM17.5 14.33c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z" />
                  </SvgIcon>
                </ListItemIcon>
                <ListItemText primary="Documentation" />
              </DrawerListItem>
              <DrawerListItem href="https://github.com/pchmn/la-danze-ui" title="Github">
                <ListItemIcon>
                  <SvgIcon>
                    <GithubIcon />
                  </SvgIcon>
                </ListItemIcon>
                <ListItemText primary="Github" />
              </DrawerListItem>
            </List>
          </FlexItem>
        </FlexLayout>
      </Drawer>
    );
  }

  return (
    <Theme>
      <DrawerTemplate>
        <DrawerContainer>{drawer()}</DrawerContainer>

        <MainContainer>
          <AnimateSwitch animationKey={animationKey}>
            <AnimateRoute path="/forms">
              <FormsExample />
            </AnimateRoute>
            <AnimateRoute path="/animations">
              <AnimationsExample />
            </AnimateRoute>
            <AnimateRoute path="/core">
              <CoreExamples />
            </AnimateRoute>
            <AnimateRoute exact path="/">
              <Redirect to="/core" />
            </AnimateRoute>
          </AnimateSwitch>
        </MainContainer>
      </DrawerTemplate>
    </Theme>
  );
}
