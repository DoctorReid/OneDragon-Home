---
lang: zh-CN
title: 绝区零 一条龙 快速开始
author: DoctorReid
date: 2024-09-01
---

> [!important]
> 请认真阅读本页面，可以帮助你顺利完成安装，减少浪费时间。

## 1.安装

脚本请存放在 <span style="color:red"><strong>全英文的路径</strong></span> 下

### 1.1.使用安装器（推荐）

如果你不懂得如何搭建python环境，请使用本方法。

如果出现安装依赖失败，且你的电脑上曾经安装过anaconda，则可以卸载后anaconda重试本方法，或者使用 1.2 方法。

1. 从 [最新 Release](https://github.com/DoctorReid/ZenlessZoneZero-OneDragon/releases/latest) 中下载 `ZenlessZoneZero-OneDragon-X.Y.Z.zip` (X.Y.Z 为版本号)
2. 如果你无法访问Github，或者下载速度慢，可以参考 [如何访问Github](../../other/zh/visit_github.md)，或者你可以加入 QQ群 861603314，从群文件中下载。
3. 下载后解压，运行 `OneDragon Installer.exe`
4. 安装器中，点击一键安装即可。 
5. 安装完成后，在安装器上点击`启动一条龙`，或运行 `OneDragon Launcher.exe`

### 1.2.使用安装器 + 已有的 anaconda（推荐）

如果你之前因为其它脚本安装了 anaconda，则可以使用本方法

1. 下载安装器，同 1.1 的前3步。
2. 打开你的 anaconda prompt，并输入以下命令创建环境，中途提示输入 `y` 确认即可
```shell
conda create --name zzz-od python=3.11
```
3. 安装器中点击 `Git-默认安装` `代码版本-代码同步`
4. Python虚拟环境点击 `选择已有`，选择刚刚创建环境的 `pythonw.exe`，目录大概如下
```shell
你的目录\anaconda\envs\zzz-od\pythonw.exe
```
5. 安装器中点击 `运行依赖-默认安装`，等待完成。
6. 安装完成后，安装器上点击`启动一条龙`，或运行 `OneDragon Launcher.exe`

### 1.3.使用源码运行

如果你懂得如何搭建python环境(推荐使用 3.11.9)，请使用本方法

1. 创建你自己的虚拟环境
2. `git clone git@github.com:DoctorReid/ZenlessZoneZero-OneDragon.git`
3. `pip install -r requirements-prod.txt`
4. 运行 （以下二选一）
    - 复制 `env.sample.bat`，重命名为 `env.bat`，并修改内容为你的虚拟环境的 python 路径，使用 `OneDragon Launcher.exe` 运行。
    - 将`src`文件夹加入环境变量`PYTHONPATH`，执行 `python src/zzz_od/gui/app.py` 。

## 2.使用前须知

**第一次运行前请先认真阅读以下内容**

1. 游戏内需要设置成 16:9 的分辨率，即 `1920*1080` 或 `2560*1440` 或 `3840*2160`。使用 `1280*720` 可能有问题，暂不打算特殊支持。
2. 如果游戏使用 `全屏模式`，则需要 `显示器屏幕的分辨率`也是 16:9，否则只能使用 `窗口模式`。
3. 多屏幕的需要将游戏窗口放在 1 号屏。
4. 由于使用的是图像识别，请确保游戏画面完整在屏幕内，且游戏画面没有任何遮挡（帧率显示、windows 未激活水印等均有可能导致脚本出错）。游戏画质越好，脚本出错的几率越低。
5. 同时，请不要开启会改变画面像素值的功能或设置，例如
   - 系统层面 - windows 系统的颜色配置文件、校准显示器颜色、颜色管理、HDR 等。
   - 驱动层面 - 显卡驱动控制面板里的游戏滤镜等。
   - 设备层面 - 显示器的护眼模式、色彩模式、色温调节、HDR 等。
6. 脚本运行过程，请勿使用任何输入法，避免按键被输入法吞了。
7. 游戏内「设置」-「其他」-「字体选项」选择「全局细体」，可以有效避免文本识别不准的问题。
8. 游戏内「设置」-「其他」-「记录棋盘加速设置」选择「开启」，第一次进入空洞后手动选择一次加速。可以让后续刷空洞稍微快一点。
9. 游戏内「设置」-「输入」-「镜头自动跟随转动」选择「关闭」，可以让战斗场景内的按键不改变视角，更方便移动脱困。
10. 游戏内的副本开启沉浸模式，避免刷本时被凌晨过夜卡住。
11. 完成脚本设置，主要是改键部分，见[设置说明](config.md)
12. 使用过程中请多查看 [各功能说明](./docs/feat_one_dragon.md)

## 3.常见问题

可以到这里查看 [常见问题和解决方案](https://www.kdocs.cn/l/cbSJUUNotJ3Z)
