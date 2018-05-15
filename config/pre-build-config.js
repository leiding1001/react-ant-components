const _ = require('underscore');
const path = require('path');

module.exports = {
  environments: ['dev', 'prod', 'test'],
  // 当前webpack server 配置
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || (process.env.NODE_ENV === 'prod' ? 8080 : 8889),

  // API Server 配置
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT || '3030',

  // 在API Server 反向代理配置
  isRemoteProxy: false,
  proxyPathPrefix: ['/api'],
  remoteProxy: 'http://192.168.3.73',
  token: 'rx44w6x63qnz8i3jr2x9jm1c',

  /**
   * @return {theme, proxy, routePath}
   */
  moduleConfig: project => {
    const defaultConfig = {
      theme: {
        'primary-color': '#E0501A',
        'font-family': 'HelveticaNeue'
      },
      buildOutPathDir: 'build',
      routePath: path.resolve(__dirname, '../src/js/routes.jsx')
    };

    try {
      const config = require(`../src/js/${project}/root/pre-build-config.js`);

      if (_.isEmpty(config)) {
        return defaultConfig;
      }

      Object.keys(defaultConfig).forEach(key => {
        if (!config[key]) {
          config[key] = defaultConfig[key];
        }
      });

      return config;
    } catch (e) {
      return defaultConfig;
    }
  }
};
