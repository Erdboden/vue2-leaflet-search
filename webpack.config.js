
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
    output: {
        path: path.resolve(__dirname + '/dist/'),
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.css$/,
                loader: 'style!less!css'
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                    loader: 'url-loader'
            }
        ]
    },
    externals: {
        googleGeocoder: "google-geocoder",
        leafletSearch: "leaflet-search",
        vue2Leaflet: "vue2-leaflet"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin( {
            minimize : true,
            sourceMap : false,
            mangle: true,
            compress: {
                warnings: false
            }
        } )
    ]
};


module.exports = [
    merge(config, {
        entry: path.resolve(__dirname + '/src/components/Vue2LeafletSearch.vue'),
        output: {
            filename: 'vue2-leaflet-search.js',
            libraryTarget: 'umd',
            library: 'v-search',
            umdNamedDefine: true
        }
    })
];