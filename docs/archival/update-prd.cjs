// 更新 PRD.md:删除 xlsx 引用、更新数据源说明
const fs = require('fs');
const p = 'D:\\hku-idt-guide\\docs\\PRD.md';
let s = fs.readFileSync(p, 'utf8');

// 1) F1-4 替换
s = s.replace(
  /\| F1-4 \| 26 级课程变更提示[\s\S]*?\n/,
  '| F1-4 | 课程数据说明（2026-27 Sem1） | 橙色提示卡：数据来源为官方选课清单 & 课表 PDF（第一学期共 109 门分五类）；第二学期课程与排课待官方文件公布 |\n'
);

// 2) F3 标题与全部内容替换
s = s.replace(
  /### F3 官方课表下载卡片[\s\S]*?(?=### F4)/,
  `### F3 官方文件下载卡片（课程页顶部）

**功能描述**：在课程页顶部（搜索框上方）提供 2026-27 官方选课清单 & 课表 PDF 的下载入口，中英双语。

| 编号 | 功能点 | 需求说明 |
| --- | --- | --- |
| F3-1 | 卡片文案 | 标题「官方文件 / Official Documents (2026-27 Semester 1)」；英文说明原文：Instructor information provided herein (mainly for UG courses) are for reference only and subject to changes. Students should consult the offering department(s) concerned for the latest update.；中文对照：本站课程与排课数据全部取自以下两份官方文件。文件所载教师信息仅供参考，可能随时调整；请以开课院系发布的最新信息为准。 |
| F3-2 | 两个下载按钮 | 第一个绿色按钮：\`⭳ Course Enrolment List (2026-27 Sem 1)\` / \`下载第一学期选课课程清单（共 109 门）\`；第二个蓝色按钮：\`⭳ MSc(Eng) Class Timetable (2026-27 Sem 1)\` / \`下载第一学期课程时间表（共 27 页）\` |
| F3-3 | 下载行为 | \`<a download>\` 分别下载 \`MSc-Eng-Course-List-2026-27-Sem1.pdf\` & \`MSc-Eng-Timetable-2026-27-Sem1.pdf\`；下载不触发路由跳转 |
| F3-4 | 文件更新 | 官方文件更新时需同步替换 public 下 PDF 并重新构建部署 |

**验收标准**：线上点击按钮浏览器直接下载 PDF；两份文件均可正常在 PDF 阅读器打开。

### F4`
);

// 3) 5.1 表格：课程库与排课数据源替换
s = s.replace(
  /\| 课程库 COURSES \| 官方课程大纲 \+ \`Filtered_TPG_Courses_Timetable\.xlsx\` \| 人工核对后更新[\s\S]*?\n\| 排课 TIMETABLE \| `2026-27 class_timetable_20260727\.xlsx`[\s\S]*?\n/,
  `| 课程库 COURSES | HKU 官方《MSc(Eng) & MSc, Faculty of Engineering 选课课程清单 2026-27 Sem1》PDF | 坐标级解析后编程生成 \`src/data/courses.js\` |
| 排课 TIMETABLE | HKU 官方《2026-Sem1-Engg.pdf 全院第一学期课程时间表》（27 页） | 坐标级解析后编程生成 \`src/data/timetable.js\`；跨页冲突以开课院系页为准 |
`
);

// 4) COURSES 字段表替换
s = s.replace(
  /\*\*COURSES\*\*[\s\S]*?\| desc \/ prereq \/ exclusive \| string \| 简介[\s\S]*?\n\n\*\*TIMETABLE\*\*/,
  `**COURSES**(\`src/data/courses.js\`）：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| code | string | 课程代码（主键），如 COMP7506 |
| title / titleZh | string | 英文名 / 中文名 |
| list | 'A' \\| 'B' \\| 'XC' \\| 'XD' \\| 'capstone' | 课程分类（XC/XD 为跨课程/跨系选修） |
| credits | number | 学分 |
| semester | '1' \\| '2' \\| '1&2' \\| 'full' | 开课学期（full = 全年毕业论文） |
| zhOfficial | boolean | 中文名是否为官方译名（false 时页面标注「非官方译名」） |
| cef | boolean | 是否 CEF 可报销 |
| note | string | 补充说明（如密集课程、班次说明、官方脚注） |
| desc / prereq / exclusive | string | 简介 / 先修要求 / 互斥课程 |

**TIMETABLE**`
);

// 5) 关键文件索引表替换
s = s.replace(
  /\| \`public\/class_timetable_2026-27_20260727\.xlsx\` \| 官方课表下载文件 \|/,
  `| \`public/MSc-Eng-Course-List-2026-27-Sem1.pdf\` | 官方选课清单下载文件 |
| \`public/MSc-Eng-Timetable-2026-27-Sem1.pdf\` | 官方课表下载文件 |`
);

fs.writeFileSync(p, s, 'utf8');
console.log('✓ updated', p);
