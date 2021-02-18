// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
const debug = require('debug')('semantic-release:update-version-in-files');

function prepare({ files, versionKey = 'version' }, { lastRelease, nextRelease }) {
  debug("config %o", { files, versionKey });
  debug(`version ${lastRelease.version} -> ${nextRelease.version}`);

  files.forEach((item) => parseObject(item, versionKey, lastRelease.version, nextRelease.version));
  debug(`All files correctly updated with new version ${newVersion}`);
}

function parseObject(fileConfig, versionKey, oldVersion, newVersion) {
  if (typeof fileConfig === 'object') {
    if (!fileConfig.path) {
      throw new Error(`'path' attribute is mandatory for fileConfig object, received: ${JSON.stringify(fileConfig)}`);
    }
    updateFileVersion(fileConfig.path, fileConfig.versionKey || versionKey, oldVersion, newVersion);
  } else {
    updateFileVersion(fileConfig, versionKey, oldVersion, newVersion);
  }
}

function updateFileVersion(filePath, versionKey, oldVersion, newVersion) {
  try {

    const content = fs.readFileSync(filePath, 'utf8').trim();
    // Version is of type "<versionKey>": "<oldRelease.version>" or <versionKey>: <oldRelease.version> or ...
    const regex = RegExp(`("|')?${versionKey}("|')?(:|=)\\s*("|')?${oldVersion}("|')?`);

    if (!regex.test(content)) {
      throw new Error(`Can't find ${versionKey}: ${oldVersion} in ${filePath}`);
    }

    const splitStr = content.match(regex)[0];
    const splitted = content.split(splitStr);
    splitted.splice(1, 0, splitStr.replace(oldVersion, newVersion));

    fs.writeFileSync(filePath, splitted.join('') + '\n');
    debug(`${filePath} correctly updated with new version ${newVersion}`);

  } catch (error) {
    throw new Error(`Could not update "${filePath}": ${error.message}`);
  }
}

module.exports = { prepare };
