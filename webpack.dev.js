const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
    plugins: [
        new BrowserSyncPlugin({
            proxy: 'wpbase.test',
            files: [
                '**/*.php'
            ],
            reloadDelay: 0
        })
    ]
});