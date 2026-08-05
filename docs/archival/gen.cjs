// 由 curriculum.json(官方选课清单) + merged-slots.json(官方 Sem1 课表) 生成 courses.js / timetable.js
const fs = require('fs');
const path = require('path');

const curri = JSON.parse(fs.readFileSync(path.join(__dirname, 'curriculum.json'), 'utf8'));
const slotsAll = JSON.parse(fs.readFileSync(path.join(__dirname, 'merged-slots.json'), 'utf8'));

// ---------- 中文名(官方清单无中文名;沿用站内既有译名,其余由本次更新翻译) ----------
// zhOfficial=true 表示译名沿用站内既有(源自 R363_REG 课程大纲);false 表示本次新译,详情页标注「非官方译名」
const ZH = {
  IDAT7100: ['毕业论文(毕业设计)', 1],
  IDAT7211: ['创新与研发原理', 1],
  IDAT7212: ['机电一体化系统工程', 1],
  IDAT7213: ['无人机设计、导航与控制', 1],
  IDAT7215: ['产品开发计算机编程与应用', 1],
  IDAT7222: ['先进 CADCAM 与 AI 驱动制造系统', 1],
  IDAT7224: ['工程技术中的深度学习', 1],
  IDAT7217: ['创新设计与科技高级专题 A', 1],
  IDAT7220: ['STEM 教育', 1],
  IDAT7214: ['产品开发先进技术与材料', 1],
  IDAT7218: ['创新设计与科技高级专题 B', 1],
  IDAT7219: ['智能建筑技术', 1],
  IDAT7221: ['设计工程与商业的数据分析与人工智能', 1],
  IDAT7223: ['人因工程设计与多媒体技术', 1],
  IDAT7225: ['目标检测与分类的人工智能基础', 1],
  IDAT7101: ['顶点项目(毕业项目)', 1],
  CIVL6054: ['运输系统工程', 1],
  CIVL6061: ['环境工程专题 A', 1],
  DASE7034: ['运筹学', 1],
  DASE7111: ['数据驱动优化', 1],
  DASE7139: ['信息物理系统', 1],
  ELEC6098: ['电子与移动商务', 1],
  ELEC6603: ['工业创业成功之道', 1],
  ELEC6604: ['神经网络、模糊系统与遗传算法', 1],
  MECH6010: ['材料服役行为', 1],
  MECH6034: ['计算机辅助产品开发', 1],
  MECH6046: ['能源、生医与消费电子微系统', 1],
  MECH7010: ['当代机器人', 1],
  RECO7605: ['信息管理', 1],
  TDLL6024: ['数字技术与教学', 1],
  URBA6011: ['城市数据分析编程基础', 1],
  TDLL6334: ['教育视频与故事化叙事', 0],
  // 跨课程选修 XC
  LATX7513: ['航空器与航空基础', 0],
  LATX7517: ['航空经济学:商业模式与创业', 0],
  LATX7518: ['空间无线通信与感知基础', 0],
  MECH6019: ['空气污染来源与控制', 0],
  MECH6045: ['纳米技术:原理与应用', 0],
  MECH7014: ['铁路工程:地铁与高速铁路', 0],
  MECH7016: ['铁路项目管理', 0],
  MECH7020: ['人工智能自主无人机', 0],
  MECH7029: ['气动声学与机器学习噪声控制', 0],
  MECH7030: ['空气动力学与结构力学智能计算', 0],
  MEST7412: ['固态材料与物理', 0],
  MEST7418: ['纳米光子学', 0],
  MEST7419: ['安全培训与微电子工艺', 0],
  MEST7420: ['CMOS 集成电路模拟电路设计:基础电路', 0],
  MEST7421: ['薄膜晶体管技术与应用', 0],
  // 跨系选修 XD
  CIVL6004: ['高等土力学', 0],
  CIVL6006: ['高级给水与污水处理', 0],
  CIVL6007: ['出行行为需求建模', 0],
  CIVL6013: ['混凝土技术', 0],
  CIVL6026: ['有限元方法', 0],
  CIVL6053: ['风工程', 0],
  CIVL7019: ['土木工程统计方法', 0],
  CIVL7023: ['自动化与机器人工业化建造', 0],
  CIVL7024: ['基础设施建造与管理计算机视觉', 0],
  DASE7015: ['工程经济与财务', 0],
  DASE7020: ['供应链管理', 0],
  DASE7113: ['智能系统优化方法', 0],
  DASE7119: ['数字企业与电子商务', 0],
  DASE7137: ['虚拟现实与应用', 0],
  DASE7138: ['医疗健康系统工程', 0],
  DASE7140: ['机器学习与应用', 0],
  DASE7141: ['高级数字孪生与应用', 0],
  DASE7142: ['高级计算方法', 0],
  DASE7143: ['物联网', 0],
  DASE7154: ['系统工程智能技术 A', 0],
  DASE7155: ['系统工程智能技术 B', 0],
  DASE7212: ['物理互联网', 0],
  DASE7310: ['金融工程', 0],
  DASE7341: ['技术创新与创业', 0],
  DASE7501: ['机器人建模、规划与控制', 0],
  DASE7502: ['机器人感知与智能', 0],
  DASE7503: ['机器人系统集成', 0],
  DASE7506: ['高级机器学习方法', 0],
  DASE7507: ['机器人与智能系统前沿', 0],
  DASE7508: ['智能系统安全', 0],
  DASE7509: ['系统自动化人工智能', 0],
  DASE7902: ['项目管理', 0],
  ELEC6008: ['模式识别与机器学习', 0],
  ELEC6026: ['数字信号处理', 0],
  ELEC6027: ['集成电路系统设计', 0],
  ELEC6036: ['高性能计算机体系结构', 0],
  ELEC6063: ['光电子与光波技术', 0],
  ELEC6080: ['电信系统与管理', 0],
  ELEC6081: ['生物医学信号与系统', 0],
  ELEC6085: ['电力系统运行中的计算机化 SCADA 系统', 0],
  ELEC6095: ['智能电网', 0],
  ELEC6097: ['IP 网络', 0],
  ELEC6099: ['无线通信与组网', 0],
  ELEC6103: ['卫星通信', 0],
  ELEC7011: ['能源互联网', 0],
  ELEC7013: ['未来能源产业领导力', 0],
  ELEC7029: ['模拟集成电路设计:计算与存储', 0],
  ELEC7043: ['数字图像处理与计算机视觉', 0],
  ELEC7082: ['金融人工智能', 0],
  ELEC7084: ['高级数据库', 0],
  ELEC7402: ['先进电动汽车技术', 0],
  ELEC7403: ['先进电力电子', 0],
  ELEC7404: ['先进铁路工程', 0],
  ELEC7467: ['电力系统保护', 0],
  ELEC7469: ['先进电能与功率变换系统', 0],
  EMEE6002: ['可持续发展与气候变化', 0],
  EMEE6005: ['可再生能源技术 I:基础', 0],
  EMEE6007: ['能源与碳审计', 0],
  EMEE6011: ['节能照明', 0],
  EMEE7013: ['未来能源产业领导力', 0],
  ICES7001: ['先进半导体器件', 0],
  ICES7008: ['先进电子封装与集成', 0],
  ICES7009: ['集成硅光子学', 0],
  MEBS6001: ['电气装置', 0],
  MEBS6002: ['照明工程', 0],
  MEBS6014: ['计算机建模与仿真', 0],
  MEBS6015: ['建筑自然通风与混合通风', 0],
  MEBS6019: ['建筑特低压电气系统', 0],
  MEBS7013: ['消防设施', 0]
};

