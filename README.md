# Ember-cli-imagemin

Minify images with imagemin. This addon is a thin wrapper around [broccoli-imagemin](https://github.com/Xulai/broccoli-imagemin).


## Installation

    npm install ember-cli-imagemin --save-dev


## Options

Define options to be passed directly to `broccoli-imagemin`.

    var app = new EmberApp({
      imagemin: {
        interlaced: true,
        optimizationLevel: 3,
        progressive: true,
        lossyPNG: false
      }
    });

Read more about the options you may pass in on the [broccoli-imagemin](https://github.com/Xulai/broccoli-imagemin) page.
