const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
          outputPath: "img/",
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/img/",
          to: "img/",
        },
      ],
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png|gif)/,
          options: {
            quality: 50,
          },
        },
      ],
      detailedLogs: true,
      overrideExtension: true,
    }),
  ],
};
