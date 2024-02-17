import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar"
import sidebar from "./sidebar"

export default hopeTheme({
    repo: "gragoyd/gragoyd.github.io",
    repoDisplay: true,
    hostname: "https://gragoyd.github.io",
    docsDir: "/docs",
    docsBranch: "main",
    logo: "/logo.svg",
    author: {
        name: "Grag",
        url: "https://github.com/gragoyd",
        email: "gragoyd@icloud.com"
    },

    iconAssets: "iconfont",
    sidebar: sidebar,
    navbar: navbar,
    navbarLayout: {
        start: ["Brand"],
        center: ["Links"],
        end: ["Repo", "Outlook", "Search"],
    },
    navTitle: "东东的文档",
    editLink: true,
    darkmode: "switch",
    headerDepth: 3,	// 侧边栏嵌套的标题深度
    pure: true,// 是否禁用博客花里胡哨的样式
    hotReload: true,

    displayFooter: true,
    footer: "🥴",
    copyright: "MIT Licensed | Copyright © 2022-present <a href=\"https://github.com/gragoyd\">Grag</a>",
    pageInfo: ["Author", "Date", "Category", "Tag", "Word", "ReadingTime"],

    plugins: {
        copyCode: {
            showInMobile: true,
            duration: 1000
        },
        components: {
            components: [
                "PDF",
                "BiliBili",
            ]
        },
        mdEnhance: {
            chart: true,
            gfm: true,
            container: true,
            codetabs: true,// 仅能含代码块的 tab
            tabs: true,// 可含文字和代码块的 tab
            align: true,
            mark: true,
            footnote: true, // 脚注
            tasklist: true,
            katex: true,    // mathjax 可支持更复杂的公式
            mermaid: true,
            presentation: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
            sub: true,
            sup: true,
            card: true,

            figure: true,
            imgSize: true,
            // imgMark: true,   // 图片标记，在特定的亮/暗模式中分别显示图片
            imgLazyload: true,
            include: true,  // 导入文件
        },
    },
});
