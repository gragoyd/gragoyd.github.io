export const data = {
  "key": "v-36d6919b",
  "path": "/docs/algorithm/greed.html",
  "title": "贪心",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "贪心",
    "icon": "bitbucket",
    "category": [
      "algorithm"
    ],
    "tag": [
      "greed"
    ],
    "summary": "[跳跃游戏][00] Description 给定非负整数数组，数组中的每个元素代表能从该位置往右移动的最大长度，初始位于数组的第一个下标，判断能否到达最后一个下标 Solution1 贪心思想，在遍历数组时，基于每个可达的位置来更新最远可达位置，每次更新后判断是否已经可达最后下标 Solution2 实际上唯一导致最后下标不可达的障碍条件为，某元素为零且恰",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://gragoyd.github.io/docs/algorithm/greed.html"
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
          "content": "贪心"
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
          "content": "greed"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "跳跃游戏",
      "slug": "跳跃游戏",
      "children": []
    },
    {
      "level": 3,
      "title": "跳跃游戏 II",
      "slug": "跳跃游戏-ii",
      "children": []
    },
    {
      "level": 3,
      "title": "加油站",
      "slug": "加油站",
      "children": []
    },
    {
      "level": 3,
      "title": "划分字母区间",
      "slug": "划分字母区间",
      "children": []
    },
    {
      "level": 3,
      "title": "摆动序列",
      "slug": "摆动序列",
      "children": []
    },
    {
      "level": 3,
      "title": "用最少数量的箭引爆气球",
      "slug": "用最少数量的箭引爆气球",
      "children": []
    },
    {
      "level": 3,
      "title": "无重叠区间",
      "slug": "无重叠区间",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 9.33,
    "words": 2799
  },
  "copyright": "著作权归Grag所有\n基于MIT协议\n原文链接：https://github.com/gragoyd/docs/algorithm/greed.html",
  "filePathRelative": "docs/algorithm/greed.md"
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
