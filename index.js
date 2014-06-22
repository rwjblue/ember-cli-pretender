'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLIPretender(project) {
  this.project = project;
  this.name    = 'Ember CLI Pretender';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLIPretender.prototype.treeFor = function treeFor(name) {
  var treePath =  path.join('node_modules/ember-cli-pretender', name + '-addon');

  if (this.app.env !== 'production' && fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLIPretender.prototype.included = function included(app) {
  this.app = app;

  if (this.app.env !== 'production') {
    this.app.import('vendor/FakeXMLHttpRequest/fake_xml_http_request.js');
    this.app.import('vendor/route-recognizer/dist/route-recognizer.js');
    this.app.import('vendor/pretender/pretender.js');
  }
};

module.exports = EmberCLIPretender;
