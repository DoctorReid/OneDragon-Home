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
        prefix: "docs",
        children: [
          {
            text: "功能-一条龙",
            link: "feat_one_dragon"
          },
          {
            text: "功能-零号空洞",
            link: "feat_hollow_zero"
          },
          {
            text: "功能-战斗助手",
            link: "feat_battle_assistant"
          },
          {
            text: "功能-自定义指令",
            link: "feat_custom_op"
          },
          {
            text: "功能-游戏助手",
            link: "feat_game_assistant"
          },
          {
            text: "功能-手柄支持",
            link: "feat_gamepad"
          },
          {
            text: "设置说明",
            link: "config"
          }
        ]
      },
      {
        text: "自动战斗教程",
        prefix: "auto_battle_guide",
        children: [
          {
            text: "基础",
            link: "basic/basic_00_yaml",
          },
          {
            text: "朱鸢示例",
            link: "zhu_yuan/zhu_yuan_01",
          }
        ]
      }
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
      },
      {
        text: "默认管理员启动",
        icon: "user-tie",
        link: "run_as_admin_by_default"
      },
      {
        text: "Windows任务计划程序",
        icon: "clock",
        link: "windows_plan"
      }
    ]
  },
  {
    text: "点赞",
    icon: "heart",
    link: "/other/zh/like",
  }
]);
