ember-cli-pretender
===================

Simple wrapper for pretender.js, this project removes the need for the
developer to know which files need to be imported.

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

Nested Addon Usage Caveat
=====

To publish an addon that exports functionality driven by ember-cli-pretender,
note that ember-cli-pretender must be listed in the `dependencies` for NPM
and not the `devDependencies`.

When consuming an addon that consumes ember-cli-pretender, running the
initializing generator by hand is required.

```sh
ember generate ../node_modules/the-addon/node_modules/ember-cli-pretender/blueprints/ember-cli-pretender
```
