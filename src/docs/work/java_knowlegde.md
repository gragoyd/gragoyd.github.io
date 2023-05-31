---
title: Java 知识点
---

### 记录一些杂的知识点

- [线程池][01]
- [AQS(AbstractQueuedSyncronizer)][02]
- [Redis 的 SDS][03]、[Redis 的 zset 底层（跳表）][1A]、[Redis 的 list 底层][25]
- [Redis 过期删除策略和内存淘汰策略][04]
- [B+ 树插入删除操作][05]
- [二叉树插入节点后再平衡操作][06]
- [数据库索引及其结构][07]、[索引失效场景][27]
- [RC 与 RR 的 MVCC 实现][08]、[当前读与快照读][09]
- [MySQL 中 RedoLog 与 BinLog 一致性问题][0A]、[Canal 原理][22]
- [MySQL 与 Redis 一致性问题][20]
- [MySQL 的锁][29]
- [数据库迁移时如何确保数据一致性][26]
- [基于 Lock+Condition 实现自定义阻塞队列][0B]
- [HashMap 为什么线程不安全][0C]
- [Redis 缓存穿透、缓存击穿、缓存雪崩][0D]、([一致性哈希算法][14]、[jump consistent hash][15])
- [Redis 持久化][0E]
- [抽象类与接口][0F]
- [synchronized 原理][10]、[Lock 原理][24]
- [死锁的产生、防止、避免、检测和解除][11]
- [synchronized 原理][13]、[Java 常用锁的使用][1B]
- [MySQL 日志分类及简介][16]、[MySQL 事务日志][17]
- [操作系统 IO 模型][18]、[select & poll & epoll][19]
- [http & https][1C]
- [BIO & NIO & AIO][12]
- [操作系统文件读写流程][1D]
- [Java 实现线程安全的三种方式及如何保证线程安全][1E]
- [粘包及其解决方案][1F]
- [TCP 的可靠性][23]
- [Kafka 消费流程][21]
- [策略模式、观察者模式][28]

### 代码上线后 CPU 占用高排查过程

1. `top`查看占用 CPU 占用高的 PID（进程号）
2. `top -Hp 进程号`查看该进程下所有线程的占用情况
3. `printf "%x\n" 线程号`获取目标线程的十六进制表示
4. `jstack 进程号 | grep -A 30 线程号的十六进制表示`输出该线程状态的前 30 行，定位到具体代码问题
5. 可额外执行`jstat -gcutil 进程号 统计间隔毫秒数 统计次数（缺省则一直统计）`来查看进程 GC 的持续变化情况，若其中的`FGC`列很大且一直增大则确认 Full GC

### 单例模式

::: tabs
@tab 饿汉式
在类装载时就实例化以避免多线程问题，但也意味着需要一直占用内存

```java
class Singleton {
    private Singleton() {
    }

    private static Singleton instance = new Singleton();

    public static Singleton getInstance() {
        return instance;
    }
}

```

@tab 双检锁懒汉式
用于实例域的延迟初始化。两次检测解决多线程问题，不一定需要加锁

```java
class Singleton {
    private Singleton() {
    }

    private static volatile Singleton instance;

    public static Singleton getInstance() {
        if (instance == null)
            synchronized (Singleton.class) {
                if (instance == null)
                    instance = new Singleton();
            }
        return instance;
    }
}
```

@tab 静态内部类
用于静态域的延迟初始化。单例类装载时也不会初始化实例，在使用时才会装载内部类而实例化单例

```java
class Singleton {
    private Singleton() {
    }

    private static class SingletonHolder {
        private static final Singleton INSTANCE = new Singleton();
    }

    public static Singleton getInstance() {
        return SingletonHolder.INSTANCE;
    }
}
```

@tab ThreadLocal
同步是以时间换空间，`ThreadLocal`是以空间换时间

```java
class Singleton {
    private Singleton() {
    }

    private static final ThreadLocal<Singleton> tl = new ThreadLocal<Singleton>() {
        @Override
        protected Singleton initialValue() {
            return new Singleton();
        };
    };

    public static Singleton getInstance() {
        return tl.get();
    }
}
```

:::
<!-- -------------------- -->

[29]:https://www.cnblogs.com/qdhxhz/p/15587726.html
[28]:https://blog.csdn.net/Remoa_Dengqinyi/article/details/75270453
[27]:https://blog.csdn.net/lisu061714112/article/details/122398894
[26]:https://www.infoq.cn/article/DeDh79E4SrCrtwGBs47v
[25]:https://zhuanlan.zhihu.com/p/102422311
[24]:https://www.cnblogs.com/aspirant/p/8657681.html
[23]:https://blog.csdn.net/Xukaiy/article/details/118965347
[22]:https://www.cnblogs.com/caoweixiong/p/11824423.html
[21]:https://blog.csdn.net/u011066470/article/details/88089270
[20]:https://cloud.tencent.com/developer/article/1917325
[1F]:https://www.cnblogs.com/vipstone/p/14239160.html
[1E]:https://blog.csdn.net/qq_15371293/article/details/109921221
[1D]:https://blog.csdn.net/qq_34650584/article/details/102658197
[1C]:https://zhuanlan.zhihu.com/p/72616216
[1B]:https://zhuanlan.zhihu.com/p/132714367
[1A]:https://blog.csdn.net/wr_java/article/details/115701942
[19]:https://www.cnblogs.com/cscshi/p/16525332.html
[18]:https://www.cnblogs.com/jackion5/p/13544927.html
[17]:https://www.cnblogs.com/bantiaoxianyu/p/16525837.html
[16]:https://zhuanlan.zhihu.com/p/58011817
[15]:https://zhuanlan.zhihu.com/p/104124045
[14]:https://blog.csdn.net/a745233700/article/details/120814088
[13]:https://zhuanlan.zhihu.com/p/377423211
[12]:https://lijie.blog.csdn.net/article/details/105462088
[11]:https://zhuanlan.zhihu.com/p/61221667
[10]:https://www.cnblogs.com/aspirant/p/11470858.html
[0F]:https://zhuanlan.zhihu.com/p/94770324
[0E]:https://blog.csdn.net/Me_xuan/article/details/124285425
[0D]:https://zhuanlan.zhihu.com/p/148837265
[0C]:https://zhuanlan.zhihu.com/p/344459822
[0B]:https://blog.csdn.net/chenshufeng115/article/details/110409845
[0A]:https://blog.csdn.net/huangjw_806/article/details/100927097
[09]:https://www.cnblogs.com/wwcom123/p/10727194.html
[08]:https://blog.csdn.net/qq_35634181/article/details/113280233
[07]:https://blog.csdn.net/mu_wind/article/details/110128016
[06]:https://blog.csdn.net/tianjindong0804/article/details/86301179
[05]:https://blog.csdn.net/sunshine_lyn/article/details/82747596
[04]:https://www.cnblogs.com/ysocean/p/12422635.html
[03]:https://zhuanlan.zhihu.com/p/51075839
[02]:https://javaguide.cn/java/concurrent/java-concurrent-questions-02.html#_6-aqs
[01]:https://pdai.tech/md/java/thread/java-thread-x-juc-executor-ThreadPoolExecutor.html
