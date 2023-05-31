---
title: 日常小问题的解决
---

## 歌单转移

记录将网易云音乐或 QQ 音乐的歌单转移到 Apple Music 中的步骤

1. 以链接形式分享歌单，从链接中得到 ID
   - 如链接为 `https://i.y.qq.com/n2/m/share/details/taoge.html?id=1736483147`，则 ID 为 `1736483147`
2. 凭借 ID 在此 [项目](https://github.com/yueyericardo/Netease-to-Youtube-or-Spotify) 的 [网站](https://yyrcd.com/2018/11/14/n2s-zh/) 中将歌单转为文字形式
3. 在 [TuneMyMusic](https://www.tunemymusic.com/zh-cn/) 中将文字形式的歌单导入至 Apple Music 中
   1. 选择来源为`从文本`
   2. 粘贴刚刚复制的内容到文本框中
   3. 耐心等待歌单转换完成
   4. 选择 Apple Music 作为目的地并开始迁移
   5. 等待最终移动结果
   6. 移动完成后可下载迁移失败的歌曲信息【网络原因下载 CSV 文件较慢】

## macOS

- macOS 13 (Ventura) 内置的 OpenSSH 版本认为 RSA 默认采用的 SHA-1 算法已经不再安全，所以会阻止此类签名算法验证的登陆行为。[这篇文章](https://goteleport.com/blog/comparing-ssh-keys/) 建议采用目前性能最好且最安全的`EdDSA`算法。
  - 生成密钥对：`ssh-keygen -t ed25519 -C "my_key_name"`
  - 查看密钥对指纹：`ssh-keygen -lf my_key_name`

## macOS + Latex

### Latex 源码与 PDF 之间相互跳转

在安装 LaTeX Workshop 插件且 PDF 在 VSCode 内置标签页浏览条件下：

- 源码跳 PDF：`option`+`command`+`j`
- PDF 跳源码：`command`+单击

### 格式化问题

- 这是 VSCode + Latex 写作环境配置问题，`.tex` 文件无法通过 latexindent 格式化（LaTex Workshop 插件）
- Mac 自带 perl 和 cpan，还需要装有 CommandLineTools

1. 设置 perl 模块路径：
   - 终端执行 `PERL_MM_OPT="INSTALL_BASE=$HOME/.perl5" cpan local::lib`
   - 在 `.zshrc` 中添加 `eval "$(perl -I$HOME/.perl5/lib/perl5 -Mlocal::lib=$HOME/.perl5)"` 并 `source`
2. 用 cpanm 安装 latexindent 依赖的包，终端执行：
   - `brew install cpanm`
   - `cpanm --local-lib=~/.perl5 local::lib && eval $(perl -I ~/.perl5/lib/perl5/ -Mlocal::lib)`
   - `sudo cpanm -l $HOME/.perl5 Log::Log4perl Log::Dispatch::File YAML::Tiny File::HomeDir Unicode::GCString`
     - `-l` 参数是为了将包指定安装在 perl 所设置的模块路径中，如此 perl 才能使用这些模块；若缺少此参数，则 cpanm 会将模块安装在新建的 `$HOME/perl5` 路径中
     - 安装时会夹杂 `! Finding XXX on cpanmetadb failed.` 提示，这种不用管，只需确认最终提示模块安装成功即可

### 找不到 STHeiti

`STHeiti`实际上就是`华文黑体`，但 macOS 上自带的字体文件缺少能被 Latex 所选用的字体宏包所识别的特定样式，故得在网上下载`STHeiti.ttf`文件再次安装。安装会提示已存在一种样式，选择保留两者即可。

## Apache2 服务器

- [【参考教程】](https://blog.csdn.net/beyonddeg/article/details/82766395)
- [【配置 HTTPS 访问教程】](https://www.jianshu.com/p/96e63686e374)
- 操作服务器
  - `sudo apachectl -k start`
  - `sudo apachectl -k restart`
  - `sudo apachectl -k stop`
- 主要配置文件【目录：`/etc/apache2/httpd.conf`】
  - `DocumentRoot`: `/Library/WebServer/Documents`
    - 文件根目录，修改时需同时变动两行
    - 这是默认路径，虚拟主机会将其覆盖
  - `ServerName`: `127.0.0.1:80`
    - 主机域名设置
    - 有时使用 Zerotier 虚拟内网访问时 80 端口不可用，在 `Listen` 周围添加新的侦听端口 `Listen 9999`
  - 启用虚拟目录功能：将 `#Include /private/etc/apache2/extra/httpd-vhosts.conf` 取消注释，再配置虚拟主机配置文件
  - 文件最后配置允许使用 PHP
    - 由于 PHP 是自己用 brew 装的，所以一开始会有签名问题，搜一下报错信息就能找到教程解决
- 虚拟主机配置文件【目录：`/etc/apache2/extra/httpd-vhosts.conf`】
  - `DocumentRoot`: `/Library/WebServer/Sites`
    - 覆盖了 `http.conf` 中的文件根目录
    - 修改时记得同时改两行

## Linux 相关

- `sudo` 执行时会自动重置系统变量【如环境路径等变量】，所以 `sudo python` 跟 `python` 用的很可能不是同一个解释器
- `wget`下载举例：`wget -c http://download.cs.stanford.edu/orion/partnet_dataset/sem_seg_h5.zip -e use_proxy=yes -e http_proxy=192.168.0.107:20172`
  - 添加`-c`参数以实现断点续传
  - `-e use_proxy=yes -e http_proxy=$proxy_ip$`用来指定网络代理

## OpenCV + OpenCV_contrib 编译

主要问题是实际编译后某些 contrib 的扩展库文件需要手动拷贝到安装路径中去，否则使用时无法导入

- [参考博客 1](https://blog.csdn.net/weixin_40854506/article/details/115289098)
- [参考博客 2](https://blog.csdn.net/qq_49175257/article/details/124903063)
- [问题解决博客](https://www.its404.com/article/qq_34106574/81668193)

## 网络连接问题

教研室用 Zerotier 组的虚拟内网，但用移动的垃圾宽带会连不上，可能有几种问题：

- 学校宿舍校园移动宽带连不上，因为移动劫持了，在系统设置里换个 DNS 服务器即可解决，用前先测速，一般用阿里云的`223.6.6.6`，也不必费心设啥国外的 DNS，因为虽然国内所有 DNS 都有域名审查与拦截，但即使设成国外 DNS 也能拦下来再回个假的，详见此 [论文](https://www.usenix.org/conference/usenixsecurity21/presentation/hoang)。
- 老家也是移动宽带连不上，师弟给我科普，是因为移动是个大内网，下属一个片区用一个公网 IP，入户宽带仅是内网地址，路由器是二阶内网，其下的子网才是主机，再加上教研室也是移动网，于是俩主机之间经过了无数层，并且移动会屏蔽端口，导致俩主机之间无法通信。现状是移动光猫 H2-3 搭配 TP-LINK 路由器，采用光猫软路由搭配路由器自动获取地址方式上网，解决方案就是利用 DMZ 把主机暴露出去，但实测保持软路由并直接在光猫上启用 DMZ 并不可行，所以只能采用光猫桥接搭配路由器拨号上网的方式，步骤如下：
  1. 先利用超级管理帐密登陆光猫管理界面，关闭 QOS，开 UPNP，开 DMZ 并将 DMZ 指向本机，最后将上网模式由软路由改为桥接，重启光猫。
     - 改桥接之前先记录软路由方式中的宽带帐密（检查密码框元素把 type="password"中的 password 删掉会车即可看到密码）
     - 上述开关并不在同一处，需要到处找
  2. 登陆路由器管理界面，将上网方式改为宽带拨号上网并填入宽带帐密，等待连接成功
  3. 在路由器的 DMZ 主机应用中开启 DMZ 并指向本机 IP（可以顺便绑定下 IP 和 MAC）
