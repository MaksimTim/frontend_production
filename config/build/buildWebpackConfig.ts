import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolve } from './buildResolve';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {
    mode,
    paths,
    isDev,
  } = options;

  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolve(options),
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
