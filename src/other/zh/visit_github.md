---
lang: zh-CN
title: Github访问指南
author: DoctorReid
date: 2024-09-02
---

如果在访问Github时遇到问题，不妨看看本页面。

## 1.切换hosts访问Github

参考 [Github520项目](https://github.com/521xueweihan/GitHub520)

本方法大概率能让你访问Github，但不能加速Github的下载，加速下载见下面的章节。

### 1.1.下载SwitchHosts工具

该工具可以让你方便切换hosts，来源 [SwitchHosts项目](https://github.com/oldj/SwitchHosts)

[自带代理的下载链接](https://mirror.ghproxy.com/https://github.com/oldj/SwitchHosts/releases/download/v4.2.0/SwitchHosts_windows_portable_x64_4.2.0.6119.exe)

### 1.2.切换hosts

1. 打开 SwitchHosts工具
2. 点击加号新建
3. Hosts类型 - 远程(remote)
4. Hosts标题 - 随意
5. URL - https://raw.hellogithub.com/hosts
6. 自动刷新 - 最好选 1 小时，这样每次 hosts 有更新都能及时进行更新，免去手动更新
7. 点击确定新建后，观察开关确保hosts已启用
8. 访问Github


## 2.使用代理访问Github

如果你想使用代理，在这里推荐作者自用2年多的代理 `wgetcloud`，最低档价格也足够稳定快速。

使用[本链接](https://invite.wgetcloud.ltd/auth/register?code=IOld)注册购买，作者可获得少量返利

__注意，这里仅做推荐，一切使用问题请找官方客服。购买代理都是有风险的，因为不知道啥时候就被团灭了__


## 3.如何加速Github下载

如果你没代理的情况下能访问Github，但下载内容速度较慢，可以尝试以下方法：

1. 访问 https://mirror.ghproxy.com/
2. 在输入框粘贴 Github文件的下载链接
3. 点击下载

由于本方法使用的是别人提供的免费代理，觉得好用可以给该网站打赏。

