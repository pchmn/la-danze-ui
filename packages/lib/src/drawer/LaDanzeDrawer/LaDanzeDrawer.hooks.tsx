import { makeStyles } from "@material-ui/core";
import { createStore, useStore } from "react-hookstore";
import { useLocation, useRouteMatch } from "react-router-dom";
import { useAnimateSwitch } from "../../animation/AnimateSwitch/AnimateSwitch.hooks";

const drawerWidth = 290;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `100%`,
      // marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    transition: 'all 0.225s'
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(9) + 1,
    [theme.breakpoints.up('sm')]: {
      width: '85px',
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }
}));

createStore('drawerOpen', false);

export function useLaDanzeDrawer() {
  const classes = useStyles();
  const [open, setOpen] = useStore<boolean>('drawerOpen');
  // const [drawerOpen, setDrawerOpen] = useStore('drawerOpen');
  // console.log('drawerOpen', drawerOpen)
  const { url } = useRouteMatch();
  const location = useLocation();
  const { switchKey, setSwitchKey, updateSwitchKey } = useAnimateSwitch(location.pathname);

  return { classes, open, setOpen, url, switchKey, setSwitchKey, updateSwitchKey };
}