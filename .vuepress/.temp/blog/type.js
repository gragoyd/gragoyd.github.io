export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-e1eec494","v-534edd30","v-d843ef0a","v-36d6919b","v-b2eb194a","v-5732fb76","v-eded1812","v-679aa9e1","v-5f474719","v-731a4953","v-24453a11","v-5430db1a","v-1376ccd8"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":["v-e1eec494"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-e1eec494"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
