import { shikiPlugin } from "@vuepress/plugin-shiki";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
    base: "/",

    lang: "zh-CN",
    title: "Grag's Docs",
    description: "Some description",

    theme,

    plugins: [
        shikiPlugin({
            theme: "dark-plus",// 备选：slack-dark
        }),
        searchProPlugin({
            indexContent: true
        }),
    ]
});
