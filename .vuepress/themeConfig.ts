import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
	hostname: "https://gragoyd.github.io",
	repo: "gragoyd",
	author: {
		name: "Grag",
		url: "https://github.com/gragoyd",
	},
	logo: "/myLogo.svg",

	iconPrefix: "iconfont icon-",
	darkmode: "switch",
	docsDir: "/docs",

	navbar: navbar,
	sidebar: sidebar,
	headerDepth: 3,	// 侧边栏嵌套的标题深度

	footer: "❤️ 🐻",
	displayFooter: true,
	copyright: "MIT Licensed | Copyright © 2022-present <a href=\"https://github.com/gragoyd\">Grag</a>",
	pageInfo: ["Author", "Date", "Category", "Tag", "Word", "ReadingTime"],
	editLink: false,

	pure: true,	// 禁用博客花里胡哨的样式

	blog: {
		description: "间歇性努力的东东",
		intro: "/intro.html",
		timeline: "以下",
		articlePerPage: 20,
	},

	plugins: {
		blog: {
			autoExcerpt: false,
		},

		mdEnhance: {
			enableAll: false,
			gfm: true,
			container: true,
			codegroup: true,
			align: true,
			footnote: true,
			tasklist: true,
			tex: true,
			mermaid: true,
			presentation: {
				plugins: ["highlight", "math", "search", "notes", "zoom"],
			},
			delay: 300,
			sup: true,	// 文字上角标
			sub: true,	// 文字下角标
		},

		copyright: {
			author: "Grag",
			license: "MIT",
			hostname: "https://github.com/gragoyd",
			triggerWords: 50,
			global: true,
		}
	},
});
