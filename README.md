# `g-components`

Reusable React components for building IG pages.

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

First make sure your local is up to date with the origin. Then update the snapshots:

```bash
$ npm run test -- -u
$ git add src/__snapshots__/*
$ git commit -m 'Update snapshots'
$ git push
```

Check the last version number that was released:

```bash
$ git describe --tags
```

Then release the next version, replacing v9.9.9 with the actual number:

```bash
$ git tag v9.9.9
$ git push origin v9.9.9
```

# Licence

This software is published by the Financial Times under the [MIT licence](https://opensource.org/licenses/MIT).

Please note the MIT licence only covers the software, and does not cover any FT content or branding incorporated into the software or made available using the software. FT content is copyright © The Financial Times Limited, and FT and 'Financial Times' are trademarks of The Financial Times Limited, all rights reserved. For more information about republishing FT content, please contact our [republishing department](https://ft.com/republishing).
