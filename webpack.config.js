const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "stream": require.resolve("stream-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "url": require.resolve("url/"),
      "assert": require.resolve("assert/"),
      "util": require.resolve("util/"),
      "process": require.resolve("process/browser"),
      "fs": false,
      "module": false,
      "tty": require.resolve("tty-browserify"),
      "vm": require.resolve("vm-browserify"),
      "v8": false,
      "perf_hooks": false
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ]
};
