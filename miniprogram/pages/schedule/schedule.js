const { getCourse } = require('../../data/courses');
const { SEMESTERS } = require('../../data/calendar');
const store = require('../../utils/store');
const { minToTime, timeToMin, WEEKDAYS_ZH, getSemesterWeek, todayStr } = require('../../utils/date');

const DAY_START = 8 * 60; // 08:00
const DAY_END = 22 * 60; // 22:00,1 分钟 = 1rpx,网格总高 840rpx
const COLORS = ['#00573f', '#31597f', '#6b5b95', '#8a6d3b', '#7a5195', '#9c4f4f', '#2e6f5c', '#3d6e9e'];

Page({
  data: {
    hours: [],
    days: WEEKDAYS_ZH,
    blocks: [],
    gridHeight: DAY_END - DAY_START,
    weekInfo: null,
    showModal: false,
    selectionCourses: [],
    selectionNames: [],
    dayOptions: WEEKDAYS_ZH,
    form: { courseIndex: 0, dayIndex: 0, startTime: '18:30', endTime: '21:30', location: '' }
  },

  onLoad() {
    const hours = [];
    for (let h = DAY_START / 60; h < DAY_END / 60; h += 1) hours.push(h);
    this.setData({ hours });
  },

  onShow() {
    this.buildSelection();
    this.renderBlocks();
    this.setData({ weekInfo: getSemesterWeek(todayStr()) });
  },

  buildSelection() {
    const sel = store.getSelection();
    const courses = sel
      .map((code) => getCourse(code))
      .filter(Boolean)
      .map((c) => ({ code: c.code, titleZh: c.titleZh }));
    this.setData({
      selectionCourses: courses,
      selectionNames: courses.map((c) => `${c.code} ${c.titleZh}`)
    });
  },

  renderBlocks() {
    const slots = store.getSlots();
    const colorMap = {};
    let ci = 0;
    const blocks = slots.map((s) => {
      const c = getCourse(s.code);
      if (!(s.code in colorMap)) {
        colorMap[s.code] = COLORS[ci % COLORS.length];
        ci += 1;
      }
      return {
        id: s.id,
        code: s.code,
        name: c ? c.titleZh : '',
        location: s.location,
        leftPct: Math.round(((s.day - 1) * 100) / 7 * 1000) / 1000, // 列位置百分比
        top: s.startMin - DAY_START, // 1 分钟 = 1rpx
        height: Math.max(s.endMin - s.startMin, 40),
        color: colorMap[s.code],
        timeText: `${minToTime(s.startMin)}-${minToTime(s.endMin)}`
      };
    });
    this.setData({ blocks });
  },

  noop() {},

  openModal() {
    if (!this.data.selectionCourses.length) {
      wx.showToast({ title: '请先在「课程」页加入选课', icon: 'none' });
      return;
    }
    this.setData({ showModal: true });
  },

  closeModal() {
    this.setData({ showModal: false });
  },

  onCourseChange(e) {
    this.setData({ 'form.courseIndex': Number(e.detail.value) });
  },

  onDayChange(e) {
    this.setData({ 'form.dayIndex': Number(e.detail.value) });
  },

  onStartChange(e) {
    this.setData({ 'form.startTime': e.detail.value });
  },

  onEndChange(e) {
    this.setData({ 'form.endTime': e.detail.value });
  },

  onLocation(e) {
    this.setData({ 'form.location': e.detail.value });
  },

  saveSlot() {
    const { form, selectionCourses } = this.data;
    const startMin = timeToMin(form.startTime);
    const endMin = timeToMin(form.endTime);
    if (endMin <= startMin) {
      wx.showToast({ title: '结束时间需晚于开始时间', icon: 'none' });
      return;
    }
    if (startMin < DAY_START || endMin > DAY_END) {
      wx.showToast({ title: '时段需在 08:00-22:00 之间', icon: 'none' });
      return;
    }
    const day = form.dayIndex + 1; // 周一=1
    const clash = store.getSlots().some(
      (s) => s.day === day && !(s.endMin <= startMin || s.startMin >= endMin)
    );
    if (clash) {
      wx.showToast({ title: '该时段与已有课程冲突', icon: 'none' });
      return;
    }
    const course = selectionCourses[form.courseIndex];
    store.addSlot({ code: course.code, day, startMin, endMin, location: (form.location || '').trim() });
    this.setData({ showModal: false, form: Object.assign({}, form, { location: '' }) });
    this.renderBlocks();
    wx.showToast({ title: '已添加', icon: 'success' });
  },

  onBlockTap(e) {
    const id = e.currentTarget.dataset.id;
    wx.showModal({
      title: '删除该上课时段?',
      content: '删除后不影响「我的选课」',
      success: (res) => {
        if (res.confirm) {
          store.removeSlot(id);
          this.renderBlocks();
        }
      }
    });
  },

  // 同步到手机系统日历(按周循环至学期结束)
  syncCalendar() {
    const slots = store.getSlots();
    if (!slots.length) {
      wx.showToast({ title: '课表为空', icon: 'none' });
      return;
    }
    const t = todayStr();
    const sem =
      SEMESTERS.find((s) => t >= s.start && t <= s.end) ||
      SEMESTERS.find((s) => s.start > t) ||
      SEMESTERS[SEMESTERS.length - 1];
    const semStartParts = sem.start.split('-').map(Number);
    const semStart = new Date(semStartParts[0], semStartParts[1] - 1, semStartParts[2]);
    const semEndParts = sem.end.split('-').map(Number);
    const repeatEnd = new Date(semEndParts[0], semEndParts[1] - 1, semEndParts[2], 23, 59).getTime() / 1000;

    wx.showLoading({ title: '同步中...', mask: true });
    let ok = 0;
    let failed = 0;
    const tasks = slots.map((s) => () =>
      new Promise((resolve) => {
        // 该星期几在本学期内的第一个日期(JS getDay: 周日=0;我们的 day: 周一=1..周日=7)
        const target = s.day % 7;
        const d = new Date(semStart);
        while (d.getDay() !== target) d.setDate(d.getDate() + 1);
        const startTs = new Date(
          d.getFullYear(), d.getMonth(), d.getDate(),
          Math.floor(s.startMin / 60), s.startMin % 60
        ).getTime() / 1000;
        const endTs = new Date(
          d.getFullYear(), d.getMonth(), d.getDate(),
          Math.floor(s.endMin / 60), s.endMin % 60
        ).getTime() / 1000;
        const c = getCourse(s.code);
        wx.addPhoneRepeatCalendar({
          title: `${s.code} ${c ? c.titleZh : '课程'}`,
          startTime: startTs,
          endTime: endTs,
          allDay: false,
          alarm: true,
          repeat: 'weekly',
          repeatInterval: 1,
          repeatEndTime: repeatEnd,
          location: s.location || '香港大学',
          description: `${sem.name} · 由 HKU IDT 指南小程序同步`,
          success: () => { ok += 1; resolve(); },
          fail: () => { failed += 1; resolve(); }
        });
      })
    );
    tasks
      .reduce((p, task) => p.then(task), Promise.resolve())
      .then(() => {
        wx.hideLoading();
        if (failed === 0) {
          wx.showToast({ title: `已同步 ${ok} 个时段`, icon: 'success' });
        } else {
          wx.showModal({
            title: '部分时段未写入',
            content: `成功 ${ok} 个,失败 ${failed} 个。请检查系统日历权限(设置-隐私-日历)后重试,或复制课表文本手动添加。`,
            confirmText: '复制文本',
            cancelText: '知道了',
            success: (r) => {
              if (r.confirm) this.copyText();
            }
          });
        }
      });
  },

  copyText() {
    const slots = store.getSlots();
    if (!slots.length) {
      wx.showToast({ title: '课表为空', icon: 'none' });
      return;
    }
    const lines = slots
      .slice()
      .sort((a, b) => a.day - b.day || a.startMin - b.startMin)
      .map((s) => {
        const c = getCourse(s.code);
        return `${WEEKDAYS_ZH[s.day - 1]} ${minToTime(s.startMin)}-${minToTime(s.endMin)} ${s.code} ${c ? c.titleZh : ''}${s.location ? ' @' + s.location : ''}`;
      });
    wx.setClipboardData({ data: lines.join('\n') });
  }
});
