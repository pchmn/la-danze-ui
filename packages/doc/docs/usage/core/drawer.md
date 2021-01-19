---
title: Drawer
---

## `DrawerTemplate`

This component will create a template with a drawer. It must contain `DrawerContainer` and `MainContainer` as child.

### Props

| Name | Type |  Required | Default | Description |
|------|:----:|----------:| -------:| -----------:|
| children |  `React.ReactNode` | Yes | / | The component tree (must contain `DrawerContainer` and `MainContainer`) |

### Example

```jsx
import React from 'react';
import { DrawerTemplate, DrawerContainer, MainContainer } from 'la-danze-ui';

function App() {
  return (
    <DrawerTemplate>
      <DrawerContainer>
        <div>drawer content</div>
      </DrawerContainer>
      <MainContainer>
        <div>main content</div>
      </MainContainer>
    </DrawerTemplate>
  );
}
```