// ---------- 站内既有课程简介(源自 R363_REG 课程大纲),仅对清单内课程沿用 ----------
const DESC = {
  IDAT7211: ['聚焦创新设计原理与基础技术:技术发明史与现代生活、设计流程与创意思维、设计简报与规格制定、物联网(IoT)概念。培养产品设计中的创造性、分析性与批判性思维,并运用建模工具进行表达沟通。', '', ''],
  IDAT7212: ['融合机械、电子与软件工程:基于模型的机电系统设计、多域建模与仿真、鲁棒控制方法、性能分析评估、系统诊断与维护、IoT 应用。学生需通过迷你项目开发具体的机电一体化产品。', '', ''],
  IDAT7213: ['探索小型无人机关键技术:传感器标定、GPS/IMU 导航、视觉-惯性导航、激光雷达导航、非线性动态逆与最优控制,并在真实无人机平台上开展前沿导航控制实验。', '良好的 MATLAB、C/C++ 编程能力与动手实践经验', ''],
  IDAT7215: ['面向产品开发的实用编程技能:基础编程技术及其在软件控制、Web 应用与 IoT 中的应用;另涵盖 Excel 编程,释放其在数据挖掘与数据库集成等日常场景中的能力。', '', ''],
  IDAT7217: ['选取创新设计与科技前沿专题并应用于相关问题,具体题目于开课学期初公布。', '', ''],
  IDAT7220: ['STEM 整合式、项目式教学理念:通过阅读、视频、教学设计与系列迷你项目,学习课程整合实践与学生自主学习的最佳做法。', '', ''],
  IDAT7100: ['24 学分毕业论文(毕业设计):在工学院或相关学院导师指导下,个人或小组完成设计、实验或分析研究课题;需参加研讨会并提交完整书面报告。适用于 2025/26 及以后入学者。', '', ''],
  MECH6010: ['蠕变、断裂、疲劳与腐蚀等材料服役行为的物理基础与预测;通过微观组织调控改善工程材料(含工程塑料与复合材料)服役性能。', '', ''],
  MECH6034: ['产品开发方法论、计算机辅助设计、触觉形状建模、逆向工程、增材制造与快速模具;理解制造成本约束,并运用相关技术开发简单产品。', '', ''],
  MECH6046: ['MEMS 与微流控系统的工作原理、设计、材料、制造与封装,及其在能源、机械与生物医学工程中的应用,含丰富案例教学。', '', '修过 MECH6032 者不可选'],
  MECH7010: ['现代机器人系统核心技术:系统组成与工作原理、传感与驱动单元、运动学建模、感知估计与实时控制,涵盖移动机器人、无人机、无人驾驶与软体机器人前沿。', '', ''],
  DASE7034: ['运筹学方法论:问题分析、建模与求解;数学规划在物流运输中的应用、设备更新模型、投资风险分析、排队论与事件仿真。', '', ''],
  DASE7111: ['智能优化算法总览:遗传算法、模拟退火、禁忌搜索、粒子群、蚁群算法与动态系统优化策略,含供应链、物流、制造与服务业案例。', '', ''],
  DASE7139: ['CPS 导论:传感器与传感网络、机器人与自动化、CPS 通信、数据分析、数字孪生、云计算与系统集成,以讲座+项目方式开展。', '', ''],
  ELEC6098: ['电商与移动商务的技术、商业与管理知识:B2C/B2B 模式、定位技术、RFID、GPS、移动网络、电子支付、NFC、二维码、AR 等前沿应用。', '', 'ELEC6078 / ELEC6086'],
  ELEC6603: ['创业框架:识别资源/能力/环境与机会、商业计划书、新创企业融资、风险平衡与分阶段融资、组织创建,结合案例与项目实践。', '', ''],
  ELEC6604: ['应用人工智能三大主题导论:神经网络、模糊系统与遗传算法的基本概念、技术及在各类工程问题中的应用。', '', ''],
  TDLL6024: ['信息技术教学应用总览:从计算机辅助教程到学习对象、认知工具与协作技术,强调支撑技术整合的学习理论与教育情境。', '', ''],
  CIVL6054: ['运输系统的工程视角:交通基础设施发展、运输方式选型、固定轨道系统、运输领域技术应用。', '', ''],
  CIVL6061: ['提供环境工程热点方向的深入学习机会,具体题目于开课学期初公布。', '', ''],
  URBA6011: ['城市数据分析的编程与基础知识:空间数据获取、GIS/BIM 分析技术,为城市大数据分析类课程的先修课。', '', ''],
  RECO7605: ['信息化与供应链管理:信息/人力/资金/资源流、制造与建造供应链、效率与响应、IT 集成、跨组织文化与契约议题。', '', '']
};

