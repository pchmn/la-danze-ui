import { createStore, StoreDispatchHookType, StoreStateHookType, useStore } from 'react-hookstore';

createStore('drawerOpen', false);

export function useOpenDrawer(): StoreStateHookType<boolean> | StoreDispatchHookType<boolean, any> {
  return useStore<boolean>('drawerOpen');
}
