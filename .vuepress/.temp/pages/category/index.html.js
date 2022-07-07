export const data = JSON.parse("{\"key\":\"v-5bc93818\",\"path\":\"/category/\",\"title\":\"分类\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"分类\",\"blog\":{\"type\":\"category\",\"key\":\"category\"},\"layout\":\"Blog\",\"summary\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://gragoyd.github.io/category/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Grag's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"分类\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"copyright\":\"著作权归Grag所有\\n基于MIT协议\\n原文链接：https://github.com/gragoyd/category/\",\"filePathRelative\":null}")

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
