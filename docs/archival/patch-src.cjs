// 对 D 盘项目做两处精确补丁(SearchReplace 无法写 D 盘)
const fs = require('fs');
const ROOT = 'D:\\hku-idt-guide\\src\\';

function patch(rel, pairs) {
  const p = ROOT + rel;
  let s = fs.readFileSync(p, 'utf8');
  pairs.forEach(([from, to]) => {
    if (s.indexOf(to) >= 0) { console.log('[skip already patched]', rel); return; }
    // 源文件可能是 CRLF,锚点按行拆分后用宽松换行匹配
    const re = new RegExp(from.split('\n').map(l => l.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('\\r?\\n'));
    if (!re.test(s)) { throw new Error('anchor not found in ' + rel + ': ' + from.slice(0, 40)); }
    s = s.replace(re, to.replace(/\$/g, '$$$$'));
  });
  fs.writeFileSync(p, s, 'utf8');
  console.log('patched', p);
}

// 1) 新增 XC / XD 两个 List 的标签配色
patch('style.css', [[
  '.tag-new { background: #7a5195; }',
  '.tag-new { background: #7a5195; }\n.tag-xc { background: #6b5b95; }\n.tag-xd { background: #8a6d3b; }'
]]);

// 2) 班次可能为空(官方课表未标注字母),避免出现多余分隔符;并显示指定日期
patch('utils/enroll.js', [[
  'function secText(s) {\n  return `Sem ${s.term} · ${s.section} · ${dayText(s.day)} ${s.start}-${s.end}${s.venue ? \' · \' + s.venue : \'\'}${s.instructor ? \' · \' + s.instructor : \'\'}`;\n}',
  'function secText(s) {\n  const sec = s.section ? ` · 班次 ${s.section}` : \'\';\n  const dn = s.dateNote ? ` · 指定日期 ${s.dateNote}` : \'\';\n  return `Sem ${s.term}${sec} · ${dayText(s.day)} ${s.start}-${s.end}${s.venue ? \' · \' + s.venue : \'\'}${s.instructor ? \' · \' + s.instructor : \'\'}${dn}`;\n}'
]]);
