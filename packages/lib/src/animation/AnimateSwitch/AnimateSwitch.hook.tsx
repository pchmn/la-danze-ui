import { useState } from 'react';

export interface AnimationKey {
  key: number;
  updateKey: () => void;
}

export function useAnimationKey(): AnimationKey {
  const [key, setKey] = useState<number>(Math.random());

  function updateKey() {
    setKey(Math.random());
  }

  return { key, updateKey };
}
