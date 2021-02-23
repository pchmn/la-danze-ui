import { motion, MotionProps } from 'framer-motion';
import React from 'react';

export interface MountTransitionProps extends MotionProps {
  fullHeight?: boolean;
  animationType?: 'scale' | 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight';
}

export function MountTransition({
  children,
  exit = 'out',
  initial = 'initial',
  animate = 'in',
  animationType,
  variants,
  fullHeight,
  transition = { duration: 0.225 },
  ...otherProps
}: React.PropsWithChildren<MountTransitionProps>): JSX.Element {
  if (!variants) {
    switch (animationType) {
      case 'scale':
        variants = scaleVariant;
        break;
      case 'slideUp':
        variants = slideUpVariant;
        break;
      case 'slideDown':
        variants = slideDownVariant;
        break;
      case 'slideLeft':
        variants = slideLeftVariant;
        break;
      case 'slideRight':
        variants = slideRightVariant;
        break;
      case 'fade':
          variants = baseVariant;
          break;
    }
  }

  return (
    <motion.div
      exit={exit}
      initial={initial}
      animate={animate}
      variants={variants}
      transition={transition}
      style={fullHeight ? { display: 'flex', flexDirection: 'column', flex: 1 } : {}}
      {...otherProps}
    >
      {children}
    </motion.div>
  );
}

const baseVariant = {
  initial: {
    opacity: 0
  },

  in: {
    opacity: 1
  },

  out: {
    opacity: 0
  }
};

const scaleVariant = {
  initial: {
    ...baseVariant.initial,
    scale: 0.75
  },

  in: {
    ...baseVariant.in,
    scale: 1
  },

  out: {
    ...baseVariant.out,
    scale: 0.75
  }
};

const slideUpVariant = {
  initial: {
    ...baseVariant.initial,
    y: '50%'
  },
  in: {
    ...baseVariant.in,
    y: 0
  },
  out: {
    ...baseVariant.out,
    y: '-50%'
  }
};

const slideDownVariant = {
  initial: {
    ...baseVariant.initial,
    y: '-50%'
  },
  in: {
    ...baseVariant.in,
    y: 0
  },
  out: {
    ...baseVariant.out,
    y: '50%'
  }
};

const slideRightVariant = {
  initial: {
    ...baseVariant.initial,
    x: '-50%'
  },
  in: {
    ...baseVariant.in,
    x: 0
  },
  out: {
    ...baseVariant.out,
    x: '50%'
  }
};

const slideLeftVariant = {
  initial: {
    ...baseVariant.initial,
    x: '50%'
  },
  in: {
    ...baseVariant.in,
    x: 0
  },
  out: {
    ...baseVariant.out,
    x: '-50%'
  }
};
