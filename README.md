# 南音项目

本文件夹是当前南音原型的独立本地项目版本。

## 打开方式

直接打开 `index.html` 即可预览。

## 当前包含

- 首页歌手资料卡
- 歌手 / 歌曲 tab
- 搜索歌手、歌曲、原唱
- 歌曲排序：默认、A-Z、字数、原唱、喜欢数
- Gnight 和大招歌手页
- Gnight 完整歌单与原唱数据
- 本地喜欢数
- 本地欠歌账簿
- 本地修改在档时段
- 记账成功动画
- EdgeOne Blob SDK 与共享状态 API 初稿：`/api/state`

## 注意

- 当前前端 like、欠歌账簿、在档时段修改仍存在浏览器本地；已新增 EdgeOne Blob API 骨架，下一步可把这些数据迁移为多人共享数据。
- 用 EdgeOne 发布共享数据版本时，需要上传整个项目根目录，并包含 `edge-functions/`、`package.json`、`package-lock.json`。
- 部署后可先访问 `/api/state` 测试 Blob 是否能正常读取共享 JSON。
- 当前页面依赖 CDN 加载 Tailwind/daisyUI、Google Font 和 canvas-confetti。
- 如果之后发布到国内平台，建议把字体和依赖改成本地文件或国内可访问 CDN。
