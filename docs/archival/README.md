# 2026-27 课程与排课数据重建 - 技术档案

本目录保存了 HKU MSc(Eng) IDT 专业课程库与排课数据从官方 PDF 重建的全部工作文件、脚本与中间产物。

## 📋 档案清单

### 数据生成脚本
- **gen.cjs** (404行) - 核心数据生成器
  - 输入：curriculum.json（109门课）、merged-slots.json（143条排课）
  - 输出：courses.js、timetable.js、gen.log.txt
  - 包含：中文名映射、数据源冲突裁定、班次标注规则

- **update-prd.cjs** - PRD 文档同步脚本（删除旧 xlsx 引用）
- **patch-src.cjs** - 源代码补丁（添加 .tag-xc/.tag-xd 样式、修复 secText）
- **disc.js** - 为全部页面添加免责声明

### 文件部署脚本
- **deploy.cjs** - 拷贝生成的数据文件到 D 盘项目
- **deploy-gh.js** / **fix-calendar-*.cjs** - GitHub Pages 部署与日期修正

### 中间数据
- **curriculum.json** - 109门课程的完整课程库（选课清单解析结果）
- **merged-slots.json** - 143条第一学期排课（课表 PDF 坐标级解析 + 去重合并 + 冲突裁定）
- **courses.js** - 最终课程库数据文件（116门：109+7保留）
- **timetable.js** - 最终排课数据文件（143条，仅Sem1）
- **gen.log.txt** - 生成日志与统计摘要

### 文档与报告
- **merge.md** - 141条权威排课记录（IDT页逐字核对）
- **report.md** - PDF 解析验证报告

### 前端产物
- **page-courses.js** - 改造的课程列表页
- **page-course-detail.js** - 改造的课程详情页
- **page-home.js** - 改造的首页

## 🔍 核心数据溯源

### 官方数据源
1. **MSc(Eng) & MSc, Faculty of Engineering 选课课程清单 2026-27 Sem1** (PDF)
   - 109门课程的完整清单（代码、英文名、分类、班次、学分、学期）

2. **2026-Sem1-Engg.pdf** - 第一学期课程时间表 (27页)
   - 全院各专业按星期排布的课表
   - 坐标锚点：MON x≈101, TUE 219, WED 336, THU 458, FRI 579, SAT 696
   - 已验证 141 条排课与选课清单对齐率 100%

### 数据处理流程
```
官方 PDF
  ↓
[pdfjs坐标级解析]
  ↓
curriculum.json (课程库) + merged-slots.json (排课)
  ↓
[gen.cjs 程序化整合]
  ↓
courses.js (116门) + timetable.js (143条)
  ↓
[部署到 src/data/]
  ↓
npm run build → GitHub Pages
```

## 📊 最终数据统计

- **课程总数**：116 门
  - 官方Sem1清单：109 门
  - 保留的Sem2课程：7 门
- **分类分布**：
  - List A（核心课）：10 门
  - List B（选修课）：20 门
  - 跨课程选修(XC)：15 门
  - 跨系选修(XD)：69 门
  - 毕业论文(Capstone)：2 门
- **排课覆盖**：
  - 有排课课程：108 门
  - 无排课课程：1 门（IDAT7100 论文）
  - 排课条目：143 条（Sem1 only）

## 🔧 关键决策

### 冲突裁定
- **跨页时间不一致**：以开课院系页为准
  - ELEC7029：取 EEE 页 19:30-22:00
  - EMEE6005/6007：取 Energy 页版本
- **DASE7154**：采纳 p20 官方排课，注明页码与官方脚注原文

### 班次标注
- 课表有字母的课程：使用该字母
- 无字母的单时段课程：用清单首项班次
- 无字母的多时段课程：空字符串 + 加自动附注

### 中文名处理
- 85 门由本站翻译（标记 zhOfficial=false，详情页显示「非官方译名」）
- 87 门无官方中文简介（渲染占位文案）

## ✅ 验收标准（已通过）

- [x] 课程库总数与分类计数正确
- [x] 五门抽查课详情页与PDF逐字对照
- [x] 排课空态与Sem2筛选符合预期
- [x] 两份PDF可下载(HTTP 200)
- [x] 控制台无报错
- [x] 免责声明已显示
- [x] 线上选课时间已更正：2026-08-05 ~ 2026-08-15

---

**档案生成时间**：2026-08-05  
**数据源日期**：2026-08-04（官方PDF发布日期）  
**项目地址**：https://github.com/JonneyWren/hku-idt-guide  
**线上地址**：https://jonneywren.github.io/hku-idt-guide/
