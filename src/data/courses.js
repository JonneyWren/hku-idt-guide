// 课程数据库
// 来源:R363_REG.pdf(MSc(Eng) IDT 课程大纲,2025-26 起适用)
//      + 学院官网 2026/27 课程列表更新(26 级适用)
// 字段说明:
//   list: 'A' = List A 学科核心课, 'B' = List B 学科选修课, 'capstone' = 毕业设计
//   semester: '1' | '2' | '1&2' | 'full' | 'TBD'(待公布)
//   isNew2026: 26 级新增 List A 课程(待大学批准)
//   movedToB2026: 26 级起由 List A 转入 List B
//   cef: 香港持续进修基金(CEF)可报销课程(仅限香港居民)

export const COURSES = [
  // ============ List A 学科核心课程 ============
  {
    code: 'IDAT7211', title: 'Innovation and R & D Principle', titleZh: '创新与研发原理',
    list: 'A', credits: 6, semester: '1&2',
    desc: '聚焦创新设计原理与基础技术:技术发明史与现代生活、设计流程与创意思维、设计简报与规格制定、物联网(IoT)概念。培养产品设计中的创造性、分析性与批判性思维,并运用建模工具进行表达沟通。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'IDAT7212', title: 'Mechatronic Systems Engineering', titleZh: '机电一体化系统工程',
    list: 'A', credits: 6, semester: '2',
    desc: '融合机械、电子与软件工程:基于模型的机电系统设计、多域建模与仿真、鲁棒控制方法、性能分析评估、系统诊断与维护、IoT 应用。学生需通过迷你项目开发具体的机电一体化产品。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'IDAT7213', title: 'UAV Design, Navigation and Control', titleZh: '无人机设计、导航与控制',
    list: 'A', credits: 6, semester: '1&2',
    desc: '探索小型无人机关键技术:传感器标定、GPS/IMU 导航、视觉-惯性导航、激光雷达导航、非线性动态逆与最优控制,并在真实无人机平台上开展前沿导航控制实验。',
    prereq: '良好的 MATLAB、C/C++ 编程能力与动手实践经验', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'IDAT7215', title: 'Computer Programming for Product Development and Applications', titleZh: '产品开发计算机编程与应用',
    list: 'A', credits: 6, semester: '1&2',
    desc: '面向产品开发的实用编程技能:基础编程技术及其在软件控制、Web 应用与 IoT 中的应用;另涵盖 Excel 编程,释放其在数据挖掘与数据库集成等日常场景中的能力。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'IDAT7216', title: 'Function Design, Aesthetics Design, Manufacturing and Intellectual Property Law', titleZh: '功能设计、美学设计、制造与知识产权法',
    list: 'A', credits: 6, semester: '2',
    desc: '功能设计与美学设计的基本原理,平衡实用因素与心理因素;面向量产的制造方法;以及保护产品发明人权益的知识产权法入门。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'IDAT7221', title: 'Data Analytics and Artificial Intelligence for Design Engineering and Business', titleZh: '设计工程与商业的数据分析与人工智能',
    list: 'A', credits: 6, semester: '1',
    desc: '涵盖 AI 与机器学习、价值工程与产品成本、产品分析与项目管理:项目管理作为战略工具的核心要素与实务方法论,并运用数据分析概念解读定量数据、支撑设计决策。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'IDAT7222', title: 'Advanced CADCAM and AI Driven Manufacturing Systems', titleZh: '先进 CADCAM 与 AI 驱动制造系统',
    list: 'A', credits: 6, semester: 'TBD',
    desc: '26 级新增 List A 课程(待大学最终批准):先进计算机辅助设计/制造与人工智能驱动的智能制造系统。课程详情以学院公布大纲为准。',
    prereq: '', exclusive: '', cef: false, isNew2026: true, movedToB2026: false
  },
  {
    code: 'IDAT7223', title: 'Ergonomic Design and Multimedia Technologies', titleZh: '人因工程设计与多媒体技术',
    list: 'A', credits: 6, semester: 'TBD',
    desc: '26 级新增 List A 课程(待大学最终批准):人因工程设计原则与多媒体技术在产品开发中的融合应用。课程详情以学院公布大纲为准。',
    prereq: '', exclusive: '', cef: false, isNew2026: true, movedToB2026: false
  },
  {
    code: 'IDAT7224', title: 'Deep Learning in Engineering Technology', titleZh: '工程技术中的深度学习',
    list: 'A', credits: 6, semester: 'TBD',
    desc: '26 级新增 List A 课程(待大学最终批准):深度神经网络在工程技术场景中的应用。课程详情以学院公布大纲为准。',
    prereq: '', exclusive: '', cef: false, isNew2026: true, movedToB2026: false
  },
  {
    code: 'IDAT7225', title: 'Autonomous Robots and Intelligent Control', titleZh: '自主机器人与智能控制',
    list: 'A', credits: 6, semester: 'TBD',
    desc: '26 级新增 List A 课程(待大学最终批准):自主机器人系统与智能控制方法。课程详情以学院公布大纲为准。',
    prereq: '', exclusive: '', cef: false, isNew2026: true, movedToB2026: false
  },

  // ============ 26 级起转入 List B 的原 List A 课程 ============
  {
    code: 'MECH6034', title: 'Computer-aided Product Development (CAPD)', titleZh: '计算机辅助产品开发',
    list: 'B', credits: 6, semester: '1&2',
    desc: '产品开发方法论、计算机辅助设计、触觉形状建模、逆向工程、增材制造与快速模具;理解制造成本约束,并运用相关技术开发简单产品。',
    prereq: '', exclusive: '', cef: true, isNew2026: false, movedToB2026: true
  },
  {
    code: 'COMP7503', title: 'Multimedia Technologies', titleZh: '多媒体技术',
    list: 'B', credits: 6, semester: '2',
    desc: '多媒体计算的基本概念与新兴技术:媒体数据获取、感知编码原理、媒体处理与操作、多媒体内容组织与分析,构建完整多媒体应用。',
    prereq: '', exclusive: '', cef: true, isNew2026: false, movedToB2026: true
  },
  {
    code: 'COMP7506', title: 'Smart Phone Apps Development', titleZh: '智能手机应用开发',
    list: 'B', credits: 6, semester: '2',
    desc: '智能手机 App 的设计与技术要点:小屏交互、硬件传感器运用,介绍 Android(Java)与 iOS(Swift)现代开发环境,指导学生开发自己的 App。',
    prereq: '具备基础编程知识', exclusive: 'COMP3330 交互式移动应用设计与编程', cef: true, isNew2026: false, movedToB2026: true
  },

  // ============ List B 学科选修课程 ============
  {
    code: 'IDAT7217', title: 'Advanced Topics in Innovative Design and Technology A', titleZh: '创新设计与科技高级专题 A',
    list: 'B', credits: 6, semester: '1&2',
    desc: '选取创新设计与科技前沿专题并应用于相关问题,具体题目于开课学期初公布。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'IDAT7218', title: 'Advanced Topics in Innovative Design and Technology B', titleZh: '创新设计与科技高级专题 B',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '选取创新设计与科技前沿专题并应用于相关问题,具体题目于开课学期初公布。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'IDAT7219', title: 'Smart Building Technology', titleZh: '智能建筑技术',
    list: 'B', credits: 6, semester: '1',
    desc: '应用 IoT 技术(硬件、软件与连接)管理 HVAC、照明与安防系统;实时采集并分析楼宇运营数据,改善楼宇运维与保养。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'IDAT7220', title: 'STEM Education', titleZh: 'STEM 教育',
    list: 'B', credits: 6, semester: '2',
    desc: 'STEM 整合式、项目式教学理念:通过阅读、视频、教学设计与系列迷你项目,学习课程整合实践与学生自主学习的最佳做法。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MECH6010', title: 'Service Behaviour of Materials', titleZh: '材料服役行为',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '蠕变、断裂、疲劳与腐蚀等材料服役行为的物理基础与预测;通过微观组织调控改善工程材料(含工程塑料与复合材料)服役性能。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MECH6046', title: 'Microsystems for Energy, Biomedical and Consumer Electronics Applications', titleZh: '能源、生医与消费电子微系统',
    list: 'B', credits: 6, semester: 'TBD',
    desc: 'MEMS 与微流控系统的工作原理、设计、材料、制造与封装,及其在能源、机械与生物医学工程中的应用,含丰富案例教学。',
    prereq: '', exclusive: '修过 MECH6032 者不可选', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MECH6047', title: 'Finite Element Analysis in Mechanics', titleZh: '力学有限元分析',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '有限元基本概念与流程:桁架/梁/平面/板问题弹性分析、热-力耦合、模态与动力分析、几何与材料非线性、接触分析,含主流软件实操。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MECH7010', title: 'Contemporary Robotics', titleZh: '当代机器人',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '现代机器人系统核心技术:系统组成与工作原理、传感与驱动单元、运动学建模、感知估计与实时控制,涵盖移动机器人、无人机、无人驾驶与软体机器人前沿。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MECH7012', title: 'Principles of Engineering Management', titleZh: '工程管理原理',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '工程管理基本原理与方法:系统工程、运营计划与控制、ERP 系统、供应链、绿色管理、商业伦理、风险与危机管理。',
    prereq: '', exclusive: '', cef: true, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7111', title: 'Data-driven Optimization', titleZh: '数据驱动优化',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '智能优化算法总览:遗传算法、模拟退火、禁忌搜索、粒子群、蚁群算法与动态系统优化策略,含供应链、物流、制造与服务业案例。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7139', title: 'Cyber-physical Systems', titleZh: '信息物理系统',
    list: 'B', credits: 6, semester: 'TBD',
    desc: 'CPS 导论:传感器与传感网络、机器人与自动化、CPS 通信、数据分析、数字孪生、云计算与系统集成,以讲座+项目方式开展。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASE7034', title: 'Operational Research', titleZh: '运筹学',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '运筹学方法论:问题分析、建模与求解;数学规划在物流运输中的应用、设备更新模型、投资风险分析、排队论与事件仿真。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'COMP7103', title: 'Data Mining', titleZh: '数据挖掘',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '数据挖掘主流方法与 OLAP:体系结构、数据预处理、关联规则、分类、聚类、数据挖掘系统与语言、Web/空间/时态高级挖掘。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'DASC7606', title: 'Deep Learning', titleZh: '深度学习',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '深度神经网络及其在 NLP、图像处理、金融预测、博弈与机器人中的应用:线性/逻辑回归、网络训练、RNN、CNN、生成模型、深度强化学习与伦理议题。',
    prereq: '建议具备算法、微积分、线性代数与编程基础', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'COMP7404', title: 'Computational Intelligence and Machine Learning', titleZh: '计算智能与机器学习',
    list: 'B', credits: 6, semester: 'TBD',
    desc: 'AI/ML 的数学与算法框架:搜索与启发式搜索、约束满足、博弈、监督/非监督学习、降维、学习理论、强化学习、迁移学习与 AI 伦理。',
    prereq: '建议具备数据结构、概率、线代与编程基础', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'COMP7408', title: 'Distributed Ledger and Blockchain Technology', titleZh: '分布式账本与区块链技术',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '区块链核心技术要素与智能合约、许可链/非许可链变体与主流平台,探讨安全性、效率与可扩展性,以及加密货币与金融应用。',
    prereq: 'COMP7906 或 ICOM6045,并具备编程经验', exclusive: '', cef: true, isNew2026: false, movedToB2026: false
  },
  {
    code: 'COMP7802', title: 'Introduction to Financial Computing', titleZh: '金融计算导论',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '投资银行领域的金融计算:收益率曲线构建实务、金融建模与现代风险管理,结合金融产品知识、金融数学与计算技术。',
    prereq: '无需金融背景;需 Excel 操作能力,基础微积分与数值计算为佳', exclusive: '', cef: true, isNew2026: false, movedToB2026: false
  },
  {
    code: 'COMP7901', title: 'Legal Protection of Digital Property', titleZh: '数字产权法律保护',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '面向计算机专业人员的数字财产法律保护:软件与网站版权、软件与算法专利、个人数据保护等议题及法律解决方案。',
    prereq: '', exclusive: 'COMP3311 计算法律面面观 / ECOM6004 IT 与电商法律', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'COMP7906', title: 'Introduction to Cyber Security', titleZh: '网络安全导论',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '网络世界中信息与数据的保护方法(含隐私议题):安全导论、网络攻击与威胁、密码算法及应用、网络安全与基础设施。',
    prereq: '建议具备 CS 数学、应用统计与 Python 基础', exclusive: 'ICOM6045 电子商务安全基础', cef: true, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC6092', title: 'Green Project Management', titleZh: '绿色项目管理',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '绿色项目的范围与价值:使命目标澄清、审计与可行性研究、项目计划与控制系统工具、合同管理(策略/文件/招标)、现场实施与质量安全环境管理。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC6601', title: 'Industrial Marketing', titleZh: '工业营销',
    list: 'B', credits: 6, semester: 'TBD',
    desc: 'B2B 营销:价值链、营销机会与策略、渠道关系、销售管理、营销传播、客户计划、商业伦理与危机管理,以案例与项目驱动学习。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC6603', title: 'Success in Industrial Entrepreneurship', titleZh: '工业创业成功之道',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '创业框架:识别资源/能力/环境与机会、商业计划书、新创企业融资、风险平衡与分阶段融资、组织创建,结合案例与项目实践。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC6604', title: 'Neural Networks, Fuzzy Systems and Genetic Algorithms', titleZh: '神经网络、模糊系统与遗传算法',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '应用人工智能三大主题导论:神经网络、模糊系统与遗传算法的基本概念、技术及在各类工程问题中的应用。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'ELEC6098', title: 'Electronic and Mobile Commerce', titleZh: '电子与移动商务',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '电商与移动商务的技术、商业与管理知识:B2C/B2B 模式、定位技术、RFID、GPS、移动网络、电子支付、NFC、二维码、AR 等前沿应用。',
    prereq: '', exclusive: 'ELEC6078 / ELEC6086', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MEDD8860', title: 'Emerging Technologies in STEM Education', titleZh: 'STEM 教育新兴技术',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '纵览 STEM 教育中当前与新兴的工具、实践与主题,回顾跨学科整合的历史发展,展望未来课堂的数字技术趋势。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'MEDD8914', title: 'Implementing STEM/STEAM-rich Making: Opportunities and Challenges', titleZh: 'STEM/STEAM 创客教育实施',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '建构主义与创客文化:通过动手活动探索创客实践路径,以 SWOT 分析与资金申请书撰写检验实施机遇与挑战,培养 STEM 教育领导力。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'TDLL6024', title: 'Teaching and Learning with Digital Technology', titleZh: '数字技术与教学',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '信息技术教学应用总览:从计算机辅助教程到学习对象、认知工具与协作技术,强调支撑技术整合的学习理论与教育情境。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'TDLL6333', title: 'Mobile and Ubiquitous Technology in Education', titleZh: '教育中的移动与泛在技术',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '移动/泛在技术对教育与培训的影响:次世代学习系统潜力,并实践设计开发简单的移动教育应用(面向对象编程+云端集成)。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'TDLL7341', title: 'Game-based Learning Environments', titleZh: '游戏化学习环境',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '数字游戏化学习(DGBL)理念:商业游戏与专用教育游戏的教育学考量,教育游戏的现状趋势及设计、实施与评估方法。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'TDLL7349', title: 'Data Science and Learning Analytics', titleZh: '数据科学与学习分析',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '数据科学核心概念与学习分析/教育数据挖掘:数据预处理与存储、推断与预测分析、机器学习、文本与网络分析、可视化、数据伦理。',
    prereq: '建议具备本科统计学基础', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'CIVL6054', title: 'Engineering for Transport Systems', titleZh: '运输系统工程',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '运输系统的工程视角:交通基础设施发展、运输方式选型、固定轨道系统、运输领域技术应用。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'CIVL6061', title: 'Special Topic in Environmental Engineering A', titleZh: '环境工程专题 A',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '提供环境工程热点方向的深入学习机会,具体题目于开课学期初公布。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'CIVL6062', title: 'Special Topic in Environmental Engineering B', titleZh: '环境工程专题 B',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '提供环境工程热点方向的深入学习机会,具体题目于开课学期初公布。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'CIVL7005', title: 'Sustainable Construction Technology: Principles and Practices', titleZh: '可持续建造技术:原理与实践',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '可持续建造语境下的技术知识:可持续建造概念、系统理论、技术创新理论、技术类型与应用、技术选择与管理策略。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'CIVL7006', title: 'Optimization Techniques for Transportation Applications', titleZh: '交通应用优化技术',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '求解交通问题的优化方法:线性规划、非线性规划、网络优化与整数规划。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'CIVL7016', title: 'Land Transport and the Environment', titleZh: '陆上交通与环境',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '陆上运输系统:铁路与道路建设、铁路噪声排放与消减、道路的空气/噪声/水污染及测量、估算与治理方法。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'URBA6001', title: 'Foundations in Spatial Data Analysis', titleZh: '空间数据分析基础',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '智慧城市的空间数据基础:多源传感器空间数据获取、AI 应用、GIS 与 BIM 空间分析技术,面向规划/测绘/建筑/工程等专业背景。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'URBA6002', title: 'Urban Big Data Analytics', titleZh: '城市大数据分析',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '城市大数据处理、分析与建模进阶:概念框架、方法论与软件工具,应用城市模型解释现状并预测未来变化。',
    prereq: 'URBA6011 城市数据分析编程基础', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'URBA6009', title: 'Artificial Intelligence for Future Cities', titleZh: '未来城市的人工智能',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '编程、计算思维与 AI 导论:关键算法与数据结构、编程技能,以及如何用软件与智能技术解决城市问题。',
    prereq: 'URBA6011 城市数据分析编程基础', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'URBA6011', title: 'Programming and Foundations in Urban Data Analysis', titleZh: '城市数据分析编程基础',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '城市数据分析的编程与基础知识:空间数据获取、GIS/BIM 分析技术,为 URBA6002/URBA6009 的先修课。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },
  {
    code: 'RECO7605', title: 'Information Management', titleZh: '信息管理',
    list: 'B', credits: 6, semester: 'TBD',
    desc: '信息化与供应链管理:信息/人力/资金/资源流、制造与建造供应链、效率与响应、IT 集成、跨组织文化与契约议题。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  },

  // ============ Capstone 毕业设计 ============
  {
    code: 'IDAT7100', title: 'Dissertation', titleZh: '毕业论文(毕业设计)',
    list: 'capstone', credits: 24, semester: 'full',
    desc: '24 学分毕业设计:在工学院或相关学院导师指导下,个人或小组完成设计、实验或分析研究课题;需参加研讨会并提交完整书面报告。适用于 2025/26 及以后入学者。',
    prereq: '', exclusive: '', cef: false, isNew2026: false, movedToB2026: false
  }
];

// 毕业要求(2026/27 起统一 72 学分)
export const DEGREE_RULES = {
  total: 72,
  courseCredits: 48, // 课程学分(72 - 24 论文)
  listAMin: 24, // List A 核心课至少 24 学分
  disciplineMin: 36, // 学科课(List A + List B)至少 36 学分
  electiveMax: 12, // 非本学科选修课最多 12 学分
  dissertation: 24 // IDAT7100 毕业论文
};

export function getCourse(code) {
  return COURSES.find((c) => c.code === code) || null;
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
