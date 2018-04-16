const path = require('path');
const include = path.resolve(__dirname, '../');

module.exports = {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: require.resolve('ts-loader'),
        include
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'), // TODO fix hidden dependency from CRA
          {
            loader: require.resolve('css-loader'), // TODO fix hidden dependency from CRA
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json']
  }
};
