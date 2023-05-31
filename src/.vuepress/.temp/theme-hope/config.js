import { defineClientConfig } from "@vuepress/client";

import { Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { HopeIcon } from "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-theme-hope/lib/bundle/export.js";
import { defineAutoCatalogIconComponent } from "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-plugin-auto-catalog@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-auto-catalog/lib/client/index.js"
import Slide from "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-md-enhance/lib/client/SlidePage.js";

import "/Users/grag/projects/Docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.216_vuepress@2.0.0-beta.62/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineAutoCatalogIconComponent(HopeIcon);

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);


  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,
    Slide,
  }
});