import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/docs/algorithm/": "structure",
    "/docs/graduation/": "structure",
    "/docs/work/": "structure",
    "/docs/essay/": "structure",
    "/": [
        "",
    ],
    "/example": ["/", "", "container", "slide", "sidebar"],
});
