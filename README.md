ember-cli-pretender
===================

Simple wrapper for pretender.js, this project removes the need for the
developer to know which files need to be imported.

NOTE: Please use [pretender](https://github.com/pretenderjs/pretender) directly instead. Use [ember-auto-import](https://github.com/ef4/ember-auto-import) to import pretender without the need for ember-cli-pretender to add it via app.imports.

Usage
=====

```sh
ember install ember-cli-pretender
```

You can then import Pretender in your tests:

```javascript
import Pretender from 'pretender';
```

see: [pretenderjs/pretender](https://github.com/pretenderjs/pretender) for pretender
docs

Configuration
=====

By default `pretender.enabled` will be set to `app.tests`. This means that pretender will only be available as an import when your app includes your test suite.

If you'd like to include Pretender into production builds as well, you can set `pretender.enabled` to `true` in your `ember-cli-build.js` or `Brocfile.js`:

```javascript
var app = new EmberApp({
  pretender: {
    enabled: true
  }
});
```

You can also opt out of including the fetch polyfill, if you do not need to run your tests in older browsers:

```javascript
var app = new EmberApp({
  pretender: {
    includeFetchPolyfill: false
  }
});
```

Nested Addon Usage Caveat
=====

To publish an addon that exports functionality driven by ember-cli-pretender,
note that ember-cli-pretender must be listed in the `dependencies` for NPM
and not the `devDependencies`.
