---
lang: zh-CN
title: 功能-游戏助手
---

主要用于集成一些游戏中的小功能

## 1.委托助手

过剧情或活动时使用，自动过对话及战斗。暂时不支持手柄模式。

### 1.1.相关配置

- 对话选项优先级 - 通常第一个选项包含移动到下一个区域，最后一项则是保守停留在当前。
- 对话点击间隔 - 就是间隔多少秒点击一次。以下场景不会进行点击
  - 进入了自动闪避/自动战斗模式
  - 在大世界画面
  - 左上角有返回按钮，大多数可操作非对话的页面都有
- 剧情自动进行时点击 - 部分剧情可开启自动播放，此时可选择是否继续点击，不点击可以听剧情语音。
- 自动闪避&开关 - 按键后进入自动闪避模式，再次按键后退出。退出后才可以进入自动战斗模式。
- 自动战斗&开关 - 按键后进入自动战斗模式，再次按键后退出。退出后才可以进入自动闪避模式。

### 1.2.当前可能问题

遇到没有自动点击的情况时，大部分情况可以通过键盘完成操作，或者使用F9暂停后手工操作。

- 部分场景无法自动点击，例如短信画面
- 未处理空洞走格子的画面

## 2.拿命验收

- 副本请固定使用 1P 妮可 + 2P 比利 + 无3P
- 游戏内「设置」-「输入」-「镜头自动跟随转动」选择「关闭」；模拟按键以此为基础编写。
- 不知道为什么有些会反馈走不到，如果需要调整模拟按键的方式，可以复制 `config/key_sim/真拿命验收.sample.yml`，复制后改名为 `真拿命验收.yml`，然后参考 [自定义指令](./feat_custom_op.md) 修改按键顺序或按键间隔。
- 通常只需修改 18行，向右移动的秒数，默认=3；21行 向前移动的秒数，默认值=3。