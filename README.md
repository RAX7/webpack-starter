# Webpack Frontend Starterkit

A lightweight foundation for your next webpack based frontend project.

### Installation

Install yarn:

see: https://yarnpkg.com/getting-started/install

```console
corepack enable
```

Install dependencies:
```console
yarn
```

### Start Dev Server

```console
yarn start
```

### Build Prod Version

```console
yarn build
```

### Features:

- ES6 Support via [babel](https://babeljs.io/) (v7)
- JavaScript Linting via [eslint](https://eslint.org/)
- SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
- Autoprefixing of browserspecific CSS rules via [postcss](https://postcss.org/) and [postcss-preset-env](https://github.com/csstools/postcss-preset-env)
- Style Linting via [stylelint](https://stylelint.io/)

When you run `yarn build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
