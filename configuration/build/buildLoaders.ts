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

  const imageLoaders: webpack.RuleSetRule = {
    test: /\.(png|jpe?g|gif|webp|avif|ico)$/i,
    type: "asset/resource",
    generator: {
      filename: "images/[name].[contenthash][ext]",
    },
  };

  const svgLoader: webpack.RuleSetRule = {
    test: /\.svg$/i,
    oneOf: [
      {
        resourceQuery: /url/,
        type: "asset/resource",
        generator: {
          filename: "images/[name].[contenthash][ext]",
        },
      },
      {
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              svgoConfig: {
                plugins: [
                  {
                    name: "convertColors",
                    params: {
                      currentColor: true,
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    ],
  };

  return [typescriptLoaders, cssLoaders, svgLoader, imageLoaders];
}
