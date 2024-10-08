---
lang: zh-CN
title: 绝区零战斗冷知识
---


## 1. 切换角色

在切换角色的时候，如果你比较连续地下一个和上一个各按一次，最后会切换到3P角色（上一个角色），而不是切换回原来的1P角色。

这是因为当你按切换下一个的时候，会切换到2P。

如果这时候在1P还没有退场的情况下按了切换上一个，由于1P还在场，无法切换到1P，游戏会继续找上一个，也就是3P。

## 2.招架支援

相信有不少玩家遇到过，游戏中出现黄光时，你想要切换角色格挡，结果却切出来了丽娜或者妮可这种远程角色。

这是因为在游戏设定中，近战角色的招架支援，只能在敌人使用近战攻击时触发。

当你的队伍中拥有远程角色，即拥有极限支援能力时，敌人远程攻击会触发黄光；这时候就算按格挡换近战，也只能切换到远程角色。

而当你的队伍中只有近战角色，即只拥有招架支援能力时，敌人远程攻击会触发红光，无法触发招架支援。

## 3.失衡判断

绝区零的失衡判断比较奇怪，在怪物失衡条满的时候，必须是动作最后一下才会触发。例如普攻连招最后一下，特殊攻击的结束等。

更奇怪的一点时，如果在最后一个动作时，你的按键没有松开，那么也不会触发失衡连携。

由于这个原因，自动战斗配置编写时，需要注意按键提前松开，避免一直触发不到失衡连携。

## 4.攻击反馈

绝区零战斗时，如果角色的攻击命中了敌人，会有一些攻击反馈。

这会导致一种情况，同一套连招，在有命中敌人和没有命中的情况下，耗时不一样。

这相当于，在自动战斗的时候，如果我们的按键指令是按完全命中来编写的，那如果前几击没有命中，后续可能就乱了。