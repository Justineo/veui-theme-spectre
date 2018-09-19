const lessOptions = {
  javascriptEnabled: true
}

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'demo',
  transpileDependencies: [
    /node_modules\/veui\//,
    /node_modules\/vue-awesome\//,
    /node_modules\/resize-detector\//
  ],
  chainWebpack: config => {
    config
      .entry('app')
      .clear()
      .add('./demo-src/main.js')

    config.optimization
      .clear('splitChunks')
      .splitChunks({
        cacheGroups: {
          veui: {
            name: 'veui',
            test: /[\\/]node_modules[\\/]veui[\\/]/,
            priority: 0,
            chunks: 'initial'
          },
          vendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'initial'
          },
          common: {
            name: 'chunk-common',
            minChunks: 2,
            priority: -20,
            chunks: 'initial',
            reuseExistingChunk: true
          }
        }
      })

    config.module
      .rule('veui')
      .test(/\.vue$/)
      .pre()
      .use('veui-loader')
      .loader('veui-loader')
      .tap(() => {
        return {
          modules: [
            {
              package: '@',
              fileName: '${module}.less'
            },
            {
              package: '@',
              fileName: '${module}.js',
              transform: false
            }
          ]
        }
      })

    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => {
      config.module
        .rule('less')
        .oneOf(type)
        .use('less-loader')
        .tap(options => Object.assign({}, options, lessOptions))
    })
  }
}
