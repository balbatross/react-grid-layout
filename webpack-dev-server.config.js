module.exports = {
    context: __dirname,
    entry: [
      "webpack-dev-server/client?http://localhost:4002",
      "webpack/hot/dev-server", 
      "./test/test.js",
    ],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        sourceMapFilename: "debugging/[file].map",
    },
    module: {
      loaders: [
        {test: /\.jsx$/, loader: 'jsx-loader?harmony'},
        {test: /\.jsx$/, loader: 'react-hot-loader'}
      ]
    },
    debug: true,
    resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
    }
};