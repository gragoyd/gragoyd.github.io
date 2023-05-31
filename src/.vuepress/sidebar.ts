import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/docs/algorithm/": "structure",
    "/docs/work/": "structure",
    "/docs/essay/": "structure",
    "/": [
        "",
    ],
    "/example": ["/", "", "test", "slide", "sidebar"],
});
