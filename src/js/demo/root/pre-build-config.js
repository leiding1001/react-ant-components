const path = require('path');

module.exports = {
  name: 'demo',
  theme: require('./theme.js'),
  buildOutPathDir: 'demo-build',
  routePath: path.resolve(__dirname, './routes.jsx'),
  productHost: 'login.otms.cn',
  growingIOKey: '0ba2a38eca2759830d0c2e130734e4f3'
};
