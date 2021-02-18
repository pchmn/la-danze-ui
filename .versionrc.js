module.exports = {
  bumpFiles: [
    {
      filename: 'package.json',
      type: 'json'
    },
    {
      filename: 'packages/lib/package.json',
      type: 'json'
    },
    {
      filename: 'packages/demo/package.json',
      type: 'json'
    },
    {
      filename: 'packages/doc/package.json',
      type: 'json'
    },
    {
      filename: 'config.js',
      updater: 'standard-version.updater.js'
    }
  ],
  types: [
    { type: "feat", section: "lol", hidden: true },
    { type: "fix", section: "Bug Fixes" },
    { type: "chore", hidden: true },
    { type: "docs", hidden: true },
    { type: "style", hidden: true },
    { type: "refactor", hidden: true },
    { type: "perf", hidden: true },
    { type: "test", hidden: true },
    { type: "build", hidden: true },
    { type: "ci", hidden: true },
    { type: "revert", hidden: true }
  ],
  preMajor: true
};
