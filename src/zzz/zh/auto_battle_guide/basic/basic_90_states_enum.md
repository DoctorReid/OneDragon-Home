---
lang: zh-CN
title: 基础-90-状态枚举
---

以下列举脚本支持使用的状态列表

## 1.基础状态

|状态名称|判断条件|记录时间|互斥状态|
|---|---|---|---|
|`闪避识别-黄光`|游戏画面出现闪避黄光|截图时间||
|`闪避识别-红光`|游戏画面出现闪避红光|截图时间||
|`闪避识别-声音`|游戏画面没有闪光，且出现需要闪避的音频|截图时间||
|`按键-闪避`|脚本执行按键|按键结束时间 post_delay前||
|`按键-切换角色-下一个`|脚本执行按键|按键结束时间 post_delay前||
|`按键-切换角色-上一个`|脚本执行按键|按键结束时间 post_delay前||
|`按键-普通攻击`|脚本执行按键|按键结束时间 post_delay前||
|`按键-特殊攻击`|脚本执行按键|按键结束时间 post_delay前||
|`按键-终结技`|脚本执行按键|按键结束时间 post_delay前||
|`按键-连携技-左`|脚本执行按键|按键结束时间 post_delay前||
|`按键-连携技-右`|脚本执行按键|按键结束时间 post_delay前||
|`按键-连携技-取消`|脚本执行按键|按键结束时间 post_delay前||
|`按键-移动-前`|脚本执行按键|按键结束时间 post_delay前|
|`按键-移动-后`|脚本执行按键|按键结束时间 post_delay前|
|`按键-移动-左`|脚本执行按键|按键结束时间 post_delay前|
|`按键-移动-右`|脚本执行按键|按键结束时间 post_delay前|
|`按键-锁定敌人`|脚本执行按键|按键结束时间 post_delay前|
|`按键-快速支援`|脚本执行按键|按键结束时间 post_delay前|
|`前台-**(角色类型)`|前台角色类型=强攻 (举例)|截图时间|`前台-**(其他的角色类型)`|
|`后台-1-**(角色类型)`|后台第一个角色类型=强攻 (举例)|截图时间|`后台-1-**(其他的角色类型)`|
|`后台-2-**(角色类型)`|后台第二个角色类型=强攻 (举例)|截图时间|`后台-2-**(其他的角色类型)`|
|`连携技-1-**(角色类型)`|连携技左边角色类型=强攻 (举例)|截图时间|`连携技-1-**(其他的角色类型)`|
|`连携技-2-**(角色类型)`|连携技右边角色类型=强攻 (举例)|截图时间|`连携技-2-**(其他的角色类型)`|
|`快速支援-**(角色类型)`|快速支援角色类型=强攻 (举例)|截图时间|`快速支援-**(其他的角色类型)`|
|`切换角色-**(角色类型)`|按键切换、连携、快速支援后均可触发|按键时间|`切换角色-**(其他的角色类型)`|
|`前台-**(角色名称)`|前台角色=安比 (举例)|截图时间|`前台-**(其他的角色名称)`<br/>`后台-**(相同的角色名称)`<br/>`后台-1-**(相同的角色名称)`<br/>`后台-2-**(相同的角色名称)`|
|`后台-1-**(角色名称)`|后台第一个角色=安比 (举例)|截图时间|`后台-1-**(其他的角色名称)`<br/>`后台-2-**(相同的角色名称)`<br/>`前台-**(相同的角色名称)`|
|`后台-2-**(角色名称)`|后台第二个角色=安比 (举例)|截图时间|`后台-2-**(其他的角色名称)`<br/>`后台-1-**(相同的角色名称)`<br/>`前台-**(相同的角色名称)`|
|`后台-**(角色名称)`|后台有角色=安比 (举例)|截图时间|`前台-**(相同的角色名称)`|
|`连携技-1-**(角色名称 包含邦布)`|连携技左边角色=安比 (举例)|截图时间|`连携技-1-**(其他的角色名称)`|
|`连携技-2-**(角色名称 包含邦布)`|连携技右边角色=安比 (举例)|截图时间|`连携技-2-**(其他的角色名称)`|
|`快速支援-**(角色名称)`|快速支援角色=安比 (举例)|截图时间|`快速支援-**(其他的角色名称)`|
|`切换角色-**(角色名称)`|按键切换、连携、快速支援后均可触发|按键时间|`切换角色-**(其他的角色名称)`|
|`按键可用-特殊攻击`|特殊攻击键不是灰色的|截图时间||
|`按键可用-终结技`|特殊攻击键不是灰色的|截图时间||
|`按键可用-连携技`|出现连携技头像|截图时间||
|`按键可用-快速支援`|出现快速支援头像|截图时间||
|`前台-能量`|左上角能量条 注意能量最大值为120|截图时间||
|`后台-1-能量`|同上|截图时间||
|`后台-2-能量`|同上|截图时间||
|`**(角色名称)-能量`|同上|截图时间||
|`前台-血量扣减`|左上角血条出现扣减|截图时间||
|`自定义-*`|自定义的状态|指令`设置状态`的参数时间||


## 2.角色独有状态

除了基础状态外，脚本会根据当前配队角色，识别角色对应的状态。

|状态名称|记录时间|互斥状态|使用示例|
|---|---|---|---|
|`艾莲-急冻充能`|截图时间| | `[艾莲-急冻充能]{3, 6}` |
|`苍角-涡流`|截图时间| | `[苍角-涡流]{3, 3}` |
|`朱鸢-子弹数`|截图时间| | `![朱鸢-子弹数]{7, 10}` <br> 当前子弹数小于7 可以用特殊攻击不溢出 |
|`青衣-电压`|截图时间| | `[青衣-电压]{75, 100}` <br> 当前可以打重击 |
|`赛斯-意气`|截图时间| | `[赛斯-意气]{75, 100}` <br> 当前可以打重击 |
|`简-萨霍夫跳`|截图时间| | `[简-萨霍夫跳]` <br> 当前可以用萨霍夫跳 <br/> 目前只有检测是否有红点，并没有判断红点数量，因此不需要大括号判断数值|
|`简-狂热心流`|截图时间| | `[简-狂热心流]{1, 50}` <br> 当前可以用萨霍夫跳补充狂热心流了|
|`莱特-士气`|截图时间| | `[莱特-士气]{80, 100}` <br> 当前打拳下场了<br/> [示例](../character_special/lighter.md) |