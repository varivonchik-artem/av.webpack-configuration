import type { Configuration as DevelopmentServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "../types/configurationTypes";

export function buildDevelopmentServer(options: BuildOptions): DevelopmentServerConfiguration {
  const { port } = options;

  return {
    port: port,
    open: true,
    historyApiFallback: true,
  };
}
