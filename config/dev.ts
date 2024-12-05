import type { UserConfigExport } from '@tarojs/cli'
import TerserWebpackPlugin from 'terser-webpack-plugin'

export default {
  logger: {
    quiet: false,
    stats: true
  },
  mini: {
    webpackChain(chain) {
      chain.merge({
        plugin: {
          install: {
            // terser: {
            plugin: TerserWebpackPlugin,
            args: [
              {
                terserOptions: {
                  compress: true, // 默认使用terser压缩
                  // mangle: false,
                  keep_classnames: true, // 不改变class名称
                  keep_fnames: true // 不改变函数名称
                }
              }
              // {
              //   test: /\.js(\?.*)?$/i,
              //   minify: TerserWebpackPlugin.swcMinify,
              //   terserOptions: {
              //     sourceMap: true,
              //     compress: true, // 默认使用terser压缩
              //     // mangle: false,
              //     keep_classnames: true, // 不改变class名称
              //     keep_fnames: true // 不改变函数名称
              //   }
              // }
            ]
          }
        }
      })
    }
  },
  h5: {}
  // } satisfies UserConfigExport<'vite'>
} satisfies UserConfigExport<'webpack5'>
