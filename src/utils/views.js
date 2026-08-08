// 页面浏览量统计:本地 localStorage 计数(counterapi.dev v1 已停服,改为无外部依赖方案)
// BASE 为原 counterapi 历史计数(2026-08-08 用户提供的旧次数),作为本地计数初始基数
const KEY = 'hku-idt-guide-views';
const BASE = { home: 2189, courses: 3997, 'course-detail': 0, schedule: 2189, calendar: 442, commute: 327 };
const PAGES = ['home', 'courses', 'course-detail', 'schedule', 'calendar', 'commute'];

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
}

export function reportView(path) {
  const el = document.getElementById('view-badge');
  if (!el) return;
  const page = (path || '/home').replace(/^\//, '');
  if (PAGES.indexOf(page) < 0) { el.textContent = ''; return; }
  const data = load();
  // 首次访问该页时以旧计数为基数,之后在本地累计
  if (typeof data[page] !== 'number') data[page] = BASE[page] || 0;
  data[page] += 1;
  try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) {}
  el.textContent = `本页浏览 ${data[page]} 次`;
}
