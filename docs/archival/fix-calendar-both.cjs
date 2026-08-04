const fs = require('fs');
const files = [
  'D:\\hku-idt-guide\\src\\data\\calendar.js',
  'D:\\hku-idt-guide\\miniprogram\\data\\calendar.js'
];
files.forEach(p => {
  if (!fs.existsSync(p)) return;
  let s = fs.readFileSync(p, 'utf8');
  s = s.replace("{ date: '2026-08-06', endDate: '2026-08-14', title: '硕士课程选课时间(Course Selection)', type: 'adddrop', tentative: false }", "{ date: '2026-08-05', endDate: '2026-08-15', title: '硕士课程选课时间(Course Selection)', type: 'adddrop', tentative: false }");
  fs.writeFileSync(p, s, 'utf8');
  console.log('checked', p);
});