// ---------- CEF 可报销(沿用站内既有标注) ----------
const CEF = { MECH6034: 1 };
// ---------- 26 级新增 List A(沿用站内既有标注) ----------
const NEW2026 = { IDAT7222: 1, IDAT7223: 1, IDAT7224: 1, IDAT7225: 1 };
// ---------- 26 级由 List A 转入 List B(官方清单已列为 List B) ----------
const MOVED2B = { MECH6034: 1 };

// ---------- 保留的 IDAT 自有第二学期课程(官方 Sem1 文件未覆盖) ----------
const SEM2_NOTE = '第二学期课程。本次更新的官方文件仅覆盖 2026-27 第一学期,该课程的排课与 List 归属待官方第二学期文件公布后再核对。';
const FULL_NOTE = '全年课程。本次更新的官方文件仅覆盖 2026-27 第一学期,其中未列出本课程,排课与学分安排待官方第二学期文件公布后再核对。';
const RETAIN = [
  { code: 'IDAT7214', title: 'Advanced Technologies and Materials for Product Development', list: 'A', credits: 6, semester: '2', sections: ['A'], desc: '面向产品开发的先进制造技术与新型材料:先进成形与增材制造工艺、功能材料选型与性能评估,并结合产品案例讨论工艺-材料-成本的协同决策。' },
  { code: 'IDAT7218', title: 'Advanced Topics in Innovative Design and Technology B', list: 'B', credits: 6, semester: '2', sections: ['A'], desc: '选取创新设计与科技前沿专题并应用于相关问题,具体题目于开课学期初公布。' },
  { code: 'IDAT7219', title: 'Smart Building Technology', list: 'B', credits: 6, semester: '2', sections: ['A'], desc: '应用 IoT 技术(硬件、软件与连接)管理 HVAC、照明与安防系统;实时采集并分析楼宇运营数据,改善楼宇运维与保养。' },
  { code: 'IDAT7221', title: 'Data Analytics and Artificial Intelligence for Design Engineering and Business', list: 'A', credits: 6, semester: '2', sections: ['A'], desc: '涵盖 AI 与机器学习、价值工程与产品成本、产品分析与项目管理:项目管理作为战略工具的核心要素与实务方法论,并运用数据分析概念解读定量数据、支撑设计决策。' },
  { code: 'IDAT7223', title: 'Ergonomic Design and Multimedia Technologies', list: 'A', credits: 6, semester: '2', sections: ['A'], desc: '人因工程设计原则与多媒体技术在产品开发中的融合应用:人体测量与认知负荷、交互界面设计、多媒体内容制作与产品呈现。' },
  { code: 'IDAT7225', title: 'Fundamentals of AI for Object Detection and Classification', list: 'A', credits: 6, semester: '2', sections: ['A'], desc: '面向目标检测与分类的人工智能基础:图像特征与卷积网络、检测与分类主流模型、数据集构建与评价指标,并结合工程场景实践。' },
  { code: 'IDAT7101', title: 'Capstone project', list: 'capstone', credits: 24, semester: 'full', sections: ['A'], desc: '毕业项目:在导师指导下完成综合性项目研究与实践,无固定上课时间。学分与适用入学年级以学院最终公布的课程规程为准。' }
];

