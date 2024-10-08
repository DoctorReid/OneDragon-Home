---
lang: zh-CN
title: 朱鸢配队教程-03-连携与快速支援
---

## 0.前置说明

本章节的目的，是让角色打出连携后，按想要的顺序进行连携换人，最后通过快速支援切换到主C输出。

打开编辑你的`朱鸢教程.yml`，进入训练场，敌人选择狂乱暴徒，开启怪物的无敌，关闭移动，开启失衡，然后开始本章节的内容。

## 1.基础逻辑

由于脚本无法识别当前失衡可以触发多少次连携，所以我们策略固定为先切强攻，再切支援，然后取消，最后按快速支援切出主C。

试试以下配置，在训练场运行一段时间看看效果吧。

<details>
<summary>示例</summary>

```yaml
scenes:
  - triggers: [ "按键可用-连携技" ]
    interval: 1
    handlers:
      - states: "[连携技-1-强攻]"
        operations:
          - op_name: "按键-连携技-左"
            post_delay: 1
      - states: "[连携技-2-强攻]"
        operations:
          - op_name: "按键-连携技-右"
            post_delay: 1
      - states: "[连携技-1-支援]"
        operations:
          - op_name: "按键-连携技-左"
            post_delay: 1
      - states: "[连携技-2-支援]"
        operations:
          - op_name: "按键-连携技-右"
            post_delay: 1
      - states: ""
        operations:
          - op_name: "按键-连携技-取消"
            way: "按下"
            press: 0.02
            post_delay: 0.01

  - triggers: [ "按键可用-快速支援" ]
    interval: 1
    handlers:
      - states: "[按键可用-快速支援]"
        operations:
          - op_name: "按键-快速支援"
            post_delay: 1

  - triggers: [ ]
    interval: 0.02
    handlers:
      - states: "[前台-击破]"
        sub_states:
          - states: "[按键可用-终结技]"
            operations:
              - op_name: "按键-终结技"
                post_delay: 5
          - states: "[按键可用-特殊攻击]"
            operations:
              - op_name: "按键-普通攻击"
                post_delay: 0.05
                repeat: 20
              - op_name: "按键-特殊攻击"
                post_delay: 0.05
                repeat: 30
              - op_name: "按键-普通攻击"
                post_delay: 0.05
                repeat: 30
          - states: ""
            operations:
              - op_name: "按键-普通攻击"
                post_delay: 0.05
                repeat: 20
              - op_name: "按键-普通攻击"
                way: "按下"
                press: 1.5
                post_delay: 0.5
      - states: "[后台-2-击破]"
        operations:
          - op_name: "按键-切换角色-上一个"
            post_delay: 0.1
      - states: "[后台-1-击破]"
        operations:
          - op_name: "按键-切换角色-下一个"
            post_delay: 0.1
```

</details>

