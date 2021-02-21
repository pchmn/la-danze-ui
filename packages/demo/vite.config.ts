import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import { AliasOptions, defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

let alias: AliasOptions;
if (process.env.APP_ENV === 'development') {
  alias = [
    { find: /^la-danze-ui$/, replacement: path.resolve(__dirname, '../lib/src/index') },
    { find: /^@la-danze-ui\/core\/(.*)/, replacement: path.resolve(__dirname, '../lib/src/core/$1') },
    { find: /^@la-danze-ui\/animation\/(.*)/, replacement: path.resolve(__dirname, '../lib/src/animation/$1') },
    { find: /^@la-danze-ui\/form\/(.*)/, replacement: path.resolve(__dirname, '../lib/src/form/$1') },
  ]
};

export default defineConfig({
  plugins: [
    reactRefresh(),
    svgr()
  ],
  base: '/la-danze-ui/demo/',
  resolve: {
    alias
  },
});