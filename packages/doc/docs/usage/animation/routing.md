---
title: Animate routing
---

Just do classic [animations](#animations-available) with [react-router-dom](https://reactrouter.com/web/guides/quick-start).

## Basic usage

Just replace your `Switch` by `AnimateSwitch`, your `Route` by `AnimateRoute` and set `animationType` prop on `AnimateSwitch` (fade by default).

See Example:

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import { AnimateSwitch, AnimateRoute  } from 'la-danze-ui';

function App() {  
  return (
    <BrowserRouter>

      <Link to="/" exact>Go to Home</Link>
      <Link to="/route1">Go to Route 1</Link>
      <Link to="/route2">Go to Route 2</Link>

      // Set animation type for the contained routes
      <AnimateSwitch animationType="slideLeft">
        <AnimateRoute exact path="/">
          Home
        </AnimateRoute>
        <AnimateRoute path="/route1">
          Route 1
        </AnimateRoute>
        <AnimateRoute path="/route2">
          Route 2
        </AnimateRoute>
      </AnimateSwitch>

    </BrowserRouter>
  );
}
```

## Advanced usage

### Nested routing

If you have nested routing in your app, there is a problem (fixable): when a child route changes, it will re render parent route as well.

To prevent this you can use `AnimateLink` (extends `NavLink` of react-router-dom) in combination with `useAnimateKey()` hook and animationKey prop of `AnimateSwitch` component. 

See example:

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import { AnimateSwitch, AnimateRoute, AnimateLink, useAnimationKey  } from 'la-danze-ui';

function App() {
  // Call hook to get unique animationKey object
  // It is shared by AnimateLinks and AnimateSwitch
  const animationKey = useAnimationKey();

  return (
    <BrowserRouter>

      // Set animationKey prop on AnimateLinks
      <AnimateLink to="/" exact animationKey={animationKey}>Go to Home</AnimateLink>
      <AnimateLink to="/nested-routes" animationKey={animationKey}>Go to Nested routes</AnimateLink>

      // Set animationKey prop on AnimateSwitch
      <AnimateSwitch animationKey={animationKey}>
        <AnimateRoute exact path="/">
          Home
        </AnimateRoute>
        {/* Nested Routes */}
        <AnimateRoute path="/nested-routes">
          <NestedRoutes />
        </AnimateRoute>
      </AnimateSwitch>

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

### Different animations between routes

By default, `AnimateSwitch` will set same animation for all its contained routes.

If you want a route to make a different animation, you juste have to set `animationType` on the `AnimateRoute` concerned.

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import { AnimateSwitch, AnimateRoute  } from 'la-danze-ui';

function App() {  
  return (
    <BrowserRouter>

      <Link to="/" exact>Go to Home</Link>
      <Link to="/route1">Go to Route 1</Link>
      <Link to="/route2">Go to Route 2</Link>

      // All routes will have slide left animation, except /route2
      // /route 2 will have scale animation because its animationType prop is provided
      <AnimateSwitch animationType="slideLeft">
        <AnimateRoute exact path="/">
          Home
        </AnimateRoute>
        <AnimateRoute path="/route1">
          Route 1
        </AnimateRoute>
        <AnimateRoute path="/route2" animationType="scale">
          Route 2
        </AnimateRoute>
      </AnimateSwitch>

    </BrowserRouter>
  );
}
```

### Custom animations

You can create your own animations, because `AnimateSwitch` and `AnimateRoute` inherite some [framer-motion](https://www.framer.com/motion/) props.

See [API doc](#api) of these components for more detail.

> You can mix nested routing, different animations between routes and custom animations without any problem.

## Animations available

* `fade`
* `scale`
* `slideUp`
* `slidedown`
* `slideLeft`
* `slideRight`

> Use them with `animationType` prop of `AnimateSwitch` and `AnimateRoute`


## API

* [`AnimateSwitch`](api/components/AnimateSwitch.mdx)
* [`AnimateRoute`](api/components/AnimateRoute.mdx)
* [`useAnimationKey()`](api/hooks/useAnimationKey.mdx)
