import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as l,c,a as e,b as n,d as t}from"./app-f880015c.js";const a={},h={class:"hint-container info"},i=e("p",{class:"hint-container-title"},"网站框架",-1),p={href:"https://theme-hope.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://theme-hope.vuejs.press/zh/guide/interface/icon.html",target:"_blank",rel:"noopener noreferrer"},d=e("h2",{id:"本站开发命令记录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#本站开发命令记录","aria-hidden":"true"},"#"),n(" 本站开发命令记录")],-1),m=e("p",null,[n("编写时开本地服务器实时查看修改效果："),e("code",null,"pnpm run docs:dev")],-1),f={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/2743",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,"发布：",-1),v=e("ul",null,[e("li",null,[n("GitHub：用 Action + Pages 功能，在 push 之后自动编译并部署 "),e("ul",null,[e("li",null,"记得给仓库的 workflow 添加写的权限"),e("li",null,"仓库的 Pages 功能中网站基于的分支得改成 yml 中设定的部署分支")])]),e("li",null,[n("服务器：先"),e("code",null,"pnpm run docs:build"),n("在"),e("code",null,"src/.vuepress/dist"),n("目录下生成静态网页文件，再部署到服务器上")])],-1);function b(x,g){const o=r("ExternalLinkIcon");return l(),c("div",null,[e("div",h,[i,e("p",null,[e("a",p,[n("vuepress-theme-hope"),t(o)])]),e("p",null,[e("a",u,[n("框架 Markdown 增强说明"),t(o)])]),e("p",null,[e("a",_,[n("iconfont 关键词精选图标"),t(o)])])]),d,m,e("p",null,[n("编译时报错参考 "),e("a",f,[n("issue"),t(o)]),n(" 中最后给出的解决链接，按指示更新即可")]),k,v])}const z=s(a,[["render",b],["__file","index.html.vue"]]);export{z as default};