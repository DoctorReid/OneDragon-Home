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
        prefix: "docs",
        children: [
          {
            text: "功能-一条龙",
            link: "feat_one_dragon"
          },
          {
            text: "功能-自动战斗",
            link: "feat_auto_battle"
          },
          {
            text: "功能-自定义指令",
            link: "feat_custom_op"
          },
          {
            text: "功能-战斗助手",
            link: "feat_battle_assistant"
          },
          {
            text: "功能-零号空洞",
            link: "feat_hollow_zero"
          },
          {
            text: "功能-手柄支持",
            link: "feat_gamepad"
          }
        ]
      },
    ],
  },
  {
    text: "其它",
    prefix: "/other/zh",
    children: [
      {
        text: "Github访问指南",
        icon: "globe",
        link: "visit_github"
      }
    ]
  }
]);
