/* jshint node: true */
'use strict';

var imagemin = require('broccoli-imagemin');

module.exports = {
  name: 'ember-cli-imagemin',

  included: function() {
    this._super.included.apply(this, arguments);

    this.enabled = this.app.env === 'production'
    this.options = this.app.options.imagemin = this.app.options.imagemin || {};

    if ('enabled' in this.options) {
      this.enabled = this.options.enabled;
      delete this.options.enabled;
    }

    if (!this.options.plugins || this.options.plugins.length === 0) {
      this.enabled = false;
    }
  },

  postprocessTree: function(type, tree) {
    if (this.enabled) {
      tree = new imagemin(tree, this.options);
    }

    return tree;
  }
};
