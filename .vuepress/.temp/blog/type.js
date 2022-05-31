export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-e1eec494","v-b2eb194a","v-5732fb76","v-eded1812","v-679aa9e1","v-1376ccd8","v-5f474719","v-731a4953","v-24453a11","v-5430db1a"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slides/","keys":[]}},"star":{"/":{"path":"/star/","keys":["v-e1eec494"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-e1eec494"]}}}

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
