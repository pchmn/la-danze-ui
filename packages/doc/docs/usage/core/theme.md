---
title: Theme
---

## `LaDanzeTheme`

This component will make the theme available to the child tree. So it should be used at the root of the component tree.

### Props

| Name | Type |  Required | Default | Description |
|------|:----:|----------:| -------:| -----------:|
| children |  `React.ReactNode` | Yes | / | The component tree. |

### Example

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { LaDanzeTheme } from 'la-danze-ui';

function App() {
  return (
    <LaDanzeTheme>
      <div>hello</div>
    </LaDanzeTheme>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

```

