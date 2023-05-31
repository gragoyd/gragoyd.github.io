import { defineClientConfig } from "@vuepress/client";
import VPCard from "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-md-enhance/lib/client/components/VPCard.js";
import ChartJS from "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-shared@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Mermaid from "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import "/Users/grag/projects/Docs/node_modules/.pnpm/reveal.js@4.5.0/node_modules/reveal.js/dist/reveal.css";
import Presentation from "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import { injectRevealConfig } from "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";
import Tabs from "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "/Users/grag/projects/Docs/node_modules/.pnpm/katex@0.16.7/node_modules/katex/dist/katex.min.css";
import "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("VPCard", VPCard)
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    injectRevealConfig(app);
    app.component("Presentation", Presentation);
    app.component("Tabs", Tabs);
  },
});
