'use strict';
var path = require('path');

module.exports = {
  name: 'ember-cli-pretender',

  included: function included(app) {
    this.app = app;

    if (app.env !== 'production') {
      app.import('vendor/ember-cli-pretender/shim.js', {
        type: 'vendor',
        exports: { 'pretender': ['default'] }
      });
    }
  },

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },


};
