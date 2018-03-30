import webpack from 'webpack'

module.exports = {
    entry: {
        'app': ['./src/js/app.js']
    },
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};