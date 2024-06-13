const { override, addWebpackAlias } = require('customize-cra');
const webpack = require('webpack');

module.exports = override(
    addWebpackAlias({
        crypto: require.resolve('crypto-browserify'),
    }),
    (config) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                process: 'process/browser',
                Buffer: ['buffer', 'Buffer'],
            })
        );
        return config;
    }
);