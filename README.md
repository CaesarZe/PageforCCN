# HELab-style 实验室网站模板（适配 GitHub Pages）

## 结构
- `index.html` 首页（含 hero + 新闻）
- `people.html` 成员页（PI/博士后/学生/校友）
- `research.html` 研究方向
- `funding.html` 资助项目（在研/已完成）
- `publications/YYYY.html` 论文（按年）
- `downloads.html` 下载资源
- `contact.html` 联系
- `assets/css/style.css` 样式
- `assets/js/main.js` 交互（移动端菜单）

## 部署到 GitHub Pages
1. 新建公开仓库（例如 `your-lab/website`），将本项目所有文件上传到仓库根目录。
2. 仓库 Settings → Pages → Source 选择 `main` 分支 + 根目录（/），保存。
3. 稍等 1–2 分钟，访问 `https://<用户名>.github.io/<仓库名>/`。

## 修改建议
- 全文搜索“某某”替换为你的单位与实验室名。
- 在 `navbar` 的下拉列表里添加或删除年份页面（复制 `publications/2025.html` 改年份即可）。
- 在 `style.css` 里可调整配色（主色 `#0a2f56` / `#0b3e6b` / 强调色 `#1e6aa0`）。
