const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true,
    },
    devServer:{
        static: './dist'
    },
    module:{
        rules: [
            {
                test: /\.(jpg|jpeg|png|gib|bmp)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(otf|tff|woff|woff2)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader']
            }
        ]
    }
};
