import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "一条龙小助手",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
