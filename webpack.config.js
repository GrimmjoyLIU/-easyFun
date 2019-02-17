const path = require('path');
const webpack = require ("webpack");
const webpackDevServer = require('webpack-dev-server');

const config = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'src/test/')

    },
    devServer: {
       // contentBase: '',//本地服务器所加载的页面所在的目录

        historyApiFallback:true,//不跳转
        inline:true, //实时刷新
        progress:true,
        hot:true,//开启热更新
        port:8080
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use:{
                    loader:'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0',
                    options: {
                        plugins: [
                            ["import", {
                                "libraryName": "antd",
                                "libraryDirectory": "es",
                                "style": "css" // `style: true` 会加载 less 文件
                            }]
                        ]
                    }
                },
                exclude: path.resolve(__dirname, './node_modules'),
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: 'url-loader'
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()                     //引用这个插件实现热更新
    ]

};

module.exports = config;