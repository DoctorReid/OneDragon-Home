---
lang: zh-CN
title: 基础-02-场景
---

## 1.简介

整个`自动战斗配置`中，会有一个 `scenes` 属性，`场景数组`。

`场景`属性，是用来罗列战斗中可能出现的场景，包括出现闪光，出现连携，普通连招等。

一个`场景`对象，里面可以包含以下属性

- triggers `触发条件数组` - 在什么情况下，需要触发这个场景。
- interval `触发间隔秒数` - 该场景连续触发的最小时间间隔。 
- handlers `处理方法数组` - 在这个场景下，需要有哪些处理方法，也就是对应的操作。

## 2.触发条件数组

戳 [这里](basic_03_triggers.md) 了解

## 3.处理方法数组

戳 [这里](basic_04_handlers) 了解
