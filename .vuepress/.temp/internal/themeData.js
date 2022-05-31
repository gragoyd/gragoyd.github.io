export const themeData = {
  "blog": {
    "description": "间歇性努力的东东",
    "intro": "/intro.html",
    "timeline": "以下",
    "articlePerPage": 20
  },
  "encrypt": {
    "global": false
  },
  "pure": true,
  "iconPrefix": "iconfont icon-",
  "darkmode": "switch",
  "themeColor": {
    "red": "#e74c3c",
    "blue": "#3498db",
    "green": "#3eaf7c",
    "orange": "#f39c12",
    "purple": "#8e44ad"
  },
  "fullscreen": true,
  "locales": {
    "/": {
      "blog": {},
      "repoDisplay": true,
      "navbarIcon": true,
      "navbarAutoHide": "mobile",
      "hideSiteNameonMobile": true,
      "sidebar": {
        "/docs/algorithm/": "structure",
        "/docs/graduation/": "structure",
        "/docs/work/": "structure",
        "/docs/essay/": "structure",
        "/": [
          ""
        ],
        "/example": [
          "/",
          "",
          "container",
          "slide",
          "sidebar"
        ]
      },
      "sidebarIcon": true,
      "headerDepth": 3,
      "repo": "gragoyd",
      "author": {
        "name": "Grag",
        "url": "https://github.com/gragoyd"
      },
      "logo": "/myLogo.svg",
      "docsDir": "/docs",
      "navbar": [
        {
          "text": "毕设",
          "icon": "note",
          "link": "/docs/graduation/"
        },
        {
          "text": "工作",
          "icon": "java",
          "link": "/docs/work/"
        },
        {
          "text": "算法",
          "icon": "ability",
          "link": "/docs/algorithm/knowledge"
        },
        {
          "text": "随笔",
          "icon": "article",
          "link": "/docs/essay/"
        },
        {
          "text": "写作示例",
          "icon": "creative",
          "link": "/example/"
        }
      ],
      "footer": "❤️ 🐻",
      "displayFooter": true,
      "copyright": "MIT Licensed | Copyright © 2022-present <a href=\"https://github.com/gragoyd\">Grag</a>",
      "pageInfo": [
        "Author",
        "Date",
        "Category",
        "Tag",
        "Word",
        "ReadingTime"
      ],
      "editLink": false,
      "lang": "zh-CN",
      "navbarLocales": {
        "langName": "简体中文",
        "selectLangText": "选择语言",
        "selectLangAriaLabel": "选择语言"
      },
      "metaLocales": {
        "prev": "上一页",
        "next": "下一页",
        "lastUpdated": "上次编辑于",
        "contributors": "贡献者",
        "editLink": "编辑此页"
      },
      "blogLocales": {
        "article": "文章",
        "articleList": "文章列表",
        "category": "分类",
        "tag": "标签",
        "timeline": "时间轴",
        "timelineTitle": "昨日不在",
        "all": "全部",
        "intro": "个人介绍",
        "star": "收藏",
        "slides": "幻灯片",
        "encrypt": "加密"
      },
      "outlookLocales": {
        "themeColor": "主题色",
        "darkmode": "外观",
        "fullscreen": "全屏"
      },
      "encryptLocales": {
        "title": "请输入密码",
        "errorHint": "请输入正确密码"
      },
      "routeLocales": {
        "404msg": [
          "这里什么也没有",
          "我们是怎么来到这儿的？",
          "这 是 四 零 四 !",
          "看起来你访问了一个失效的链接"
        ],
        "back": "返回上一页",
        "home": "带我回家"
      }
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
