import { defineConfig, type UserConfigExport } from '@tarojs/cli'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import devConfig from './dev'
import prodConfig from './prod'
import NutUIResolver from '@nutui/auto-import-resolver'
import Components from 'unplugin-vue-components/webpack'
import AutoImport from 'unplugin-auto-import/webpack'
import UnoCSS from 'unocss/webpack'

// import UnoCSS from 'unocss/vite'
// import UnoCSSPostcss from '@unocss/postcss'
// import { createHtmlPlugin } from 'vite-plugin-html'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'

import path from 'path'

// https://taro-docs.jd.com/docs/next/config#defineconfig-辅助函数
// export default defineConfig<'vite'>(async (merge, { mode, command }) => {
export default defineConfig<'webpack5'>(async (merge, { mode, command }) => {
  console.log('mode', mode)
  console.log('command', command)

  // const baseConfig: UserConfigExport<'vite'> = {
  const baseConfig: UserConfigExport<'webpack5'> = {
    projectName: 'taro-vue-template',
    date: '2024-11-30',
    designWidth(input) {
      // 配置 NutUI 375 尺寸
      if (input?.file?.replace(/\\+/g, '/').indexOf('@nutui') > -1) {
        return 375
      }
      // 全局使用 Taro 默认的 750 尺寸
      return 750
    },
    deviceRatio: {
      640: 2.34 / 2,
      750: 1, // process.env.TARO_ENV === 'h5' ? 640 / 750 : 1
      375: 2,
      828: 1.81 / 2
    },
    sourceRoot: 'src',
    outputRoot: `dist/${process.env.TARO_ENV}`,
    plugins: ['@tarojs/plugin-html'],
    defineConstants: {},
    copy: {
      patterns: [],
      options: {}
    },
    framework: 'vue3',
    alias: {
      '@': path.resolve(__dirname, '..', 'src'),
      // vue: 'vue/dist/vue.esm-bundler.js',
      '@packages': path.resolve(__dirname, '..', 'src/packages')
    },
    compiler: {
      type: 'webpack5',
      prebundle: {
        enable: false
      }
      // type: 'vite',
      // vitePlugins: [
      //   Components({
      //     resolvers: [NutUIResolver({ taro: true })]
      //   }),
      //   AutoImport({
      //     imports: ['vue', 'vue-router'],
      //     dts: false
      //   }),
      //   UnoCSS({})
      //   // createHtmlPlugin({
      //   //   inject: {
      //   //     data: {
      //   //       // title: env.TARO_APP_TITLE
      //   //       // injectScript: `<script src="./inject.js"></script>`
      //   //     }
      //   //   }
      //   // })
      // ]
    },
    cache: {
      enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
    },
    sass: {
      resource: [path.resolve(__dirname, '..', 'src/packages/styles/theme.scss')]
      // data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`
    },
    mini: {
      webpackChain(chain) {
        chain.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin)
        chain.plugin('unplugin-vue-components').use(
          Components({
            resolvers: [NutUIResolver({ taro: true })]
          })
        )
        chain.plugin('unplugin-auto-import').use(
          AutoImport({
            imports: ['vue'],
            dts: false
          })
        )
        chain.plugin('unocss').use(UnoCSS())
        chain.optimization.set('realContentHash', true)
      },
      postcss: {
        pxtransform: {
          enable: true,
          config: {}
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    },
    h5: {
      webpackChain(chain) {
        chain.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin)
        chain.plugin('unplugin-vue-components').use(
          Components({
            resolvers: [NutUIResolver({ taro: true })]
          })
        )
        chain.plugin('unplugin-auto-import').use(
          AutoImport({
            imports: ['vue'],
            dts: false
          })
        )
        chain.plugin('unocss').use(UnoCSS())
        chain.optimization.set('realContentHash', true)
      },
      publicPath: process.env.TARO_APP_BASE,
      staticDirectory: 'static',
      output: {
        filename: 'js/[name].[hash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js'
      },
      miniCssExtractPluginOption: {
        ignoreOrder: true,
        filename: 'css/[name].[hash].css',
        chunkFilename: 'css/[name].[chunkhash].css'
      },
      postcss: {
        autoprefixer: {
          enable: true,
          config: {}
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
      // devServer: {
      //   proxy: {
      //     '/api': {
      //       target: 'http://192.168.2.87:8080', // 后端地址
      //       changeOrigin: true,
      //       pathRewrite: {
      //         '^/api': ''
      //       }
      //     }
      //   }
      // }
    },
    rn: {
      appName: 'taroDemo',
      postcss: {
        cssModules: {
          enable: false // 默认为 false，如需使用 css modules 功能，则设为 true
        }
      }
    }
  }

  if (process.env.NODE_ENV === 'development') {
    // 本地开发构建配置（不混淆压缩）
    return merge({}, baseConfig, devConfig)
  }
  // 生产构建配置（默认开启压缩混淆等）
  return merge({}, baseConfig, prodConfig)
})
