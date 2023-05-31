<template><div><div class="hint-container info">
<p class="hint-container-title">网站框架</p>
<p><a href="https://theme-hope.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">vuepress-theme-hope<ExternalLinkIcon/></a></p>
<p><a href="https://theme-hope.vuejs.press/zh/cookbook/markdown/" target="_blank" rel="noopener noreferrer">框架 Markdown 增强说明<ExternalLinkIcon/></a></p>
<p><a href="https://theme-hope.vuejs.press/zh/guide/interface/icon.html" target="_blank" rel="noopener noreferrer">iconfont 关键词精选图标<ExternalLinkIcon/></a></p>
</div>
<h2 id="本站开发命令记录" tabindex="-1"><a class="header-anchor" href="#本站开发命令记录" aria-hidden="true">#</a> 本站开发命令记录</h2>
<p>编写时开本地服务器实时查看修改效果：<code v-pre>pnpm run docs:dev</code></p>
<p>发布：</p>
<ul>
<li>GitHub：用 Action + Pages 功能，在 push 之后自动编译并部署</li>
<li>服务器：先<code v-pre>pnpm run docs:build</code>在<code v-pre>src/.vuepress/dist</code>目录下生成静态网页文件，再部署到服务器上</li>
</ul>
</div></template>


