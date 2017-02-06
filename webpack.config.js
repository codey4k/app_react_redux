module.exports = {
    entry: {
        app : './src/index.js'
    },
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    
    resolve: {
        extensions: ['', '.js', '.scss', '.css']
    },
    
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        inline: true
    },
    
    module: {
        loaders: [
            {
                test: /(\.js|.jsx)$/,
                loader: 'babel',
                exclude: '/node_modules/',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
}