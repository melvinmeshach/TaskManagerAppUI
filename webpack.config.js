var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: [ 'babel-polyfill' , "./js/app.js" ],
    output: 
    {
        filename: "./js/public/bundle.js",
    },
    devtool: 'source-map',
    module: 
    {
        rules: [
                     {
                        test: /\.css$/,
                        exclude: /node_modules/,
                        use: ExtractTextPlugin.extract({
                          fallback: "style-loader",
                          use: [
                                { 
                                    loader: "css-loader",
                                     options: { sourceMap: true } 
                                }
                              ]
                        })
                    },
                    {
                        test: /\.(gif|png|jpg|svg)$/,
                        exclude: /node_modules/,
                        loader: 'file-loader',
                        options: {
                            outputPath : './war/images/',
                            publicPath : '../../images/',
                            useRelativePath : true
                        }  
                    },
                    {
                        test: /\.(eot|ttf|woff|woff2)$/,
                        exclude: /node_modules/,
                        use: [
                               'url-loader' 
                            ]
                    },
                    {
                        test: /\.jsx?$/,
                        exclude: /node_modules/,
                        use: [
                                { 
                                    loader: "babel-loader", 
                                    options: 
                                    {
                                        babelrc: false,
                                        presets: [ 'react' , 'es2015', 'stage-0' ],
                                        plugins: ["transform-decorators-legacy", "transform-class-properties", "transform-object-rest-spread"]
                                    }
                                }
                              ]
                        
                    }
		         ]
    },
    node: {
        fs: 'empty'
    },
    plugins: [
                new ExtractTextPlugin("./js/public/styles.css"),
                new webpack.DefinePlugin({
                    'process.env': {
                      'NODE_ENV': '"development"'
                    }
                  })
            ]
}