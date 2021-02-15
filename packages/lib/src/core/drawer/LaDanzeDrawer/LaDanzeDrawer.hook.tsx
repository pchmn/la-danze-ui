import { createStore, useStore } from "react-hookstore";

createStore('drawerOpen', false);

export function useLaDanzeDrawer() {
  return useStore<boolean>('drawerOpen');
}