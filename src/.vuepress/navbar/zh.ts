import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "绝区零",
    icon: "z",
    prefix: "/zzz/zh",
    children: [
      {
        text: "简介",
        icon: "home",
        link: "home"
      },
      {
        text: "快速安装",
        icon: "rocket",
        link: "quickstart"
      },
      {
        text: "功能说明",
        icon: "lightbulb",
        link: "docs"
      },
    ],
  }
]);
