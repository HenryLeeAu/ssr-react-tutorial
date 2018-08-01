const path = require('path')
module.exports = {
  //Inform webpack that we're building a bundle for nodeJS, rather than for the browser
  target: 'node',
  //Tell webpack the root file of our server application
  entry: './src/index.js',
  //where to put output files that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  //tell webpack to run babel on every file
  module:{
    rules:[
      {
        test : /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_moudles/,
        options:{
          presets:[
            'react',
            'stage-0',
            ['env',{targets:{ browsers:['last 2 versions']}}]
          ]
        }
      }
    ]
  }
};