export const data = {
  "key": "v-d992faea",
  "path": "/posts/graduation/ros&gazebo.html",
  "title": "学习记录",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "学习记录 安装 ROS2 1. [先把 Ubuntu 换成阿里源][1] 2. 按照 [官网安装教程][2] 走 注意：直接按照此链接的Debians版的安装步骤走，不要按Ubuntu Linux的来; 在获取 GPG key 的时候，若获取失败，有两种方法：; 手动翻墙获取再写入指定目录文件; 配置 docker 代理：在/etc/environment文",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/posts/graduation/ros&gazebo.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "Grag's Blog"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "学习记录"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "安装",
      "slug": "安装",
      "children": [
        {
          "level": 3,
          "title": "ROS2",
          "slug": "ros2",
          "children": []
        },
        {
          "level": 3,
          "title": "Gazebo",
          "slug": "gazebo",
          "children": []
        },
        {
          "level": 3,
          "title": "将二者连起来",
          "slug": "将二者连起来",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "学习",
      "slug": "学习",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.05,
    "words": 316
  },
  "filePathRelative": "posts/graduation/ros&gazebo.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
