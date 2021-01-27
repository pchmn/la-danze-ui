import { createStore, useStore } from "react-hookstore";
import { useLocation, useRouteMatch } from "react-router-dom";
import { useAnimateSwitch } from "../../animation/AnimateSwitch/AnimateSwitch.hooks";

createStore('drawerOpen', false);

export function useLaDanzeDrawer() {
  const [open, setOpen] = useStore<boolean>('drawerOpen');
  // const [drawerOpen, setDrawerOpen] = useStore('drawerOpen');
  // console.log('drawerOpen', drawerOpen)
  const { url } = useRouteMatch();
  const location = useLocation();
  const { switchKey, setSwitchKey, updateSwitchKey } = useAnimateSwitch(location.pathname);

  return { open, setOpen, url, switchKey, setSwitchKey, updateSwitchKey };
}