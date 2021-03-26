/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const palette = require('./palette.json');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/core/theme/colors.scss');

generateCssColor();

function generateCssColor() {
  let cssColorsString = ':root {\n';
  const prefixColor = '  --color';

  for (const type in palette) {
    const prefix = `${prefixColor}-${type}`;
    if (type === 'divider' || type === 'link') {
      cssColorsString += `${prefix}: ${palette[type]};\n`;
    } else if (typeof palette[type] !== 'string') {
      for (const colorKey in palette[type]) {
        cssColorsString += `${prefix}-${colorKey}: ${palette[type][colorKey]};\n`;
      }
    }
  }
  cssColorsString += '}\n';
  fs.writeFileSync(filePath, cssColorsString);
}
