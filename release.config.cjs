/** @type {import('semantic-release').GlobalConfig} */
module.exports = {
  branches: ["main"],
  tagFormat: "v${version}",
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          { type: "docs", release: "patch" },
          { type: "refactor", release: "patch" },
          { type: "perf", release: "patch" },
          { type: "revert", release: "patch" }
        ]
      }
    ],
    ["@semantic-release/release-notes-generator", { preset: "conventionalcommits" }],
    "@semantic-release/github"
  ]
};
