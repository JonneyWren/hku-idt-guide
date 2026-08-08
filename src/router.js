// Hash-based SPA Router
import { reportView } from './utils/views.js';

const routes = {};
let currentCleanup = null;

export function register(path, handler) {
  routes[path] = handler;
}

export function navigate(path) {
  window.location.hash = '#' + path;
}

export function getQuery() {
  const hash = window.location.hash.slice(1);
  const qIdx = hash.indexOf('?');
  if (qIdx < 0) return {};
  const params = {};
  new URLSearchParams(hash.slice(qIdx + 1)).forEach((v, k) => { params[k] = v; });
  return params;
}

export function currentPath() {
  const hash = window.location.hash.slice(1) || '/home';
  const qIdx = hash.indexOf('?');
  return qIdx < 0 ? hash : hash.slice(0, qIdx);
}

export function start() {
  const render = () => {
    const path = currentPath();
    const handler = routes[path];
    document.title = 'HKU IDT 学习指南'; // 复位标题(课程详情页会随后自行覆盖)
    const navTitle = document.querySelector('.nav-title');
    if (navTitle) navTitle.textContent = 'HKU IDT 学习指南';
    if (currentCleanup) { currentCleanup(); currentCleanup = null; }
    if (handler) {
      currentCleanup = handler() || null;
    }
    reportView(path);
  };
  window.addEventListener('hashchange', render);
  render();
}
