---
lang: zh-CN
title: 功能-模拟宇宙
---

支持第三 ~ 九宇宙；不支持 `寰宇蝗灾`， `黄金与机械`； `差分宇宙` 开发中。

## 1.设置

### 1.1.配队

使用前，游戏中各个宇宙应该先设置有默认使用的组队。

### 1.2.运行配置

入口见「模拟宇宙」-「设置」，可以设置以下内容：

- 自动挑战的宇宙和难度，如当前有进行中的宇宙，会先继续完成当前的再继续选定的。
- 运行次数，目前模拟宇宙奖励最多为每周100只精英怪，平均下来可以每天完成15次。你也可以按需调整。
- 每个宇宙的挑战配置，不同宇宙可以使用不同的命途进行挑战。

### 1.3.挑战配置

入口见「模拟宇宙」-「挑战配置」，可以设置以下内容：

- 名称 - 用于在选择列表中的显示
- 命途 - 使用该配置时，在模拟宇宙开始时选择的命途
- 祝福第一优先级 - 在选择祝福时，会优先选择这些祝福。如果选择的是整个命途，代表可以选择这个命途下的任意祝福，优先取高等级的祝福。
- 祝福第二优先级 - 在选择祝福时，第一优先级无法匹配，且无法再重置时，使用该优先级进行匹配。在这里你可以设置选择其他命途祝福的优先级。
- 楼层优先级 - 优先进入哪种楼层，想快速通关可以优先选择事件、交易类型。
- 奇物优先级 - 选择奇物时候的优先级。
- 跳过黑塔 - 在休整楼层跳过黑塔交互，加速刷的过程。
- 秘技开怪 - 1号位使用秘技开始战斗，注意事项如下：
    - BUFF类可以无脑开启，非常推荐有`阮梅`的使用。
    - 攻击类慎重开启。例如`佩拉`的秘技能索敌，可以开启；`银狼`的秘技有几率打空，自行选择开启。
    - 秘技点不足时，会使用物品（目前为 __随机使用__ ）进行恢复（需要技能树点出`使用消耗品`。推荐日常委托接`合成材料-风暴中怒放的花`，用于合成`奇巧零食`）。
    - 只使用奇巧零食 - 如果你有想保留的消耗品，可以开启。
    - 仅秘技开怪，需先勾选`秘技开怪`，不进行普攻，只使用秘技，目前仅推荐 `黄泉` 使用。
- 单次最多消耗品个数 - 使用消耗品时，单次最多使用的数量，按需调整平衡使用数量和弹框次数。


### 1.4.沉浸奖励

所有需要体力的行为（除了历战回响），都是需要加入到体力规划中的。

即如果需要领取沉浸奖励，需要在「一条龙」-「体力计划」中将对应的宇宙加入体力规划中，脚本优先使用 __沉浸装置__ 兑换奖励。使用配队和支援选项在模拟宇宙中是无效的。

注意，加入体力规划后，拿奖励的刷模拟宇宙需要在「一条龙」-「__开拓力__」中进行，这是和每周刷100个精英怪是分开的。拿奖励的刷本也会计入每周100次统计中。

如果运行时，有进行中的模拟宇宙，且不是要拿奖励的宇宙，会先把进行中的宇宙完成（不拿奖励），再运行拿奖励的宇宙。

### 1.5.位面饰品提取

与沉浸奖励相同，需要在「一条龙」-「体力计划」中设置。

另外，你需要先自行刷取「差分宇宙」的存档。

## 2.基本运行原理

- 进入模拟宇宙后，会先判断楼层类型
- 根据楼层类型和初始的小地图截图，匹配对应的路线配置，然后按路线配置进行移动。
    - 区域-战斗 - 基本同锄大地
    - 区域-事件、交易、遭遇、休整 - 移动到交互点旁边，然后进行具体的交互
    - 区域-精英、首领 - 移动到精英、首领旁边，施放秘技进入战斗。战斗后按需领取沉浸奖励。
- 每层移动结束后，角色应该在下一层入口的附近。转到角色朝向找到下一层入口，再转向入口往前走进行交互。

## 3.每周积分奖励获取

脚本会在一次完整的模拟宇宙应用完成后，自动领取每周的积分奖励(最高为14000分那个)。

怎么算一次完整的模拟宇宙应用完成？例如：

- 每天自动运行完成后。
- 每周自动运行完成后。
- 开拓力领取沉浸奖励后。

## 4.路线绘制

目前仅 第3~8宇宙 的复杂路线需要绘制，简单路线和第九宇宙有自动寻路功能。

入口见「模拟宇宙」-「路线绘制」。

### 4.1.绘制步骤

该功能未迁移到新版脚本

1. 选择宇宙和对应的楼层类型，点击新建。
2. 切回到游戏画面，暂离重进，保证画面的小地图是最初始的状态，按键F8进行截图。
3. 切回到脚本，点击「开始点匹配」，等待。
4. 在匹配结果中，通过点击「上一个」、「下一个」，选出正确的开始点后，点击「选定开始点」。
5. 对于战斗楼层，按锄大地方式，点击大地图标明移动坐标，在有怪的地方点击「攻击怪物」。
6. 对于事件、交易、遭遇、休整楼层，可以不选坐标，先点击保存。进行测试时脚本自动判断`交互点`位置写入到路线配置中。如果测试结果不理想，可自行修改交互点位置。
7. 对于精英、首领楼层，可以不选坐标，先点击保存。进行测试时脚本自动判断`怪物点`位置并写入到路线配置中。如果测试结果不理想，可自行修改怪物点位置。
8. 路线编辑完成后，点击「保存」，然后点击「测试」运行。测试会判断当前小地图是否在起始点，不在的话会暂离重进。
9. 观察角色移动是否符合预期，对路线配置进行调整，可以直接修改右侧配置文本的坐标。
10. 在游戏中人物静止至小地图不再放大后，可以使用F8截图，截图后在脚本中点击「计算坐标」，可以自动添加一个移动指令。
11. 上述测试完成后，脚本不会自动判断下一层入口的位置，需要手动将角色移动到下一层入口，使用上一步的操作获得坐标，然后点击「下层入口」添加。下层入口最多两个，删除需要手动编辑右方文本。
12. 同理，可以对精英、首领楼层加入「沉浸奖励」坐标。
13. 添加下一层入口后，再次点击「测试」，如果能顺利进入下一层，代表路线配置没问题。
14. 禁疾跑：会使最后一段移动标记成不能疾跑，用于容易识别不到坐标或者走向交互点的情景。
15. 机械移动：会使最后一段移动变成模拟按键的移动，根据两点的坐标计算需要按键的时间。用于容易识别不到坐标的情景。