// ---------- 排课冲突裁定:同一课程跨页时间不一致时,以开课院系页为准,丢弃另一页版本 ----------
const DROP = [
  ['ELEC7029', 2, '19:00', '22:00'], // 取 EEE p9/p16 的 19:30-22:00
  ['ELEC7029', 5, '19:00', '22:00'],
  ['EMEE6005', 5, '19:00', '22:00'], // 取 Energy p13 的 19:00-21:30
  ['EMEE6007', 2, '19:00', '22:00'] // 取 Energy p14 的 19:00-21:30
];

// ---------- 单元格内 "AND" 双安排需拆分的条目(EMEE6002 Sub-Class B 周五) ----------
const SLOT_OVERRIDE = {
  EMEE6002: [
    { day: 2, start: '19:00', end: '21:30', venue: 'CYCC501', instructor: 'Dr Wilton WT Fok / Dr Albert TL Lee', section: 'A', dateNote: '' },
    { day: 5, start: '14:00', end: '18:00', venue: 'TBC (HKU Shenzhen Qianhai campus)', instructor: 'Dr Wilton WT Fok / Dr Albert TL Lee', section: 'B', dateNote: '23.10.2026, 30.10.2026, 06.11.2026, 13.11.2026' },
    { day: 5, start: '16:00', end: '18:00', venue: 'Lecture room 1&2, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun', instructor: 'Dr Wilton WT Fok / Dr Albert TL Lee', section: 'B', dateNote: '20.11.2026' },
    { day: 6, start: '09:00', end: '13:00', venue: 'TBC (HKU Shenzhen Qianhai campus)', instructor: 'Dr Wilton WT Fok / Dr Albert TL Lee', section: 'B', dateNote: '24.10.2026, 31.10.2026, 14.11.2026' }
  ]
};

