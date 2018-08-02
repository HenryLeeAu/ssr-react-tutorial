const path = require('path')
const merge =require('webpack-merge');
const baseConfig = require('./webpack.base.js')

const config = {
  
  //Tell webpack the root file of our server application
  entry: './src/client/client.js',
  //where to put output files that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  //tell webpack to run babel on every file
  
};
module.exports = merge(baseConfig,config)