import React from 'react';
import { AnimateAppearance } from './AnimateAppearanceExample/AnimateAppearanceExample';
import { AnimateRouting } from './AnimateRoutingExample/AnimateRoutingExample';
import styles from './AnimationsExample.module.scss';

export function AnimationsExample() {

  return (
    <div className={styles.animationsExample} data-testid="AnimationsExample">
      <AnimateRouting />
      <AnimateAppearance className={styles.animateAppearance} />
    </div>
  );
}
