<template><div><p>主题可以为你添加提示、注释、信息、注意、警告和详情自定义容器的支持，还有代码块。</p>
<!-- more -->
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<CodeTabs :data='[{"title":"代码块"},{"title":"容器"}]'>

<template #tab0="{ title, value, isActive }">
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
export default defineHopeConfig({
  themeConfig: {
    plugins: {
      mdEnhance: {
        // this is the default option, so you can use it directly
        container: true,
      },
    },
  },
});
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>// .vuepress/config.js
const { defineHopeConfig } = require("vuepress-theme-hope");
module.exports = defineHopeConfig({
  themeConfig: {
    plugins: {
      mdEnhance: {
        // this is the default option, so you can use it directly
        container: true,
      },
    },
  },
});
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>代码块示例</p>
<p>安装 VuePress Theme Hope:</p>
<CodeTabs :data='[{"title":"pnpm"},{"title":"yarn"},{"title":"npm"}]' :active="2" tab-id="shell">

<template #tab0="{ title, value, isActive }">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> -D vuepress-theme-hope@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D vuepress-theme-hope@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D vuepress-theme-hope@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>安装 VuePress Plugin Markdown Enhance:</p>
<CodeTabs :data='[{"title":"pnpm"},{"title":"yarn"},{"title":"npm"}]' :active="2" tab-id="shell">

<template #tab0="{ title, value, isActive }">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> -D vuepress-plugin-md-enhance@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D vuepress-plugin-md-enhance@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D vuepress-plugin-md-enhance@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h2>
<div class="custom-container info"><p class="custom-container-title">相关信息</p>
<p>信息容器。</p>
</div>
<div class="custom-container note"><p class="custom-container-title">注</p>
<p>注释容器。</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>提示容器</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>警告容器</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">警告</p>
<p>危险容器</p>
</div>
<details class="custom-container details"><summary>详情</summary>
<p>详情容器</p>
</details>
<div class="custom-container info"><p class="custom-container-title">自定义标题</p>
<p>一个有 <code v-pre>代码</code> 和 <a href="#markdown">链接</a> 的信息容器。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<div class="custom-container note"><p class="custom-container-title">自定义标题</p>
<p>一个有 <code v-pre>代码</code> 和 <a href="#markdown">链接</a> 的注释容器。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<div class="custom-container tip"><p class="custom-container-title">自定义标题</p>
<p>一个有 <code v-pre>代码</code> 和 <a href="#markdown">链接</a> 的提示容器。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<div class="custom-container warning"><p class="custom-container-title">自定义标题</p>
<p>一个有 <code v-pre>代码</code> 和 <a href="#markdown">链接</a> 的警告容器。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<div class="custom-container danger"><p class="custom-container-title">自定义标题</p>
<p>一个有 <code v-pre>代码</code> 和 <a href="#markdown">链接</a> 的危险容器。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<details class="custom-container details"><summary>自定义标题</summary>
<p>一个有 <code v-pre>代码</code> 和 <a href="#markdown">链接</a> 的详情容器。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<div class="custom-container info"><p class="custom-container-title">自定义信息</p>
</div>
<div class="custom-container note"><p class="custom-container-title">自定义注释</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">自定义提示</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">自定义警告</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">自定义危险</p>
</div>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>::: info
信息容器。
:::

::: note
注释容器。
:::

::: tip
提示容器
:::

::: warning
警告容器
:::

::: danger
危险容器
:::

::: details
详情容器
:::

::: info 自定义标题

一个有 <span class="token code-snippet code keyword">`代码`</span> 和 <span class="token url">[<span class="token content">链接</span>](<span class="token url">#markdown</span>)</span> 的信息容器。

<span class="token code"><span class="token punctuation">```</span><span class="token code-language">js</span>
<span class="token code-block language-js language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">```</span></span>

:::

::: note 自定义标题

一个有 <span class="token code-snippet code keyword">`代码`</span> 和 <span class="token url">[<span class="token content">链接</span>](<span class="token url">#markdown</span>)</span> 的注释容器。

<span class="token code"><span class="token punctuation">```</span><span class="token code-language">js</span>
<span class="token code-block language-js language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">```</span></span>

:::

::: tip 自定义标题

一个有 <span class="token code-snippet code keyword">`代码`</span> 和 <span class="token url">[<span class="token content">链接</span>](<span class="token url">#markdown</span>)</span> 的提示容器。

<span class="token code"><span class="token punctuation">```</span><span class="token code-language">js</span>
<span class="token code-block language-js language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">```</span></span>

:::

::: warning 自定义标题

一个有 <span class="token code-snippet code keyword">`代码`</span> 和 <span class="token url">[<span class="token content">链接</span>](<span class="token url">#markdown</span>)</span> 的警告容器。

<span class="token code"><span class="token punctuation">```</span><span class="token code-language">js</span>
<span class="token code-block language-js language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">```</span></span>

:::

::: danger 自定义标题

一个有 <span class="token code-snippet code keyword">`代码`</span> 和 <span class="token url">[<span class="token content">链接</span>](<span class="token url">#markdown</span>)</span> 的危险容器。

<span class="token code"><span class="token punctuation">```</span><span class="token code-language">js</span>
<span class="token code-block language-js language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">```</span></span>

:::

::: details 自定义标题

一个有 <span class="token code-snippet code keyword">`代码`</span> 和 <span class="token url">[<span class="token content">链接</span>](<span class="token url">#markdown</span>)</span> 的详情容器。

<span class="token code"><span class="token punctuation">```</span><span class="token code-language">js</span>
<span class="token code-block language-js language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">```</span></span>

:::

::: info 自定义信息
:::

::: note 自定义注释
:::

::: tip 自定义提示
:::

::: warning 自定义警告
:::

::: danger 自定义危险
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
