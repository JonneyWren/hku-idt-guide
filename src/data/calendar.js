// HKU 2026-27 学年校历
export const EVENTS = [
  { date: '2026-08-05', endDate: '2026-08-15', title: '硕士课程选课时间(Course Selection)', type: 'adddrop', tentative: false },
  { date: '2026-08-27', endDate: '', title: '第一轮选课已截止 · 第二轮选课时间待定(请时刻关注选课系统)', type: 'adddrop', tentative: true },
  { date: '2026-09-01', endDate: '', title: '第一学期开学 · 首日授课', type: 'teaching', tentative: false },
  { date: '2026-09-01', endDate: '2026-09-14', title: '第一学期加退选(Add/Drop)', type: 'adddrop', tentative: false },
  { date: '2026-10-01', endDate: '', title: '国庆节公众假期', type: 'holiday', tentative: false },
  { date: '2026-10-12', endDate: '2026-10-17', title: '阅读周 Reading Week(停课)', type: 'reading', tentative: false },
  { date: '2026-10-19', endDate: '', title: '重阳节公众假期', type: 'holiday', tentative: false },
  { date: '2026-11-30', endDate: '', title: '第一学期最后授课日', type: 'teaching', tentative: false },
  { date: '2026-12-01', endDate: '2026-12-07', title: '复习周 Revision Period', type: 'revision', tentative: false },
  { date: '2026-12-08', endDate: '2026-12-23', title: '第一学期考试周', type: 'exam', tentative: false },
  { date: '2026-12-24', endDate: '2027-01-17', title: '圣诞及新年学期假', type: 'holiday', tentative: false },
  { date: '2027-01-18', endDate: '', title: '第二学期开学 · 首日授课', type: 'teaching', tentative: false },
  { date: '2027-01-18', endDate: '2027-02-01', title: '第二学期加退选(Add/Drop)', type: 'adddrop', tentative: false },
  { date: '2027-02-05', endDate: '2027-02-11', title: '农历新年假期', type: 'holiday', tentative: true },
  { date: '2027-03-08', endDate: '2027-03-13', title: '阅读周 Reading Week(停课)', type: 'reading', tentative: true },
  { date: '2027-04-03', endDate: '2027-04-09', title: '清明 / 复活节假期', type: 'holiday', tentative: true },
  { date: '2027-05-01', endDate: '', title: '第二学期最后授课日', type: 'teaching', tentative: true },
  { date: '2027-05-03', endDate: '2027-05-08', title: '复习周 Revision Period', type: 'revision', tentative: true },
  { date: '2027-05-10', endDate: '2027-05-29', title: '第二学期考试周', type: 'exam', tentative: true },
  { date: '2027-06-21', endDate: '2027-08-07', title: '暑校教学时段(选修)', type: 'teaching', tentative: true }
];

export const TYPE_META = {
  teaching: { label: '教学', color: '#00573f' },
  adddrop: { label: '选课/加退选', color: '#1a56b8' },
  reading: { label: '阅读周', color: '#7a5195' },
  revision: { label: '复习周', color: '#b8741a' },
  exam: { label: '考试', color: '#c0392b' },
  holiday: { label: '假期', color: '#2e8b57' }
};

export const SEMESTERS = [
  { name: '2026-27 第一学期', start: '2026-09-01', end: '2026-12-23' },
  { name: '2026-27 第二学期', start: '2027-01-18', end: '2027-05-29' }
];
