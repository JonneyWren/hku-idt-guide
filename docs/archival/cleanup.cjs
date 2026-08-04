// p7 清理:删除 PDF 解析阶段的临时脚本、中间文本与临时 npm 依赖
// 保留:gen.cjs / curriculum.json / merged-slots.json / gen.log.txt / merge.md / report.md
//       deploy.cjs / patch-src.cjs / page-*.js / courses.js / timetable.js(数据来源与可复现链)
const fs = require('fs');
const path = require('path');

const files = [
  'check.cjs', 'checkdist.cjs', 'coord.cjs', 'diff.cjs', 'dump.cjs', 'extract.cjs',
  'find.cjs', 'gap.cjs', 'merge.cjs', 'pages.cjs', 'pdfparse.cjs', 'pubfiles.cjs',
  'report.cjs', 'rmxlsx.cjs', 'scan.cjs', 'show.cjs',
  'coord.txt', 'curri.txt', 'curri_table.txt', 'dump.txt', 'dump19.txt', 'dump20.txt',
  'sem1.txt', 'sem1_table.txt',
  'slots.json', 'final-slots.json', 'pageinfo.json'
];

let n = 0;
files.forEach(f => {
  const p = path.join(__dirname, f);
  if (fs.existsSync(p)) { fs.unlinkSync(p); n++; console.log('rm', f); }
});

const nm = path.join(__dirname, 'node_modules');
if (fs.existsSync(nm)) { fs.rmSync(nm, { recursive: true, force: true }); console.log('rm node_modules/ (pdf-parse, pdfjs-dist)'); }

console.log('\n已删除文件数:', n);
console.log('剩余:', fs.readdirSync(__dirname).join(' | '));
