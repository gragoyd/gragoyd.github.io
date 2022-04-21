export const data = {
  "key": "v-4dbc0b2d",
  "path": "/docs/graduation_project/docker.html",
  "title": "教研室服务器 Docker 使用记录",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "教研室服务器 Docker 使用记录 \" 戈振鹏学长的 Docker 库\" 运行镜像的准备工作 1. 参照 这些代码跑起来。记得先修改其中的 --name, -p 并确认镜像版本 2. 在 iTerm2 中配置 profile 以便后续便捷连接。配置完后需将本机~/.ssh/idrsa.pub的内容拷到 docker 的~/.ssh/authorizedZk",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/docs/graduation_project/docker.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "主题演示"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "教研室服务器 Docker 使用记录"
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
      "title": "运行镜像的准备工作",
      "slug": "运行镜像的准备工作",
      "children": []
    },
    {
      "level": 2,
      "title": "目前运行的镜像",
      "slug": "目前运行的镜像",
      "children": [
        {
          "level": 3,
          "title": "oyd_pytorch3d",
          "slug": "oyd-pytorch3d",
          "children": []
        },
        {
          "level": 3,
          "title": "oyd_pvnet",
          "slug": "oyd-pvnet",
          "children": []
        },
        {
          "level": 3,
          "title": "oyd_ros",
          "slug": "oyd-ros",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 0.86,
    "words": 259
  },
  "filePathRelative": "docs/graduation_project/docker.md"
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
