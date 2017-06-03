/* eslint-env node */
'use strict';

var imagemin = require('broccoli-imagemin');

module.exports = {
  name: 'ember-cli-imagemin',

  included: function() {
    this._super.included.apply(this, arguments);
    this.app.options.imagemin = this.app.options.imagemin || {};

    if ('enabled' in this.app.options.imagemin) {
      this.enabled = this.app.options.imagemin.enabled;
      delete this.app.options.imagemin.enabled;
    } else {
      this.enabled = this.app.env === 'production';
    }

    if (!this.app.options.imagemin.plugins || this.app.options.imagemin.plugins.length === 0) {
      this.enabled = false;
    }
  },

  postprocessTree: function(type, tree) {
    if (this.enabled) {
      tree = new imagemin(tree, this.app.options.imagemin);
    }

    return tree;
  }
};
