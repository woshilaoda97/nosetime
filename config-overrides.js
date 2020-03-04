const { 
  override, 
  fixBabelImports,
  addWebpackAlias,
  addDecoratorsLegacy,
  addLessLoader
} = require('customize-cra');

const path = require('path');

//拼接路径方法
const joinPath = relativePath => {
  return path.join(__dirname, relativePath);
}

module.exports = override(
  //配置antd-moblie的按需导入
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  //添加less-loader
  addLessLoader({
    javascriptEnabled: true,
    localIdentName: "[local]--[hash:base64:5]"
  }),
  //配置装饰器
  addDecoratorsLegacy(),
  //配置路径
  addWebpackAlias({
    '@'          : joinPath('./src'),
    'assets'     : joinPath('./src/assets'),
    'components' : joinPath('./src/components'),
    'utils'      : joinPath('./src/utils'),
    'api'        : joinPath('./src/api'),
    'views'      : joinPath('./src/views'),
    'icon'       : joinPath('./src/components/icon')
  })
);