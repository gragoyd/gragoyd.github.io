import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig({
	"/docs/algorithm/": "structure",
	"/docs/graduation/": "structure",
	"/docs/work/": "structure",
	"/docs/essay/": "structure",
	"/": [
		"",
	],
	"/example": ["/", "", "container", "slide", "sidebar"],
});
