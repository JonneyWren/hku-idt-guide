const fs = require('fs');
const path = require('path');
const pagesDir = 'D:\\hku-idt-guide\\src\\pages';
const disclaimer = `    <div style="background:#fafbfc;border-top:1px solid #e8eaee;padding:12px 16px;margin-top:16px;font-size:10px;color:#8a8f99;line-height:1.7;text-align:center">
      📋 所有信息均来自 2026.8.4 的 HKU 官方数据。本站仅作为公益开放工具。使用时如有出入请登录官方系统并以官方最新公布信息为准。
    </div>`;
const pageFiles = ['home.js','courses.js','course-detail.js','schedule.js','calendar.js','commute.js'];
pageFiles.forEach(file=>{const p=path.join(pagesDir,file);if(!fs.existsSync(p)){console.log('skip:',file);return}let s=fs.readFileSync(p,'utf8');if(s.includes('所有信息均来自')){console.log('already:',file);return}const disc=`\n  const disc=document.createElement('div');\n  disc.innerHTML='${disclaimer.replace(/'/g,"\\\\'").replace(/\n/g,'\\\\n')}';\n  container.appendChild(disc);`;s=s.replace(/renderTabbar\(\);/,`renderTabbar();${disc}`);fs.writeFileSync(p,s,'utf8');console.log('ok:',file)});
