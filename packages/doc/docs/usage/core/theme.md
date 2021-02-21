---
title: Theme
---

The theme provided by **La Danze UI** is basically a [material-ui](https://next.material-ui.com/) theme. The color scheme is based on a football club colors ([SRFC](https://twitter.com/staderennais)) 🔴⚫.
See [demo](https://pchmn.github.io/la-danze-ui/demo) for live preview.

## Usage

To use it, just wrapp your app with `LaDanzeTheme` and that's it:

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { LaDanzeTheme  } from 'la-danze-ui';

function App() {  
  return (
    <LaDanzeTheme>
      <div>my app</div>
    </LaDanzeTheme>
  );
}
```

## API
* [`LaDanzeTheme`](api/components/LaDanzeTheme.mdx)

