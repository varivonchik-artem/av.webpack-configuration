import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "../types/configurationTypes";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDevelopment } = options;

  const cssLoaders: webpack.RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) => /\.module\.\w+$/i.test(resourcePath),
            localIdentName: isDevelopment ? "[path][name]__[local]" : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  const typescriptLoaders: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptLoaders, cssLoaders];
}
