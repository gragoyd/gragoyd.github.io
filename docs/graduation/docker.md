---
title: Docker
---

## 教研室服务器 Docker 使用记录

> [戈振鹏学长的 Docker 库](https://github.com/gezp/docker-ubuntu-desktop)

## 运行镜像的准备工作

1. 参照 [这些](#目前运行的镜像)代码跑起来。记得先修改其中的 `--name`, `-p` 并确认镜像版本
2. 在 iTerm2 中配置 profile 以便后续便捷连接。配置完后需将本机`~/.ssh/id_rsa.pub`的内容拷到 docker 的`~/.ssh/authorized_keys`文件中去，实现无密码登录
3. NoMachine 按需配置

## 目前运行的镜像

### oyd_pytorch3d

```bash
docker run -d --restart=on-failure \
	--name oyd_pytorch3d \
	--cap-add=SYS_PTRACE \
	--gpus all  \
	--shm-size=4g \
	-v /media/yanglu/data:/home/ubuntu/data \
	-v /tmp/.X11-unix:/tmp/.X11-unix:rw \
	-p 11122:22  \
	-p 11140:4000  \
	gezp/ubuntu-desktop:20.04-cu11.0
```

### oyd_pvnet

```bash
docker run -d --restart=on-failure \
	--name oyd_pvnet \
	--cap-add=SYS_PTRACE \
	--gpus all  \
	--shm-size=4g \
	-v /media/yanglu/data:/home/ubuntu/data \
	-v /tmp/.X11-unix:/tmp/.X11-unix:rw \
	-p 11123:22  \
	-p 11141:4000  \
	gezp/ubuntu-desktop:18.04-cu10.1
```

### oyd_ros

```bash
docker run -d --restart=on-failure \
	--name oyd_ros \
	--cap-add=SYS_PTRACE \
	--gpus all  \
	--shm-size=4g \
	-v /media/yanglu/data:/home/ubuntu/data \
	-v /tmp/.X11-unix:/tmp/.X11-unix:rw \
	-p 11124:22  \
	-p 11142:4000  \
	gezp/ubuntu-desktop:20.04-cu11.0
```

### oyd_ffb6d

```bash
docker run -d --restart=on-failure \
	--name oyd_ffb6d \
	--cap-add=SYS_PTRACE \
	--gpus all  \
	--shm-size=4g \
	-v /media/yanglu/data:/home/ubuntu/data \
	-v /tmp/.X11-unix:/tmp/.X11-unix:rw \
	-p 11125:22  \
	-p 11143:4000  \
	gezp/ubuntu-desktop:18.04-cu10.1
```

### oyd_ffb6d_new

```bash
docker run -d --restart=on-failure \
	--name oyd_ffb6d_new \
	--cap-add=SYS_PTRACE \
	--gpus all  \
	--shm-size=4g \
	-v /media/yanglu/data:/home/ubuntu/data \
	-v /tmp/.X11-unix:/tmp/.X11-unix:rw \
	-p 11126:22  \
	-p 11144:4000  \
	gezp/ubuntu-desktop:20.04-cu11.0
```
