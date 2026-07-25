const { TYPE_META } = require('../../data/calendar');
const { upcomingEvents, getSemesterWeek, todayStr, daysUntil } = require('../../utils/date');
const { DEGREE_RULES } = require('../../data/courses');

Page({
  data: {
    todayText: '',
    weekInfo: null,
    nextEvent: null,
    events: [],
    rules: DEGREE_RULES,
    entries: [
      { url: '/pages/calendar/calendar', name: '校历', sub: '2026-27 学期节点', cls: 'e1' },
      { url: '/pages/commute/commute', name: '港深通勤', sub: '6 条路线攻略', cls: 'e2' },
      { url: '/pages/courses/courses', name: '选课评价', sub: 'List A/B 课程库', cls: 'e3' },
      { url: '/pages/schedule/schedule', name: '每周课表', sub: '同步手机日历', cls: 'e4' }
    ]
  },

  onShow() {
    const t = todayStr();
    const d = new Date();
    const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
    const todayText = `${t} 星期${weekDays[d.getDay()]}`;
    const weekInfo = getSemesterWeek(t);
    const ups = upcomingEvents(3).map((ev) => ({
      title: ev.title + (ev.tentative ? '(暂定)' : ''),
      typeLabel: TYPE_META[ev.type].label,
      color: TYPE_META[ev.type].color,
      days: daysUntil(ev.date),
      dateText: ev.endDate ? `${ev.date} 至 ${ev.endDate}` : ev.date
    }));
    this.setData({
      todayText,
      weekInfo,
      events: ups,
      nextEvent: ups.length ? ups[0] : null
    });
  },

  goTab(e) {
    wx.switchTab({ url: e.currentTarget.dataset.url });
  },

  goCourses() {
    wx.switchTab({ url: '/pages/courses/courses' });
  }
});
