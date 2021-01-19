import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    base: '/la-danze-ui/demo'
  },
  alias: {
    'la-danze-ui': path.resolve(__dirname, '../lib/src/index.tsx'),
  },
  optimizeDeps: {
    include: [
      "@material-ui/core/Button",
      "@material-ui/core/AppBar",
      "@material-ui/core/CssBaseline",
      "@material-ui/core/useMediaQuery",
      "@material-ui/core/Drawer",
      "@material-ui/core/Hidden",
      "@material-ui/core/IconButton",
      "@material-ui/core/List",
      "@material-ui/core/ListItem",
      "@material-ui/core/SwipeableDrawer",
      "@material-ui/core/Toolbar",
      "@material-ui/core/Tooltip",
      "@material-ui/core/ListItem",
      "@material-ui/icons/ChevronRightOutlined",
      "@material-ui/icons/Menu",
      "@material-ui/icons/ListAltOutlined",
      "@material-ui/icons/SlowMotionVideoOutlined",
      "@material-ui/core/FormControl",
      "@material-ui/core/TextField",
      "@material-ui/core/FormControlLabel",
      "@material-ui/core/Paper",
      "@material-ui/core/Grid",
      "@material-ui/core/Radio",
      "@material-ui/core/RadioGroup",
      "@material-ui/core/Snackbar",
      "@material-ui/icons/FileCopyOutlined"

    ]
  },
  css: {
    modules: {
      localsConvention: 'dashes'
    }
  }
});