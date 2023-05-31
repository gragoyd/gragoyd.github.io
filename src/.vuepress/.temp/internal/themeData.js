export const themeData = JSON.parse("{\"encrypt\":{},\"repo\":\"gragoyd/gragoyd.github.io\",\"repoDisplay\":true,\"docsDir\":\"/docs\",\"docsBranch\":\"main\",\"logo\":\"/logo.svg\",\"author\":{\"name\":\"Grag\",\"url\":\"https://github.com/gragoyd\",\"email\":\"gragoyd@icloud.com\"},\"navbarLayout\":{\"start\":[\"Brand\"],\"center\":[\"Links\"],\"end\":[\"Repo\",\"Outlook\",\"Search\"]},\"navTitle\":\"东东的文档\",\"editLink\":true,\"darkmode\":\"switch\",\"headerDepth\":3,\"pure\":true,\"displayFooter\":true,\"footer\":\"🐻\",\"copyright\":\"MIT Licensed | Copyright © 2022-present <a href=\\\"https://github.com/gragoyd\\\">Grag</a>\",\"pageInfo\":[\"Author\",\"Date\",\"Category\",\"Tag\",\"Word\",\"ReadingTime\"],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"编辑此页\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"sidebar\":{\"/docs/algorithm/\":\"structure\",\"/docs/work/\":\"structure\",\"/docs/essay/\":\"structure\",\"/\":[\"\"],\"/example\":[\"/\",\"\",\"test\",\"slide\",\"sidebar\"]},\"navbar\":[{\"text\":\"工作\",\"icon\":\"java\",\"link\":\"/docs/work/\"},{\"text\":\"算法\",\"icon\":\"ability\",\"link\":\"/docs/algorithm/knowledge\"},{\"text\":\"随笔\",\"icon\":\"article\",\"link\":\"/docs/essay/\"},{\"text\":\"写作示例\",\"icon\":\"creative\",\"link\":\"/example/\"}]}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
