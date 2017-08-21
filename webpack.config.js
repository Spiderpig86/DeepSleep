// What the config file may look like that transpiles ES6 to ES5
// This project doesn't need this since create-react-app already handled all of this
let path = require('path');

let DIST_DIR = path.resolve(__dirname, 'dist'); // Output folder
let SRC_DIR = path.resolve(__dirname, 'src'); // Source folder

// Webpack config
let config = {
    entry: SRC_DIR + '/app/index.js', // Specify explicityly which entry file
    output: {
        path: DIST_DIR + '/app',
        filename: 'bundle.js',
        publicPath: '/app/' // Specify where the app is located for the server
    },
    // More modules for language transpiling
    module: {
        loaders: [
            {
                test: /\.js?/, // Look at all JS files for the loader
                include: SRC_DIR, // Directory to check the files
                loader: 'babel-loader',
                query: {
                    // Make sure the babel-preset-react, ... are installed
                    presets: ['react', 'es2015', 'stage-2']
                }
            }
        ]
    }
}