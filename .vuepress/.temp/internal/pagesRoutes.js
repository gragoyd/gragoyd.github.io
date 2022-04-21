import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"博客主页","icon":"home","type":"page","readingTime":{"minutes":0.17,"words":50},"excerpt":""},["/index.html","/README.md"]],
  ["v-79fdd481","/home.html",{"title":"项目主页","icon":"home","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/home","/home.md"]],
  ["v-184f4da6","/intro.html",{"title":"Hi","icon":"info","type":"page","readingTime":{"minutes":0.37,"words":110},"excerpt":""},["/intro","/intro.md"]],
  ["v-4a2605fe","/example/",{"title":"写作参考","icon":"creative","type":"page","readingTime":{"minutes":0.05,"words":16},"excerpt":""},["/example/index.html","/example/README.md"]],
  ["v-30b54e76","/example/container.html",{"title":"自定义容器","icon":"customize","type":"page","readingTime":{"minutes":1.73,"words":518},"excerpt":"<p>主题可以为你添加提示、注释、信息、注意、警告和详情自定义容器的支持。</p>\n","category":["Markdown"]},["/example/container","/example/container.md"]],
  ["v-7d42e7fb","/example/sidebar.html",{"title":"边栏目录样例","icon":"typescript","type":"page","readingTime":{"minutes":1.86,"words":558},"excerpt":"","category":["Markdown"]},["/example/sidebar","/example/sidebar.md"]],
  ["v-7971eb74","/example/slide.html",{"title":"幻灯片页","icon":"slides","type":"page","readingTime":{"minutes":4.43,"words":1330},"excerpt":""},["/example/slide","/example/slide.md"]],
  ["v-a09a45e0","/docs/algorithm/hash.html",{"title":"哈希","icon":"relation","type":"article","readingTime":{"minutes":2.4,"words":721},"excerpt":"","category":["algorithm"],"tag":["hash"]},["/docs/algorithm/hash","/docs/algorithm/hash.md"]],
  ["v-e1eec494","/docs/algorithm/knowledge.html",{"title":"算法讲解","icon":"guide","type":"article","readingTime":{"minutes":2.94,"words":881},"excerpt":"","date":"2022-04-11T00:00:00.000Z","category":["algorithm"],"tag":["DFS"],"star":true},["/docs/algorithm/knowledge","/docs/algorithm/knowledge.md"]],
  ["v-5732fb76","/docs/algorithm/search.html",{"title":"搜索","icon":"search","type":"article","readingTime":{"minutes":1.52,"words":455},"excerpt":"","category":["algorithm"],"tag":["DFS","BFS"]},["/docs/algorithm/search","/docs/algorithm/search.md"]],
  ["v-eded1812","/docs/algorithm/simulation.html",{"title":"模拟","icon":"emmet","type":"article","readingTime":{"minutes":2.49,"words":747},"excerpt":"","category":["algorithm"],"tag":["two pointer"]},["/docs/algorithm/simulation","/docs/algorithm/simulation.md"]],
  ["v-679aa9e1","/docs/algorithm/structure.html",{"title":"数据结构","icon":"float","type":"article","readingTime":{"minutes":15.58,"words":4675},"excerpt":"","category":["algorithm"],"tag":["structure"]},["/docs/algorithm/structure","/docs/algorithm/structure.md"]],
  ["v-662f0bba","/docs/work/",{"title":"说明","type":"page","readingTime":{"minutes":0.05,"words":16},"excerpt":""},["/docs/work/index.html","/docs/work/README.md"]],
  ["v-1376ccd8","/docs/work/knowlegde.html",{"title":"Java 知识点","type":"article","readingTime":{"minutes":0.2,"words":61},"excerpt":""},["/docs/work/knowlegde","/docs/work/knowlegde.md"]],
  ["v-748af9a6","/docs/graduation/",{"title":"说明","type":"page","readingTime":{"minutes":0.05,"words":16},"excerpt":""},["/docs/graduation/index.html","/docs/graduation/README.md"]],
  ["v-731a4953","/docs/graduation/docker.html",{"title":"Docker","type":"article","readingTime":{"minutes":0.86,"words":259},"excerpt":""},["/docs/graduation/docker","/docs/graduation/docker.md"]],
  ["v-24453a11","/docs/graduation/ros&gazebo.html",{"title":"ROS&Gazebo","type":"article","readingTime":{"minutes":1.05,"words":316},"excerpt":""},["/docs/graduation/ros&gazebo","/docs/graduation/ros&gazebo.md"]],
  ["v-3706649a","/404.html",{"title":"","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/404"]],
  ["v-5bc93818","/category/",{"title":"分类","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/index.html"]],
  ["v-744d024e","/tag/",{"title":"标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/index.html"]],
  ["v-e52c881c","/article/",{"title":"文章","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/article/index.html"]],
  ["v-75ed4ea4","/encrypted/",{"title":"加密","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/encrypted/index.html"]],
  ["v-2897d318","/slides/",{"title":"幻灯片","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/slides/index.html"]],
  ["v-154dc4c4","/star/",{"title":"收藏","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/star/index.html"]],
  ["v-01560935","/timeline/",{"title":"时间轴","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/timeline/index.html"]],
  ["v-dc8c5890","/category/algorithm/",{"title":"algorithm 分类","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/algorithm/index.html"]],
  ["v-28859f53","/tag/hash/",{"title":"hash 标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/hash/index.html"]],
  ["v-b313a528","/tag/dfs/",{"title":"DFS 标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/dfs/index.html"]],
  ["v-b31576a4","/tag/bfs/",{"title":"BFS 标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/bfs/index.html"]],
  ["v-3587c57e","/tag/two-pointer/",{"title":"two pointer 标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/two-pointer/index.html"]],
  ["v-6a2979ea","/tag/structure/",{"title":"structure 标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/structure/index.html"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
