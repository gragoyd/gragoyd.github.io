export const data = {
  "key": "v-f3bbad8c",
  "path": "/docs/algorithm/backtracking%20copy.html",
  "title": "回溯",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "回溯",
    "icon": "wrap",
    "category": [
      "algorithm"
    ],
    "tag": [
      "backtracking"
    ],
    "summary": "[不同的二叉搜索树 II][00] Description 给定整数n，求恰由n个节点组成且节点值从1到n互不相同的二叉搜索树数量 Solution [不同的二叉搜索树][01] 只是要求统计不同搜索树的数量，但此题需要将所有树实际构造出来，故得用回溯方式。 回溯时按照遍历根节点递归分左右子树的思路依旧：对于节点序列 $1, \\cdots, n$ ，可以遍历",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://gragoyd.github.io/docs/algorithm/backtracking%20copy.html"
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
          "content": "回溯"
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
          "content": "backtracking"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "不同的二叉搜索树 II",
      "slug": "不同的二叉搜索树-ii",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.74,
    "words": 522
  },
  "copyright": "著作权归Grag所有\n基于MIT协议\n原文链接：https://github.com/gragoyd/docs/algorithm/backtracking%20copy.html",
  "filePathRelative": "docs/algorithm/backtracking copy.md"
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
