/* eslint-disable @typescript-eslint/no-var-requires */
const config = require('./config');

module.exports.readVersion = () => {
  return config.LA_DANZE_UI_VERSION;
};

module.exports.writeVersion = function (contents, version) {
  return contents.replace(config.LA_DANZE_UI_VERSION, version);
};
