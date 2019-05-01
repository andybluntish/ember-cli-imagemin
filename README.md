ember-cli-imagemin
==============================================================================

[![Build Status](https://travis-ci.org/andybluntish/ember-cli-imagemin.svg?branch=master)](https://travis-ci.org/andybluntish/ember-cli-imagemin)
[![Dependency Status](https://david-dm.org/andybluntish/ember-cli-imagemin.svg)](https://david-dm.org/andybluntish/ember-cli-imagemin)
[![devDependency Status](https://david-dm.org/andybluntish/ember-cli-imagemin/dev-status.svg)](https://david-dm.org/andybluntish/ember-cli-imagemin#info=devDependencies)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-imagemin.svg)](http://emberobserver.com/addons/ember-cli-imagemin)

[Ember CLI](http://www.ember-cli.com) addon to minify images with [imagemin](https://github.com/imagemin/imagemin).


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-imagemin
```


Usage
------------------------------------------------------------------------------

By default, this addon will run during production builds, compressing the following image types:

- SVG (`svgo`)
- PNG (`optipng`)
- JPEG (`jpegtran`, `progressive: true`)
- GIF (`gifsicle`, `interlaced: true`)

These settings can be changed using the options below.

## Options

### Enabled

Type: `Boolean`
Default: `app.env === 'production'`

Enable minification of images. Defaults to `true` in production environment, otherwise `false`.

```js
const app = new EmberApp({
  imagemin: {
    enabled: true,
  }
})
```

Alternatively, you may simply set the `imagemin` key to a `Boolean` value as a shortcut to enable/disable with the default plugins.

```js
const app = new EmberApp({
  imagemin: true,
})
```

### Plugins

Type: `Array`
Default:

```js
plugins: [
  require('imagemin-gifsicle')({ interlaced: true }),
  require('imagemin-jpegtran')({ progressive: true }),
  require('imagemin-optipng')(),
  require('imagemin-svgo')(),
]
```

Imagemin plugins, and configuration options, used to compress images. Each [imagemin plugin](https://www.npmjs.com/browse/keyword/imageminplugin) needs to be installed into your project via `npm`. Specifying plugins will _replace_ the default list. If you wish to _extend_, the list don't forget to include _all_ plugins you wish to use.

#### Example: replace `optipng` with `pngquant`

```js
const app = new EmberApp({
  imagemin: {
    plugins: [
      require('imagemin-gifsicle')({ interlaced: true }),
      require('imagemin-jpegtran')({ progressive: true }),
      require('imagemin-pngquant')(),
      require('imagemin-svgo')(),
    ],
  },
})
```

#### Example: only compress SVGs and PNGs

```js
var app = new EmberApp({
  plugins: [
    require('imagemin-optipng')(),
    require('imagemin-svgo')(),
  ]
});
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
