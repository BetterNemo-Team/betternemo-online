# betternemo-online

此模板可帮助你使用 Vite 开始 Vue 3 开发。

## 推荐 IDE 配置

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（并禁用 Vetur）。

## 推荐浏览器配置

- 基于 Chromium 的浏览器（Chrome、Edge、Brave 等）：
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - 在 Chrome 开发者工具中启用自定义对象格式化器
- Firefox：
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - 在 Firefox 开发者工具中启用自定义对象格式化器

## TypeScript 对 `.vue` 导入的类型支持

TypeScript 默认无法处理 `.vue` 导入的类型信息，因此我们用 `vue-tsc` 替代 `tsc` CLI 进行类型检查。在编辑器中，我们需要 [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 让 TypeScript 语言服务识别 `.vue` 类型。

## 自定义配置

请参阅 [Vite Configuration Reference](https://vite.dev/config/)。

## 项目安装

```sh
npm install
```

### 开发环境编译与热重载

```sh
npm run dev
```

### 生产环境类型检查、编译与压缩

```sh
npm run build
```

### 使用 [ESLint](https://eslint.org/) 进行代码格式检查

```sh
npm run lint
```
