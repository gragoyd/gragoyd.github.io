import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
	// "/",
	// "/home",
	{ text: "毕设", icon: "note", link: "/docs/graduation/" },
	{ text: "工作", icon: "java", link: "/docs/work/" },
	{ text: "算法", icon: "ability", link: "/docs/algorithm/knowledge" },
	{ text: "写作示例", icon: "creative", link: "/example/" },
]);
