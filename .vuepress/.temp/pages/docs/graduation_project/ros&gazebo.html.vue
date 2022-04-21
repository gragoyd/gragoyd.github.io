<template><h1 id="学习记录" tabindex="-1"><a class="header-anchor" href="#学习记录" aria-hidden="true">#</a> 学习记录</h1>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<h3 id="ros2" tabindex="-1"><a class="header-anchor" href="#ros2" aria-hidden="true">#</a> ROS2</h3>
<ol>
<li><a href="https://www.cnblogs.com/wenhainan/p/12833321.html" target="_blank" rel="noopener noreferrer">先把 Ubuntu 换成阿里源<ExternalLinkIcon/></a></li>
<li>按照 <a href="https://docs.ros.org/en/galactic/Installation/Ubuntu-Install-Debians.html" target="_blank" rel="noopener noreferrer">官网安装教程<ExternalLinkIcon/></a> 走
<ul>
<li>注意：直接按照此链接的<code>Debians</code>版的安装步骤走，不要按<code>Ubuntu Linux</code>的来</li>
<li>在获取 GPG key 的时候，若获取失败，有两种方法：
<ul>
<li>手动翻墙获取再写入指定目录文件</li>
<li>配置 docker 代理：在<code>/etc/environment</code>文件中添加【用完了记得注释掉再继续安装流程】：
<ul>
<li><code>http_proxy=&quot;http://192.168.0.107:20172/&quot;</code></li>
<li><code>https_proxy=&quot;https://192.168.0.107:20172/&quot;</code></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>每次登录自动加载环境：<code>echo &quot;source /opt/ros/galactic/setup.bash&quot; &gt;&gt; ~/.bashrc</code></li>
</ol>
<h3 id="gazebo" tabindex="-1"><a class="header-anchor" href="#gazebo" aria-hidden="true">#</a> Gazebo</h3>
<p>鉴于 Gazebo Classic 已停止更新，安装了 Ignition Gazebo，后面不知道会不会有啥问题</p>
<p><a href="https://ignitionrobotics.org/docs/fortress/install_ubuntu" target="_blank" rel="noopener noreferrer">Ignition Gazebo 的 Fortress 版本安装教程<ExternalLinkIcon/></a></p>
<ul>
<li>安装后若测试失败，<a href="https://ignitionrobotics.org/docs/citadel/troubleshooting#ubuntu" target="_blank" rel="noopener noreferrer">参考这个<ExternalLinkIcon/></a> 可知是因为 OpenGL 版本过低，不升级的话就只能显式指定引擎版本
<ul>
<li>临时指定：<code>ign gazebo -v 4 lights.sdf --render-engine ogre</code></li>
<li>修改<code>~/.ignition/gazebo/6/gui.config</code>：<code>&lt;engine&gt;ogre2&lt;/engine&gt;</code>--&gt;<code>&lt;engine&gt;ogre&lt;/engine&gt;</code></li>
</ul>
</li>
</ul>
<h3 id="将二者连起来" tabindex="-1"><a class="header-anchor" href="#将二者连起来" aria-hidden="true">#</a> 将二者连起来</h3>
<p><code>sudo apt-get install ros-galactic-ros-ign-bridge</code><a href="https://docs.ros.org/en/galactic/Tutorials/Simulators/Ignition/Setting-up-a-Robot-Simulation-Ignition.html?highlight=gazebo#id4" target="_blank" rel="noopener noreferrer">【参考】<ExternalLinkIcon/></a></p>
<h2 id="学习" tabindex="-1"><a class="header-anchor" href="#学习" aria-hidden="true">#</a> 学习</h2>
<blockquote>
<p><a href="https://docs.ros.org/en/galactic/index.html" target="_blank" rel="noopener noreferrer">ROS2 Galactic Document<ExternalLinkIcon/></a></p>
</blockquote>
<!-- ---------------------------------------------- -->
</template>
