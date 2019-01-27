'use strict'

var imagemin = require('broccoli-imagemin')

module.exports = {
  name: require('./package').name,

  included: function() {
    this._super.included.apply(this, arguments)
    this.app.options.imagemin = this.app.options.imagemin || {}

    if (typeof this.app.options.imagemin === 'boolean') {
      this.enabled = this.app.options.imagemin
      this.app.options.imagemin = {}
    } else if ('enabled' in this.app.options.imagemin) {
      this.enabled = this.app.options.imagemin.enabled
      delete this.app.options.imagemin.enabled
    } else {
      this.enabled = this.app.env === 'production'
    }

    // if addon is enabled but no plugins have been specified, use a default set
    if (
      this.enabled &&
      (!this.app.options.imagemin.plugins || this.app.options.imagemin.plugins.length === 0)
    ) {
      this.app.options.imagemin.plugins = [
        require('imagemin-gifsicle')({ interlaced: true }),
        require('imagemin-jpegtran')({ progressive: true }),
        require('imagemin-optipng')(),
        require('imagemin-svgo')(),
      ]
    }
  },

  postprocessTree: function(type, tree) {
    if (this.enabled) {
      tree = new imagemin(tree, this.app.options.imagemin)
    }

    return tree
  },
}
