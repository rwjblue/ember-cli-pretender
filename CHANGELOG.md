## v3.2.0 (2019-11-04)

#### :rocket: Enhancement
* [#70](https://github.com/rwjblue/ember-cli-pretender/pull/70) Update Pretender version (^3.0.1) ([@givanse](https://github.com/givanse))

#### :memo: Documentation
* [#72](https://github.com/rwjblue/ember-cli-pretender/pull/72) ember-auto-import: Warn when it is a dependency ([@dcyriller](https://github.com/dcyriller))

#### Committers: 2
- Cyrille David ([@dcyriller](https://github.com/dcyriller))
- Gastón I. Silva ([@givanse](https://github.com/givanse))

## v3.1.1 (2019-02-06)

#### :bug: Bug Fix
* [#69](https://github.com/rwjblue/ember-cli-pretender/pull/69) Search for official version whatwg-fetch ([@xg-wang](https://github.com/xg-wang))

#### Committers: 1
- Thomas Wang ([@xg-wang](https://github.com/xg-wang))

## v3.1.0 (2019-01-18)

#### :rocket: Enhancement
* [#67](https://github.com/rwjblue/ember-cli-pretender/pull/67) Allow opt-out of fetch polyfill ([@mydea](https://github.com/mydea))

#### :bug: Bug Fix
* [#68](https://github.com/rwjblue/ember-cli-pretender/pull/68) Replace `resolve.sync()` with `require.resolve()` ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#65](https://github.com/rwjblue/ember-cli-pretender/pull/65) Switch fetch polyfill to official version ([@nlfurniss](https://github.com/nlfurniss))

#### Committers: 3
- Francesco Novy ([@mydea](https://github.com/mydea))
- Nathaniel Furniss ([@nlfurniss](https://github.com/nlfurniss))
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))


## v3.0.0 (2018-07-18)

#### :boom: Breaking Change
* [#62](https://github.com/rwjblue/ember-cli-pretender/pull/62) Update dependencies ([@xg-wang](https://github.com/xg-wang))

#### Committers: 1
- Thomas Wang ([@xg-wang](https://github.com/xg-wang))

## 1.0.0

* Remove `pretender` module shim (this is now provided by pretender itself).

## 0.7.0

* Remove bower requirement (consume `pretender` from NPM instead).
* Update to pretender `^1.0.0`.

## 0.6.0

* Update to pretender 0.12.0.

## 0.5.0

* Bump pretender to 0.10
* Fix typo in option name to en/disable pretender

## 0.4.0

* Bump Pretender version to 0.9.0.

## 0.2.3

* Fix shim to add list of export modules.

## 0.2.2

* Add shim file to allow `import Pretender from 'pretender';`.
* Fix repo URL's (rjackson -> rwjblue).

## 0.2.1

* Remove hard-coded list of files to include (in package.json).

## 0.2.0

* Remove vendored code (instead, install via bower in postinstall hook).
* Export a POJO (allows us to inherit from ember-cli's Addon model).
* Add repo url to package.json.
