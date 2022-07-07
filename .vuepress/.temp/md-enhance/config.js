import { defineClientConfig } from "@vuepress/client";
import CodeTabs from "/Users/grag/projects/gitsite/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.84/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs";
import Mermaid from "/Users/grag/projects/gitsite/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.84/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid";
import Presentation from "/Users/grag/projects/gitsite/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.84/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "/Users/grag/projects/gitsite/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.84/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "/Users/grag/projects/gitsite/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.84/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "/Users/grag/projects/gitsite/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.84/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "/Users/grag/projects/gitsite/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.84/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tex.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    
  }
});