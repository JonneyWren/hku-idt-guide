// 课程数据 —— 完全以香港大学工程学院官方文件为准
// 数据源 1:MSc(Eng) & MSc, Faculty of Engineering, HKU.pdf
//          (2026-27 第一学期在线选课课程清单,共 109 门,含代码 / 分类 / 班次 / 学分 / 英文课名)
// 数据源 2:2026-Sem1-Engg.pdf(2026-27 第一学期工学院全院课表,2026-08-28 版)
// 数据源 3:2026-Sem1-CDS.pdf(CDS 学院 2026-27 第一学期课表,2026-08-28 版)
// 生成时间:2026-08-04;2026-08-27 按官方选课系统快照补入跨系选修 4 门:
//          COMP7309 / COMP7507 / COMP7508 / DASC7104(均为第一学期 A 班,6 学分)
// 2026-08-28 按 CDS 学院课表补入 IDT 专属 List B (Discipline Elective) 课程 4 门:
//          COMP7103 / COMP7506 / COMP7802 / COMP7906(均为第一学期 A 班,6 学分,名额需 CDS 审批)
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
  // ============ List A 学科核心课(6 门) ============
  {
    code: 'IDAT7211', title: 'Innovation and R & D principle', titleZh: '创新与研发原理', zhOfficial: true,
    list: 'A', credits: 6, semester: '1', sections: ['A'],
    desc: '聚焦创新设计原理与基础技术:技术发明史与现代生活、设计流程与创意思维、设计简报与规格制定、物联网(IoT)概念。培养产品设计中的创造性、分析性与批判性思维,并运用建模工具进行表达沟通。',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'IDAT7212', title: 'Mechatronic systems engineering', titleZh: '机电一体化系统工程', zhOfficial: true,
    list: 'A', credits: 6, semester: '1', sections: ['A'],
    desc: '融合机械、电子与软件工程:基于模型的机电系统设计、多域建模与仿真、鲁棒控制方法、性能分析评估、系统诊断与维护、IoT 应用。学生需通过迷你项目开发具体的机电一体化产品。',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'IDAT7213', title: 'UAV design, navigation and control', titleZh: '无人机设计、导航与控制', zhOfficial: true,
    list: 'A', credits: 6, semester: '1', sections: ['A'],
    desc: '探索小型无人机关键技术:传感器标定、GPS/IMU 导航、视觉-惯性导航、激光雷达导航、非线性动态逆与最优控制,并在真实无人机平台上开展前沿导航控制实验。',
    note: '',
    prereq: '良好的 MATLAB、C/C++ 编程能力与动手实践经验', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'IDAT7215', title: 'Computer programming for product development and applications', titleZh: '产品开发计算机编程与应用', zhOfficial: true,
    list: 'A', credits: 6, semester: '1', sections: ['A'],
    desc: '面向产品开发的实用编程技能:基础编程技术及其在软件控制、Web 应用与 IoT 中的应用;另涵盖 Excel 编程,释放其在数据挖掘与数据库集成等日常场景中的能力。',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'IDAT7222', title: 'Advanced CADCAM and AI driven manufacturing systems', titleZh: '先进 CADCAM 与 AI 驱动制造系统', zhOfficial: true,
    list: 'A', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: true, movedToB2026: false
  },
  {
    code: 'IDAT7224', title: 'Deep learning in engineering technology', titleZh: '工程技术中的深度学习', zhOfficial: true,
    list: 'A', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: true, movedToB2026: false
  },
  {
    code: 'IDAT7214', title: 'Advanced Technologies and Materials for Product Development', titleZh: '产品开发先进技术与材料', zhOfficial: true,
    list: 'A', credits: 6, semester: '2', sections: ['A'],
    desc: '面向产品开发的先进制造技术与新型材料:先进成形与增材制造工艺、功能材料选型与性能评估,并结合产品案例讨论工艺-材料-成本的协同决策。',
    note: '第二学期课程。本次更新的官方文件仅覆盖 2026-27 第一学期,该课程的排课与 List 归属待官方第二学期文件公布后再核对。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'IDAT7221', title: 'Data Analytics and Artificial Intelligence for Design Engineering and Business', titleZh: '设计工程与商业的数据分析与人工智能', zhOfficial: true,
    list: 'A', credits: 6, semester: '2', sections: ['A'],
    desc: '涵盖 AI 与机器学习、价值工程与产品成本、产品分析与项目管理:项目管理作为战略工具的核心要素与实务方法论,并运用数据分析概念解读定量数据、支撑设计决策。',
    note: '第二学期课程。本次更新的官方文件仅覆盖 2026-27 第一学期,该课程的排课与 List 归属待官方第二学期文件公布后再核对。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'IDAT7223', title: 'Ergonomic Design and Multimedia Technologies', titleZh: '人因工程设计与多媒体技术', zhOfficial: true,
    list: 'A', credits: 6, semester: '2', sections: ['A'],
    desc: '人因工程设计原则与多媒体技术在产品开发中的融合应用:人体测量与认知负荷、交互界面设计、多媒体内容制作与产品呈现。',
    note: '第二学期课程。本次更新的官方文件仅覆盖 2026-27 第一学期,该课程的排课与 List 归属待官方第二学期文件公布后再核对。',
    prereq: '', exclusive: '', cef: false, isNew2026: true, movedToB2026: false
  },
  {
    code: 'IDAT7225', title: 'Fundamentals of AI for Object Detection and Classification', titleZh: '目标检测与分类的人工智能基础', zhOfficial: true,
    list: 'A', credits: 6, semester: '2', sections: ['A'],
    desc: '面向目标检测与分类的人工智能基础:图像特征与卷积网络、检测与分类主流模型、数据集构建与评价指标,并结合工程场景实践。',
    note: '第二学期课程。本次更新的官方文件仅覆盖 2026-27 第一学期,该课程的排课与 List 归属待官方第二学期文件公布后再核对。',
    prereq: '', exclusive: '', cef: false, isNew2026: true, movedToB2026: false
  },

  // ============ List B 学科选修课(18 门) ============
  {
    code: 'CIVL6054', title: 'Engineering for transport systems', titleZh: '运输系统工程', zhOfficial: true,
    list: 'B', credits: 6, semester: '1', sections: ['A'],
    desc: '运输系统的工程视角:交通基础设施发展、运输方式选型、固定轨道系统、运输领域技术应用。',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'CIVL6061', title: 'Special topic in environmental engineering A', titleZh: '环境工程专题 A', zhOfficial: true,
    list: 'B', credits: 6, semester: '1', sections: ['A'],
    desc: '提供环境工程热点方向的深入学习机会,具体题目于开课学期初公布。',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7034', title: 'Operational research', titleZh: '运筹学', zhOfficial: true,
    list: 'B', credits: 6, semester: '1', sections: ['A', 'B'],
    desc: '运筹学方法论:问题分析、建模与求解;数学规划在物流运输中的应用、设备更新模型、投资风险分析、排队论与事件仿真。',
    note: '官方课表列出多个上课时段,与选课清单中的 A/B 两个班次对应;课表未标注班次字母,实际班次以选课系统与开课院系公布为准。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7111', title: 'Data-driven optimization', titleZh: '数据驱动优化', zhOfficial: true,
    list: 'B', credits: 6, semester: '1', sections: ['A'],
    desc: '智能优化算法总览:遗传算法、模拟退火、禁忌搜索、粒子群、蚁群算法与动态系统优化策略,含供应链、物流、制造与服务业案例。',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7139', title: 'Cyber-physical systems', titleZh: '信息物理系统', zhOfficial: true,
    list: 'B', credits: 6, semester: '1', sections: ['A'],
    desc: 'CPS 导论:传感器与传感网络、机器人与自动化、CPS 通信、数据分析、数字孪生、云计算与系统集成,以讲座+项目方式开展。',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC6098', title: 'Electronic and mobile commerce', titleZh: '电子与移动商务', zhOfficial: true,
    list: 'B', credits: 6, semester: '1', sections: ['A', 'B'],
    desc: '电商与移动商务的技术、商业与管理知识:B2C/B2B 模式、定位技术、RFID、GPS、移动网络、电子支付、NFC、二维码、AR 等前沿应用。',
    note: '',
    prereq: '', exclusive: 'ELEC6078 / ELEC6086', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC6603', title: 'Success in industrial entrepreneurship', titleZh: '工业创业成功之道', zhOfficial: true,
    list: 'B', credits: 6, semester: '1', sections: ['A', 'B'],
    desc: '创业框架:识别资源/能力/环境与机会、商业计划书、新创企业融资、风险平衡与分阶段融资、组织创建,结合案例与项目实践。',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC6604', title: 'Neural networks, fuzzy systems and genetic algorithms', titleZh: '神经网络、模糊系统与遗传算法', zhOfficial: true,
    list: 'B', credits: 6, semester: '1', sections: ['A', 'B'],
    desc: '应用人工智能三大主题导论:神经网络、模糊系统与遗传算法的基本概念、技术及在各类工程问题中的应用。',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'IDAT7217', title: 'Advanced topics in innovative design and technology A', titleZh: '创新设计与科技高级专题 A', zhOfficial: true,
    list: 'B', credits: 6, semester: '1', sections: ['A'],
    desc: '选取创新设计与科技前沿专题并应用于相关问题,具体题目于开课学期初公布。',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'IDAT7220', title: 'STEM education', titleZh: 'STEM 教育', zhOfficial: true,
    list: 'B', credits: 6, semester: '1', sections: ['A'],
    desc: 'STEM 整合式、项目式教学理念:通过阅读、视频、教学设计与系列迷你项目,学习课程整合实践与学生自主学习的最佳做法。',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MECH6010', title: 'Service behaviour of materials', titleZh: '材料服役行为', zhOfficial: true,
    list: 'B', credits: 6, semester: '1', sections: ['A'],
    desc: '蠕变、断裂、疲劳与腐蚀等材料服役行为的物理基础与预测;通过微观组织调控改善工程材料(含工程塑料与复合材料)服役性能。',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MECH6034', title: 'Computer-aided product development (CAPD)', titleZh: '计算机辅助产品开发', zhOfficial: true,
    list: 'B', credits: 6, semester: '1', sections: ['A', 'B'],
    desc: '产品开发方法论、计算机辅助设计、触觉形状建模、逆向工程、增材制造与快速模具;理解制造成本约束,并运用相关技术开发简单产品。',
    note: '官方课表列出多个上课时段,与选课清单中的 A/B 两个班次对应;课表未标注班次字母,实际班次以选课系统与开课院系公布为准。',
    prereq: '', exclusive: '', cef: true, isNew2026: false, movedToB2026: true
  },
  {
    code: 'MECH6046', title: 'Microsystems for energy, biomedical and consumer electronics applications', titleZh: '能源、生医与消费电子微系统', zhOfficial: true,
    list: 'B', credits: 6, semester: '1', sections: ['A'],
    desc: 'MEMS 与微流控系统的工作原理、设计、材料、制造与封装,及其在能源、机械与生物医学工程中的应用,含丰富案例教学。',
    note: '',
    prereq: '', exclusive: '修过 MECH6032 者不可选', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MECH7010', title: 'Contemporary robotics', titleZh: '当代机器人', zhOfficial: true,
    list: 'B', credits: 6, semester: '1', sections: ['A'],
    desc: '现代机器人系统核心技术:系统组成与工作原理、传感与驱动单元、运动学建模、感知估计与实时控制,涵盖移动机器人、无人机、无人驾驶与软体机器人前沿。',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'RECO7605', title: 'Information management', titleZh: '信息管理', zhOfficial: true,
    list: 'B', credits: 6, semester: '1', sections: ['A'],
    desc: '信息化与供应链管理:信息/人力/资金/资源流、制造与建造供应链、效率与响应、IT 集成、跨组织文化与契约议题。',
    note: '官方课表为本课程标注了两段指定日期:10 月 20 日(周二)一次,以及 10—11 月共 7 个周六;两段合并构成本课程的完整安排,并非两个班次。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'TDLL6024', title: 'Teaching and learning with digital technology', titleZh: '数字技术与教学', zhOfficial: true,
    list: 'B', credits: 6, semester: '1', sections: ['A', 'B', 'C'],
    desc: '信息技术教学应用总览:从计算机辅助教程到学习对象、认知工具与协作技术,强调支撑技术整合的学习理论与教育情境。',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'TDLL6334', title: 'Educational video and storytelling', titleZh: '教育视频与故事化叙事', zhOfficial: false,
    list: 'B', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'URBA6011', title: 'Programming and foundations in urban data analysis', titleZh: '城市数据分析编程基础', zhOfficial: true,
    list: 'B', credits: 6, semester: '1', sections: ['A'],
    desc: '城市数据分析的编程与基础知识:空间数据获取、GIS/BIM 分析技术,为城市大数据分析类课程的先修课。',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'IDAT7218', title: 'Advanced Topics in Innovative Design and Technology B', titleZh: '创新设计与科技高级专题 B', zhOfficial: true,
    list: 'B', credits: 6, semester: '2', sections: ['A'],
    desc: '选取创新设计与科技前沿专题并应用于相关问题,具体题目于开课学期初公布。',
    note: '第二学期课程。本次更新的官方文件仅覆盖 2026-27 第一学期,该课程的排课与 List 归属待官方第二学期文件公布后再核对。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'IDAT7219', title: 'Smart Building Technology', titleZh: '智能建筑技术', zhOfficial: true,
    list: 'B', credits: 6, semester: '2', sections: ['A'],
    desc: '应用 IoT 技术(硬件、软件与连接)管理 HVAC、照明与安防系统;实时采集并分析楼宇运营数据,改善楼宇运维与保养。',
    note: '第二学期课程。本次更新的官方文件仅覆盖 2026-27 第一学期,该课程的排课与 List 归属待官方第二学期文件公布后再核对。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },

  // ============ 跨课程选修 Cross-curriculum electives(15 门) ============
  {
    code: 'LATX7513', title: 'Fundamentals of aircraft and aviation', titleZh: '航空器与航空基础', zhOfficial: false,
    list: 'XC', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'LATX7517', title: 'Aviation economics: business model and entrepreneurship', titleZh: '航空经济学:商业模式与创业', zhOfficial: false,
    list: 'XC', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'LATX7518', title: 'Fundamentals of wireless communications and sensing in space', titleZh: '空间无线通信与感知基础', zhOfficial: false,
    list: 'XC', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MECH6019', title: 'Sources and control of air pollution', titleZh: '空气污染来源与控制', zhOfficial: false,
    list: 'XC', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MECH6045', title: 'Nanotechnology: fundamentals and applications', titleZh: '纳米技术:原理与应用', zhOfficial: false,
    list: 'XC', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MECH7014', title: 'Railway engineering - metro and high-speed rail', titleZh: '铁路工程:地铁与高速铁路', zhOfficial: false,
    list: 'XC', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MECH7016', title: 'Railway project management', titleZh: '铁路项目管理', zhOfficial: false,
    list: 'XC', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MECH7020', title: 'Autonomous Drones with AI', titleZh: '人工智能自主无人机', zhOfficial: false,
    list: 'XC', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MECH7029', title: 'Aeroacoustics and noise control with machine learning', titleZh: '气动声学与机器学习噪声控制', zhOfficial: false,
    list: 'XC', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MECH7030', title: 'Intelligent computation for aerodynamics and structural mechanics', titleZh: '空气动力学与结构力学智能计算', zhOfficial: false,
    list: 'XC', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MEST7412', title: 'Solid-state materials and physics', titleZh: '固态材料与物理', zhOfficial: false,
    list: 'XC', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MEST7418', title: 'Nanophotonics', titleZh: '纳米光子学', zhOfficial: false,
    list: 'XC', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MEST7419', title: 'Safety training and microelectronics process', titleZh: '安全培训与微电子工艺', zhOfficial: false,
    list: 'XC', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MEST7420', title: 'CMOS IC analog circuit design: basic circuits', titleZh: 'CMOS 集成电路模拟电路设计:基础电路', zhOfficial: false,
    list: 'XC', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MEST7421', title: 'Thin film transistor technology and applications', titleZh: '薄膜晶体管技术与应用', zhOfficial: false,
    list: 'XC', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },

  // ============ 跨系选修 Cross-departmental electives(73 门) ============
  {
    code: 'CIVL6004', title: 'Advanced soil mechanics', titleZh: '高等土力学', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'CIVL6006', title: 'Advanced water and wastewater treatment', titleZh: '高级给水与污水处理', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'CIVL6007', title: 'Behavioural travel demand modelling', titleZh: '出行行为需求建模', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'CIVL6013', title: 'Concrete technology', titleZh: '混凝土技术', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'CIVL6026', title: 'Finite element method', titleZh: '有限元方法', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'CIVL6053', title: 'Wind engineering', titleZh: '风工程', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'CIVL7019', title: 'Statistical methods for civil engineering', titleZh: '土木工程统计方法', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'CIVL7023', title: 'Industrialized construction with automation and robotics', titleZh: '自动化与机器人工业化建造', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'CIVL7024', title: 'Computer vision for infrastructure construction and management', titleZh: '基础设施建造与管理计算机视觉', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'COMP7309', title: 'Quantum computing and artificial intelligence', titleZh: '量子计算与人工智能', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '官方选课系统(2026-08-27 查询)显示本课程第一轮在线选课已截止(Online enrolment is now closed);第二轮选课时间暂未通知,请时刻关注选课系统。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'COMP7507', title: 'Visualization and visual analytics', titleZh: '可视化与视觉分析', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '官方选课系统(2026-08-27 查询)显示本课程第一轮在线选课已截止(Online enrolment is now closed);第二轮选课时间暂未通知,请时刻关注选课系统。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'COMP7508', title: 'Data-driven computer animation', titleZh: '数据驱动的计算机动画', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '官方选课系统(2026-08-27 查询)显示本课程第一轮在线选课已截止(Online enrolment is now closed);第二轮选课时间暂未通知,请时刻关注选课系统。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASC7104', title: 'Advanced database systems', titleZh: '高级数据库系统', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '官方选课系统(2026-08-27 查询)显示本课程第一轮在线选课已截止(Online enrolment is now closed);第二轮选课时间暂未通知,请时刻关注选课系统。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'COMP7103', title: 'Data mining', titleZh: '数据挖掘', zhOfficial: false,
    list: 'B', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: 'CDS 学院面向 MSc(Eng)(IDT) 学生开设,保留少量名额,选课须经计算与数据科学学院审批(官方课表 2026-08-28)。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'COMP7506', title: 'Smart phone apps development', titleZh: '智能手机应用开发', zhOfficial: false,
    list: 'B', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: 'CDS 学院面向 MSc(Eng)(IDT) 学生开设,保留少量名额,选课须经计算与数据科学学院审批(官方课表 2026-08-28)。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'COMP7802', title: 'Introduction to financial computing', titleZh: '金融计算导论', zhOfficial: false,
    list: 'B', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: 'CDS 学院面向 MSc(Eng)(IDT) 学生开设,保留少量名额,选课须经计算与数据科学学院审批(官方课表 2026-08-28)。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'COMP7906', title: 'Introduction to cyber security', titleZh: '网络安全导论', zhOfficial: false,
    list: 'B', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: 'CDS 学院面向 MSc(Eng)(IDT) 学生开设,保留少量名额,选课须经计算与数据科学学院审批(官方课表 2026-08-28)。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7015', title: 'Engineering economics and finance', titleZh: '工程经济与财务', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A', 'B'],
    desc: '',
    note: '官方课表列出多个上课时段,与选课清单中的 A/B 两个班次对应;课表未标注班次字母,实际班次以选课系统与开课院系公布为准。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7020', title: 'Supply chain management', titleZh: '供应链管理', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A', 'B'],
    desc: '',
    note: '官方课表列出多个上课时段,与选课清单中的 A/B 两个班次对应;课表未标注班次字母,实际班次以选课系统与开课院系公布为准。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7113', title: 'Optimization methods for intelligent systems', titleZh: '智能系统优化方法', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7119', title: 'Digital enterprises and e-commerce', titleZh: '数字企业与电子商务', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7137', title: 'Virtual reality and applications', titleZh: '虚拟现实与应用', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A', 'B'],
    desc: '',
    note: '官方课表列出多个上课时段,与选课清单中的 A/B 两个班次对应;课表未标注班次字母,实际班次以选课系统与开课院系公布为准。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7138', title: 'Healthcare systems engineering', titleZh: '医疗健康系统工程', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7140', title: 'Machine learning and applications', titleZh: '机器学习与应用', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A', 'B'],
    desc: '',
    note: '官方课表列出多个上课时段,与选课清单中的 A/B 两个班次对应;课表未标注班次字母,实际班次以选课系统与开课院系公布为准。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7141', title: 'Advanced digital twin and applications', titleZh: '高级数字孪生与应用', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7142', title: 'Advanced computational methods', titleZh: '高级计算方法', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7143', title: 'The internet of things', titleZh: '物联网', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7154', title: 'Intelligent technologies for systems engineering A', titleZh: '系统工程智能技术 A', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '密集课程(Intensive Course):2027 年 1 月 4 日至 1 月 15 日集中授课。排课来源:2026-Sem1-Engg.pdf 第 20 页(共 27 页) —— 该页页眉与页脚均标明本课程为 DASE7154,但页内各单元格的课程代码误印为 DASE7212,本站按该页实际排课录入。官方附注原文:The examination results of DASE7154 will be released together with all other courses to be offered in the 2nd Semester).',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7155', title: 'Intelligent technologies for systems engineering B', titleZh: '系统工程智能技术 B', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '密集课程(Intensive Course):2027 年 1 月 4 日至 1 月 9 日集中授课。排课来源:2026-Sem1-Engg.pdf 第 22 页(共 27 页)。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7212', title: 'Physical internet', titleZh: '物理互联网', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '密集课程(Intensive Course):2027 年 1 月 4 日至 1 月 15 日集中授课。排课来源:2026-Sem1-Engg.pdf 第 19 页(共 27 页)。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7310', title: 'Financial engineering', titleZh: '金融工程', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7341', title: 'Technology innovation and entrepreneurship', titleZh: '技术创新与创业', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7501', title: 'Robot modelling, planning and control', titleZh: '机器人建模、规划与控制', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['B'],
    desc: '',
    note: '官方课表列出多个上课时段,但未标注班次字母;究竟是不同班次还是讲授/实验分场,请以选课系统与开课院系公布为准。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7502', title: 'Robot sensing and intelligence', titleZh: '机器人感知与智能', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['B'],
    desc: '',
    note: '官方课表列出多个上课时段,但未标注班次字母;究竟是不同班次还是讲授/实验分场,请以选课系统与开课院系公布为准。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7503', title: 'Robotic systems integration', titleZh: '机器人系统集成', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['B'],
    desc: '',
    note: '官方课表列出多个上课时段,但未标注班次字母;究竟是不同班次还是讲授/实验分场,请以选课系统与开课院系公布为准。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7506', title: 'Advanced machine learning methods', titleZh: '高级机器学习方法', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7507', title: 'Frontiers in robotics and intelligent systems', titleZh: '机器人与智能系统前沿', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7508', title: 'Security in intelligent systems', titleZh: '智能系统安全', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7509', title: 'Artificial intelligence for system automation', titleZh: '系统自动化人工智能', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7902', title: 'Project management', titleZh: '项目管理', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC6008', title: 'Pattern recognition and machine learning', titleZh: '模式识别与机器学习', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC6026', title: 'Digital signal processing', titleZh: '数字信号处理', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC6027', title: 'Integrated circuit systems design', titleZh: '集成电路系统设计', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC6036', title: 'High-performance computer architecture', titleZh: '高性能计算机体系结构', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC6063', title: 'Optoelectronics and lightwave technology', titleZh: '光电子与光波技术', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC6080', title: 'Telecommunications systems and management', titleZh: '电信系统与管理', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A', 'B'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC6081', title: 'Biomedical signals and systems', titleZh: '生物医学信号与系统', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC6085', title: 'The role of a computerized SCADA system in power system operation', titleZh: '电力系统运行中的计算机化 SCADA 系统', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC6095', title: 'Smart grid', titleZh: '智能电网', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC6097', title: 'IP networks', titleZh: 'IP 网络', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC6099', title: 'Wireless communications and networking', titleZh: '无线通信与组网', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC6103', title: 'Satellite communications', titleZh: '卫星通信', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC7011', title: 'Energy Internet', titleZh: '能源互联网', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A', 'B'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC7013', title: 'Leadership in future energy industry', titleZh: '未来能源产业领导力', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC7029', title: 'Analog IC design computing and memories', titleZh: '模拟集成电路设计:计算与存储', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A', 'B'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC7043', title: 'Digital image processing and computer vision', titleZh: '数字图像处理与计算机视觉', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A', 'C'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC7082', title: 'Artificial intelligence in finance', titleZh: '金融人工智能', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC7084', title: 'Advanced database', titleZh: '高级数据库', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC7402', title: 'Advanced electric vehicle technology', titleZh: '先进电动汽车技术', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC7403', title: 'Advanced power electronics', titleZh: '先进电力电子', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC7404', title: 'Advanced railway engineering', titleZh: '先进铁路工程', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC7467', title: 'Power system protection', titleZh: '电力系统保护', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC7469', title: 'Advanced electrical energy and power conversion systems', titleZh: '先进电能与功率变换系统', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'EMEE6002', title: 'Sustainability and climate change', titleZh: '可持续发展与气候变化', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A', 'B'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'EMEE6005', title: 'Renewable energy technology I: Fundamental', titleZh: '可再生能源技术 I:基础', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'EMEE6007', title: 'Energy and carbon audit', titleZh: '能源与碳审计', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'EMEE6011', title: 'Energy saving lighting', titleZh: '节能照明', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'EMEE7013', title: 'Leadership in future energy industry', titleZh: '未来能源产业领导力', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ICES7001', title: 'Advanced semiconductor device', titleZh: '先进半导体器件', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ICES7008', title: 'Advanced electronic packaging and integration', titleZh: '先进电子封装与集成', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ICES7009', title: 'Integrated silicon photonics', titleZh: '集成硅光子学', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MEBS6001', title: 'Electrical installations', titleZh: '电气装置', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MEBS6002', title: 'Lighting engineering', titleZh: '照明工程', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MEBS6014', title: 'Computer modelling and simulation', titleZh: '计算机建模与仿真', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MEBS6015', title: 'Natural and hybrid ventilation of buildings', titleZh: '建筑自然通风与混合通风', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MEBS6019', title: 'Extra-low-voltage electrical systems in buildings', titleZh: '建筑特低压电气系统', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MEBS7013', title: 'Fire service installations', titleZh: '消防设施', zhOfficial: false,
    list: 'XD', credits: 6, semester: '1', sections: ['A'],
    desc: '',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },

  // ============ 毕业论文 / 毕业项目 ============
  {
    code: 'IDAT7100', title: 'Dissertation', titleZh: '毕业论文(毕业设计)', zhOfficial: true,
    list: 'capstone', credits: 24, semester: '1', sections: ['A'],
    desc: '24 学分毕业论文(毕业设计):在工学院或相关学院导师指导下,个人或小组完成设计、实验或分析研究课题;需参加研讨会并提交完整书面报告。适用于 2025/26 及以后入学者。',
    note: '',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'IDAT7101', title: 'Capstone project', titleZh: '顶点项目(毕业项目)', zhOfficial: true,
    list: 'capstone', credits: 24, semester: 'full', sections: ['A'],
    desc: '毕业项目:在导师指导下完成综合性项目研究与实践,无固定上课时间。学分与适用入学年级以学院最终公布的课程规程为准。',
    note: '全年课程。本次更新的官方文件仅覆盖 2026-27 第一学期,其中未列出本课程,排课与学分安排待官方第二学期文件公布后再核对。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  }
];

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
