export const data = JSON.parse("{\"key\":\"v-01560935\",\"path\":\"/timeline/\",\"title\":\"时间轴\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"时间轴\",\"blog\":{\"type\":\"type\",\"key\":\"timeline\"},\"layout\":\"Blog\",\"summary\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://gragoyd.github.io/timeline/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Grag's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"时间轴\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"copyright\":\"著作权归Grag所有\\n基于MIT协议\\n原文链接：https://github.com/gragoyd/timeline/\",\"filePathRelative\":null}")

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
