export const data = {
  "key": "v-d843ef0a",
  "path": "/docs/algorithm/dynamic_programming.html",
  "title": "动态规划",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "动态规划",
    "icon": "function",
    "category": [
      "algorithm"
    ],
    "tag": [
      "DP"
    ],
    "summary": "[不同的二叉搜索树][00] Description 给定整数n，求恰由n个节点组成且节点值从1到n互不相同的二叉搜索树数量 Solution 对于节点序列 $1, \\cdots, n$ ，可以遍历取特定数 $i$ 作为根节点，则左右子树节点序列为 $1, \\cdots, (i-1)$ 和 $(i+1),\\cdots,n$ ，则可以继续递归遍历尝试构建搜索子",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://gragoyd.github.io/docs/algorithm/dynamic_programming.html"
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
          "content": "动态规划"
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
          "content": "DP"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "不同的二叉搜索树",
      "slug": "不同的二叉搜索树",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.34,
    "words": 403
  },
  "copyright": "著作权归Grag所有\n基于MIT协议\n原文链接：https://github.com/gragoyd/docs/algorithm/dynamic_programming.html",
  "filePathRelative": "docs/algorithm/dynamic_programming.md"
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
