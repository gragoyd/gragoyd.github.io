---
icon: info
article: false
---

# Hi

我是一个被现实赶着走的小子

[Gitee](https://gitee.com/gragoyd)

::: info 网站框架
[vuepress-theme-hope](https://vuepress-theme-hope.github.io/v2/zh/)
[框架内置图标支持](https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87)
:::

## 本站开发命令记录

编写时开本地服务器实时查看修改效果：`npm run docs:dev`【若修改没反应总是读缓存就重启网站服务器】

发布：

- ~~先`yarn docs:build`在`./vuepress/dist`目录下生成最终网页，再将该目录更新到 GitHub 仓库~~
  - 实际上每次在该目录生成时都会先把目录清空，所以每次同步该目录是完全不现实的
- 直接利用 GitHub 的 Action，push 之后自动在另一分支生成
