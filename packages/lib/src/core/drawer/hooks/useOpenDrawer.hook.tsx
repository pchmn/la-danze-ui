import { createStore, useStore } from 'react-hookstore';

createStore('drawerOpen', false);

export function useOpenDrawer() {
  return useStore<boolean>('drawerOpen');
}
