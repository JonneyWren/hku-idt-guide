import './style.css';
import { register, start } from './router.js';
import homePage from './pages/home.js';
import calendarPage from './pages/calendar.js';
import commutePage from './pages/commute.js';
import coursesPage from './pages/courses.js';
import courseDetailPage from './pages/course-detail.js';
import schedulePage from './pages/schedule.js';

// Register all routes
register('/home', homePage);
register('/calendar', calendarPage);
register('/commute', commutePage);
register('/courses', coursesPage);
register('/course-detail', courseDetailPage);
register('/schedule', schedulePage);

// Start router
start();

// 须知 Notice 气泡:点击导航栏按钮显示/隐藏
function initNotice() {
  const btn = document.getElementById('notice-btn');
  const pop = document.getElementById('notice-pop');
  if (!btn || !pop) return;
  btn.addEventListener('click', () => {
    const show = pop.hidden;
    pop.hidden = !show;
    btn.classList.toggle('active', show);
  });
  document.getElementById('notice-close').addEventListener('click', () => {
    pop.hidden = true;
    btn.classList.remove('active');
  });
  document.addEventListener('click', (e) => {
    if (pop.hidden) return;
    if (!pop.contains(e.target) && !btn.contains(e.target)) {
      pop.hidden = true;
      btn.classList.remove('active');
    }
  });
}
initNotice();
