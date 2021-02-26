---
title: Drawer
---

**La Danze UI** provides a custom permanent and responsive drawer. See [demo](https://pchmn.github.io/la-danze-ui/demo) for a live preview.

## Basic Usage

First your app must be wrapped by `Theme` (see [doc](usage/core/theme.md)).

Then you have to use `DrawerTemplate` in combination with `Drawer` to make it possible. You should use `DrawerListItem` component which extends [material-ui](https://next.material-ui.com/) `ListItem` in your drawer.

Here an example with routing:

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { List, ListItemIcon, ListItemText } from '@material-ui/core';
import logo from './logo.svg';
import { 
  Theme,
  DrawerTemplate,
  DrawerContainer ,
  Drawer,
  DrawerListItem,
  MainContainer
} from 'la-danze-ui';

function App() {  
  return (
    <BrowserRouter>
      <Theme>
        <DrawerTemplate>

          <DrawerContainer>
            <Drawer logo={logo} title="Drawer">
              <List>
                <DrawerListItem to="/" exact title="Home">
                  <ListItemIcon>...</ListItemIcon>
                  <ListItemText primary="Home" />
                </DrawerListItem>
                <DrawerListItem to="/route1" title="Route 1">
                  <ListItemIcon>...</ListItemIcon>
                  <ListItemText primary="Route 1" />
                </DrawerListItem>
              </List>
            </Drawer>
          </DrawerContainer>

          <MainContainer>
            <Switch>
              <Route exact path="/">Home</Route>
              <Route path="/route1">Route 1</Route>
            </Switch>
          </MainContainer>

        </DrawerTemplate>
      </Theme>
    </BrowserRouter>
  );
}
```

## Advanced Usage

### Animate routing (with nested routes)

`DrawerListItem` extends `AnimateLink` so it accepts `animationKey` prop. It will be useful for nested routing (see [explanation](usage/animation/routing.md#nested-routing)).


```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { List, ListItemIcon, ListItemText } from '@material-ui/core';
import { 
  Theme,
  DrawerTemplate,
  DrawerContainer ,
  Drawer,
  DrawerListItem,
  MainContainer,
  useAnimationKey,
  AnimateSwitch,
  AnimateRoute,
  AnimateLink
} from 'la-danze-ui';

function App() { 
  // Call hook to get unique animationKey object
  // It is shared by AnimateLinks and AnimateSwitch
  const animationKey = useAnimationKey();

  return (
    <BrowserRouter>
      <Theme>
        <DrawerTemplate>

          <DrawerContainer>
            <Drawer logo={logo} title="La Danze UI">
              // Set animationKey prop on DrawerListItems
              <List>
                <DrawerListItem to="/" exact title="Home" animationKey={animationKey}>
                  <ListItemIcon><ListAltOutlinedIcon /></ListItemIcon>
                  <ListItemText primary="Home" />
                </DrawerListItem>
                <DrawerListItem to="/nested-routes" title="Nested Routes" animationKey={animationKey}>
                  <ListItemIcon><SlowMotionVideoOutlinedIcon /></ListItemIcon>
                  <ListItemText primary="Nested Routes" />
                </DrawerListItem>
              </List>
            </Drawer>
          </DrawerContainer>

          <MainContainer>
            // Set animationKey prop on AnimateSwitch
            <AnimateSwitch animationType="slideLeft" animationKey={animationKey}>
              <AnimateRoute exact path="/">Home</AnimateRoute>
              <AnimateRoute path="/nested-routes"><NestedRoutes /></AnimateRoute>
            </AnimateSwitch>
          </MainContainer>

        </DrawerTemplate>
      </Theme>
    </BrowserRouter>    
  );
}

function NestedRoutes() {
  // Get unique animationKey object
  // Since it is different from parent animationKey, it will prevent re rendering of parent routes
  const animationKey = useAnimationKey();

  return (
    // Set animationKey prop on AnimateLinks
    <AnimateLink to="/nested-routes/" exact animationKey={animationKey}>Go to Nested Routes Home</AnimateLink>
    <AnimateLink to="/nested-routes/route1" animationKey={animationKey}>Go to Nested Routes Route 1</AnimateLink>

    // Set animationKey prop on AnimateSwitch
    <AnimateSwitch animationKey={animationKey}>
      <AnimateRoute exact path="/nested-routes/">
        Nested Routes Home
      </AnimateRoute>
      <AnimateRoute path="/nested-routes/route1">
        Nested Routes Route 1
      </AnimateRoute>
    </AnimateSwitch>
  );
}
```

## API
* [`Theme`](api/components/Theme.mdx)
* [`DrawerTemplate`](api/components/DrawerTemplate.mdx)
* [`Drawer`](api/components/Drawer.mdx)
* [`DrawerListItem`](api/components/DrawerListItem.mdx)
* [`AnimateSwitch`](api/components/AnimateSwitch.mdx)
* [`AnimateRoute`](api/components/AnimateRoute.mdx)
<!-- * [`AnimateLink`](api/components/AnimateLink.mdx) -->
* [`useAnimationKey()`](api/hooks/useAnimationKey.mdx)