// ---------- 课程附注 ----------
const NOTE = {
  DASE7212: '密集课程(Intensive Course):2027 年 1 月 4 日至 1 月 15 日集中授课。排课来源:2026-Sem1-Engg.pdf 第 19 页(共 27 页)。',
  DASE7155: '密集课程(Intensive Course):2027 年 1 月 4 日至 1 月 9 日集中授课。排课来源:2026-Sem1-Engg.pdf 第 22 页(共 27 页)。',
  DASE7154: '密集课程(Intensive Course):2027 年 1 月 4 日至 1 月 15 日集中授课。排课来源:2026-Sem1-Engg.pdf 第 20 页(共 27 页) —— 该页页眉与页脚均标明本课程为 DASE7154,但页内各单元格的课程代码误印为 DASE7212,本站按该页实际排课录入。官方附注原文:The examination results of DASE7154 will be released together with all other courses to be offered in the 2nd Semester).',
  RECO7605: '官方课表为本课程标注了两段指定日期:10 月 20 日(周二)一次,以及 10—11 月共 7 个周六;两段合并构成本课程的完整安排,并非两个班次。'
};
const NOTE_AB = '官方课表列出多个上课时段,与选课清单中的 A/B 两个班次对应;课表未标注班次字母,实际班次以选课系统与开课院系公布为准。';
const NOTE_MULTI = '官方课表列出多个上课时段,但未标注班次字母;究竟是不同班次还是讲授/实验分场,请以选课系统与开课院系公布为准。';

