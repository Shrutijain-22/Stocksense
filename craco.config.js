const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // merge/ensure resolve.fallback and resolve.alias exist
      webpackConfig.resolve = webpackConfig.resolve || {};
      webpackConfig.resolve.fallback = {
        ...(webpackConfig.resolve.fallback || {}),
        path: require.resolve("path-browserify"),
        os: require.resolve("os-browserify/browser"),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        assert: require.resolve("assert/"),
        util: require.resolve("util/"),
        url: require.resolve("url/"),
        tty: require.resolve("tty-browserify"),
        vm: require.resolve("vm-browserify"),
        fs: false,
        module: false,
        v8: false,
        perf_hooks: false,
        // NOTE: do NOT add process here — we alias process/browser explicitly below
      };

      // Add alias for fully-specified import 'process/browser' -> process/browser.js
      webpackConfig.resolve.alias = {
        ...(webpackConfig.resolve.alias || {}),
        "process/browser": require.resolve("process/browser.js")
      };

      // Provide globals
      webpackConfig.plugins = webpackConfig.plugins || [];
      webpackConfig.plugins.push(
        new webpack.ProvidePlugin({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer'],
        })
      );

      return webpackConfig;
    }
  }
};
