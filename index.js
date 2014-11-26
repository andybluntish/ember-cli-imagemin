'use strict';

var imagemin = require('broccoli-imagemin');

function EmberCLIImagemin(project) {
  this.project = project;
  this.name = 'Ember CLI Imagemin';
}

EmberCLIImagemin.prototype.included = function included(app) {
  this.app = app;
  this.options = this.app.options.imagemin;
};

EmberCLIImagemin.prototype.postprocessTree = function postprocessTree(type, tree) {
  tree = imagemin(tree, this.options);

  return tree;
};

module.exports = EmberCLIImagemin;
