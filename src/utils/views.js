// 页面浏览量统计:基于 counterapi.dev 免费计数服务(无需注册/密钥)
const NS = 'hku-idt-guide';
const PAGES = ['home', 'courses', 'course-detail', 'schedule', 'calendar', 'commute'];

export function reportView(path) {
  const el = document.getElementById('view-badge');
  if (!el) return;
  const page = (path || '/home').replace(/^\//, '');
  if (PAGES.indexOf(page) < 0) { el.textContent = ''; return; }
  el.textContent = '';
  fetch(`https://api.counterapi.dev/v1/${NS}/${page}/up`)
    .then(r => r.json())
    .then(d => { if (d && typeof d.count === 'number') el.textContent = `本页浏览 ${d.count} 次`; })
    .catch(() => { el.textContent = ''; });
}
