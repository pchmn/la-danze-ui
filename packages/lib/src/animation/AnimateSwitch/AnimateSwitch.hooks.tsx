import { useState } from "react";

export function useAnimateSwitch(key?: string | number) {
  const [switchKey, setSwitchKey] = useState<string | number>(key || Math.random());

  function updateSwitchKey() {
    setSwitchKey(Math.random());
  }

  return { switchKey, setSwitchKey, updateSwitchKey };
}
