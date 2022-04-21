---
title: ROS&Gazebo
---

# 学习记录

## 安装

### ROS2

1. [先把 Ubuntu 换成阿里源][1]
2. 按照 [官网安装教程][2] 走
   - 注意：直接按照此链接的`Debians`版的安装步骤走，不要按`Ubuntu Linux`的来
   - 在获取 GPG key 的时候，若获取失败，有两种方法：
     - 手动翻墙获取再写入指定目录文件
     - 配置 docker 代理：在`/etc/environment`文件中添加【用完了记得注释掉再继续安装流程】：
       - `http_proxy="http://192.168.0.107:20172/"`
       - `https_proxy="https://192.168.0.107:20172/"`
3. 每次登录自动加载环境：`echo "source /opt/ros/galactic/setup.bash" >> ~/.bashrc`

### Gazebo

鉴于 Gazebo Classic 已停止更新，安装了 Ignition Gazebo，后面不知道会不会有啥问题

[Ignition Gazebo 的 Fortress 版本安装教程][3]

- 安装后若测试失败，[参考这个][4] 可知是因为 OpenGL 版本过低，不升级的话就只能显式指定引擎版本
  - 临时指定：`ign gazebo -v 4 lights.sdf --render-engine ogre`
  - 修改`~/.ignition/gazebo/6/gui.config`：`<engine>ogre2</engine>`-->`<engine>ogre</engine>`

### 将二者连起来

`sudo apt-get install ros-galactic-ros-ign-bridge`[【参考】][5]

## 学习

> [ROS2 Galactic Document][6]

<!-- ---------------------------------------------- -->
[1]:https://www.cnblogs.com/wenhainan/p/12833321.html
[2]:https://docs.ros.org/en/galactic/Installation/Ubuntu-Install-Debians.html
[3]:https://ignitionrobotics.org/docs/fortress/install_ubuntu
[4]:https://ignitionrobotics.org/docs/citadel/troubleshooting#ubuntu
[5]:https://docs.ros.org/en/galactic/Tutorials/Simulators/Ignition/Setting-up-a-Robot-Simulation-Ignition.html?highlight=gazebo#id4
[6]:https://docs.ros.org/en/galactic/index.html
