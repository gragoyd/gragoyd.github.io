export const categoryMap = {"category":{"/":{"path":"/category/","map":{"algorithm":{"path":"/category/algorithm/","keys":["v-e1eec494","v-534edd30","v-d843ef0a","v-36d6919b","v-b2eb194a","v-5732fb76","v-eded1812","v-679aa9e1"]}}}},"tag":{"/":{"path":"/tag/","map":{"backtrack":{"path":"/tag/backtrack/","keys":["v-534edd30"]},"DP":{"path":"/tag/dp/","keys":["v-d843ef0a"]},"greed":{"path":"/tag/greed/","keys":["v-36d6919b"]},"Hash":{"path":"/tag/hash/","keys":["v-b2eb194a"]},"MultiThread":{"path":"/tag/multithread/","keys":["v-b2eb194a"]},"UnionFind":{"path":"/tag/unionfind/","keys":["v-b2eb194a"]},"DFS":{"path":"/tag/dfs/","keys":["v-5732fb76"]},"BFS":{"path":"/tag/bfs/","keys":["v-5732fb76"]},"two pointer":{"path":"/tag/two-pointer/","keys":["v-eded1812"]},"structure":{"path":"/tag/structure/","keys":["v-679aa9e1"]}}}}}

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
