export const data = {
  "key": "v-42c50c6c",
  "path": "/posts/graduation/",
  "title": "说明",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "说明 此目录下的文章都是关于毕设的",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/posts/graduation/"
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
  "headers": [],
  "readingTime": {
    "minutes": 0.05,
    "words": 16
  },
  "filePathRelative": "posts/graduation/README.md"
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
