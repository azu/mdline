# mdline [![Build Status](https://travis-ci.org/azu/mdline.svg?branch=master)](https://travis-ci.org/azu/mdline)

Markdown timeline format and toolkit.

For example, mdline convert [a markdown file](packages/mdline-parser/test/snapshots/ecmascript/input.md) to following [HTML file](https://mdline.netlify.com/).

[![ecmascript-timeline.png](./docs/resources/ecmascript-timeline.png)](https://mdline.netlify.com/)

> mdline timeline: <https://mdline.netlify.com/>  
> [ECMAScript - Wikipedia](https://en.wikipedia.org/wiki/ECMAScript)


## Mdline Format

```
## {{Date}}: TITLE

MARKDOWN BODY

## {{Date}}--{{Date}}: TITLE

MARKDOWN BODY
```

**Example:**

```
## 1997-06: ECMAScript 1

First edition.

## 1998-06: ECMAScript 2

Editorial changes to keep the specification fully aligned with ISO/IEC 16262 international standard.

## 1999-12: ECMAScript 3

Added regular expressions, better string handling, new control statements, try/catch exception handling, tighter definition of errors, formatting for numeric output and other enhancements.

## 2000-01--2007-10-23: [Abandoned] ECMAScript 4

Fourth Edition was abandoned, due to political differences concerning language complexity. Many features proposed for the Fourth Edition have been completely dropped; some were incorporated into the sixth edition.
```

For more details, see [ECMAScript timeline markdown](packages/mdline/test/snapshots/example/input.md) and [HTML](packages/mdline/test/snapshots/example/output.html).

You can also live demo on <https://mdline.netlify.com/>.

## Usage

Install with [npm](https://www.npmjs.com/):

    npm install mdline -g

Convert mdline format text to html.

    mdline ./timeline.md -o timeline.html
    # or
    npx mdline ./timeline.md -o timeline.html

For more details, see [mdline package](./packages/mdline).

## Packages

This repository is a monorepo includes following packages.

- [types](./packages/types) - Type definitions for mdline
- [mdline](./packages/mdline) - CLI, Core
- [mdline-parser](./packages/mdline-parser) - Parser for mdline format
- [mdline-formatter-html](./packages/mdline-formatter-html) - Formatter for mdline format

## Changelog

See [Releases page](https://github.com/azu/mdline/releases).

## Running tests

    yarn install
    yarn bootrap
    yarn test

## Release workflow

    # = npm version
    yarn run versionup
    # = npm publish
    yarn run release

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/mdline/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
