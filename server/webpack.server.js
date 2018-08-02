const path = require('path');
const merge =require('webpack-merge');
const baseConfig = require('./webpack.base.js')
const webpackNodeExternals = require('webpack-node-externals')
const config = {
  //Inform webpack that we're building a bundle for nodeJS, rather than for the browser
  target: 'node',
  //Tell webpack the root file of our server application
  entry: './src/index.js',
  //where to put output files that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // Tell webpack don't include node liberaries into bundle because we can install on server
  externals:[webpackNodeExternals()]
  
};

module.exports = merge(baseConfig, config)