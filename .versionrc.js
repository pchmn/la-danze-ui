module.exports = {
  bumpFiles: [
    {
      filename: "package.json",
      type: "json"
    },
    {
      filename: "packages/lib/package.json",
      type: "json"
    },
    {
      filename: "packages/demo/package.json",
      type: "json"
    },
    {
      filename: "packages/doc/package.json",
      type: "json"
    },
    {
      filename: "config.js",
      updater: "standard-version.updater.js"
    }
  ]
}