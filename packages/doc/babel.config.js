const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const envKeys = Object.keys(dotenv.parsed).reduce((prev, next) => {
  prev[`process.env.${next}`] = dotenv.parsed[next];
  return prev;
}, {});

console.log('process env', dotenv.parsed);

module.exports = {
  presets: [
    require.resolve('@docusaurus/core/lib/babel/preset'),
  ],
  env: {
    production: {
      plugins: [["inline-dotenv", {
        path: '../../.env'
      }]]
    },
    development: {
      plugins: [["inline-dotenv", {
        path: '../../.env'
      }]]
    }
  }
};
