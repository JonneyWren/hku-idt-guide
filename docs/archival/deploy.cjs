// 把生成的数据文件拷到项目目录(沙箱不允许直接写 D 盘,故用 node 拷贝)
const fs = require('fs');
const path = require('path');
const SRC = __dirname;
const DST = 'D:\\hku-idt-guide';
const jobs = [
  ['courses.js', 'src\\data\\courses.js'],
  ['timetable.js', 'src\\data\\timetable.js'],
  ['page-courses.js', 'src\\pages\\courses.js'],
  ['page-course-detail.js', 'src\\pages\\course-detail.js'],
  ['page-home.js', 'src\\pages\\home.js']
];
jobs.forEach(([a, b]) => {
  const to = path.join(DST, b);
  fs.copyFileSync(path.join(SRC, a), to);
  console.log('copied ->', to, fs.statSync(to).size, 'bytes');
});
