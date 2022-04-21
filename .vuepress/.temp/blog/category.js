export const categoryMap = {"category":{"/":{"path":"/category/","map":{"algorithm":{"path":"/category/algorithm/","keys":["v-e1eec494","v-a09a45e0","v-5732fb76","v-eded1812","v-679aa9e1"]}}}},"tag":{"/":{"path":"/tag/","map":{"hash":{"path":"/tag/hash/","keys":["v-a09a45e0"]},"DFS":{"path":"/tag/dfs/","keys":["v-e1eec494","v-5732fb76"]},"BFS":{"path":"/tag/bfs/","keys":["v-5732fb76"]},"two pointer":{"path":"/tag/two-pointer/","keys":["v-eded1812"]},"structure":{"path":"/tag/structure/","keys":["v-679aa9e1"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
