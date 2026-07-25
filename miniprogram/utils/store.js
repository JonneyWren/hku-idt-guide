// 本地存储封装:课程评价 / 我的选课 / 课表时间段
const KEY_REVIEWS = 'idt_reviews';
const KEY_SELECTION = 'idt_selection';
const KEY_SLOTS = 'idt_slots';

function safeRead(key, def) {
  try {
    const v = wx.getStorageSync(key);
    if (v === '' || v === undefined || v === null) return def;
    return v;
  } catch (e) {
    return def;
  }
}

function safeWrite(key, value) {
  try {
    wx.setStorageSync(key, value);
    return true;
  } catch (e) {
    return false;
  }
}

// ---------- 课程评价 ----------
// 结构: { [courseCode]: [{ id, rating, nickname, content, ts }] }
function getAllReviews() {
  return safeRead(KEY_REVIEWS, {});
}

function getReviews(courseCode) {
  const all = getAllReviews();
  return all[courseCode] || [];
}

function addReview(courseCode, review) {
  const all = getAllReviews();
  if (!all[courseCode]) all[courseCode] = [];
  const item = {
    id: Date.now() + '_' + Math.floor(Math.random() * 1000),
    rating: review.rating,
    nickname: review.nickname || '匿名',
    content: review.content,
    ts: Date.now()
  };
  all[courseCode].unshift(item);
  return safeWrite(KEY_REVIEWS, all) ? item : null;
}

function getRatingSummary(courseCode) {
  const list = getReviews(courseCode);
  if (!list.length) return { count: 0, avg: 0 };
  const sum = list.reduce((s, r) => s + (r.rating || 0), 0);
  return { count: list.length, avg: Math.round((sum / list.length) * 10) / 10 };
}

// ---------- 我的选课 ----------
// 结构: [courseCode]
function getSelection() {
  return safeRead(KEY_SELECTION, []);
}

function isSelected(courseCode) {
  return getSelection().indexOf(courseCode) >= 0;
}

function toggleCourse(courseCode) {
  let list = getSelection();
  const idx = list.indexOf(courseCode);
  let added;
  if (idx >= 0) {
    list.splice(idx, 1);
    added = false;
  } else {
    list.push(courseCode);
    added = true;
  }
  safeWrite(KEY_SELECTION, list);
  return added;
}

// ---------- 课表时间段 ----------
// 结构: [{ id, code, day(1-7, 周一=1), startMin, endMin, location }]
function getSlots() {
  return safeRead(KEY_SLOTS, []);
}

function addSlot(slot) {
  const list = getSlots();
  const item = Object.assign({}, slot, {
    id: Date.now() + '_' + Math.floor(Math.random() * 1000)
  });
  list.push(item);
  return safeWrite(KEY_SLOTS, list) ? item : null;
}

function removeSlot(id) {
  const list = getSlots().filter((s) => s.id !== id);
  return safeWrite(KEY_SLOTS, list);
}

module.exports = {
  getAllReviews,
  getReviews,
  addReview,
  getRatingSummary,
  getSelection,
  isSelected,
  toggleCourse,
  getSlots,
  addSlot,
  removeSlot
};
