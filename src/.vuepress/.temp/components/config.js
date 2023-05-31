import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-shared@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useStyleTag } from "/Users/grag/projects/Docs/node_modules/.pnpm/@vueuse+core@10.1.2_vue@3.3.4/node_modules/@vueuse/core/index.mjs";
import FontIcon from "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import PDF from "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import BiliBili from "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import BackToTop from "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    
  },
  setup: () => {
      useStyleTag(`\
  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
