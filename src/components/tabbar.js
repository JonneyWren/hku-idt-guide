// Tabbar component
import { currentPath, navigate } from '../router.js';

const TABS = [
  { path: '/home', label: '首页', icon: '🏠' },
  { path: '/calendar', label: '校历', icon: '📅' },
  { path: '/commute', label: '通勤', icon: '🚄' },
  { path: '/courses', label: '课程', icon: '📚' },
  { path: '/schedule', label: '课表', icon: '🗓' }
];

export function renderTabbar() {
  const active = currentPath();
  const el = document.getElementById('tabbar');
  el.innerHTML = TABS.map(t => `
    <a class="tab-item ${active === t.path ? 'active' : ''}" data-path="${t.path}">
      <span class="tab-icon">${t.icon}</span>
      <span>${t.label}</span>
    </a>
  `).join('');
  el.onclick = (e) => {
    const item = e.target.closest('.tab-item');
    if (item) navigate(item.dataset.path);
  };
}
