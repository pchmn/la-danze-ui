---
title: Animate appearance
---

By using `MountTransition` and `AnimatePresence` (of [framer-motion](https://www.framer.com/motion/)) components you can do basic [animation](#animations-available) very easily.

## Usage

You juste have to set animationType on MountTransition.

See Example:

```tsx
import { AnimatePresence } from 'framer-motion';
import { MountTransition } from 'la-danze-ui';

function App({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <MountTransition
          animationType="slideLeft"
        />
      )}
    </AnimatePresence>
  );
}
```

## Animations available

* `fade`
* `scale`
* `slideUp`
* `slidedown`
* `slideLeft`
* `slideRight`

> Use them with `animationType` prop of `MountTransition`

## API

* [`MountTransition`](api/components/MountTransition.mdx)