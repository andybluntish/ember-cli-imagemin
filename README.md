# ember-cli-imagemin

[![Build Status](https://travis-ci.org/andybluntish/ember-cli-imagemin.svg?branch=master)](https://travis-ci.org/andybluntish/ember-cli-imagemin)
[![Dependency Status](https://david-dm.org/andybluntish/ember-cli-imagemin.svg)](https://david-dm.org/andybluntish/ember-cli-imagemin)
[![devDependency Status](https://david-dm.org/andybluntish/ember-cli-imagemin/dev-status.svg)](https://david-dm.org/andybluntish/ember-cli-imagemin#info=devDependencies)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-imagemin.svg)](http://emberobserver.com/addons/ember-cli-imagemin)

[Ember CLI](http://www.ember-cli.com) addon to minify images with imagemin. This is just a thin wrapper around [broccoli-imagemin](https://github.com/kanongil/broccoli-imagemin).

## Installation

```sh
ember install ember-cli-imagemin
```

## Options

### Broccoli Imagemin options

Define options to be passed directly to [broccoli-imagemin](https://github.com/kanongil/broccoli-imagemin).

```js
var app = new EmberApp({
  imagemin: {
    plugins: [
      require('imagemin-gifsicle')({ interlaced: true }),
      require('imagemin-jpegtran')({ progressive: true }),
      require('imagemin-optipng')(),
      require('imagemin-svgo')()
    ]
  }
});
```

Read more about the options you may pass in on the [broccoli-imagemin](https://github.com/kanongil/broccoli-imagemin) page.

### Enabled

Type: `Boolean`  
Default: `app.env === 'production'`

Enable minification of images. Defaults to `true` in production environment, otherwise `false`.

```js
var app = new EmberApp({
  imagemin: {
    enabled: true
  }
});
```

Alternatively, you may simply set the `imagemin` key to a `Boolean` value as a shortcut to enable/disable with the default plugins. E.g.

```js
// Enable with default options
var app = new EmberApp({
  imagemin: true
});
```

### Plugins

Type: `Array`  
Default:

```js
plugins: [
  require('imagemin-gifsicle')({ interlaced: true }),
  require('imagemin-jpegtran')({ progressive: true }),
  require('imagemin-optipng')(),
  require('imagemin-svgo')()
]
```

Imagemin plugins, and configuration options, used to compress images. Each [imagemin plugin](https://www.npmjs.com/browse/keyword/imageminplugin) needs to be installed into your project via `npm`. Specifying plugins will _replace_ the default list. If you wish to _extend_, the list don't forget to include _all_ plugins you wish to use.

```js
var app = new EmberApp({
  plugins: [
    require('imagemin-pngquant')(),
    require('imagemin-svgo')()
  ]
});
```
