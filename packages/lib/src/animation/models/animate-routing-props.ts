import { AnimationControls, TargetAndTransition, Variants } from "framer-motion";
import { MakeCustomValueType } from "framer-motion/types/types";

export interface AnimateRoutingProps {
  animationType?: 'scale' | 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight';
  exit?: string | TargetAndTransition | string[];
  initial?: string | boolean | MakeCustomValueType<any> | string[];
  animate?: string | boolean | AnimationControls | TargetAndTransition | string[];
  variants?: Variants;
  fullHeight?: boolean;
}
