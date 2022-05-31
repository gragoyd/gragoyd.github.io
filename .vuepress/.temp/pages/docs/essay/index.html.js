export const data = {
  "key": "v-9caf75e6",
  "path": "/docs/essay/",
  "title": "说明",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "说明",
    "article": false,
    "summary": "说明 此目录下的文章是一些随笔",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://gragoyd.github.io/docs/essay/"
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
          "content": "说明"
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
      "title": "说明",
      "slug": "说明",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 0.05,
    "words": 14
  },
  "copyright": "著作权归Grag所有\n基于MIT协议\n原文链接：https://github.com/gragoyd/docs/essay/",
  "filePathRelative": "docs/essay/README.md"
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
