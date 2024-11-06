---
lang: zh-CN
title: 功能-一条龙
---

一条龙主要是为了整合所有脚本功能，按一定顺序进行执行。

## 1.基础设置

- 任务编排 - 在任务列表中选择需要运行的内容和对应的运行顺序。
- 运行实例 - 多账号时可选择`全部实例`，代表运行所有账号。
- 定时启动 - 可以使用 [Windows任务计划程序](../../../other/zh/windows_plan.md) 选择 `one_dragon.bat` 或者 `OneDragon Scheduler.exe`。建议打开自动更新开关，忘记这个游戏。
- 运行后操作 - 支持`关闭游戏`和`关机`

## 2.各功能说明

### 2.1.开拓力

每次运行都会检测体力剩余用于刷本，可以在「体力计划」中更改你的规划。

所有需要使用开拓力的场景（除了历战回响），都需要在这里配置体力分配。

相关设置说明

- 循环执行开启后，会执行至没有体力；关闭时，会执行至本轮计划完成或没有体力。
- 使用配队，建议选择具体队伍，为0时，使用当前配队。
- 模拟宇宙，注意，如果想要刷模拟宇宙的套装，也需要在这里配置，优先使用 __沉浸装置__ 兑换奖励。设置中的【使用配队】不会生效，使用模拟宇宙中的默认配队。
- 位面饰品提取，优先使用 __沉浸装置__ 兑换奖励。需要先自行刷取【差分宇宙】的存档，以及先在【位面饰品提取】画面选择过一次角色配队。设置中的【使用存档】可以选择使用的存档。为0时，使用上一次的存档。

### 2.2.历战回响

每周三次，可以在「历战回响」中更改你要挑战的顺序以及使用配队。使用方式同「开拓力」

注意，由于「历战回响」不在体力规划内，在「一条龙」中，需要将「历战回响」安排在「开拓力」前，否则将无法留体力给「历战回响」。

### 2.3.其他功能

- 锄大地
- 模拟宇宙
- 委托：每天一次
- 每日实训：每天一次
- 邮件： 每天一次，会根据菜单红点自动收取邮件奖励，但不会删除邮件。
- 无名勋礼：每天一次，会根据菜单红点自动收取奖励，需要选择的奖励（行迹光锥材料、大月卡光锥等）不会领取。
- 支援角色：每天一次，会根据菜单红点自动收取奖励。
- 过期邮包：每周一次，到 仙舟罗浮 - 流云渡 - 积玉坊 - 茂贞 处购买过期邮包开奖，但不会自动打开。
- 奇巧零食：每天一次，到仙舟罗浮上购买材料，并合成奇巧零食。每天花费52000信用点，得到100个奇巧零食。

## 3.多账号

【设置】-【实例设置】中添加更多的账号，添加后，点击【启用】，然后到各个页面中进行新账号的配置。

配置完成后，方可使用。如果不希望该实例在一条龙中运行，可以在此选择，或者在一条龙页面中选择 `仅运行当前`。