const fs = require('fs');
const p = 'D:\\hku-idt-guide\\src\\data\\calendar.js';
let s = fs.readFileSync(p, 'utf8');
s = s.replace("{ date: '2026-08-06', endDate: '2026-08-14', title: '硕士课程选课时间(Course Selection)', type: 'adddrop', tentative: false }", "{ date: '2026-08-05', endDate: '2026-08-15', title: '硕士课程选课时间(Course Selection)', type: 'adddrop', tentative: false }");
fs.writeFileSync(p, s, 'utf8');
console.log('updated course selection date to 2026-08-05 ~ 2026-08-15');
