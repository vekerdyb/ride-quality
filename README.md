# ride-quality
Crowd-sourced bike road quality measurements and info.

## Prerequisites
Globally available:

- `npm` (recommended to install via `nvm`)
- `cordova`
- `ionic`
- `gulp`

## Usage
Clone the repo.

Run `./setup`.

### Available commands

- `bower install` - install bower dependencies
- `npm install` - install dependencies
- `ionic serve` - start dev server
- `gulp test` - run tests once
- `gulp tdd` - run tests continuously, watching for changes
- `gulp e2e` - run end-to-end tests
- `gulp e2e-cordova` - run end-to-end tests that require cordova plugins to be loaded
- `gulp build` - build
- `gulp clean` - clean www/ dir
- `gulp rebuild` - clean + build
- `gulp watch` - watch files for changes
- `gulp config --env [environment setup file]` - set config variables (via gulp-ng-constant)

First time setup:
```
./setup
ionic serve
```