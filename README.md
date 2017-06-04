# ember-cli-imagemin

[![Build Status](https://travis-ci.org/andybluntish/ember-cli-imagemin.svg?branch=master)](https://travis-ci.org/andybluntish/ember-cli-imagemin)
[![Dependency Status](https://david-dm.org/andybluntish/ember-cli-imagemin.svg)](https://david-dm.org/andybluntish/ember-cli-imagemin)
[![devDependency Status](https://david-dm.org/andybluntish/ember-cli-imagemin/dev-status.svg)](https://david-dm.org/andybluntish/ember-cli-imagemin#info=devDependencies)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-imagemin.svg)](http://emberobserver.com/addons/ember-cli-imagemin)

[Ember CLI](http://www.ember-cli.com) addon to minify images with imagemin. This is just a thin wrapper around [broccoli-imagemin](https://github.com/Xulai/broccoli-imagemin).

## Installation

```js
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

### Plugins

Type: `Array`  
Default:

```
plugins: [
  require('imagemin-gifsicle')({ interlaced: true }),
  require('imagemin-jpegtran')({ progressive: true }),
  require('imagemin-optipng')(),
  require('imagemin-svgo')()
]
```

Imagemin plugins and options used to compress images.

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
