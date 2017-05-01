const path = require("path")

const distPath = path.resolve(__dirname, 'dist')
const srcPath = path.resolve(__dirname, 'src')

module.exports = [
  {
    name: 'electron render process',
    target: 'electron-renderer',

    entry: {
      render: [
        './src/render.js',
      ]
    },

    output: {
      path: distPath,
      filename: '[name].js',
      publicPath: '',
    },

    module: {
      rules: [
        {
          test: /\.html$/,
          exclude: [/node_modules/],
          loader: 'file-loader?name=[name].[ext]',
        },
        {
          test: /\.elm$/,
          exclude: [/elm-stuff/, /node_modules/],
          loader: 'elm-webpack-loader?verbose=true&warn=true',
        },
      ],

      noParse: /\.elm$/,
    },

    devServer: {
      inline: true,
      stats: { colors: true },
    },
  },

  {
    name: 'electron main process',
    target: 'electron-main',

    entry: {
      main: [
        './src/main.js',
      ],
    },

    output: {
      path: distPath,
      filename: '[name].js',
    },

    node: {
      __dirname: false,
      __filename: false
    },
  }
]
