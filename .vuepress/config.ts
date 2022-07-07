// import { hopeTheme } from "vuepress-theme-hope";
import { defineUserConfig } from "vuepress"
import theme from "./theme";

export default defineUserConfig({
    lang: "zh-CN",
    title: "Grag's Blog",
    description: "小小的文档项目",

    base: "/",

    head: [
        [
            "link",
            {
                rel: "stylesheet",
                href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
            },
        ],
    ],

    theme,
});
