---
home: true
icon: home
title: 主页
heroImage: /logo.svg
heroText: Grag's Docs
tagline: 用于记录任何想记录的东东
actions:
  - text: GitHub
    link: https://github.com/gragoyd
    type: primary

  - text: 算法笔记
    link: /docs/algorithm

features:
  - title: 毕业
    details: 学校毕业相关的
    icon: note
    link: /docs/graduation

  - title: 工作
    details: 自学的工作技能
    icon: java
    link: /docs/work

  - title: 算法
    details: 算法相关
    icon: ability
    link: /docs/algorithm

---

::: info 网站框架
[vuepress-theme-hope](https://theme-hope.vuejs.press/zh/)

[框架 Markdown 增强说明](https://theme-hope.vuejs.press/zh/cookbook/markdown/)

[iconfont 关键词精选图标](https://theme-hope.vuejs.press/zh/guide/interface/icon.html)
:::

## 本站开发命令记录

编写时开本地服务器实时查看修改效果：`pnpm run docs:dev`

发布：

- GitHub：用 Action + Pages 功能，在 push 之后自动编译并部署
- 服务器：先`pnpm run docs:build`在`src/.vuepress/dist`目录下生成静态网页文件，再部署到服务器上
