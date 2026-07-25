(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))a(d);new MutationObserver(d=>{for(const o of d)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(d){const o={};return d.integrity&&(o.integrity=d.integrity),d.referrerPolicy&&(o.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?o.credentials="include":d.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(d){if(d.ep)return;d.ep=!0;const o=i(d);fetch(d.href,o)}})();const ge={};let H=null;function S(t,e){ge[t]=e}function D(t){window.location.hash="#"+t}function Ae(){const t=window.location.hash.slice(1),e=t.indexOf("?");if(e<0)return{};const i={};return new URLSearchParams(t.slice(e+1)).forEach((a,d)=>{i[d]=a}),i}function xe(){const t=window.location.hash.slice(1)||"/home",e=t.indexOf("?");return e<0?t:t.slice(0,e)}function Me(){const t=()=>{const e=xe(),i=ge[e];H&&(H(),H=null),i&&(H=i()||null)};window.addEventListener("hashchange",t),t()}const le=[{date:"2026-08-06",endDate:"2026-08-14",title:"硕士课程选课时间(Course Selection)",type:"adddrop",tentative:!1},{date:"2026-09-01",endDate:"",title:"第一学期开学 · 首日授课",type:"teaching",tentative:!1},{date:"2026-09-01",endDate:"2026-09-14",title:"第一学期加退选(Add/Drop)",type:"adddrop",tentative:!1},{date:"2026-10-01",endDate:"",title:"国庆节公众假期",type:"holiday",tentative:!1},{date:"2026-10-12",endDate:"2026-10-17",title:"阅读周 Reading Week(停课)",type:"reading",tentative:!1},{date:"2026-10-19",endDate:"",title:"重阳节公众假期",type:"holiday",tentative:!1},{date:"2026-11-30",endDate:"",title:"第一学期最后授课日",type:"teaching",tentative:!1},{date:"2026-12-01",endDate:"2026-12-07",title:"复习周 Revision Period",type:"revision",tentative:!1},{date:"2026-12-08",endDate:"2026-12-23",title:"第一学期考试周",type:"exam",tentative:!1},{date:"2026-12-24",endDate:"2027-01-17",title:"圣诞及新年学期假",type:"holiday",tentative:!1},{date:"2027-01-18",endDate:"",title:"第二学期开学 · 首日授课",type:"teaching",tentative:!1},{date:"2027-01-18",endDate:"2027-02-01",title:"第二学期加退选(Add/Drop)",type:"adddrop",tentative:!1},{date:"2027-02-05",endDate:"2027-02-11",title:"农历新年假期",type:"holiday",tentative:!0},{date:"2027-03-08",endDate:"2027-03-13",title:"阅读周 Reading Week(停课)",type:"reading",tentative:!0},{date:"2027-04-03",endDate:"2027-04-09",title:"清明 / 复活节假期",type:"holiday",tentative:!0},{date:"2027-05-01",endDate:"",title:"第二学期最后授课日",type:"teaching",tentative:!0},{date:"2027-05-03",endDate:"2027-05-08",title:"复习周 Revision Period",type:"revision",tentative:!0},{date:"2027-05-10",endDate:"2027-05-29",title:"第二学期考试周",type:"exam",tentative:!0},{date:"2027-06-21",endDate:"2027-08-07",title:"暑校教学时段(选修)",type:"teaching",tentative:!0}],M={teaching:{label:"教学",color:"#00573f"},adddrop:{label:"选课/加退选",color:"#1a56b8"},reading:{label:"阅读周",color:"#7a5195"},revision:{label:"复习周",color:"#b8741a"},exam:{label:"考试",color:"#c0392b"},holiday:{label:"假期",color:"#2e8b57"}},N=[{name:"2026-27 第一学期",start:"2026-09-01",end:"2026-12-23"},{name:"2026-27 第二学期",start:"2027-01-18",end:"2027-05-29"}],ne=[{code:"IDAT7211",title:"Innovation and R & D Principle",titleZh:"创新与研发原理",list:"A",credits:6,semester:"1&2",desc:"聚焦创新设计原理与基础技术:技术发明史与现代生活、设计流程与创意思维、设计简报与规格制定、物联网(IoT)概念。培养产品设计中的创造性、分析性与批判性思维,并运用建模工具进行表达沟通。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"IDAT7212",title:"Mechatronic Systems Engineering",titleZh:"机电一体化系统工程",list:"A",credits:6,semester:"2",desc:"融合机械、电子与软件工程:基于模型的机电系统设计、多域建模与仿真、鲁棒控制方法、性能分析评估、系统诊断与维护、IoT 应用。学生需通过迷你项目开发具体的机电一体化产品。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"IDAT7213",title:"UAV Design, Navigation and Control",titleZh:"无人机设计、导航与控制",list:"A",credits:6,semester:"1&2",desc:"探索小型无人机关键技术:传感器标定、GPS/IMU 导航、视觉-惯性导航、激光雷达导航、非线性动态逆与最优控制,并在真实无人机平台上开展前沿导航控制实验。",prereq:"良好的 MATLAB、C/C++ 编程能力与动手实践经验",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"IDAT7215",title:"Computer Programming for Product Development and Applications",titleZh:"产品开发计算机编程与应用",list:"A",credits:6,semester:"1&2",desc:"面向产品开发的实用编程技能:基础编程技术及其在软件控制、Web 应用与 IoT 中的应用;另涵盖 Excel 编程,释放其在数据挖掘与数据库集成等日常场景中的能力。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"IDAT7216",title:"Function Design, Aesthetics Design, Manufacturing and Intellectual Property Law",titleZh:"功能设计、美学设计、制造与知识产权法",list:"A",credits:6,semester:"2",desc:"功能设计与美学设计的基本原理,平衡实用因素与心理因素;面向量产的制造方法;以及保护产品发明人权益的知识产权法入门。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"IDAT7221",title:"Data Analytics and Artificial Intelligence for Design Engineering and Business",titleZh:"设计工程与商业的数据分析与人工智能",list:"A",credits:6,semester:"1",desc:"涵盖 AI 与机器学习、价值工程与产品成本、产品分析与项目管理:项目管理作为战略工具的核心要素与实务方法论,并运用数据分析概念解读定量数据、支撑设计决策。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"IDAT7222",title:"Advanced CADCAM and AI Driven Manufacturing Systems",titleZh:"先进 CADCAM 与 AI 驱动制造系统",list:"A",credits:6,semester:"TBD",desc:"26 级新增 List A 课程(待大学最终批准):先进计算机辅助设计/制造与人工智能驱动的智能制造系统。课程详情以学院公布大纲为准。",prereq:"",exclusive:"",cef:!1,isNew2026:!0,movedToB2026:!1},{code:"IDAT7223",title:"Ergonomic Design and Multimedia Technologies",titleZh:"人因工程设计与多媒体技术",list:"A",credits:6,semester:"TBD",desc:"26 级新增 List A 课程(待大学最终批准):人因工程设计原则与多媒体技术在产品开发中的融合应用。课程详情以学院公布大纲为准。",prereq:"",exclusive:"",cef:!1,isNew2026:!0,movedToB2026:!1},{code:"IDAT7224",title:"Deep Learning in Engineering Technology",titleZh:"工程技术中的深度学习",list:"A",credits:6,semester:"TBD",desc:"26 级新增 List A 课程(待大学最终批准):深度神经网络在工程技术场景中的应用。课程详情以学院公布大纲为准。",prereq:"",exclusive:"",cef:!1,isNew2026:!0,movedToB2026:!1},{code:"IDAT7225",title:"Autonomous Robots and Intelligent Control",titleZh:"自主机器人与智能控制",list:"A",credits:6,semester:"TBD",desc:"26 级新增 List A 课程(待大学最终批准):自主机器人系统与智能控制方法。课程详情以学院公布大纲为准。",prereq:"",exclusive:"",cef:!1,isNew2026:!0,movedToB2026:!1},{code:"MECH6034",title:"Computer-aided Product Development (CAPD)",titleZh:"计算机辅助产品开发",list:"B",credits:6,semester:"1&2",desc:"产品开发方法论、计算机辅助设计、触觉形状建模、逆向工程、增材制造与快速模具;理解制造成本约束,并运用相关技术开发简单产品。",prereq:"",exclusive:"",cef:!0,isNew2026:!1,movedToB2026:!0},{code:"COMP7503",title:"Multimedia Technologies",titleZh:"多媒体技术",list:"B",credits:6,semester:"2",desc:"多媒体计算的基本概念与新兴技术:媒体数据获取、感知编码原理、媒体处理与操作、多媒体内容组织与分析,构建完整多媒体应用。",prereq:"",exclusive:"",cef:!0,isNew2026:!1,movedToB2026:!0},{code:"COMP7506",title:"Smart Phone Apps Development",titleZh:"智能手机应用开发",list:"B",credits:6,semester:"2",desc:"智能手机 App 的设计与技术要点:小屏交互、硬件传感器运用,介绍 Android(Java)与 iOS(Swift)现代开发环境,指导学生开发自己的 App。",prereq:"具备基础编程知识",exclusive:"COMP3330 交互式移动应用设计与编程",cef:!0,isNew2026:!1,movedToB2026:!0},{code:"IDAT7217",title:"Advanced Topics in Innovative Design and Technology A",titleZh:"创新设计与科技高级专题 A",list:"B",credits:6,semester:"1&2",desc:"选取创新设计与科技前沿专题并应用于相关问题,具体题目于开课学期初公布。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"IDAT7218",title:"Advanced Topics in Innovative Design and Technology B",titleZh:"创新设计与科技高级专题 B",list:"B",credits:6,semester:"TBD",desc:"选取创新设计与科技前沿专题并应用于相关问题,具体题目于开课学期初公布。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"IDAT7219",title:"Smart Building Technology",titleZh:"智能建筑技术",list:"B",credits:6,semester:"1",desc:"应用 IoT 技术(硬件、软件与连接)管理 HVAC、照明与安防系统;实时采集并分析楼宇运营数据,改善楼宇运维与保养。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"IDAT7220",title:"STEM Education",titleZh:"STEM 教育",list:"B",credits:6,semester:"2",desc:"STEM 整合式、项目式教学理念:通过阅读、视频、教学设计与系列迷你项目,学习课程整合实践与学生自主学习的最佳做法。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"MECH6010",title:"Service Behaviour of Materials",titleZh:"材料服役行为",list:"B",credits:6,semester:"TBD",desc:"蠕变、断裂、疲劳与腐蚀等材料服役行为的物理基础与预测;通过微观组织调控改善工程材料(含工程塑料与复合材料)服役性能。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"MECH6046",title:"Microsystems for Energy, Biomedical and Consumer Electronics Applications",titleZh:"能源、生医与消费电子微系统",list:"B",credits:6,semester:"TBD",desc:"MEMS 与微流控系统的工作原理、设计、材料、制造与封装,及其在能源、机械与生物医学工程中的应用,含丰富案例教学。",prereq:"",exclusive:"修过 MECH6032 者不可选",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"MECH6047",title:"Finite Element Analysis in Mechanics",titleZh:"力学有限元分析",list:"B",credits:6,semester:"TBD",desc:"有限元基本概念与流程:桁架/梁/平面/板问题弹性分析、热-力耦合、模态与动力分析、几何与材料非线性、接触分析,含主流软件实操。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"MECH7010",title:"Contemporary Robotics",titleZh:"当代机器人",list:"B",credits:6,semester:"TBD",desc:"现代机器人系统核心技术:系统组成与工作原理、传感与驱动单元、运动学建模、感知估计与实时控制,涵盖移动机器人、无人机、无人驾驶与软体机器人前沿。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"MECH7012",title:"Principles of Engineering Management",titleZh:"工程管理原理",list:"B",credits:6,semester:"TBD",desc:"工程管理基本原理与方法:系统工程、运营计划与控制、ERP 系统、供应链、绿色管理、商业伦理、风险与危机管理。",prereq:"",exclusive:"",cef:!0,isNew2026:!1,movedToB2026:!1},{code:"DASE7111",title:"Data-driven Optimization",titleZh:"数据驱动优化",list:"B",credits:6,semester:"TBD",desc:"智能优化算法总览:遗传算法、模拟退火、禁忌搜索、粒子群、蚁群算法与动态系统优化策略,含供应链、物流、制造与服务业案例。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"DASE7139",title:"Cyber-physical Systems",titleZh:"信息物理系统",list:"B",credits:6,semester:"TBD",desc:"CPS 导论:传感器与传感网络、机器人与自动化、CPS 通信、数据分析、数字孪生、云计算与系统集成,以讲座+项目方式开展。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"DASE7034",title:"Operational Research",titleZh:"运筹学",list:"B",credits:6,semester:"TBD",desc:"运筹学方法论:问题分析、建模与求解;数学规划在物流运输中的应用、设备更新模型、投资风险分析、排队论与事件仿真。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"COMP7103",title:"Data Mining",titleZh:"数据挖掘",list:"B",credits:6,semester:"TBD",desc:"数据挖掘主流方法与 OLAP:体系结构、数据预处理、关联规则、分类、聚类、数据挖掘系统与语言、Web/空间/时态高级挖掘。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"DASC7606",title:"Deep Learning",titleZh:"深度学习",list:"B",credits:6,semester:"TBD",desc:"深度神经网络及其在 NLP、图像处理、金融预测、博弈与机器人中的应用:线性/逻辑回归、网络训练、RNN、CNN、生成模型、深度强化学习与伦理议题。",prereq:"建议具备算法、微积分、线性代数与编程基础",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"COMP7404",title:"Computational Intelligence and Machine Learning",titleZh:"计算智能与机器学习",list:"B",credits:6,semester:"TBD",desc:"AI/ML 的数学与算法框架:搜索与启发式搜索、约束满足、博弈、监督/非监督学习、降维、学习理论、强化学习、迁移学习与 AI 伦理。",prereq:"建议具备数据结构、概率、线代与编程基础",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"COMP7408",title:"Distributed Ledger and Blockchain Technology",titleZh:"分布式账本与区块链技术",list:"B",credits:6,semester:"TBD",desc:"区块链核心技术要素与智能合约、许可链/非许可链变体与主流平台,探讨安全性、效率与可扩展性,以及加密货币与金融应用。",prereq:"COMP7906 或 ICOM6045,并具备编程经验",exclusive:"",cef:!0,isNew2026:!1,movedToB2026:!1},{code:"COMP7802",title:"Introduction to Financial Computing",titleZh:"金融计算导论",list:"B",credits:6,semester:"TBD",desc:"投资银行领域的金融计算:收益率曲线构建实务、金融建模与现代风险管理,结合金融产品知识、金融数学与计算技术。",prereq:"无需金融背景;需 Excel 操作能力,基础微积分与数值计算为佳",exclusive:"",cef:!0,isNew2026:!1,movedToB2026:!1},{code:"COMP7901",title:"Legal Protection of Digital Property",titleZh:"数字产权法律保护",list:"B",credits:6,semester:"TBD",desc:"面向计算机专业人员的数字财产法律保护:软件与网站版权、软件与算法专利、个人数据保护等议题及法律解决方案。",prereq:"",exclusive:"COMP3311 计算法律面面观 / ECOM6004 IT 与电商法律",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"COMP7906",title:"Introduction to Cyber Security",titleZh:"网络安全导论",list:"B",credits:6,semester:"TBD",desc:"网络世界中信息与数据的保护方法(含隐私议题):安全导论、网络攻击与威胁、密码算法及应用、网络安全与基础设施。",prereq:"建议具备 CS 数学、应用统计与 Python 基础",exclusive:"ICOM6045 电子商务安全基础",cef:!0,isNew2026:!1,movedToB2026:!1},{code:"ELEC6092",title:"Green Project Management",titleZh:"绿色项目管理",list:"B",credits:6,semester:"TBD",desc:"绿色项目的范围与价值:使命目标澄清、审计与可行性研究、项目计划与控制系统工具、合同管理(策略/文件/招标)、现场实施与质量安全环境管理。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"ELEC6601",title:"Industrial Marketing",titleZh:"工业营销",list:"B",credits:6,semester:"TBD",desc:"B2B 营销:价值链、营销机会与策略、渠道关系、销售管理、营销传播、客户计划、商业伦理与危机管理,以案例与项目驱动学习。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"ELEC6603",title:"Success in Industrial Entrepreneurship",titleZh:"工业创业成功之道",list:"B",credits:6,semester:"TBD",desc:"创业框架:识别资源/能力/环境与机会、商业计划书、新创企业融资、风险平衡与分阶段融资、组织创建,结合案例与项目实践。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"ELEC6604",title:"Neural Networks, Fuzzy Systems and Genetic Algorithms",titleZh:"神经网络、模糊系统与遗传算法",list:"B",credits:6,semester:"TBD",desc:"应用人工智能三大主题导论:神经网络、模糊系统与遗传算法的基本概念、技术及在各类工程问题中的应用。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"ELEC6098",title:"Electronic and Mobile Commerce",titleZh:"电子与移动商务",list:"B",credits:6,semester:"TBD",desc:"电商与移动商务的技术、商业与管理知识:B2C/B2B 模式、定位技术、RFID、GPS、移动网络、电子支付、NFC、二维码、AR 等前沿应用。",prereq:"",exclusive:"ELEC6078 / ELEC6086",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"MEDD8860",title:"Emerging Technologies in STEM Education",titleZh:"STEM 教育新兴技术",list:"B",credits:6,semester:"TBD",desc:"纵览 STEM 教育中当前与新兴的工具、实践与主题,回顾跨学科整合的历史发展,展望未来课堂的数字技术趋势。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"MEDD8914",title:"Implementing STEM/STEAM-rich Making: Opportunities and Challenges",titleZh:"STEM/STEAM 创客教育实施",list:"B",credits:6,semester:"TBD",desc:"建构主义与创客文化:通过动手活动探索创客实践路径,以 SWOT 分析与资金申请书撰写检验实施机遇与挑战,培养 STEM 教育领导力。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"TDLL6024",title:"Teaching and Learning with Digital Technology",titleZh:"数字技术与教学",list:"B",credits:6,semester:"TBD",desc:"信息技术教学应用总览:从计算机辅助教程到学习对象、认知工具与协作技术,强调支撑技术整合的学习理论与教育情境。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"TDLL6333",title:"Mobile and Ubiquitous Technology in Education",titleZh:"教育中的移动与泛在技术",list:"B",credits:6,semester:"TBD",desc:"移动/泛在技术对教育与培训的影响:次世代学习系统潜力,并实践设计开发简单的移动教育应用(面向对象编程+云端集成)。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"TDLL7341",title:"Game-based Learning Environments",titleZh:"游戏化学习环境",list:"B",credits:6,semester:"TBD",desc:"数字游戏化学习(DGBL)理念:商业游戏与专用教育游戏的教育学考量,教育游戏的现状趋势及设计、实施与评估方法。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"TDLL7349",title:"Data Science and Learning Analytics",titleZh:"数据科学与学习分析",list:"B",credits:6,semester:"TBD",desc:"数据科学核心概念与学习分析/教育数据挖掘:数据预处理与存储、推断与预测分析、机器学习、文本与网络分析、可视化、数据伦理。",prereq:"建议具备本科统计学基础",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"CIVL6054",title:"Engineering for Transport Systems",titleZh:"运输系统工程",list:"B",credits:6,semester:"TBD",desc:"运输系统的工程视角:交通基础设施发展、运输方式选型、固定轨道系统、运输领域技术应用。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"CIVL6061",title:"Special Topic in Environmental Engineering A",titleZh:"环境工程专题 A",list:"B",credits:6,semester:"TBD",desc:"提供环境工程热点方向的深入学习机会,具体题目于开课学期初公布。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"CIVL6062",title:"Special Topic in Environmental Engineering B",titleZh:"环境工程专题 B",list:"B",credits:6,semester:"TBD",desc:"提供环境工程热点方向的深入学习机会,具体题目于开课学期初公布。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"CIVL7005",title:"Sustainable Construction Technology: Principles and Practices",titleZh:"可持续建造技术:原理与实践",list:"B",credits:6,semester:"TBD",desc:"可持续建造语境下的技术知识:可持续建造概念、系统理论、技术创新理论、技术类型与应用、技术选择与管理策略。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"CIVL7006",title:"Optimization Techniques for Transportation Applications",titleZh:"交通应用优化技术",list:"B",credits:6,semester:"TBD",desc:"求解交通问题的优化方法:线性规划、非线性规划、网络优化与整数规划。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"CIVL7016",title:"Land Transport and the Environment",titleZh:"陆上交通与环境",list:"B",credits:6,semester:"TBD",desc:"陆上运输系统:铁路与道路建设、铁路噪声排放与消减、道路的空气/噪声/水污染及测量、估算与治理方法。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"URBA6001",title:"Foundations in Spatial Data Analysis",titleZh:"空间数据分析基础",list:"B",credits:6,semester:"TBD",desc:"智慧城市的空间数据基础:多源传感器空间数据获取、AI 应用、GIS 与 BIM 空间分析技术,面向规划/测绘/建筑/工程等专业背景。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"URBA6002",title:"Urban Big Data Analytics",titleZh:"城市大数据分析",list:"B",credits:6,semester:"TBD",desc:"城市大数据处理、分析与建模进阶:概念框架、方法论与软件工具,应用城市模型解释现状并预测未来变化。",prereq:"URBA6011 城市数据分析编程基础",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"URBA6009",title:"Artificial Intelligence for Future Cities",titleZh:"未来城市的人工智能",list:"B",credits:6,semester:"TBD",desc:"编程、计算思维与 AI 导论:关键算法与数据结构、编程技能,以及如何用软件与智能技术解决城市问题。",prereq:"URBA6011 城市数据分析编程基础",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"URBA6011",title:"Programming and Foundations in Urban Data Analysis",titleZh:"城市数据分析编程基础",list:"B",credits:6,semester:"TBD",desc:"城市数据分析的编程与基础知识:空间数据获取、GIS/BIM 分析技术,为 URBA6002/URBA6009 的先修课。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"RECO7605",title:"Information Management",titleZh:"信息管理",list:"B",credits:6,semester:"TBD",desc:"信息化与供应链管理:信息/人力/资金/资源流、制造与建造供应链、效率与响应、IT 集成、跨组织文化与契约议题。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"IDAT7100",title:"Dissertation",titleZh:"毕业论文(毕业设计)",list:"capstone",credits:24,semester:"full",desc:"24 学分毕业设计:在工学院或相关学院导师指导下,个人或小组完成设计、实验或分析研究课题;需参加研讨会并提交完整书面报告。适用于 2025/26 及以后入学者。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1}],he={total:72,courseCredits:48,listAMin:24,disciplineMin:36,electiveMax:12,dissertation:24};function P(t){return ne.find(e=>e.code===t)||null}function ye(t){switch(t){case"1":return"第一学期";case"2":return"第二学期";case"1&2":return"两学期均开";case"full":return"全年";default:return"学期待定"}}const O=24*60*60*1e3;function $(t){const[e,i,a]=t.split("-").map(Number);return new Date(e,i-1,a)}function R(t){const e=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0");return`${e}-${i}-${a}`}function C(){return R(new Date)}function Ie(t){const e=$(R(new Date));return Math.round(($(t)-e)/O)}function be(t){const e=$(t);for(const i of N){const a=$(i.start),d=$(i.end);if(e>=a&&e<=d){const o=Math.floor((e-a)/(7*O))+1;return{name:i.name,week:o}}}return null}function Se(t){const e=C();return le.filter(a=>(a.endDate||a.date)>=e).sort((a,d)=>a.date<d.date?-1:1).slice(0,t)}function U(t){const e=String(Math.floor(t/60)).padStart(2,"0"),i=String(t%60).padStart(2,"0");return`${e}:${i}`}function fe(t){const[e,i]=t.split(":").map(Number);return e*60+(i||0)}const F=["周一","周二","周三","周四","周五","周六","周日"],Ce=[{path:"/home",label:"首页",icon:"🏠"},{path:"/calendar",label:"校历",icon:"📅"},{path:"/commute",label:"通勤",icon:"🚄"},{path:"/courses",label:"课程",icon:"📚"},{path:"/schedule",label:"课表",icon:"🗓"}];function z(){const t=xe(),e=document.getElementById("tabbar");e.innerHTML=Ce.map(i=>`
    <a class="tab-item ${t===i.path?"active":""}" data-path="${i.path}">
      <span class="tab-icon">${i.icon}</span>
      <span>${i.label}</span>
    </a>
  `).join(""),e.onclick=i=>{const a=i.target.closest(".tab-item");a&&D(a.dataset.path)}}function ze(){const t=document.getElementById("page-container"),e=C(),d=`${e} 星期${["日","一","二","三","四","五","六"][new Date().getDay()]}`,o=be(e),c=he,v=Se(3).map(f=>({title:f.title+(f.tentative?"(暂定)":""),color:M[f.type].color,days:Ie(f.date),dateText:f.endDate?`${f.date} 至 ${f.endDate}`:f.date})),r=o?`${o.name} · 第 ${o.week} 周`:v.length?`距「${v[0].title}」还有 ${v[0].days} 天`:"假期中,好好充电";t.innerHTML=`
    <div class="hero" style="background:linear-gradient(135deg,#00573f,#0a7a56);border-radius:0 0 16px 16px;padding:24px 16px 20px;color:#fff">
      <div style="font-size:11px;opacity:0.85">MSc(Eng) Innovative Design & Technology · 26 级</div>
      <div style="font-size:20px;font-weight:700;margin-top:8px">${d}</div>
      <div style="font-size:13px;margin-top:4px;opacity:0.95">${r}</div>
    </div>
    <div style="display:flex;flex-wrap:wrap;padding:8px 8px 0">
      <div class="entry-card" data-path="/calendar" style="background:#2e6f5c"><div class="ec-name">校历</div><div class="ec-sub">2026-27 学期节点</div></div>
      <div class="entry-card" data-path="/commute" style="background:#31597f"><div class="ec-name">港深通勤</div><div class="ec-sub">6 条路线攻略</div></div>
      <div class="entry-card" data-path="/courses" style="background:#6b5b95"><div class="ec-name">选课评价</div><div class="ec-sub">List A/B 课程库</div></div>
      <div class="entry-card" data-path="/schedule" style="background:#8a6d3b"><div class="ec-name">每周课表</div><div class="ec-sub">同步手机日历</div></div>
    </div>
    <div class="card">
      <div class="card-title">毕业学分结构(26 级起统一 72 学分)</div>
      <div style="display:flex;align-items:baseline;margin-bottom:12px">
        <span style="font-size:28px;font-weight:700;color:#00573f;margin-right:8px">${c.total}</span>
        <span style="font-size:12px;color:#6b7280">学分 = 课程 ${c.courseCredits} + 毕业论文 ${c.dissertation}</span>
      </div>
      <div style="display:flex;justify-content:space-between;background:#f4f8f6;border-radius:12px;padding:12px 8px">
        <div style="flex:1;text-align:center"><div style="font-size:15px;font-weight:600;color:#00573f">≥ ${c.listAMin}</div><div style="font-size:10px;color:#6b7280;margin-top:2px">List A 核心课</div></div>
        <div style="flex:1;text-align:center"><div style="font-size:15px;font-weight:600;color:#00573f">≥ ${c.disciplineMin}</div><div style="font-size:10px;color:#6b7280;margin-top:2px">学科课(A+B)</div></div>
        <div style="flex:1;text-align:center"><div style="font-size:15px;font-weight:600;color:#00573f">≤ ${c.electiveMax}</div><div style="font-size:10px;color:#6b7280;margin-top:2px">外学科选修</div></div>
        <div style="flex:1;text-align:center"><div style="font-size:15px;font-weight:600;color:#00573f">${c.dissertation}</div><div style="font-size:10px;color:#6b7280;margin-top:2px">毕业论文</div></div>
      </div>
      <div style="margin-top:12px;text-align:center"><span class="btn-plain" id="go-courses">去选课,自动算学分</span></div>
    </div>
    <div class="card" style="border-left:4px solid #e6a23c">
      <div class="card-title">26 级课程变更提示</div>
      <div style="font-size:12px;color:#5b5f66;line-height:1.8">
        · 新增 List A:IDAT7222 先进CADCAM与AI制造 / IDAT7223 人因设计与多媒体 / IDAT7224 深度学习工程技术 / IDAT7225 自主机器人与智能控制(待大学批准)<br>
        · MECH6034 / COMP7503 / COMP7506 自 26 级起转入 List B(待大学批准)<br>
        · 总学分要求统一为 72 学分(原为 72-84)
      </div>
    </div>
    <div class="section-title">近期关键节点</div>
    ${v.map(f=>`
      <div class="card" style="display:flex;align-items:center;padding:14px 16px;margin-top:0">
        <div style="width:8px;height:8px;border-radius:50%;background:${f.color};margin-right:12px;flex-shrink:0"></div>
        <div style="flex:1"><div style="font-size:13px;color:#1f2430">${f.title}</div><div style="font-size:11px;color:#8a8f99;margin-top:2px">${f.dateText}</div></div>
        <div style="font-size:12px;color:#00573f;font-weight:600;flex-shrink:0">${f.days>0?f.days+" 天后":f.days===0?"今天":"进行中"}</div>
      </div>
    `).join("")}
    <div class="muted" style="text-align:center;padding:16px 20px 24px">数据来源:HKU 官方学年日历与课程大纲;暂定节点以官方最终公布为准</div>
  `;const u=document.createElement("style");u.textContent=".entry-card{width:calc(50% - 12px);margin:4px 6px;border-radius:12px;padding:14px 12px;color:#fff;cursor:pointer}.ec-name{font-size:16px;font-weight:600}.ec-sub{font-size:11px;opacity:0.9;margin-top:4px}",t.prepend(u),t.querySelectorAll(".entry-card").forEach(f=>{f.onclick=()=>D(f.dataset.path)});const g=document.getElementById("go-courses");g&&(g.onclick=()=>D("/courses")),z()}let y={year:2026,month:9,selected:"",eventMap:{}};function Ne(){const t={};return le.forEach(e=>{const i=M[e.type],a=$(e.date),d=e.endDate?$(e.endDate):a;let o=a,c=0;for(;o<=d&&c<400;){const v=R(o);t[v]||(t[v]=[]),t[v].push({title:e.title,type:e.type,color:i.color,label:i.label,tentative:e.tentative,rangeText:e.endDate?`${e.date} 至 ${e.endDate}`:e.date}),o=new Date(o.getTime()+O),c++}}),t}function oe(){const t=document.getElementById("page-container"),{year:e,month:i,selected:a}=y,d=C(),o=y.eventMap,c=new Date(e,i-1,1),v=(c.getDay()+6)%7,r=new Date(c.getTime()-v*O),u=[];for(let l=0;l<6;l++){const x=[];for(let T=0;T<7;T++){const w=new Date(r.getTime()+(l*7+T)*O),B=R(w),j=o[B]||[];x.push({key:B,day:w.getDate(),inMonth:w.getMonth()+1===i,isToday:B===d,isSelected:B===a,dots:j.slice(0,3).map(pe=>pe.color)})}u.push(x)}const g=String(i).padStart(2,"0"),f=`${e}-${g}-01`,s=`${e}-${g}-31`,m={},b=[];le.forEach(l=>{const x=l.endDate||l.date;if(l.date<=s&&x>=f&&!m[l.title]){m[l.title]=!0;const T=M[l.type];b.push({title:l.title,color:T.color,label:T.label,tentative:l.tentative,date:l.date,dateText:l.endDate?`${l.date} 至 ${l.endDate}`:l.date})}}),b.sort((l,x)=>l.date<x.date?-1:1);const n=(o[a]||[]).map(l=>({...l,title:l.title+(l.tentative?"(暂定)":"")})),p=Object.keys(M).map(l=>({label:M[l].label,color:M[l].color}));t.innerHTML=`
    <style>
      .cal-card{padding:16px 10px}
      .cal-head{display:flex;align-items:center;justify-content:space-between;padding:0 8px 12px}
      .cal-title{font-size:15px;font-weight:600;color:#14312a}
      .cal-nav{font-size:12px;color:#00573f;padding:4px 10px;cursor:pointer}
      .cal-row{display:flex}
      .cal-cell{flex:1;min-width:0;text-align:center;padding:6px 0 4px;border-radius:8px;cursor:pointer}
      .cal-cell.head{font-size:11px;color:#8a8f99;cursor:default}
      .cal-day{font-size:13px;color:#1f2430}
      .cal-cell.dim .cal-day{color:#c4c8ce}
      .cal-cell.today .cal-day{color:#00573f;font-weight:700}
      .cal-cell.selected{background:#00573f}
      .cal-cell.selected .cal-day{color:#fff;font-weight:600}
      .cal-dots{display:flex;justify-content:center;height:6px;margin-top:2px}
      .dot{width:4px;height:4px;border-radius:50%;margin:0 1px}
      .legend{display:flex;flex-wrap:wrap;padding:10px 8px 0;border-top:1px solid #eef0f2;margin-top:8px}
      .legend-item{display:flex;align-items:center;font-size:10px;color:#6b7280;margin:0 12px 6px 0}
      .legend-item .dot{margin-right:4px;width:6px;height:6px}
      .ev-bar{width:4px;min-height:28px;border-radius:2px;margin-right:10px;flex-shrink:0}
    </style>
    <div class="card cal-card">
      <div class="cal-head">
        <div class="cal-nav" id="cal-prev">‹ 上月</div>
        <div class="cal-title">${e} 年 ${i} 月</div>
        <div class="cal-nav" id="cal-next">下月 ›</div>
      </div>
      <div class="cal-row">${["一","二","三","四","五","六","日"].map(l=>`<div class="cal-cell head">${l}</div>`).join("")}</div>
      ${u.map(l=>`<div class="cal-row">${l.map(x=>`
        <div class="cal-cell ${x.inMonth?"":"dim"} ${x.isToday?"today":""} ${x.isSelected?"selected":""}" data-date="${x.key}">
          <div class="cal-day">${x.day}</div>
          <div class="cal-dots">${x.dots.map(T=>`<div class="dot" style="background:${T}"></div>`).join("")}</div>
        </div>
      `).join("")}</div>`).join("")}
      <div class="legend">${p.map(l=>`<div class="legend-item"><div class="dot" style="background:${l.color}"></div>${l.label}</div>`).join("")}</div>
    </div>
    <div class="section-title">${a} 当日安排</div>
    ${n.length?`<div class="card">${n.map(l=>`
      <div style="display:flex;align-items:flex-start;padding:6px 0">
        <div class="ev-bar" style="background:${l.color}"></div>
        <div><div style="font-size:13px;color:#1f2430">${l.title}</div><div style="font-size:11px;color:#8a8f99;margin-top:2px">${l.label} · ${l.rangeText}</div></div>
      </div>
    `).join("")}</div>`:'<div class="card" style="text-align:center;color:#8a8f99;font-size:12px">当日无校历事件</div>'}
    <div class="section-title">${i} 月事件一览</div>
    ${b.map(l=>`
      <div class="card" style="display:flex;align-items:flex-start;padding:14px 16px;margin-top:0">
        <div class="ev-bar" style="background:${l.color}"></div>
        <div><div style="font-size:13px;color:#1f2430">${l.title}${l.tentative?"(暂定)":""}</div><div style="font-size:11px;color:#8a8f99;margin-top:2px">${l.label} · ${l.dateText}</div></div>
      </div>
    `).join("")}
    <div class="muted" style="text-align:center;padding:16px 20px 24px">第一学期节点为官方公布;第二学期部分节点标注「暂定」,以大学最终公布为准</div>
  `,t.querySelectorAll(".cal-cell:not(.head)").forEach(l=>{l.onclick=()=>{y.selected=l.dataset.date,oe()}}),document.getElementById("cal-prev").onclick=()=>{me(-1)},document.getElementById("cal-next").onclick=()=>{me(1)},z()}function me(t){y.month+=t,y.month<1&&(y.month=12,y.year--),y.month>12&&(y.month=1,y.year++),oe()}function Le(){y.eventMap=Ne();const t=C(),e=$(t);y.year=e.getFullYear(),y.month=e.getMonth()+1,y.selected=t,oe()}const qe=[{id:"futian",name:"福田口岸线",badge:"最常用",summary:"落马洲乘东铁线直达金钟,转港岛线到香港大学站",totalTime:"约 70-85 分钟",totalCost:"约 HK$55-65(东铁线过境段较贵)",borderTime:"福田口岸 6:30-22:30",steps:[{text:"深圳地铁 4/10 号线至福田口岸站",detail:"出闸后按指示步行至联检大楼,约 5-10 分钟"},{text:"过关(深圳出关 + 香港入关)",detail:"持有效签注走 e 道或人工通道,高峰约 15-40 分钟"},{text:"港铁落马洲站乘东铁线(金钟方向)",detail:"约 50 分钟直达金钟站;注意部分班次以金钟/红磡为终点"},{text:"金钟站换乘港岛线(坚尼地城方向)",detail:"3 站:中环 → 上环 → 西营盘 → 香港大学,约 8 分钟"},{text:"香港大学站出站",detail:"A 出口(薄扶林道)/ C 出口(百周年校园),按课室位置选择"}],tips:["落马洲支线末班往深圳方向较早,晚课下课务必先查港铁 App 末班车时间","过关后记得切换手机网络/确认漫游或本地 SIM"]},{id:"luohu",name:"罗湖口岸线",badge:"口岸开到午夜",summary:"罗湖乘东铁线至金钟,转港岛线;适合罗湖区/老街一带出发",totalTime:"约 80-95 分钟",totalCost:"约 HK$55-65",borderTime:"罗湖口岸 6:30-24:00",steps:[{text:"深圳地铁 1 号线至罗湖站",detail:"A 出口步行至联检大楼"},{text:"过关(深圳出关 + 香港入关)",detail:"罗湖客流大,早高峰建议预留 30 分钟"},{text:"港铁罗湖站乘东铁线(金钟方向)",detail:"约 55-60 分钟到金钟站"},{text:"金钟站换乘港岛线(坚尼地城方向)",detail:"3 站至香港大学站,约 8 分钟"},{text:"香港大学站出站",detail:"A / C 出口均可入校"}],tips:["罗湖末班东铁线往深圳方向约 23:00 后停止过境服务,以港铁公告为准","节假日罗湖排队时间长,可改走福田或高铁"]},{id:"hsr",name:"高铁西九龙线",badge:"最快",summary:"深圳北/福田高铁 15-20 分钟到西九龙,转港岛线入校",totalTime:"约 45-65 分钟(不含候车)",totalCost:"二等座 ¥68-75 + 港铁约 HK$12",borderTime:"西九龙站高铁口岸约 6:30-23:30(随班次)",steps:[{text:"深圳北站或福田站乘高铁",detail:"福田→西九龙约 14 分钟,深圳北→西九龙约 18 分钟;12306 提前购票"},{text:"西九龙站「一地两检」过关",detail:"下车后在站内完成内地出境 + 香港入境,通常 10-20 分钟"},{text:"步行至柯士甸站/九龙站",detail:"按指示走圆方/Elements 通道,约 8-12 分钟"},{text:"港铁至香港大学站",detail:"方案A:九龙站东涌线→香港站,步行中环站转港岛线;方案B:柯士甸站屯马线→红磡/南昌转车;最快为中环转港岛线 2 站"},{text:"香港大学站出站",detail:"A / C 出口入校"}],tips:["高铁票实名且需取票/刷证,节假日务必提前购票","晚课后回深注意西九龙末班高铁约 22:30-23:00,错过需改走皇岗"]},{id:"szbay",name:"深圳湾口岸线",badge:"南山区首选",summary:"深圳湾口岸过关后巴士/屯马线绕行,或跨境巴士直达港岛",totalTime:"约 80-100 分钟",totalCost:"约 HK$30-60(巴士方案较便宜)",borderTime:"深圳湾口岸 6:30-24:00",steps:[{text:"前往深圳湾口岸(深圳地铁 13 号线/公交)",detail:"南山区出发最方便"},{text:"过关(一地两检在同一栋楼)",detail:"深圳湾为深港同楼查验,动线紧凑"},{text:"方案A:乘 B2/B2P 至天水围/元朗",detail:"约 25 分钟,转屯马线至南昌站"},{text:"南昌站转东涌线至香港站",detail:"步行至中环站转港岛线,2 站到香港大学"},{text:"方案B:跨境巴士直达",detail:"环岛中港通/永东等有深圳湾↔港岛线,湾仔/中环下车后转港铁或步行"}],tips:["B2P 班次间隔较长,可在 App「城巴/九巴」查到站时间","跨境巴士受路况影响大,考试日不建议踩点"]},{id:"hzmb",name:"港珠澳大桥线",badge:"珠海/澳门方向",summary:"金巴 24 小时穿梭大桥,香港口岸转 A 线巴士进港岛",totalTime:"约 2-2.5 小时(自珠海口岸起)",totalCost:"金巴 ¥58-63 + A 线巴士约 HK$40",borderTime:"港珠澳大桥口岸 24 小时",steps:[{text:"珠海公路口岸/澳门口岸过关",detail:"大桥穿梭巴士(金巴)日间 5-10 分钟一班"},{text:"金巴至香港口岸(约 40 分钟)",detail:"24 小时运营,夜间班次 15-30 分钟一班"},{text:"香港口岸过关后乘城巴 A11/A21",detail:"A11 往北角方向经中环、上环;约 50-70 分钟"},{text:"中环/上环下车转港岛线或步行",detail:"上环站乘港岛线 2 站至香港大学"}],tips:["适合珠海、澳门及香港机场方向同学;深圳出发不推荐此线","金巴支持微信/支付宝购票"]},{id:"night",name:"深夜方案(24 小时)",badge:"晚课救急",summary:"皇岗口岸 24 小时通关,跨境通宵巴士接驳港岛",totalTime:"视时段约 60-100 分钟",totalCost:"跨境巴士约 HK$40-80,的士另计",borderTime:"皇岗口岸 24 小时(深圳唯一全天候旅检口岸)",steps:[{text:"确认港铁末班已过后,前往跨境巴士站",detail:"湾仔(轩尼诗道)、旺角、太子等有 24h 跨境巴士往皇岗/落马洲"},{text:"乘跨境巴士至落马洲管制站",detail:"下车过关,步行至皇岗口岸深圳侧"},{text:"过关后转深圳侧交通",detail:"皇岗口岸有夜班公交/出租车;地铁已停运可打车"},{text:"反向(深夜赴港)",detail:"皇岗过关后乘跨境巴士往湾仔/旺角,再转通宵巴士 N 线或的士"}],tips:["港铁一般 0:30-1:00 收车,东铁线过境末班更早(往罗湖约 23:00、往落马洲约 21:30,以港铁 App 为准)","跨境巴士深夜班次约 20-30 分钟一班,保留运营方电话","台风/暴雨(八号风球以上)港铁与口岸可能调整,关注学校与港铁公告"]}],Ze=["八达通必备:港铁、巴士、便利店通用;全日制学生可申请「港铁学生乘车优惠计划」学生八达通,港铁车费约半价","跨境支付:港铁已支持微信/支付宝/云闪付乘车码,但部分小巴与店铺仍只收现金或八达通","学生签注:留意港澳通行证逗留签(D 签)有效期,避免逾期","台风季(6-10 月):八号风球或以上时港铁地面段与口岸交通会调整,以学校电邮与港铁公告为准","建议常用 App:港铁 MTR Mobile、城巴/九巴 App、12306、香港政府一站通"];let L="";function Te(){const t=document.getElementById("page-container");t.innerHTML=`
    <style>
      .route{padding-bottom:12px}
      .route-name{font-size:16px;font-weight:600;color:#14312a;margin-right:8px}
      .route-summary{font-size:12px;color:#5b5f66;margin-top:6px}
      .chips{display:flex;flex-wrap:wrap;margin-top:8px}
      .chip{font-size:10px;background:#f0f1f4;color:#4b5563;border-radius:999px;padding:2px 10px;margin:0 6px 4px 0}
      .expand-hint{font-size:11px;color:#00573f;margin-top:6px;cursor:pointer}
      .step{display:flex;margin-bottom:4px}
      .step-left{display:flex;flex-direction:column;align-items:center;width:24px;flex-shrink:0}
      .step-dot{width:18px;height:18px;border-radius:50%;background:#00573f;color:#fff;font-size:10px;text-align:center;line-height:18px}
      .step-line{width:1px;flex:1;background:#cfe3da;margin:2px 0}
      .step-content{flex:1;padding:0 0 12px 8px}
      .step-text{font-size:13px;color:#1f2430;font-weight:500}
      .step-detail{font-size:11px;color:#8a8f99;margin-top:2px}
      .route-tips{background:#f4f8f6;border-radius:8px;padding:10px 12px;margin-top:8px}
      .route-tips-title{font-size:11px;font-weight:600;color:#00573f;margin-bottom:4px}
      .tip{font-size:11px;color:#5b5f66;margin-bottom:4px}
    </style>
    <div style="padding:16px 16px 4px">
      <div style="font-size:18px;font-weight:700;color:#14312a">深圳 → 香港大学 通勤路线</div>
      <div style="font-size:11px;color:#8a8f99;margin-top:4px">耗时与费用为经验参考,以港铁/巴士公司/口岸公告为准</div>
    </div>
    ${qe.map(e=>`
      <div class="card route">
        <div class="route-head" data-id="${e.id}">
          <div style="display:flex;align-items:center"><span class="route-name">${e.name}</span><span class="tag">${e.badge}</span></div>
          <div class="route-summary">${e.summary}</div>
          <div class="chips"><span class="chip">${e.totalTime}</span><span class="chip">${e.totalCost}</span></div>
          <div class="expand-hint">${L===e.id?"收起步骤 ▲":"查看详细步骤 ▼"}</div>
        </div>
        ${L===e.id?`
          <div style="margin-top:12px;border-top:1px solid #eef0f2;padding-top:12px">
            <div style="display:inline-block;font-size:11px;color:#b8741a;background:#fdf3e3;border-radius:4px;padding:3px 10px;margin-bottom:12px">口岸时间:${e.borderTime}</div>
            ${e.steps.map((i,a)=>`
              <div class="step">
                <div class="step-left"><div class="step-dot">${a+1}</div>${a<e.steps.length-1?'<div class="step-line"></div>':""}</div>
                <div class="step-content"><div class="step-text">${i.text}</div><div class="step-detail">${i.detail}</div></div>
              </div>
            `).join("")}
            <div class="route-tips">
              <div class="route-tips-title">贴士</div>
              ${e.tips.map(i=>`<div class="tip">· ${i}</div>`).join("")}
            </div>
          </div>
        `:""}
      </div>
    `).join("")}
    <div class="section-title">通用贴士</div>
    <div class="card">${Ze.map(e=>`<div class="tip" style="font-size:12px;margin-bottom:8px">· ${e}</div>`).join("")}</div>
  `,t.querySelectorAll(".route-head").forEach(e=>{e.onclick=()=>{const i=e.dataset.id;L=L===i?"":i,Te()}}),z()}function Pe(){L="",Te()}const $e="idt_reviews",Be="idt_selection",de="idt_slots";function ce(t,e){try{const i=localStorage.getItem(t);return i===null?e:JSON.parse(i)}catch{return e}}function J(t,e){try{return localStorage.setItem(t,JSON.stringify(e)),!0}catch{return!1}}function re(){return ce($e,{})}function we(t){return re()[t]||[]}function Oe(t,e){const i=re();i[t]||(i[t]=[]);const a={id:Date.now()+"_"+Math.floor(Math.random()*1e3),rating:e.rating,nickname:e.nickname||"匿名",content:e.content,ts:Date.now()};return i[t].unshift(a),J($e,i)?a:null}function Re(t){const e=we(t);if(!e.length)return{count:0,avg:0};const i=e.reduce((a,d)=>a+(d.rating||0),0);return{count:e.length,avg:Math.round(i/e.length*10)/10}}function Q(){return ce(Be,[])}function je(t){return Q().indexOf(t)>=0}function De(t){let e=Q();const i=e.indexOf(t);let a;return i>=0?(e.splice(i,1),a=!1):(e.push(t),a=!0),J(Be,e),a}function I(){return ce(de,[])}function He(t){const e=I(),i=Object.assign({},t,{id:Date.now()+"_"+Math.floor(Math.random()*1e3)});return e.push(i),J(de,e)?i:null}function Ue(t){const e=I().filter(i=>i.id!==t);return J(de,e)}let ve=null;function h(t,e=2e3){const i=document.getElementById("toast-container");i.innerHTML=`<div class="toast show">${t}</div>`,clearTimeout(ve),ve=setTimeout(()=>{i.innerHTML=""},e)}let ee="",V="all",_="all";function q(){const t=document.getElementById("page-container"),e=Q(),i=re();let a=0,d=0,o=0;e.forEach(s=>{const m=ne.find(b=>b.code===s);!m||m.list==="capstone"||(o+=m.credits,m.list==="A"&&(a+=m.credits),(m.list==="A"||m.list==="B")&&(d+=m.credits))});const c=ee.trim().toLowerCase(),v=ne.filter(s=>!(V!=="all"&&s.list!==V||_!=="all"&&s.semester!=="1&2"&&s.semester!==_||c&&(s.code+s.title+s.titleZh).toLowerCase().indexOf(c)<0)).map(s=>{const m=i[s.code]||[],b=m.length?Math.round(m.reduce((n,p)=>n+(p.rating||0),0)/m.length*10)/10:0;return{...s,semText:ye(s.semester),ratingAvg:b,ratingCount:m.length,selected:e.indexOf(s.code)>=0}}),r=[{key:"all",label:"全部"},{key:"A",label:"List A 核心"},{key:"B",label:"List B 选修"},{key:"capstone",label:"毕业设计"}],u=[{key:"all",label:"全部学期"},{key:"1",label:"第一学期"},{key:"2",label:"第二学期"}],g=he;t.innerHTML=`
    <style>
      .search-bar{padding:12px 16px 0}
      .search-input{width:100%;background:#fff;border:none;border-radius:999px;padding:10px 16px;font-size:13px;box-shadow:0 2px 8px rgba(0,45,32,0.06);outline:none}
      .tabs{display:flex;padding:12px 16px 0;flex-wrap:wrap;gap:8px}
      .ftab{font-size:12px;color:#4b5563;background:#fff;border-radius:999px;padding:5px 14px;cursor:pointer}
      .ftab.active{background:#00573f;color:#fff;font-weight:600}
      .course-card{cursor:pointer}
      .course-code{font-size:14px;font-weight:700;color:#00573f;margin-right:8px}
      .course-title{font-size:15px;font-weight:600;color:#1f2430;margin-top:6px}
      .course-en{font-size:11px;color:#8a8f99;margin-top:2px}
      .course-meta{font-size:11px;color:#6b7280;margin-top:8px}
      .course-foot{display:flex;align-items:center;justify-content:space-between;margin-top:10px}
      .select-btn{font-size:12px;color:#00573f;background:#eef5f1;border-radius:999px;padding:5px 14px;cursor:pointer}
      .select-btn.selected{background:#00573f;color:#fff}
      .credit-bar{position:fixed;left:0;right:0;bottom:calc(56px + env(safe-area-inset-bottom, 0px));background:#fff;border-top:1px solid #e8eaee;display:flex;align-items:center;padding:10px 16px;z-index:20}
      .credit-info{display:flex;flex:1;justify-content:space-around}
      .cc{text-align:center}
      .cc-num{font-size:15px;font-weight:700;color:#c0392b}
      .cc-req{font-size:10px;color:#8a8f99}
      .cc.ok .cc-num{color:#00573f}
      .cc.fixed .cc-num{color:#6b7280}
      .cc-label{font-size:10px;color:#8a8f99}
      .credit-action{font-size:13px;color:#00573f;font-weight:600;padding:8px 0 8px 12px;cursor:pointer}
    </style>
    <div class="search-bar"><input class="search-input" id="course-search" placeholder="搜索课程代码 / 中英文名称" value="${ee}" /></div>
    <div class="tabs">${r.map(s=>`<span class="ftab ${V===s.key?"active":""}" data-list="${s.key}">${s.label}</span>`).join("")}</div>
    <div class="tabs">${u.map(s=>`<span class="ftab ${_===s.key?"active":""}" data-sem="${s.key}">${s.label}</span>`).join("")}</div>
    ${v.length?v.map(s=>`
      <div class="card course-card" data-code="${s.code}">
        <div style="display:flex;align-items:center;flex-wrap:wrap">
          <span class="course-code">${s.code}</span>
          ${s.list==="A"?'<span class="tag">List A</span>':s.list==="B"?'<span class="tag tag-gray">List B</span>':'<span class="tag tag-warn">毕业设计</span>'}
          ${s.isNew2026?'<span class="tag tag-new">26级新增</span>':""}
          ${s.movedToB2026?'<span class="tag tag-warn">26级转List B</span>':""}
        </div>
        <div class="course-title">${s.titleZh}</div>
        <div class="course-en">${s.title}</div>
        <div class="course-meta">${s.credits} 学分 · ${s.semText}${s.cef?' · <span style="color:#b8741a">CEF 可报销</span>':""}</div>
        <div class="course-foot">
          <div>${s.ratingCount>0?`<span class="star star-on">★</span> <span style="font-size:13px;font-weight:600;color:#f5a623;margin:0 4px">${s.ratingAvg}</span><span style="font-size:11px;color:#8a8f99">(${s.ratingCount} 条评价)</span>`:'<span style="font-size:11px;color:#8a8f99">暂无评价,去抢沙发</span>'}</div>
          <div class="select-btn ${s.selected?"selected":""}" data-toggle="${s.code}">${s.selected?"已选 ✓":"+ 选课"}</div>
        </div>
      </div>
    `).join(""):'<div class="card" style="text-align:center;color:#8a8f99;font-size:12px">没有匹配的课程,换个关键词试试</div>'}
    ${e.length?`
      <div class="credit-bar">
        <div class="credit-info">
          <div class="cc ${a>=g.listAMin?"ok":""}"><span class="cc-num">${a}</span><span class="cc-req">/${g.listAMin}</span><div class="cc-label">List A</div></div>
          <div class="cc ${d>=g.disciplineMin?"ok":""}"><span class="cc-num">${d}</span><span class="cc-req">/${g.disciplineMin}</span><div class="cc-label">学科课</div></div>
          <div class="cc ${o>=g.courseCredits?"ok":""}"><span class="cc-num">${o}</span><span class="cc-req">/${g.courseCredits}</span><div class="cc-label">课程学分</div></div>
          <div class="cc fixed"><span class="cc-num">+${g.dissertation}</span><div class="cc-label">毕业论文</div></div>
        </div>
        <div class="credit-action" id="go-schedule">排课表 ›</div>
      </div>
      <div style="height:60px"></div>
    `:""}
  `,document.getElementById("course-search").oninput=s=>{ee=s.target.value,q()},t.querySelectorAll("[data-list]").forEach(s=>{s.onclick=()=>{V=s.dataset.list,q()}}),t.querySelectorAll("[data-sem]").forEach(s=>{s.onclick=()=>{_=s.dataset.sem,q()}}),t.querySelectorAll("[data-toggle]").forEach(s=>{s.onclick=m=>{m.stopPropagation();const b=De(s.dataset.toggle);h(b?"已加入选课":"已移出选课"),q()}}),t.querySelectorAll(".course-card").forEach(s=>{s.onclick=()=>D(`/course-detail?code=${s.dataset.code}`)});const f=document.getElementById("go-schedule");f&&(f.onclick=()=>D("/schedule")),z()}function Fe(){q()}let K=5,te="",Z="";function W(t){const e=document.getElementById("page-container"),i=P(t);if(!i){h("课程不存在"),setTimeout(()=>D("/courses"),800);return}const a=we(t).map(r=>({...r,dateText:R(new Date(r.ts))})),d=Re(t),o=je(t),c=ye(i.semester),v=[1,2,3,4,5];document.querySelector(".nav-title").textContent=i.code,e.innerHTML=`
    <style>
      .detail-hero{background:linear-gradient(135deg,#00573f,#0a7a56);border-radius:0 0 16px 16px;padding:20px 16px;color:#fff}
      .hero-tag{display:inline-block;font-size:10px;background:rgba(255,255,255,0.2);border-radius:999px;padding:2px 10px;margin-right:6px;margin-bottom:6px}
      .hero-code{font-size:20px;font-weight:700;margin-top:8px}
      .hero-title-zh{font-size:16px;font-weight:600;margin-top:4px}
      .hero-en{font-size:11px;opacity:0.85;margin-top:4px}
      .hero-chips{margin-top:10px;display:flex;flex-wrap:wrap;gap:6px}
      .hero-chip{font-size:11px;background:rgba(255,255,255,0.15);border-radius:999px;padding:3px 12px}
      .hero-btn{margin-top:14px;text-align:center;padding:10px;border-radius:12px;font-size:13px;font-weight:600;cursor:pointer;background:rgba(255,255,255,0.15)}
      .hero-btn.selected{background:#fff;color:#00573f}
      .review{border-bottom:1px solid #f0f1f4;padding:10px 0}
      .review:last-child{border-bottom:none}
      .review-head{display:flex;align-items:center;gap:8px;margin-bottom:4px}
      .review-nick{font-size:13px;font-weight:600;color:#14312a}
      .review-date{font-size:11px;color:#8a8f99;margin-left:auto}
      .review-content{font-size:12px;color:#5b5f66;line-height:1.6}
      .form-row{display:flex;align-items:center;margin-bottom:12px}
      .form-label{font-size:13px;color:#14312a;width:40px;flex-shrink:0}
      .form-input{flex:1;border:1px solid #e8eaee;border-radius:8px;padding:8px 12px;font-size:13px;outline:none}
      .form-textarea{width:100%;border:1px solid #e8eaee;border-radius:8px;padding:10px 12px;font-size:13px;min-height:80px;resize:vertical;outline:none;margin-bottom:12px}
    </style>
    <div class="detail-hero">
      <div>
        ${i.list==="A"?'<span class="hero-tag">List A 核心课</span>':i.list==="B"?'<span class="hero-tag">List B 选修课</span>':'<span class="hero-tag">毕业设计 Capstone</span>'}
        ${i.isNew2026?'<span class="hero-tag">26级新增</span>':""}
        ${i.movedToB2026?'<span class="hero-tag">26级转List B</span>':""}
      </div>
      <div class="hero-code">${i.code}</div>
      <div class="hero-title-zh">${i.titleZh}</div>
      <div class="hero-en">${i.title}</div>
      <div class="hero-chips">
        <span class="hero-chip">${i.credits} 学分</span>
        <span class="hero-chip">${c}</span>
        ${i.cef?'<span class="hero-chip">CEF 可报销</span>':""}
        ${d.count>0?`<span class="hero-chip">★ ${d.avg}(${d.count})</span>`:""}
      </div>
      <div class="hero-btn ${o?"selected":""}" id="toggle-select">${o?"已加入我的选课 ✓":"+ 加入我的选课"}</div>
    </div>
    <div class="card">
      <div class="card-title">课程简介</div>
      <div style="font-size:12px;color:#5b5f66;line-height:1.8">${i.desc}</div>
      ${i.prereq?`<div style="margin-top:8px;font-size:11px"><span style="color:#00573f;font-weight:600">先修要求</span> ${i.prereq}</div>`:""}
      ${i.exclusive?`<div style="margin-top:4px;font-size:11px"><span style="color:#c0392b;font-weight:600">互斥课程</span> ${i.exclusive}</div>`:""}
    </div>
    <div class="section-title">课程评价(${d.count})</div>
    ${a.length?`<div class="card">${a.map(r=>`
      <div class="review">
        <div class="review-head">
          <span class="review-nick">${r.nickname}</span>
          <span>${v.map(u=>`<span class="star ${r.rating>=u?"star-on":""}">★</span>`).join("")}</span>
          <span class="review-date">${r.dateText}</span>
        </div>
        <div class="review-content">${r.content}</div>
      </div>
    `).join("")}</div>`:'<div class="card" style="text-align:center;color:#8a8f99;font-size:12px">还没有评价,分享你的上课体验吧</div>'}
    <div class="section-title">写评价(仅保存在本机)</div>
    <div class="card">
      <div class="form-row">
        <span class="form-label">评分</span>
        <span id="rating-stars">${v.map(r=>`<span class="star big ${K>=r?"star-on":""}" data-v="${r}">★</span>`).join("")}</span>
      </div>
      <div class="form-row">
        <span class="form-label">昵称</span>
        <input class="form-input" id="review-nick" placeholder="匿名" value="${te}" maxlength="12" />
      </div>
      <textarea class="form-textarea" id="review-content" placeholder="课程难度、作业量、给分、老师风格、对通勤党友好程度……" maxlength="500">${Z}</textarea>
      <button class="btn-primary" id="submit-review">发布评价</button>
    </div>
    <div style="height:20px"></div>
    <div style="text-align:center;padding:8px"><span class="btn-plain" id="back-btn">← 返回课程列表</span></div>
    <div style="height:20px"></div>
  `,document.getElementById("toggle-select").onclick=()=>{const r=De(t);h(r?"已加入选课":"已移出选课"),W(t)},document.getElementById("rating-stars").onclick=r=>{const u=r.target.dataset.v;u&&(K=Number(u),W(t))},document.getElementById("review-nick").oninput=r=>{te=r.target.value},document.getElementById("review-content").oninput=r=>{Z=r.target.value},document.getElementById("submit-review").onclick=()=>{const r=Z.trim();if(!r){h("请填写评价内容");return}if(!Oe(t,{rating:K,nickname:te.trim(),content:r})){h("保存失败,请重试");return}h("已发布"),Z="",W(t)},document.getElementById("back-btn").onclick=()=>D("/courses"),z()}function Ve(){const{code:t}=Ae();if(!t){D("/courses");return}K=5,Z="",W(t)}const Ee=()=>document.getElementById("modal-container");function _e({title:t,content:e,confirmText:i="确定",cancelText:a="取消",onConfirm:d,onCancel:o}){Ee().innerHTML=`
    <div class="modal-mask" id="modal-mask">
      <div class="modal">
        <div class="modal-title">${t}</div>
        ${`<div style="font-size:13px;color:#5b5f66;margin-bottom:12px">${e}</div>`}
        <div class="modal-btns">
          <div class="m-btn cancel" id="modal-cancel">${a}</div>
          <div class="m-btn confirm" id="modal-confirm">${i}</div>
        </div>
      </div>
    </div>`,document.getElementById("modal-cancel").onclick=()=>{ie(),o&&o()},document.getElementById("modal-confirm").onclick=()=>{ie(),d&&d()},document.getElementById("modal-mask").onclick=c=>{c.target===c.currentTarget&&(ie(),o&&o())}}function ie(){Ee().innerHTML=""}function G(t){return String(t).padStart(2,"0")}function se(t){return`${t.getFullYear()}${G(t.getMonth()+1)}${G(t.getDate())}T${G(t.getHours())}${G(t.getMinutes())}00`}function Ge(){const t=I();if(!t.length)return null;const e=C(),i=N.find(c=>e>=c.start&&e<=c.end)||N.find(c=>c.start>e)||N[N.length-1],a=$(i.start),d=$(i.end);let o=`BEGIN:VCALENDAR\r
VERSION:2.0\r
PRODID:-//HKU IDT Guide//EN\r
CALSCALE:GREGORIAN\r
`;return t.forEach(c=>{const v=c.day%7,r=new Date(a);for(;r.getDay()!==v;)r.setDate(r.getDate()+1);const u=new Date(r.getFullYear(),r.getMonth(),r.getDate(),Math.floor(c.startMin/60),c.startMin%60),g=new Date(r.getFullYear(),r.getMonth(),r.getDate(),Math.floor(c.endMin/60),c.endMin%60),f=new Date(d.getFullYear(),d.getMonth(),d.getDate(),23,59),s=P(c.code),m=`${c.code} ${s?s.titleZh:"课程"}`;o+=`BEGIN:VEVENT\r
`,o+=`DTSTART:${se(u)}\r
`,o+=`DTEND:${se(g)}\r
`,o+=`RRULE:FREQ=WEEKLY;UNTIL=${se(f)}\r
`,o+=`SUMMARY:${m}\r
`,o+=`LOCATION:${c.location||"香港大学"}\r
`,o+=`DESCRIPTION:${i.name} - HKU IDT Guide\r
`,o+=`END:VEVENT\r
`}),o+=`END:VCALENDAR\r
`,o}function Ye(){const t=Ge();if(!t)return!1;const e=new Blob([t],{type:"text/calendar;charset=utf-8"}),i=URL.createObjectURL(e),a=document.createElement("a");return a.href=i,a.download="hku-idt-timetable.ics",document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i),!0}const Y=8*60,ae=22*60,ue=["#00573f","#31597f","#6b5b95","#8a6d3b","#7a5195","#9c4f4f","#2e6f5c","#3d6e9e"];let k=!1,E={courseIndex:0,dayIndex:0,startTime:"18:30",endTime:"21:30",location:""};function A(){const t=document.getElementById("page-container"),e=be(C()),i=I(),a=Q().map(n=>P(n)).filter(Boolean),d=a.map(n=>`${n.code} ${n.titleZh}`),o={};let c=0;const v=i.map(n=>{const p=P(n.code);return n.code in o||(o[n.code]=ue[c%ue.length],c++),{id:n.id,code:n.code,name:p?p.titleZh:"",location:n.location,leftPct:Math.round((n.day-1)*100/7*1e3)/1e3,top:n.startMin-Y,height:Math.max(n.endMin-n.startMin,40),color:o[n.code],timeText:`${U(n.startMin)}-${U(n.endMin)}`}}),r=[];for(let n=Y/60;n<ae/60;n++)r.push(n);const u=ae-Y;t.innerHTML=`
    <style>
      .sched-head{display:flex;justify-content:space-between;align-items:center;padding:12px 16px}
      .sched-title{font-size:18px;font-weight:700;color:#14312a}
      .sched-sub{font-size:11px;color:#8a8f99;margin-top:2px}
      .sched-actions{display:flex;gap:8px}
      .act{font-size:12px;padding:6px 12px;border-radius:8px;cursor:pointer}
      .act.plain{color:#00573f;background:#eef5f1}
      .act.primary{color:#fff;background:#00573f}
      .grid-head{display:flex;padding:0 0 4px 32px}
      .day-head{flex:1;text-align:center;font-size:11px;color:#6b7280}
      .day-head.weekend{color:#c0392b}
      .sched-scroll{height:${Math.min(u*.7,500)}px;overflow-y:auto;position:relative;margin:0 8px}
      .grid{display:flex;position:relative}
      .time-col{width:32px;flex-shrink:0}
      .time-cell{height:60px;font-size:9px;color:#8a8f99;text-align:right;padding-right:4px}
      .days-wrap{position:relative;flex:1;border-left:1px solid #eef0f2}
      .day-col{position:absolute;top:0;bottom:0;border-right:1px solid #f5f6f8}
      .h-line{position:absolute;left:0;right:0;height:1px;background:#f5f6f8}
      .block{position:absolute;width:calc(100%/7 - 2px);border-radius:6px;padding:3px 4px;overflow:hidden;cursor:pointer;color:#fff;font-size:10px}
      .block-code{font-weight:600;font-size:11px}
      .block-time{opacity:0.85;font-size:9px}
      .block-loc{opacity:0.8;font-size:9px}
      .empty-hint{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#8a8f99;font-size:13px}
      .empty-sub{font-size:11px;margin-top:4px}
      .pk-row{display:flex;align-items:center;padding:10px 0;border-bottom:1px solid #f0f1f4}
      .pk-label{font-size:13px;color:#14312a;width:50px;flex-shrink:0}
      .pk-value{font-size:13px;color:#00573f}
      .pk-select,.pk-input{flex:1;border:1px solid #e8eaee;border-radius:8px;padding:8px 10px;font-size:13px;outline:none}
    </style>
    <div class="sched-head">
      <div><div class="sched-title">每周课表</div><div class="sched-sub">${e?`${e.name} · 第 ${e.week} 周`:"当前不在教学周内"}</div></div>
      <div class="sched-actions">
        ${v.length?'<div class="act plain" id="copy-btn">复制</div>':""}
        ${v.length?'<div class="act plain" id="ics-btn">导出日历</div>':""}
        <div class="act primary" id="add-btn">+ 添加</div>
      </div>
    </div>
    <div class="grid-head">${F.map((n,p)=>`<div class="day-head ${p>=5?"weekend":""}">${n}</div>`).join("")}</div>
    <div class="sched-scroll">
      <div class="grid">
        <div class="time-col">${r.map(n=>`<div class="time-cell">${n}:00</div>`).join("")}</div>
        <div class="days-wrap" style="height:${u}px">
          ${F.map((n,p)=>`<div class="day-col" style="left:${p*100/7}%;width:${100/7}%"></div>`).join("")}
          ${r.map((n,p)=>`<div class="h-line" style="top:${p*60}px"></div>`).join("")}
          ${v.map(n=>`<div class="block" data-id="${n.id}" style="left:${n.leftPct}%;top:${n.top}px;height:${n.height}px;background:${n.color}"><div class="block-code">${n.code}</div><div class="block-time">${n.timeText}</div>${n.location?`<div class="block-loc">${n.location}</div>`:""}</div>`).join("")}
          ${v.length===0?'<div class="empty-hint"><div>课表还是空的</div><div class="empty-sub">点右上角「+ 添加」录入上课时间</div></div>':""}
        </div>
      </div>
    </div>
    <div class="muted" style="text-align:center;padding:10px 16px">点击课程块可删除时段;「导出日历」生成 .ics 文件可导入任意日历应用</div>
    ${k?`
      <div class="modal-mask" id="add-mask">
        <div class="modal" style="padding:20px">
          <div class="modal-title">添加上课时段</div>
          ${a.length?`
            <div class="pk-row"><span class="pk-label">课程</span><select class="pk-select" id="pk-course">${d.map((n,p)=>`<option value="${p}" ${E.courseIndex===p?"selected":""}>${n}</option>`).join("")}</select></div>
            <div class="pk-row"><span class="pk-label">星期</span><select class="pk-select" id="pk-day">${F.map((n,p)=>`<option value="${p}" ${E.dayIndex===p?"selected":""}>${n}</option>`).join("")}</select></div>
            <div class="pk-row"><span class="pk-label">开始</span><input type="time" class="pk-input" id="pk-start" value="${E.startTime}" min="08:00" max="22:00" /></div>
            <div class="pk-row"><span class="pk-label">结束</span><input type="time" class="pk-input" id="pk-end" value="${E.endTime}" min="08:00" max="22:00" /></div>
            <div class="pk-row"><span class="pk-label">地点</span><input class="pk-input" id="pk-loc" placeholder="如 CB313 / 线上(选填)" value="${E.location}" /></div>
            <div class="modal-btns"><div class="m-btn cancel" id="add-cancel">取消</div><div class="m-btn confirm" id="add-save">保存</div></div>
          `:'<div style="text-align:center;color:#8a8f99;font-size:13px;padding:20px 0">请先在「课程」页加入选课</div><div class="modal-btns"><div class="m-btn cancel" id="add-cancel">关闭</div></div>'}
        </div>
      </div>
    `:""}
  `,document.getElementById("add-btn").onclick=()=>{k=!0,A()};const g=document.getElementById("add-cancel");g&&(g.onclick=()=>{k=!1,A()});const f=document.getElementById("add-mask");f&&(f.onclick=n=>{n.target===f&&(k=!1,A())});const s=document.getElementById("add-save");s&&(s.onclick=()=>{const n=Number(document.getElementById("pk-course").value),p=Number(document.getElementById("pk-day").value),l=document.getElementById("pk-start").value,x=document.getElementById("pk-end").value,T=document.getElementById("pk-loc").value,w=fe(l),B=fe(x);if(B<=w){h("结束时间需晚于开始时间");return}if(w<Y||B>ae){h("时段需在 08:00-22:00 之间");return}const j=p+1;if(I().some(X=>X.day===j&&!(X.endMin<=w||X.startMin>=B))){h("该时段与已有课程冲突");return}const ke=a[n];He({code:ke.code,day:j,startMin:w,endMin:B,location:T.trim()}),k=!1,E={courseIndex:n,dayIndex:p,startTime:l,endTime:x,location:""},h("已添加"),A()}),t.querySelectorAll(".block").forEach(n=>{n.onclick=()=>{_e({title:"删除该上课时段?",content:"删除后不影响「我的选课」",onConfirm:()=>{Ue(n.dataset.id),A()}})}});const m=document.getElementById("copy-btn");m&&(m.onclick=()=>{const n=I().slice().sort((p,l)=>p.day-l.day||p.startMin-l.startMin).map(p=>{const l=P(p.code);return`${F[p.day-1]} ${U(p.startMin)}-${U(p.endMin)} ${p.code} ${l?l.titleZh:""}${p.location?" @"+p.location:""}`});navigator.clipboard.writeText(n.join(`
`)).then(()=>h("已复制到剪贴板")).catch(()=>h("复制失败"))});const b=document.getElementById("ics-btn");b&&(b.onclick=()=>{const n=Ye();h(n?"已生成 .ics 文件,请导入日历应用":"课表为空")}),z()}function Ke(){k=!1,A()}S("/home",ze);S("/calendar",Le);S("/commute",Pe);S("/courses",Fe);S("/course-detail",Ve);S("/schedule",Ke);Me();