// ================= 组装排课 =================
const DAY_EN = ['', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const byCode = {};
curri.forEach((c) => { byCode[c.code] = c; });

const dropped = (s) => DROP.some((d) => d[0] === s.code && d[1] === s.day && d[2] === s.start && d[3] === s.end);

const slotsByCode = {};
slotsAll.forEach((s) => {
  if (!byCode[s.code]) return;
  if (dropped(s)) return;
  (slotsByCode[s.code] = slotsByCode[s.code] || []).push({
    day: s.day, start: s.start, end: s.end, venue: s.room || '', instructor: s.instructor || '',
    section: s.section || '', dateNote: s.dateNote || ''
  });
});
// DASE7154:采用官方课表第 20 页排课(与 DASE7212 页面内容相同)
slotsByCode.DASE7154 = (slotsByCode.DASE7212 || []).map((s) => ({ ...s }));
// 单元格内 "AND" 双安排的手工拆分
Object.keys(SLOT_OVERRIDE).forEach((k) => { slotsByCode[k] = SLOT_OVERRIDE[k].map((s) => ({ ...s })); });

// 班次标注:课表有字母用字母;无字母且只有一个时段用清单班次首项;无字母多时段留空
const notes = {};
Object.keys(slotsByCode).forEach((code) => {
  const arr = slotsByCode[code];
  const secs = byCode[code].sections || [];
  const noLetter = arr.every((s) => !s.section);
  if (noLetter) {
    if (arr.length === 1) arr[0].section = secs[0] || '';
    else notes[code] = secs.length > 1 ? NOTE_AB : NOTE_MULTI;
  }
  arr.sort((a, b) => a.day - b.day || a.start.localeCompare(b.start));
});

// ================= 输出 courses.js =================
const q = (s) => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
const LIST_ORDER = { A: 1, B: 2, XC: 3, XD: 4, capstone: 5 };

const courses = [];
curri.forEach((c) => {
  const zh = ZH[c.code];
  if (!zh) throw new Error('缺少中文名: ' + c.code);
  const d = DESC[c.code] || ['', '', ''];
  courses.push({
    code: c.code,
    title: c.title,
    titleZh: zh[0],
    zhOfficial: !!zh[1],
    list: c.list === 'diss' ? 'capstone' : c.list,
    credits: c.credits,
    semester: '1',
    sections: c.sections,
    desc: d[0],
    prereq: d[1],
    exclusive: d[2],
    cef: !!CEF[c.code],
    isNew2026: !!NEW2026[c.code],
    movedToB2026: !!MOVED2B[c.code],
    note: NOTE[c.code] || notes[c.code] || ''
  });
});
RETAIN.forEach((r) => {
  const zh = ZH[r.code];
  courses.push({
    code: r.code, title: r.title, titleZh: zh[0], zhOfficial: !!zh[1],
    list: r.list, credits: r.credits, semester: r.semester, sections: r.sections,
    desc: r.desc, prereq: '', exclusive: '', cef: false,
    isNew2026: !!NEW2026[r.code], movedToB2026: false, note: r.semester === 'full' ? FULL_NOTE : SEM2_NOTE
  });
});
courses.sort((a, b) => (LIST_ORDER[a.list] - LIST_ORDER[b.list]) || (a.semester < b.semester ? -1 : a.semester > b.semester ? 1 : 0) || a.code.localeCompare(b.code));

const HEAD = `// 课程数据 —— 完全以香港大学工程学院官方文件为准
// 数据源 1:MSc(Eng) & MSc, Faculty of Engineering, HKU.pdf
//          (2026-27 第一学期在线选课课程清单,共 109 门,含代码 / 分类 / 班次 / 学分 / 英文课名)
// 数据源 2:2026-Sem1-Engg.pdf(2026-27 第一学期工学院全院课表,共 27 页)
// 生成时间:${new Date().toISOString().slice(0, 10)}
//
// 字段说明:
//   list: 'A' = List A 学科核心课, 'B' = List B 学科选修课,
//         'XC' = 跨课程选修(Cross-curriculum electives),
//         'XD' = 跨系选修(Cross-departmental electives), 'capstone' = 毕业论文 / 毕业项目
//   semester: '1' = 第一学期(官方清单课程一律为第一学期) | '2' = 第二学期 | 'full' = 全年
//   sections: 官方选课清单列出的班次
//   zhOfficial: false = 中文名为本站翻译(非官方译名)
//   desc: 空字符串表示官方文件未提供中文简介
//   note: 官方文件中需要特别说明的附注
//   cef / isNew2026 / movedToB2026: 沿用站内既有标注(官方 PDF 未提供该信息)

export const LIST_META = {
  A: { label: 'List A 核心', full: 'List A 学科核心课', color: '#00573f' },
  B: { label: 'List B 选修', full: 'List B 学科选修课', color: '#31597f' },
  XC: { label: '跨课程选修', full: '跨课程选修 Cross-curriculum electives', color: '#6b5b95' },
  XD: { label: '跨系选修', full: '跨系选修 Cross-departmental electives', color: '#8a6d3b' },
  capstone: { label: '毕业论文', full: '毕业论文 / 毕业项目', color: '#9c4f4f' }
};

export const NO_DESC_TEXT = '本课程暂无官方中文简介,请查阅开课院系公布的课程大纲。';

export const COURSES = [
`;

const listLabel = { A: 'List A 学科核心课(6 门)', B: 'List B 学科选修课(18 门)', XC: '跨课程选修 Cross-curriculum electives(15 门)', XD: '跨系选修 Cross-departmental electives(69 门)', capstone: '毕业论文 / 毕业项目' };
let out = HEAD;
let lastList = '';
courses.forEach((c) => {
  if (c.list !== lastList) {
    out += (lastList ? '\n' : '') + '  // ============ ' + listLabel[c.list] + ' ============\n';
    lastList = c.list;
  }
  out += '  {\n';
  out += `    code: ${q(c.code)}, title: ${q(c.title)}, titleZh: ${q(c.titleZh)}, zhOfficial: ${c.zhOfficial},\n`;
  out += `    list: ${q(c.list)}, credits: ${c.credits}, semester: ${q(c.semester)}, sections: [${c.sections.map(q).join(', ')}],\n`;
  out += `    desc: ${q(c.desc)},\n`;
  out += `    note: ${q(c.note)},\n`;
  out += `    prereq: ${q(c.prereq)}, exclusive: ${q(c.exclusive)}, cef: ${c.cef}, isNew2026: ${c.isNew2026}, movedToB2026: ${c.movedToB2026}\n`;
  out += '  },\n';
});
out = out.replace(/,\n$/, '\n');
out += `];

// 毕业要求(2026/27 起统一 72 学分)
export const DEGREE_RULES = {
  total: 72,
  courseCredits: 48, // 课程学分(72 - 24 毕业论文)
  listAMin: 24, // List A 核心课至少 24 学分
  disciplineMin: 36, // 学科课(List A + List B)至少 36 学分
  electiveMax: 12, // 非本学科选修课(跨课程 + 跨系)最多 12 学分
  dissertation: 24 // IDAT7100 毕业论文
};

export function getCourse(code) {
  return COURSES.find((c) => c.code === code) || null;
}

export function listLabel(list) {
  return (LIST_META[list] || {}).label || '';
}

export function isElective(list) {
  return list === 'XC' || list === 'XD';
}

export function semesterText(sem) {
  switch (sem) {
    case '1': return '第一学期';
    case '2': return '第二学期';
    case '1&2': return '两学期均开';
    case 'full': return '全年';
    default: return '学期待定';
  }
}
`;
fs.writeFileSync(path.join(__dirname, 'courses.js'), out, 'utf8');

// ================= 输出 timetable.js =================
let tt = `// 2026-27 第一学期开课安排
// 来源:2026-Sem1-Engg.pdf(香港大学工程学院 2026-27 第一学期全院课表,共 27 页)
// 逐页坐标解析后按「课程代码 + 星期 + 时间 + 班次」去重;同一课程出现在多个专业页时取信息最完整的一份
// term: 1 = 第一学期。第二学期排课待官方第二学期课表公布,本文件暂不收录
// section: 课表标注的班次字母;留空表示官方课表未标注班次
// dateNote: 官方课表标注的指定上课日期(密集课程 / 分段授课)

export const TIMETABLE = {
`;
const codesWithSlots = courses.map((c) => c.code).filter((code) => slotsByCode[code] && slotsByCode[code].length);
codesWithSlots.forEach((code) => {
  tt += `  ${code}: [\n`;
  tt += slotsByCode[code].map((s) =>
    `    { term: 1, section: ${q(s.section)}, day: ${q(DAY_EN[s.day])}, start: ${q(s.start)}, end: ${q(s.end)}, venue: ${q(s.venue)}, instructor: ${q(s.instructor)}, dateNote: ${q(s.dateNote)} }`
  ).join(',\n') + '\n';
  tt += '  ],\n';
});
tt = tt.replace(/,\n$/, '\n');
tt += `};

const DAY_ZH = { MON: '周一', TUE: '周二', WED: '周三', THU: '周四', FRI: '周五', SAT: '周六', SUN: '周日' };

export function getSections(code) {
  return TIMETABLE[code] || [];
}

export function dayText(day) {
  return DAY_ZH[day] || '';
}
`;
fs.writeFileSync(path.join(__dirname, 'timetable.js'), tt, 'utf8');

// ================= 核对输出 =================
const cnt = {};
courses.forEach((c) => { cnt[c.list] = (cnt[c.list] || 0) + 1; });
const lines = [];
lines.push('课程总数: ' + courses.length + ' (清单 ' + curri.length + ' + 保留 ' + RETAIN.length + ')');
lines.push('分类计数: ' + JSON.stringify(cnt));
lines.push('排课课程数: ' + codesWithSlots.length + ' / 排课条目数: ' + codesWithSlots.reduce((n, c) => n + slotsByCode[c].length, 0));
lines.push('清单内无排课: ' + curri.map((c) => c.code).filter((c) => !slotsByCode[c] || !slotsByCode[c].length).join(', '));
lines.push('多时段未标班次(加附注): ' + Object.keys(notes).map((k) => k + '(' + slotsByCode[k].length + ')').join(', '));
lines.push('本次新译中文名: ' + courses.filter((c) => !c.zhOfficial).length + ' 门');
lines.push('无中文简介: ' + courses.filter((c) => !c.desc).length + ' 门');
fs.writeFileSync(path.join(__dirname, 'gen.log.txt'), lines.join('\n') + '\n', 'utf8');
console.log(lines.join('\n'));
