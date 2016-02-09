/* jshint node: true */
'use strict';

var imagemin = require('broccoli-imagemin');

module.exports = {
  name: 'ember-cli-imagemin',

  included: function() {
    this._super.included.apply(this, arguments);

    // Default options
    var defaultOptions = {
      enabled: this.app.env === 'production'
    };

    // If the imagemin options key is set to `false` instead of
    // an options object, disable the addon
    if (typeof this.app.options.imagemin === 'boolean') {
      this.options = this.app.options.imagemin = { enabled: this.app.options.imagemin };
    } else {
      this.options = this.app.options.imagemin = this.app.options.imagemin || {};
    }

    // Merge the default options with the passed in options
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
