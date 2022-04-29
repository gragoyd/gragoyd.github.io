export const data = {
  "key": "v-5732fb76",
  "path": "/docs/algorithm/search.html",
  "title": "搜索",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "搜索",
    "icon": "search",
    "category": [
      "algorithm"
    ],
    "tag": [
      "DFS",
      "BFS"
    ],
    "summary": "[01 矩阵][00] Description 矩阵值为 0 或 1，找出各 1 最近的 0 Solution1 以所有 0 为整体向外 BFS。即首先将所有 0 入队，再常规 BFS Solution2 从某个 0 开始分别往左上和右下 DP 设$f(i,j)$为该格子到最近 0 的距离，则： 往左上：$f(i, j)=\\min \\{f(i+1, j),\\",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://gragoyd.github.io/docs/algorithm/search.html"
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
          "content": "搜索"
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
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "DFS"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "BFS"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "01 矩阵",
      "slug": "_01-矩阵",
      "children": []
    },
    {
      "level": 3,
      "title": "打开转盘锁",
      "slug": "打开转盘锁",
      "children": []
    },
    {
      "level": 3,
      "title": "太平洋大西洋水流问题",
      "slug": "太平洋大西洋水流问题",
      "children": []
    },
    {
      "level": 3,
      "title": "二进制矩阵中的最短路径",
      "slug": "二进制矩阵中的最短路径",
      "children": []
    },
    {
      "level": 3,
      "title": "判断二分图",
      "slug": "判断二分图",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 6.4,
    "words": 1921
  },
  "copyright": "著作权归Grag所有\n基于MIT协议\n原文链接：https://github.com/gragoyd/docs/algorithm/search.html",
  "filePathRelative": "docs/algorithm/search.md"
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
