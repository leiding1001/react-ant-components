/*eslint-disable no-console*/
/**
 * api请求server
 *
 * 测试：
 * 本地服务
 *    1. 在../config.js中设置
 *        isRemoteProxy = false;
 *    2. 在浏览器中访问 http://localhost:8889/ws/track-trace/user/userInfo/
 * 远程服务
 *    1. 在../config.js中设置
 *        isRemoteProxy = true;
 *        remoteProxy='http://ip.taobao.com:80'
 */
import Express from 'express';
import config from '../config/pre-build-config';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import proxy from 'express-http-proxy';

console.log('----------------API-CONFIG-START-----------------------');

const project = process.env.project || '';
const {apiHost, apiPort, isRemoteProxy, remoteProxy, token} = config;

console.log(`API PROJECT: ${project}`);
console.log(`API HOST: ${apiHost}`);
console.log(`API PORT: ${apiPort}`);
console.log(`API IS REMOTE: ${isRemoteProxy}`);
console.log(`API REMOTE PROXY TARGET: ${remoteProxy}`);

const app = new Express();

app.use(cookieParser('express_react_cookie'));
app.use(
  session({
    secret: 'express_react_cookie',
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 60 * 1000 * 30
    } //过期时间
  })
);

//API 主入口
if (isRemoteProxy) {
  // 远程API服务
  app.use(
    '/',
    proxy(remoteProxy, {
      limit: '5MB',
      proxyReqOptDecorator: function(proxyReqOpts) {
        const {path, host, port, headers} = proxyReqOpts;

        headers['token'] = token;
        console.log(` => ${host}:${port}${path}`);
        console.log(` => token: ${token}, locale: ${headers.locale}`);

        return proxyReqOpts;
      },
      userResDecorator: function(proxyRes, proxyResData) {
        if(proxyRes.statusCode !== 200) {
          const error = proxyResData.toString('utf8');

          console.log(error);

          return error;
        }

        return proxyResData;
      }
    })
  );
} else {
  // 本地API服务
  app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());
  app.use('/', require('./api'));
}

app.listen(apiPort, function(err) {
  if (err) {
    console.error('err:', err);
  } else {
    console.info(`===> api server is running at ${apiHost}:${apiPort}`);
  }
  console.log('--------------------API-CONFIG-END------------------------------');
});
