<p align="center">
  <a href="http://otms.com/">
    <img width="100" src="https://raw.githubusercontent.com/leiding1001/antd-react-express/master/logo.png">
  </a>
</p>

<!-- TOC -->

- [支持环境](#支持环境)
- [Node 版本](#node-版本)
- [安装](#安装)
  - [nvm](#nvm)
  - [Node](#node)
  - [Vscode](#vscode)
    - [插件](#插件)
    - [工作区配置](#工作区配置)
- [运行项目](#运行项目)
- [项目目录](#项目目录)
- [链接](#链接)

<!-- /TOC -->

## 支持环境

> 现代浏览器和 IE9 及以上。

---
∏
## Node 版本

> Node version >= 6.0

---

## 安装
### nvm

[nvm](https://github.com/creationix/nvm)
> ```bash
> curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
> ```
>
> 或 Wget:
>
> ```bash
> wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
> ```
>
> 确认安装成功
>
> ```bash
> command -v nvm
> ```

### Node

> ```bash
> nvm install 6.11.4
> nvm use 6.11.4
> nvm list
> ```
---

### Vscode

#### 插件
>- Prettier - Code formatter
>- Code Spell Checker
>- Git Lens
>- ESLint
#### 工作区配置
>```json
>"search.exclude": {
>  "**/node_modules": true,
>  "**/bower_components": true,
>  "**/dist": true,
>  "**/*-build": true
>},
>"eslint.enable": true,
>"eslint.options": {
>  "configFile": ".eslintrc.js",
>  "extensions": [".js", ".jsx"]
>},
>"eslint.autoFixOnSave": false,
>// Set the default
>"editor.formatOnSave": false,
>// Enable per-language
>"[javascript]": {
>  "editor.formatOnSave": false
>},
>"[json]": {
>  "editor.formatOnSave": false
>},
>"prettier.singleQuote": true,
>"editor.tabSize": 2,
>"cSpell.words": [
>  "logined",
>  "ignorable",
>  "otms",
>  "captcha",
>  "styl",
>  "epod",
>  "antd",
>  "polyfill",
>  "devtool"
>],
>```

## 运行项目

> ```bash
> $ git clone git@git.otms.cn:opentrans/opentrans.git
> $ git checkout Vanilla-FE-base-framework
>
> $ cd opentrans/application/frontend/vanilla
>
> $ npm install & npm run dev-test
> ```
>
> 如果没有自动浏览器打开，需要手动访问 http://localhost:8889

---

## 项目目录

> ```js
> ├── README.md
> ├── config
> │   ├── pre-build-config.js // 编译项目前，基础配置（Host，Port，Theme, Proxy）
> │   ├── webpack.base.js // 基础配置
> │   ├── webpack.dev.js // 开发配置
> │   └── webpack.prod.js // 生产配置
> ├── docs
> ├── package.json
> ├── server
> │   ├── api
> │   │   ├── main.js // 所有模块API主入口
> │   │   ├── track-trace // 子模块
> │   │   │   ├── index.js  // 子模块track-trace API 主入口
> │   │   │   └── user.js // 具体API MOCK
> │   │   └── util.js
> │   ├── apiServer.js // API server 配置文件
> │   └── index.js // API server 配置文件主入口
> ├── src
> │   ├── css //样式文件
> │   │   ├── fonts
> │   │   ├── style.css
> │   │   └── theme.less // AntD 主题配置，会在less解析时，动态替换主题
> │   ├── index.html
> │   ├── js
> │   │   ├── app.jsx
> │   │   ├── routes.jsx
> │   │   └── track-trace
> │   │       ├── pre-build-config.js // 子模块编译配置
> │   │       ├── routes.js // 子模块路由配置
> │   │       └── theme.js // 主题配置
> │   └── static // 静态文件目录
> ├── webpack.config.babel.js // webpack.config.js 后缀加入.babel，支持ES6语法
> ```

## 链接

* [首页](http://ant.design/)
* [组件库](http://ant.design/docs/react/introduce)
* [React 底层基础组件](http://react-component.github.io/)
* [定制主题](http://ant.design/docs/react/customize-theme-cn)
* [Ant Design 官网主题配置文档](https://ant.design/docs/react/customize-theme-cn)
* [Ant Design 所有样式变量](https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less)
* [Less modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables)
