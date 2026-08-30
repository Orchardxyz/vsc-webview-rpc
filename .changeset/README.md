# Changesets

Run `pnpm changeset` when a change affects the published package. Select the semver bump that matches the change: patch for fixes, minor for backward-compatible features, and major for breaking changes.

CI-only, documentation-only, and internal tooling changes that do not affect the published package do not require a Changeset.
