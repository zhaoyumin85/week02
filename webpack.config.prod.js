var path=require('path');
var webpack=require('webpack');
var htmlWebpackPlugin=require('html-webpack-plugin');
var uglifyPlugin=webpack.optimize.UglifyJsPlugin;

var config={
  entry:path.resolve(__dirname,"./src/main.js"),
  output:{
    path:path.resolve(__dirname,"./dist"),
    filename:"bundle.js"
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        loader:'style-loader!css-loader'
      }
      ,
      {
        test:/\.less$/,
        loader:'style-loader!css-loader!less-loader'
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      title:'搭建前端工作流',
      template:'./src/index.html'
    }),
    new uglifyPlugin({
      compress:false
    })
  ]
};
module.exports=config;
