'use strict';
var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-pretender',

  _findPretenderPaths: function() {
    if (!this._pretenderPath) {
      var resolve = require('resolve');

      this._pretenderPath = resolve.sync('pretender');
      this._pretenderDir = path.dirname(this._pretenderPath);
      this._routeRecognizerPath = resolve.sync('route-recognizer');
      this._fakeRequestPath = resolve.sync('fake-xml-http-request');
      this._abortControllerPath = resolve.sync('abortcontroller-polyfill/dist/abortcontroller-polyfill-only.js');
      this._whatwgFetchPath = resolve.sync('@xg-wang/whatwg-fetch/dist/fetch.umd.js');
    }
  },

  treeForVendor: function(tree) {
    this._findPretenderPaths();

    var pretenderTree = new Funnel(this._pretenderDir, {
      files: [path.basename(this._pretenderPath)],
      destDir: '/pretender',
    });

    var routeRecognizerFilename = path.basename(this._routeRecognizerPath);
    var routeRecognizerTree = new Funnel(path.dirname(this._routeRecognizerPath), {
      files: [routeRecognizerFilename, routeRecognizerFilename + '.map'],
      destDir: '/route-recognizer',
    });

    var fakeRequestTree = new Funnel(path.dirname(this._fakeRequestPath), {
      files: [path.basename(this._fakeRequestPath)],
      destDir: '/fake-xml-http-request',
    });

    var abortControllerTree = new Funnel(path.dirname(this._abortControllerPath), {
      files: [path.basename(this._abortControllerPath)],
      destDir: '/abortcontroller-polyfill',
    });

    var whatwgFetchTree = new Funnel(path.dirname(this._whatwgFetchPath), {
      files: [path.basename(this._whatwgFetchPath)],
      destDir: '/whatwg-fetch',
    });

    var trees = [
      tree,
      pretenderTree,
      routeRecognizerTree,
      fakeRequestTree,
      abortControllerTree,
      whatwgFetchTree
      // tree is not always defined, so filter out if empty
    ].filter(Boolean);

    return new MergeTrees(trees, {
      annotation: 'ember-cli-pretender: treeForVendor'
    });
  },

  included: function included(app) {
    if (app.app) {
      app = app.app;
    }
    this.app = app;

    var opts = app.options.pretender || { enabled: app.tests };
    if (opts.enabled) {
      this._findPretenderPaths();

      app.import('vendor/fake-xml-http-request/' + path.basename(this._fakeRequestPath));
      app.import('vendor/route-recognizer/' + path.basename(this._routeRecognizerPath));
      app.import('vendor/abortcontroller-polyfill/' + path.basename(this._abortControllerPath));
      app.import('vendor/whatwg-fetch/' + path.basename(this._whatwgFetchPath));
      app.import('vendor/pretender/' + path.basename(this._pretenderPath));
    }
  },
};
