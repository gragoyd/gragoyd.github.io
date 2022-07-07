import { h } from "vue";
import { defineClientConfig } from "@vuepress/client";
import Badge from "/Users/grag/projects/gitsite/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.84/node_modules/vuepress-plugin-components/lib/client/components/Badge";
import FontIcon from "/Users/grag/projects/gitsite/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.84/node_modules/vuepress-plugin-components/lib/client/components/FontIcon";
import BackToTop from "/Users/grag/projects/gitsite/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.84/node_modules/vuepress-plugin-components/lib/client/components/BackToTop";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Badge", Badge);
    app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});