# `g-components`

Reusable React components for building IG pages.

## Adding to a project

There are two ways you can consume g-components:

1. The full bundle

```
import { Accordion } from "@financial-times/g-components";
import from "@financial-times/g-components/styles.css";
```

This is the new way. It's easier and about as performant as the old way.

2. Individual components

```
import Accordion from "@financial-times/g-components/accordion";
import from "@financial-times/g-components/styles.css";
```

If you're having performance issues, please try the old way of importing individual components.

## Migrating to g-components v9

g-components v9 is lighter than previous versions and has a few significant API differences:

1. You only need to import one CSS file regardless of whether you import individual components or the whole bundle:

```
import from "@financial-times/g-components/styles.css";
```

2. The following components have been removed:

- data-sonification
- feature
- html-head
- progress
- sticky-header
- sticky

Please stay on v8 if you use any of these components.

## Running the Storybook

You can see what components are available in Storybook:

```bash
$ npm run storybook
```

# Development

To test components during development:

```bash
$ npm link ../g-components
```

# Releasing

First make sure your local is up to date with the origin and that you're on the `main` branch:

```bash
$ git pull
$ git checkout main
```

Then update the snapshots:

```bash
$ npm run test -- -u
$ git add src/__snapshots__/*
$ git commit -m 'Update snapshots'
$ git push
```

Next, run `npm version [major|minor|patch]` to increment the version based on the type of changes in this release. We use [Semantic Versioning](https://semver.org/) to increment versions:

- Breaking (non-backwards-compatible) changes should be a `major` release
- New features (that are backwards-compatible) should be `minor`
- Bug fixes should be a `patch`
- Alternatively, you can use `npm version vX.X.X` to set the version yourself.

Finally, run `git push --follow-tags` to push the new version to GitHub, which will trigger the CircleCI pipeline that publishes the new version on NPM.

### Pre-release ("canary") versions

If you'd like to release a pre-release version (e.g. to test or gradually roll out a new feature), you can create a new version like `npm version v1.0.0-canary.0`. The version number should represent the ultimate release this change will land in, while the final `0` can be incremented to make subsequent prerelease builds.

NPM can also generate this automatically for you, with `npm version pre[major|minor|patch] --preid canary`.

# Licence

This software is published by the Financial Times under the [MIT licence](https://opensource.org/licenses/MIT).

Please note the MIT licence only covers the software, and does not cover any FT content or branding incorporated into the software or made available using the software. FT content is copyright © The Financial Times Limited, and FT and 'Financial Times' are trademarks of The Financial Times Limited, all rights reserved. For more information about republishing FT content, please contact our [republishing department](https://ft.com/republishing).
