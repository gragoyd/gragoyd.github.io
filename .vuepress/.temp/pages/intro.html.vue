<template><h1 id="hi" tabindex="-1"><a class="header-anchor" href="#hi" aria-hidden="true">#</a> Hi</h1>
<p>我是一个被现实赶着走的小子</p>
<p><a href="https://gitee.com/gragoyd" target="_blank" rel="noopener noreferrer">Gitee<ExternalLinkIcon/></a></p>
<div class="custom-container info"><p class="custom-container-title">网站框架</p>
<p><a href="https://vuepress-theme-hope.github.io/v2/zh/" target="_blank" rel="noopener noreferrer">vuepress-theme-hope<ExternalLinkIcon/></a></p>
</div>
<h2 id="本站开发命令记录" tabindex="-1"><a class="header-anchor" href="#本站开发命令记录" aria-hidden="true">#</a> 本站开发命令记录</h2>
<p>编写时开本地服务器实时查看修改效果：<code>npm run docs:dev</code>【若修改没反应总是读缓存就重启网站服务器】</p>
<p>发布：</p>
<ul>
<li><s>先<code>yarn docs:build</code>在<code>./vuepress/dist</code>目录下生成最终网页，再将该目录更新到 GitHub 仓库</s>
<ul>
<li>实际上每次在该目录生成时都会先把目录清空，所以每次同步该目录是完全不现实的</li>
</ul>
</li>
<li>直接利用 GitHub 的 Action，push 之后自动在另一分支生成</li>
</ul>
</template>
