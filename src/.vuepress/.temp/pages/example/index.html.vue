<template><div><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2>
<p>此目录下的文章为写作语法参考</p>
<h2 id="图表" tabindex="-1"><a class="header-anchor" href="#图表" aria-hidden="true">#</a> 图表</h2>
<ChartJS id="chart-9" config="eJxtTjEOgkAQ7HnF5ipNroBDROyMxs4XGItDiTESMQcWxlCY2Fhb2/gCY6mFzwF/4d65KgXN3ezM7OzsLACWbdcR6wJbJ7FUPRVJxjU9k5lEWltwimUYxSnOY1bcL+Xxxjiw4vEk9Hocvtz+Sqg8nTWa6DTKS6PMZBgGKPufr1uMtjBcqDSDwcdvypCJKo0dh4PT5uBzcBG16ITxhHK6nKtks5r1kzhRlWtGVvOwITyPQxDgpiualXySfVSdQJinRjbbwsan066TbSwnbOwlbL9G91q6O6YL12uynzohlJtfT7mVW29/wGZS" title="%E4%B8%80%E4%B8%AA%E7%8E%AB%E7%91%B0%E5%9B%BE%E6%A1%88%E4%BE%8B" type="json"></ChartJS><h2 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid" aria-hidden="true">#</a> Mermaid</h2>
<Mermaid id="mermaid-15" code="eJxLy8kvT85ILCpR8AniUgACx+inexqeLu+OVdDVfbKj9+mEnhfb1z/d16Kra6fgFP2iq+l5004Fw1gFNQVnGM8IpNZOwSX6+ex1z2e1PJ2zIZYLAKkLJ4M="></Mermaid><h2 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h2>
<ul>
<li>类型：<code v-pre>info</code>, <code v-pre>note</code>, <code v-pre>tip</code>, <code v-pre>warning</code>, <code v-pre>danger</code>, <code v-pre>details</code></li>
<li>正常使用时用<code v-pre>:::</code>标记开头与结尾，嵌套时用<code v-pre>::::</code>标记外层的</li>
</ul>
<h2 id="对齐" tabindex="-1"><a class="header-anchor" href="#对齐" aria-hidden="true">#</a> 对齐</h2>
<p><code v-pre>::: center</code>, <code v-pre>::: right</code></p>
<h2 id="卡片" tabindex="-1"><a class="header-anchor" href="#卡片" aria-hidden="true">#</a> 卡片</h2>
<div class="vp-card-container">
<VPCard v-bind='{"title":"Mr.Hope","desc":"Where there is light, there is hope","logo":"/logo.svg","link":"https://github.com/gragoyd","color":"rgba(253, 230, 138, 0.15)"}' /><VPCard v-bind='{"title":"Mr.Hope","desc":"Where there is light, there is hope","logo":"https://mrhope.site/logo.svg","link":"https://mrhope.site","color":"rgba(253, 230, 138, 0.15)"}' /></div>
<h2 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h2>
<figure><img src="/logo.svg" alt="Logo" width="300" height="300" tabindex="0" loading="lazy"><figcaption>图标描述</figcaption></figure>
<h2 id="导入文件" tabindex="-1"><a class="header-anchor" href="#导入文件" aria-hidden="true">#</a> 导入文件</h2>
<p>可在<code v-pre>.vuepress/config.ts</code>中配置<code v-pre>pagePatterns</code>避免 MD 文件被渲染成页面</p>
<p>// 启用的主题色
$theme-colors: #c0392b, #d35400, #f39c12, #27ae60, #16a085, #2980b9, #8e44ad, #2c3e50, #7f8c8d;</p>
</div></template>


