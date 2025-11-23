import path from "path";
import webpack from "webpack";
import { buildWebpackConfiguration } from "./configuration/build/buildWebpackConfiguration";
import { BuildEnvironmentVariables, BuildPaths } from "./configuration/types/configurationTypes";

export default (env: BuildEnvironmentVariables) => {
  const PATHS: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    favicon: path.resolve(__dirname, "public", "favicon.png"),
  };

  const MODE = env.mode || "development";
  const IS_DEVELOPMENT = MODE === "development";

  const PORT = env.port || 3000;

  const webpackConfiguration: webpack.Configuration = buildWebpackConfiguration({
    mode: MODE,
    paths: PATHS,
    port: PORT,
    isDevelopment: IS_DEVELOPMENT,
  });

  return webpackConfiguration;
};
