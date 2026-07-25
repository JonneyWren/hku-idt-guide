const { getCourse, semesterText } = require('../../data/courses');
const { fmtDate } = require('../../utils/date');
const store = require('../../utils/store');

Page({
  data: {
    course: null,
    semText: '',
    reviews: [],
    ratingAvg: 0,
    ratingCount: 0,
    selected: false,
    stars: [1, 2, 3, 4, 5],
    form: { rating: 5, nickname: '', content: '' }
  },

  onLoad(options) {
    const course = getCourse(options.code);
    if (!course) {
      wx.showToast({ title: '课程不存在', icon: 'none' });
      setTimeout(() => wx.navigateBack(), 800);
      return;
    }
    wx.setNavigationBarTitle({ title: course.code });
    this.setData({ course, semText: semesterText(course.semester) });
    this.refresh();
  },

  refresh() {
    const code = this.data.course.code;
    const reviews = store.getReviews(code).map((r) => Object.assign({}, r, {
      dateText: fmtDate(new Date(r.ts))
    }));
    const sum = store.getRatingSummary(code);
    this.setData({
      reviews,
      ratingAvg: sum.avg,
      ratingCount: sum.count,
      selected: store.isSelected(code)
    });
  },

  setRating(e) {
    this.setData({ 'form.rating': Number(e.currentTarget.dataset.v) });
  },

  onNick(e) {
    this.setData({ 'form.nickname': e.detail.value });
  },

  onContent(e) {
    this.setData({ 'form.content': e.detail.value });
  },

  submit() {
    const { form, course } = this.data;
    const content = (form.content || '').trim();
    if (!content) {
      wx.showToast({ title: '请填写评价内容', icon: 'none' });
      return;
    }
    const saved = store.addReview(course.code, {
      rating: form.rating,
      nickname: (form.nickname || '').trim(),
      content
    });
    if (!saved) {
      wx.showToast({ title: '保存失败,请重试', icon: 'none' });
      return;
    }
    wx.showToast({ title: '已发布', icon: 'success' });
    this.setData({ form: { rating: 5, nickname: form.nickname, content: '' } });
    this.refresh();
  },

  toggleSelect() {
    const added = store.toggleCourse(this.data.course.code);
    wx.showToast({ title: added ? '已加入选课' : '已移出选课', icon: 'none' });
    this.refresh();
  }
});
