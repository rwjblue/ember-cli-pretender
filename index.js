'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLIPretender(project) {
  this.project = project;
  this.name = 'Ember Random Addon';
}

function unwatchedTree(dir){
  return {read: function() { return dir; }};
}

EmberCLIPretender.prototype.treeFor = function treeFor(name) {
  var treePath = path.join(__dirname, name);

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLIPretender.prototype.included = function included(app) {
  this.app = app;
  this.app.import('vendor/pretender/pretender.js');
};

module.exports = EmberCLIPretender;
