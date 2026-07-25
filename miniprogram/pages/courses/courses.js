const { COURSES, DEGREE_RULES, semesterText } = require('../../data/courses');
const store = require('../../utils/store');

Page({
  data: {
    keyword: '',
    listFilter: 'all',
    semFilter: 'all',
    listTabs: [
      { key: 'all', label: '全部' },
      { key: 'A', label: 'List A 核心' },
      { key: 'B', label: 'List B 选修' },
      { key: 'capstone', label: '毕业设计' }
    ],
    semTabs: [
      { key: 'all', label: '全部学期' },
      { key: '1', label: '第一学期' },
      { key: '2', label: '第二学期' }
    ],
    courses: [],
    selection: [],
    credit: { listA: 0, discipline: 0, total: 0, count: 0 },
    rules: DEGREE_RULES
  },

  onShow() {
    this.refreshSelection();
  },

  refreshSelection() {
    const selection = store.getSelection();
    let listA = 0;
    let discipline = 0;
    let total = 0;
    selection.forEach((code) => {
      const c = COURSES.find((x) => x.code === code);
      if (!c || c.list === 'capstone') return;
      total += c.credits;
      if (c.list === 'A') listA += c.credits;
      if (c.list === 'A' || c.list === 'B') discipline += c.credits;
    });
    this.setData({
      selection,
      credit: { listA, discipline, total, count: selection.length }
    });
    this.buildList();
  },

  buildList() {
    const { keyword, listFilter, semFilter, selection } = this.data;
    const kw = keyword.trim().toLowerCase();
    const ratings = store.getAllReviews();
    const courses = COURSES.filter((c) => {
      if (listFilter !== 'all' && c.list !== listFilter) return false;
      if (semFilter !== 'all' && c.semester !== '1&2' && c.semester !== semFilter) return false;
      if (kw) {
        const hay = (c.code + c.title + c.titleZh).toLowerCase();
        if (hay.indexOf(kw) < 0) return false;
      }
      return true;
    }).map((c) => {
      const rs = ratings[c.code] || [];
      const avg = rs.length
        ? Math.round((rs.reduce((s, r) => s + (r.rating || 0), 0) / rs.length) * 10) / 10
        : 0;
      return Object.assign({}, c, {
        semText: semesterText(c.semester),
        ratingAvg: avg,
        ratingCount: rs.length,
        selected: selection.indexOf(c.code) >= 0
      });
    });
    this.setData({ courses });
  },

  onSearch(e) {
    this.setData({ keyword: e.detail.value });
    this.buildList();
  },

  onListTab(e) {
    this.setData({ listFilter: e.currentTarget.dataset.key });
    this.buildList();
  },

  onSemTab(e) {
    this.setData({ semFilter: e.currentTarget.dataset.key });
    this.buildList();
  },

  toggleSelect(e) {
    const code = e.currentTarget.dataset.code;
    const added = store.toggleCourse(code);
    wx.showToast({ title: added ? '已加入选课' : '已移出选课', icon: 'none' });
    this.refreshSelection();
  },

  goDetail(e) {
    const code = e.currentTarget.dataset.code;
    wx.navigateTo({ url: `/pages/course-detail/course-detail?code=${code}` });
  },

  goSchedule() {
    wx.switchTab({ url: '/pages/schedule/schedule' });
  }
});
