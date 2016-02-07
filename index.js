/* jshint node: true */
'use strict';

var imagemin = require('broccoli-imagemin');

module.exports = {
  name: 'ember-cli-imagemin',

  included: function(app) {
    this.app = app;

    var defaultOptions = {
      enabled: this.app.env === 'production'
    };

    if (this.app.options.imagemin === false) {
      this.options = this.app.options.imagemin = { enabled: false };
    } else {
      this.options = this.app.options.imagemin = this.app.options.imagemin || {};
    }

    for (var option in defaultOptions) {
      if (!this.options.hasOwnProperty(option)) {
        this.options[option] = defaultOptions[option];
      }
    }
  },

  postprocessTree: function(type, tree) {
    if (this.options.enabled) {
      tree = imagemin(tree, this.options);
    }

    return tree;
  }
};
