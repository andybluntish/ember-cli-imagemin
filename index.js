'use strict';

const imagemin = require('imagemin');

module.exports = {
  name: require('./package').name,

  included: function () {
    this._super.included.apply(this, arguments);

    let options = {};

    if (typeof this.app.options.imagemin === 'boolean') {
      options = { enabled: this.app.options.imagemin };
    } else {
      options = this.app.options.imagemin;
    }

    this.app.options.imagemin = {
      enabled: this.app.env === 'production',
      extensions: ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'],
      plugins: [
        require('imagemin-gifsicle')({ interlaced: true }),
        require('imagemin-jpegtran')({ progressive: true }),
        require('imagemin-optipng')(),
        require('imagemin-svgo')(),
        require('imagemin-webp')(),
      ],
      ...options,
    };
  },

  async postBuild({ directory: destination }) {
    const { enabled, extensions, plugins } = this.app.options.imagemin;

    if (!enabled) {
      return;
    }

    const glob = `${destination}/**/*.{${extensions.join(',')}}`;
    await imagemin([glob], { destination, plugins });
  },
};
