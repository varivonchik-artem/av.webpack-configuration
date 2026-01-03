import path from "path";
import webpack from "webpack";
import { BuildOptions } from "../types/configurationTypes";

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  const { paths } = options;

  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [paths.src, "node_modules"],
    alias: {
      "@": paths.src,
      "@shared": path.resolve(paths.src, "shared"),
      "@entities": path.resolve(paths.src, "entities"),
      "@widgets": path.resolve(paths.src, "widgets"),
      "@features": path.resolve(paths.src, "features"),
      "@app": path.resolve(paths.src, "app"),
    },
    mainFiles: ["index"],
  };
}
