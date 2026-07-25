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
