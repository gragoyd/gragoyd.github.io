<template><div><h2 id="教研室服务器-docker-使用记录" tabindex="-1"><a class="header-anchor" href="#教研室服务器-docker-使用记录" aria-hidden="true">#</a> 教研室服务器 Docker 使用记录</h2>
<blockquote>
<p><a href="https://github.com/gezp/docker-ubuntu-desktop" target="_blank" rel="noopener noreferrer">戈振鹏学长的 Docker 库<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="运行镜像的准备工作" tabindex="-1"><a class="header-anchor" href="#运行镜像的准备工作" aria-hidden="true">#</a> 运行镜像的准备工作</h2>
<ol>
<li>参照 <a href="#%E7%9B%AE%E5%89%8D%E8%BF%90%E8%A1%8C%E7%9A%84%E9%95%9C%E5%83%8F">这些</a>代码跑起来。记得先修改其中的 <code v-pre>--name</code>, <code v-pre>-p</code> 并确认镜像版本</li>
<li>在 iTerm2 中配置 profile 以便后续便捷连接。配置完后需将本机<code v-pre>~/.ssh/id_rsa.pub</code>的内容拷到 docker 的<code v-pre>~/.ssh/authorized_keys</code>文件中去，实现无密码登录</li>
<li>NoMachine 按需配置</li>
</ol>
<h2 id="目前运行的镜像" tabindex="-1"><a class="header-anchor" href="#目前运行的镜像" aria-hidden="true">#</a> 目前运行的镜像</h2>
<h3 id="oyd-pytorch3d" tabindex="-1"><a class="header-anchor" href="#oyd-pytorch3d" aria-hidden="true">#</a> oyd_pytorch3d</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run -d --restart<span class="token operator">=</span>on-failure <span class="token punctuation">\</span>
	--name oyd_pytorch3d <span class="token punctuation">\</span>
	--cap-add<span class="token operator">=</span>SYS_PTRACE <span class="token punctuation">\</span>
	--gpus all  <span class="token punctuation">\</span>
	--shm-size<span class="token operator">=</span>4g <span class="token punctuation">\</span>
	-v /media/yanglu/data:/home/ubuntu/data <span class="token punctuation">\</span>
	-v /tmp/.X11-unix:/tmp/.X11-unix:rw <span class="token punctuation">\</span>
	-p <span class="token number">11122</span>:22  <span class="token punctuation">\</span>
	-p <span class="token number">11140</span>:4000  <span class="token punctuation">\</span>
	gezp/ubuntu-desktop:20.04-cu11.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="oyd-pvnet" tabindex="-1"><a class="header-anchor" href="#oyd-pvnet" aria-hidden="true">#</a> oyd_pvnet</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run -d --restart<span class="token operator">=</span>on-failure <span class="token punctuation">\</span>
	--name oyd_pvnet <span class="token punctuation">\</span>
	--cap-add<span class="token operator">=</span>SYS_PTRACE <span class="token punctuation">\</span>
	--gpus all  <span class="token punctuation">\</span>
	--shm-size<span class="token operator">=</span>4g <span class="token punctuation">\</span>
	-v /media/yanglu/data:/home/ubuntu/data <span class="token punctuation">\</span>
	-v /tmp/.X11-unix:/tmp/.X11-unix:rw <span class="token punctuation">\</span>
	-p <span class="token number">11123</span>:22  <span class="token punctuation">\</span>
	-p <span class="token number">11141</span>:4000  <span class="token punctuation">\</span>
	gezp/ubuntu-desktop:18.04-cu10.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="oyd-ros" tabindex="-1"><a class="header-anchor" href="#oyd-ros" aria-hidden="true">#</a> oyd_ros</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run -d --restart<span class="token operator">=</span>on-failure <span class="token punctuation">\</span>
	--name oyd_ros <span class="token punctuation">\</span>
	--cap-add<span class="token operator">=</span>SYS_PTRACE <span class="token punctuation">\</span>
	--gpus all  <span class="token punctuation">\</span>
	--shm-size<span class="token operator">=</span>4g <span class="token punctuation">\</span>
	-v /media/yanglu/data:/home/ubuntu/data <span class="token punctuation">\</span>
	-v /tmp/.X11-unix:/tmp/.X11-unix:rw <span class="token punctuation">\</span>
	-p <span class="token number">11124</span>:22  <span class="token punctuation">\</span>
	-p <span class="token number">11142</span>:4000  <span class="token punctuation">\</span>
	gezp/ubuntu-desktop:20.04-cu11.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="oyd-ffb6d" tabindex="-1"><a class="header-anchor" href="#oyd-ffb6d" aria-hidden="true">#</a> oyd_ffb6d</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run -d --restart<span class="token operator">=</span>on-failure <span class="token punctuation">\</span>
	--name oyd_ffb6d <span class="token punctuation">\</span>
	--cap-add<span class="token operator">=</span>SYS_PTRACE <span class="token punctuation">\</span>
	--gpus all  <span class="token punctuation">\</span>
	--shm-size<span class="token operator">=</span>4g <span class="token punctuation">\</span>
	-v /media/yanglu/data:/home/ubuntu/data <span class="token punctuation">\</span>
	-v /tmp/.X11-unix:/tmp/.X11-unix:rw <span class="token punctuation">\</span>
	-p <span class="token number">11125</span>:22  <span class="token punctuation">\</span>
	-p <span class="token number">11143</span>:4000  <span class="token punctuation">\</span>
	gezp/ubuntu-desktop:18.04-cu10.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="oyd-ffb6d-new" tabindex="-1"><a class="header-anchor" href="#oyd-ffb6d-new" aria-hidden="true">#</a> oyd_ffb6d_new</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run -d --restart<span class="token operator">=</span>on-failure <span class="token punctuation">\</span>
	--name oyd_ffb6d_new <span class="token punctuation">\</span>
	--cap-add<span class="token operator">=</span>SYS_PTRACE <span class="token punctuation">\</span>
	--gpus all  <span class="token punctuation">\</span>
	--shm-size<span class="token operator">=</span>4g <span class="token punctuation">\</span>
	-v /media/yanglu/data:/home/ubuntu/data <span class="token punctuation">\</span>
	-v /tmp/.X11-unix:/tmp/.X11-unix:rw <span class="token punctuation">\</span>
	-p <span class="token number">11126</span>:22  <span class="token punctuation">\</span>
	-p <span class="token number">11144</span>:4000  <span class="token punctuation">\</span>
	gezp/ubuntu-desktop:20.04-cu11.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
