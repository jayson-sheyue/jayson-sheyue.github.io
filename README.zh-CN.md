# 个人数字器物与工具工坊 (`personal-site`)

[English](./README.md) | [日本語](./README.ja.md) | [中文](./README.zh-CN.md)

基于零构建原生 ES Modules 打造的 **模块化个人产品矩阵与工具母体框架**。告别生硬的代码仓库文件树，用多层次的 Bento Grid（便当盒网格）统一承载桌面软件、Web 小工具、CLI 脚本与实验作品——让普通用户一键直下各系统安装包（`.dmg` / `.zip` / `.exe`）或在线试玩，让开发者无缝跳转 GitHub 深究源码。

## 核心特性

- **自适应便当盒网格（Adaptive Bento Grid）**：支持 `featured`（双列旗舰大卡）、`standard`（单列标准卡）、`compact`（紧凑横条卡）三种跨度自由混排，后续无论加入什么类型的小工具都绝不违和。
- **双轨分流转化栏（Dual-Track CTA）**：
  - **普通用户直达通道**：自动识别访客操作系统（macOS / Windows），主按钮直接高亮对应系统的安装包直链，并提供全平台下拉菜单、Web 在线打开或一键复制终端命令。
  - **极客深究通道**：右侧保留清晰的 GitHub 仓库与 Releases 入口。
- **三层沉浸式详情抽屉**：点击任意卡片的「多维详情与配置」，即可在抽屉中切换查看「实机预览与亮点」、「1 分钟上手指引」与「各平台安装包 & 源码」。
- **内置「+ 模块沙盒预览」生成器**：可直接在网页表单中填入新工具名称、形态、跨度与下载链接，实时注入当前页面网格预览效果，并一键复制生成的 JS 配置代码粘贴进 `catalog/modules.js`。
- **英 / 日 / 中三语切换（首次访问默认英文）与深浅双主题（纸感浅色 / 暗夜模式）**：用户的语言与主题偏好自动持久化保存在本地。

## 本地启动与预览

在 `personal-site` 目录下启动任意静态服务器即可运行（无需 `npm install` 或打包）：

```bash
cd /Users/apple/Desktop/brandbuilding/personal-site
python3 -m http.server 4173
```

然后在浏览器访问 `http://localhost:4173`。

## 如何接入新工具模块

打开 [catalog/modules.js](file:///Users/apple/Desktop/brandbuilding/personal-site/catalog/modules.js)，在 `INITIAL_MODULES` 数组中新增一个声明对象（或者直接在网页右上角点击 **「+ 模块沙盒预览」** 可视化生成代码并复制粘贴）。
