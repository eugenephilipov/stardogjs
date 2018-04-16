Force `process.env` to use environment vars on runtime instead of on build time.
===========================================================================
ATTENTION! Currently this approach is not recommended.

To achieve that some changes should be implemented to patch webpack config for production:

1. `react-script`s `webpack.config.prod.js` should be patched (see [below](#webpackconfigprodjs)).
2. `index.js` should be adapted to inject environment variables into `window.process.env` instead of `window.env`

### webpack.config.prod.js
1. Updated `DefinePlugin` options. Instead of substituting all of the process.env properties,
use only `process.env.NODE_ENV` substitution, to keep production build minified.

```js
new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production'), // DO NOT inline whole process.env!
})
```

2. Updated `UglifyJsPlugin` options to disable mangling of `process` object name:

```js
new webpack.optimize.UglifyJsPlugin({
  // ...
  mangle: {
    except: ['process'], // DO NOT mangle 'process'!
  },
})
```

3. Updated `node` webpack options to disable mocking of the `process` object during building:

```js
module.exports = {
  // ... the rest of webpack configuration ...
  node: {
    // ...
    process: false, // DO NOT mock 'process'!
  },
}
```
