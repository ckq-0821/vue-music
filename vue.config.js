module.exports = {
  // 打包之后的地址 使用相对路径

  // 不生成map
  productionSourceMap: false,
  
  publicPath:process.env.NODE_ENV === 'production' ?  '/vue-music/' : '/' ,
      configureWebpack: {
        resolve: {
          alias: {
            'components': '@/components',
            'content': 'components/content',
            'common': 'components/common',
            'assets': '@/assets',
            'network': '@/network',
            'views': '@/views',
          }
        }
      }
    };