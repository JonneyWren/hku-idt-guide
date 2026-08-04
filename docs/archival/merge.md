# 去重与冲突分析

展开条目 167 -> 去重后 141 条

## A. 同一节课在不同页的房间/教师文本不一致(取信息更全者)
- ELEC6063 周四 1:00pm-3:30pm (p6,26)
    房间: Lecture room 1, MSc Student Commons, 6/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun
    房间: Lecture room 1, MSc Student Commons
    教师: Prof Wallace CH Choy
    教师: Prof. Wallace CH Choy
- DASE7138 周一 3:00pm-6:00pm (p17,21)
    教师: Prof. CKL Or
    教师: Prof. Calvin Or
- DASE7137 周二 10:00am-1:00pm (p17,21)
    教师: Dr Leith Chan
    教师: Dr. Leith Chan
- DASE7137 周五 3:00pm-6:00pm (p17,21)
    教师: Dr Leith Chan
    教师: Dr. Leith Chan
- DASE7111 周五 7:00pm-10:00pm (p17,18)
    房间: KKLG109 & HW101 (lab sessions)
    房间: KKLG109
- DASE7140 周六 10:00am-1:00pm (p17,21)
    教师: Dr SJ Qin
    教师: Dr. SJ Qin

## B. 同一课程同一星期出现不同时间(真冲突,需确认)
- ELEC7043 周二:
    1:00pm-4:00pm @Lecture room 1, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun | Prof Xiaojuan Qi | 班次A (p6)
    1:00pm-4:00pm @Lecture room 1&2, MSc Student Commons, 6/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun | TBC | 班次C (p6)
- ELEC6080 周五:
    1:00pm-4:00pm @CBA | Mr Vincent Wong | 班次A (p7)
    7:00pm-10:00pm @CBA | Mr Vincent Wong | 班次B (p9)
- ELEC6603 周四:
    3:00pm-6:00pm @Lecture room 1&2, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun | Mr Vincent Wong | 班次A (p8)
    7:00pm-10:00pm @KB223 | Mr Vincent Wong | 班次B (p9)
- ELEC7029 周二:
    7:30pm-10:00pm @CBA | Dr David CW Ng | 班次A (p9,16)
    7:00pm-10:00pm @CBA | Dr. David CW Ng | 班次- (p26)
- ELEC7029 周五:
    7:30pm-10:00pm @Lecture room 1, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun | Dr David CW Ng | 班次B (p10,16)
    7:00pm-10:00pm @Lecture room 1, MSc Student Commons | Dr. David CW Ng | 班次- (p26)
- EMEE6005 周五:
    7:00pm-9:30pm @MB217 | Dr Match WL Ko | 班次- (p13)
    7:00pm-10:00pm @MB217 | Dr. Match Ko, Prof. Y.C.D. Leung | 班次- (p25)
- EMEE6007 周二:
    7:00pm-9:30pm @Lecture room 1&2, MSc Student Commons, 6/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun | Dr WWH Ching / Dr Raymond CL Fong | 班次- (p14)
    7:00pm-10:00pm @Lecture room 1&2, MSc Student Commons | Dr. M.W.H. Ching, Dr. R.C.L. Fong | 班次- (p25)
- DASE7140 周六:
    10:00am-1:00pm @KK202 | Dr. SJ Qin | 班次- (p17,21)
    2:30pm-5:30pm @KK201 | Dr. SJ Qin | 班次- (p21)
- DASE7501 周四:
    2:00pm-5:00pm @HW103, HW104B, HW105 & HW106 | Prof. HP Chen | 班次- (p21)
    7:00pm-10:00pm @HW103, HW104B, HW105 & HW106 | Prof. HP Chen | 班次- (p21)

## C. 去重后每门课排课
- **IDAT7100** [diss] 班次[A] Dissertation
    - (无排课)
- **IDAT7211** [A] 班次[A] Innovation and R & D principle
    - 周一 4:00pm-6:30pm @MWT2 | Dr. Carman Xiaoyan Yu (p23)
- **IDAT7212** [A] 班次[A] Mechatronic systems engineering
    - 周二 7:00pm-9:30pm @LE2 | Dr. Z. Ali (p23)
- **IDAT7213** [A] 班次[A] UAV design, navigation and control
    - 周三 12:00pm-2:30pm @MWT2 | Prof. P. Lu, Prof. Fu Zhang (p23)
- **IDAT7215** [A] 班次[A] Computer programming for product development and applications
    - 周四 7:00pm-9:30pm @KKLG109 | Dr. Z. Ali (p23)
- **IDAT7222** [A] 班次[A] Advanced CADCAM and AI driven manufacturing systems
    - 周一 7:00pm-9:30pm @31/F, HK Plaza | Dr. C.K. Chan, Dr. Z. Ali (p23)
- **IDAT7224** [A] 班次[A] Deep learning in engineering technology
    - 周五 7:00pm-9:30pm @KK201 | Dr. C.K. Chan (p23)
- **CIVL6054** [B] 班次[A] Engineering for transport systems
    - 周四 7:00pm-9:30pm @LE9 | Prof. X.T. Yan / Ir Prof. M.K.R. Luk / Prof. C.K. Mak (p1,3)
- **CIVL6061** [B] 班次[A] Special topic in environmental engineering A
    - 周二 10:00am-12:30pm @Lecture Rooms 801A & 801B, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Shek Tong Tsui, Hong Kong. | Prof. T.F.M. Chui / Ir Prof. K. Shih / Ir Prof. T. Zhang (p1)
- **DASE7034** [B] 班次[A,B] Operational research
    - 周五 3:00pm-6:00pm @MWT7 | Dr JW Wang (p17,18)
    - 周六 2:30pm-5:30pm @KK202 | Dr JW Wang (p17,18)
- **DASE7111** [B] 班次[A] Data-driven optimization
    - 周五 7:00pm-10:00pm @KKLG109 & HW101 (lab sessions) | Dr JW Wang (p17,18)
- **DASE7139** [B] 班次[A] Cyber-physical systems
    - 周三 7:00pm-10:00pm @HW103, HW104A, HW104B, HW105 & HW106 | Dr JC Chen (p17)
- **ELEC6098** [B] 班次[A,B] Electronic and mobile commerce
    - 周一 7:00pm-10:00pm @TT404 | Dr Victor Ng / Dr Andrew HC Wu | 班次A (p10)
    - 周三 4:00pm-7:00pm @Lecture room 1, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun | Dr Victor Ng / Dr Andrew HC Wu | 班次B (p8)
- **ELEC6603** [B] 班次[A,B] Success in industrial entrepreneurship
    - 周四 3:00pm-6:00pm @Lecture room 1&2, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun | Mr Vincent Wong | 班次A (p8)
    - 周四 7:00pm-10:00pm @KB223 | Mr Vincent Wong | 班次B (p9)
- **ELEC6604** [B] 班次[A,B] Neural networks, fuzzy systems and genetic algorithms
    - 周一 1:00pm-4:00pm @Lecture room 1, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun | Dr Grantham KH Pang | 班次A (p6,15)
    - 周五 1:00pm-4:00pm @Lecture room 1, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun | Dr Grantham KH Pang | 班次B (p6,15)
- **IDAT7217** [B] 班次[A] Advanced topics in innovative design and technology A
    - 周五 3:00pm-5:30pm @MB201 | Dr. Z. Ali (p23)
- **IDAT7220** [B] 班次[A] STEM education
    - 周三 7:00pm-9:30pm @TBC | Mr. Donn Gonda (p23)
- **MECH6010** [B] 班次[A] Service behaviour of materials
    - 周二 7:00pm-9:30pm @CYPP2 | Prof. Yue Chen, Prof. Y. Lu (p25)
- **MECH6034** [B] 班次[A,B] Computer-aided product development (CAPD)
    - 周二 3:00pm-5:30pm @CYPP2 | Prof. Y.H. Chen, Dr. C.K. Chan (p25)
    - 周四 4:00pm-6:30pm @TBC | Prof. Y.H. Chen, Dr. C.K. Chan (p25)
- **MECH6046** [B] 班次[A] Microsystems for energy, biomedical and consumer electronics applications
    - 周五 5:00pm-7:30pm @31/F, HK Plaza | Prof. Dong-Myeong Shin, Prof. Lizhi Xu (p25)
- **MECH7010** [B] 班次[A] Contemporary robotics
    - 周五 7:00pm-9:30pm @MWT1 | Prof. Y.H. Chen, Prof. Fu Zhang (p25)
- **RECO7605** [B] 班次[A] Information management
    - 周二 6:30pm-9:30pm @TBC | Dr. Jing Wang | 日期:October 20, 2026 (p23)
    - 周六 10:00am-1:00pm @TBC | Dr. Jing Wang | 日期:October 3, 17, 31; November 7, 14, 21, 28 (p23)
- **TDLL6024** [B] 班次[A,B,C] Teaching and learning with digital technology
    - 周二 2:00pm-5:00pm @Room 101, Runme Shaw Building | Mr Thomas Underwood | 班次A (p23)
    - 周四 2:00pm-5:00pm @Room 101, Runme Shaw Building | Mr Thomas Underwood | 班次B (p23)
    - 周六 9:00am-12:00pm @Room 101, Runme Shaw Building | Mr Thomas Underwood | 班次C (p23)
- **TDLL6334** [B] 班次[A] Educational video and storytelling
    - 周五 6:30pm-9:30pm @Room 101, Runme Shaw Building | Mr. Donn Gonda (p23)
- **URBA6011** [B] 班次[A] Programming and foundations in urban data analysis
    - 周三 2:00pm-4:00pm @TBC | Prof. Yimeng Song (p23)
- **LATX7513** [XC] 班次[A] Fundamentals of aircraft and aviation
    - 周五 4:00pm-6:30pm @CYCP1 | Prof. Chuyu Wei, Prof. LX Huang, Prof. MX Huang, Prof. Shijun Guo, Dr. Ziqing Ma (p24)
- **LATX7517** [XC] 班次[A] Aviation economics: business model and entrepreneurship
    - 周二 1:00pm-3:30pm @31/F, HK Plaza | Prof. Joseph Chan (Business) (p24)
- **LATX7518** [XC] 班次[A] Fundamentals of wireless communications and sensing in space
    - 周三 7:00pm-9:30pm @KK201 | Prof. Yuanwei Liu (EEE) (p24)
- **MECH6019** [XC] 班次[A] Sources and control of air pollution
    - 周四 7:00pm-9:30pm @CYPP3 | Prof. Y.C.D. Leung, Dr. Raymond Fong (p25)
- **MECH6045** [XC] 班次[A] Nanotechnology: fundamentals and applications
    - 周三 7:00pm-9:30pm @CPD-LG.07 | Prof. W.D. Li, Dr. Cuiping Zhang (p25)
- **MECH7014** [XC] 班次[A] Railway engineering - metro and high-speed rail
    - 周六 2:30pm-5:00pm @MWT1 | Prof. K. M. Leung (p25)
- **MECH7016** [XC] 班次[A] Railway project management
    - 周六 10:00am-12:30pm @MWT1 | Prof. K. M. Leung, Mr. Andy Pang (p25)
- **MECH7020** [XC] 班次[A] Autonomous Drones with AI
    - 周一 1:00pm-3:30pm @31/F, HK Plaza | Prof. Peng Lu, Dr. Nan Chen (p25)
- **MECH7029** [XC] 班次[A] Aeroacoustics and noise control with machine learning
    - 周三 4:00pm-6:30pm @601A + 601B, MSc Student Commons | Prof. LX Huang (p25)
- **MECH7030** [XC] 班次[A] Intelligent computation for aerodynamics and structural mechanics
    - 周一 4:00pm-6:30pm @801A + 801B, MSc Student Commons | Prof. Penghao Duan, Prof. C.H. Liu (p25)
- **MEST7412** [XC] 班次[A] Solid-state materials and physics
    - 周五 7:00pm-9:30pm @LE2 | Prof. Yue Chen (p26)
- **MEST7418** [XC] 班次[A] Nanophotonics
    - 周一 7:00pm-9:30pm @KKLG109 | Prof. Wen Di Li, Prof. Nicholas Fang (p26)
- **MEST7419** [XC] 班次[A] Safety training and microelectronics process
    - 周二 7:00pm-9:30pm @CPD-LG.10 | Dr. Cuiping Zhang (p26)
- **MEST7420** [XC] 班次[A] CMOS IC analog circuit design: basic circuits
    - 周三 3:00pm-5:30pm @31/F, HK Plaza | Dr. Cuiping Zhang (p26)
- **MEST7421** [XC] 班次[A] Thin film transistor technology and applications
    - 周四 7:00pm-9:30pm @KK202 | Dr. Cuiping Zhang (p26)
- **CIVL6004** [XD] 班次[A] Advanced soil mechanics
    - 周三 7:00pm-9:30pm @Lecture Rooms 601A & 601B, MSc Student Commons, 6/F, Pacific Plaza, 418 Des Voeux Road West, Shek Tong Tsui, Hong Kong. | Ir Prof. J. Yang / Prof. Y. Zhao (p1)
- **CIVL6006** [XD] 班次[A] Advanced water and wastewater treatment
    - 周一 7:00pm-9:30pm @KKLG102 | Prof. H.R. Duan (p1)
- **CIVL6007** [XD] 班次[A] Behavioural travel demand modelling
    - 周一 7:00pm-9:30pm @LE7 | Ir Dr. C.P. Wong (p1)
- **CIVL6013** [XD] 班次[A] Concrete technology
    - 周三 7:00pm-9:30pm @Lecture Rooms 801A & 801B, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Shek Tong Tsui, Hong Kong. | Ir Prof. A.K.H. Kwan (p1)
- **CIVL6026** [XD] 班次[A] Finite element method
    - 周四 7:00pm-9:30pm @LE7 | Ir Prof. S.H. Lo (p1)
- **CIVL6053** [XD] 班次[A] Wind engineering
    - 周五 7:00pm-9:30pm @CYPP2 | Prof. X.W. Deng / Dr. Neptune Yu (p1)
- **CIVL7019** [XD] 班次[A] Statistical methods for civil engineering
    - 周五 7:00pm-9:30pm @LE8 | Prof. J.T. Ke (p1,3)
- **CIVL7023** [XD] 班次[A] Industrialized construction with automation and robotics
    - 周四 7:00pm-9:30pm @KKLG102 | Prof. X. Li (p3)
- **CIVL7024** [XD] 班次[A] Computer vision for infrastructure construction and management
    - 周一 7:00pm-9:30pm @LE8 | Prof. X.G. Wang (p3)
- **DASE7015** [XD] 班次[A,B] Engineering economics and finance
    - 周一 7:00pm-10:00pm @KK201 | Mr. Wilson Chow (p17)
    - 周四 7:00pm-10:00pm @LE4 | Mr. Wilson Chow (p17)
- **DASE7020** [XD] 班次[A,B] Supply chain management
    - 周二 7:00pm-10:00pm @MB237 | Dr JWC Ng (p17)
    - 周五 10:00am-1:00pm @HW103 | Dr JWC Ng (p17)
- **DASE7113** [XD] 班次[A] Optimization methods for intelligent systems
    - 周一 7:00pm-10:00pm @KK202 | Prof. JY Li (p21)
- **DASE7119** [XD] 班次[A] Digital enterprises and e-commerce
    - 周三 2:00pm-5:00pm @HW106 | Dr SH Choi (p17)
- **DASE7137** [XD] 班次[A,B] Virtual reality and applications
    - 周二 10:00am-1:00pm @HW106 | Dr. Leith Chan (p17,21)
    - 周五 3:00pm-6:00pm @HW106 | Dr. Leith Chan (p17,21)
- **DASE7138** [XD] 班次[A] Healthcare systems engineering
    - 周一 3:00pm-6:00pm @LE5 | Prof. Calvin Or (p17,21)
- **DASE7140** [XD] 班次[A,B] Machine learning and applications
    - 周六 10:00am-1:00pm @KK202 | Dr. SJ Qin (p17,21)
    - 周六 2:30pm-5:30pm @KK201 | Dr. SJ Qin (p21)
- **DASE7141** [XD] 班次[A] Advanced digital twin and applications
    - 周四 10:00am-1:00pm @HW103 & HW101 (lab session) | Prof. RY Zhong (p17)
- **DASE7142** [XD] 班次[A] Advanced computational methods
    - 周三 2:00pm-5:00pm @HW103 | Prof. SC Lin (p17,21)
- **DASE7143** [XD] 班次[A] The internet of things
    - 周一 10:00am-1:00pm @HW101 | Prof. SY Hu (p17,21)
- **DASE7154** [XD] 班次[A] Intelligent technologies for systems engineering A
    - (无排课)
- **DASE7155** [XD] 班次[A] Intelligent technologies for systems engineering B
    - 周一 2:00pm-5:00pm @CYCP1 | Prof. Abdullah Konak and Prof. Sadan Kulturel-Konak | 日期:January 4 & 11, 2027 (p22)
    - 周二 2:00pm-5:00pm @CYCP4 | Prof. Abdullah Konak and Prof. Sadan Kulturel-Konak | 日期:January 5 & 12, 2027 (p22)
    - 周三 2:00pm-5:00pm @CYCP1 | Prof. Abdullah Konak and Prof. Sadan Kulturel-Konak | 日期:January 6 & 13, 2027 (p22)
    - 周四 2:00pm-5:00pm @CYCP1 | Prof. Abdullah Konak and Prof. Sadan Kulturel-Konak | 日期:January 7 & 14, 2027 (p22)
    - 周五 2:00pm-5:00pm @CYCP1 | Prof. Abdullah Konak and Prof. Sadan Kulturel-Konak | 日期:January 8, 2027 (p22)
    - 周六 2:00pm-5:00pm @CYCP3 | Prof. Abdullah Konak and Prof. Sadan Kulturel-Konak | 日期:January 9, 2027 (p22)
- **DASE7212** [XD] 班次[A] Physical internet
    - 周一 2:00pm-5:00pm @CYPP3 | Prof. E Ballot | 日期:January 4 & 11, 2027 (p19,20)
    - 周二 2:00pm-5:00pm @CYPP1 | Prof. E Ballot | 日期:January 5 & 12, 2027 (p19,20)
    - 周三 2:00pm-5:00pm @CYPP3 | Prof. E Ballot | 日期:January 6 & 13, 2027 (p19,20)
    - 周四 2:00pm-5:00pm @CYPP3 | Prof. E Ballot | 日期:January 7 & 14, 2027 (p19,20)
    - 周五 2:00pm-5:00pm @CYPP3 | Prof. E Ballot | 日期:January 8 & 15, 2027 (p19,20)
- **DASE7310** [XD] 班次[A] Financial engineering
    - 周一 7:00pm-10:00pm @KK102 | Prof. PC Chen (p17)
- **DASE7341** [XD] 班次[A] Technology innovation and entrepreneurship
    - 周五 7:00pm-10:00pm @LE4 | Mr. N Xu (p17)
- **DASE7501** [XD] 班次[B] Robot modelling, planning and control
    - 周四 2:00pm-5:00pm @HW103, HW104B, HW105 & HW106 | Prof. HP Chen (p21)
    - 周四 7:00pm-10:00pm @HW103, HW104B, HW105 & HW106 | Prof. HP Chen (p21)
- **DASE7502** [XD] 班次[B] Robot sensing and intelligence
    - 周二 3:00pm-6:00pm @HW101 & HW104A & B | Prof. J Liu (p21)
    - 周五 10:00am-1:00pm @HW101 & HW104A & B | Prof. J Liu (p21)
- **DASE7503** [XD] 班次[B] Robotic systems integration
    - 周一 3:00pm-6:00pm @HW104A & B, HW105 & HW106 | Dr. HH Cheung (p21)
    - 周四 10:00am-1:00pm @HW104 A & B, HW105 & HW106 | Dr. HH Cheung (p21)
- **DASE7506** [XD] 班次[A] Advanced machine learning methods
    - 周三 7:00pm-10:00pm @LE2 | Prof. JY Chen (p17,21)
- **DASE7507** [XD] 班次[A] Frontiers in robotics and intelligent systems
    - 周三 10:00am-1:00pm @MWT7 | Dr X Ma (p21)
- **DASE7508** [XD] 班次[A] Security in intelligent systems
    - 周二 7:00pm-10:00pm @KK202 | Prof. SN Liu (p21)
- **DASE7509** [XD] 班次[A] Artificial intelligence for system automation
    - 周二 10:00am-1:00pm @HW103 & HW104A & B | Prof. Y Xu (p21)
- **DASE7902** [XD] 班次[A] Project management
    - 周四 7:00pm-10:00pm @MB201 | Mr. Bill Chan (p17)
- **ELEC6008** [XD] 班次[A] Pattern recognition and machine learning
    - 周三 1:00pm-4:00pm @Lecture room 1&2, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun | Dr Andrew HC Wu (p6)
- **ELEC6026** [XD] 班次[A] Digital signal processing
    - 周四 9:00am-12:00pm @CPD-3.04 | Prof SC Chan (p5)
- **ELEC6027** [XD] 班次[A] Integrated circuit systems design
    - 周三 7:00pm-9:30pm @CYCP1 | Dr Albert TL Lee | 班次A (p10,16)
- **ELEC6036** [XD] 班次[A] High-performance computer architecture
    - 周六 9:00am-12:00pm @CYPP3 | Dr Vincent WL Tam (p5)
- **ELEC6063** [XD] 班次[A] Optoelectronics and lightwave technology
    - 周四 1:00pm-3:30pm @Lecture room 1, MSc Student Commons, 6/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun | Prof. Wallace CH Choy (p6,26)
- **ELEC6080** [XD] 班次[A,B] Telecommunications systems and management
    - 周五 1:00pm-4:00pm @CBA | Mr Vincent Wong | 班次A (p7)
    - 周五 7:00pm-10:00pm @CBA | Mr Vincent Wong | 班次B (p9)
- **ELEC6081** [XD] 班次[A] Biomedical signals and systems
    - 周二 9:00am-12:00pm @RHT | Dr Andrew HC Wu (p5)
- **ELEC6085** [XD] 班次[A] The role of a computerized SCADA system in power system operation
    - 周三 7:00pm-10:00pm @KB132 | Ir Patrick YC Yeung (p9)
- **ELEC6095** [XD] 班次[A] Smart grid
    - 周一 7:00pm-10:00pm @LE5 | Dr KH Lam / Prof Jin Zhong | 班次A (p9)
- **ELEC6097** [XD] 班次[A] IP networks
    - 周四 4:00pm-6:30pm @MW103 | Prof Lawrence K Yeung (p8)
- **ELEC6099** [XD] 班次[A] Wireless communications and networking
    - 周一 4:00pm-6:30pm @MBG07 | Dr Qunsong Zeng (p8)
- **ELEC6103** [XD] 班次[A] Satellite communications
    - 周五 4:00pm-7:00pm @CBA | Mr Richard CK Pang (p8)
- **ELEC7011** [XD] 班次[A,B] Energy Internet
    - 周一 11:00am-1:30pm @TBC | Prof Yi Wang | 班次A (p5)
    - 周二 7:00pm-9:30pm @CYPP3 | Prof Yi Wang | 班次B (p10)
- **ELEC7013** [XD] 班次[A] Leadership in future energy industry
    - 周六 9:00am-12:00pm @CPD-3.15 | Ir Prof Paul WY Poon / Ir CC Ngan (p5,12)
- **ELEC7029** [XD] 班次[A,B] Analog IC design computing and memories
    - 周二 7:00pm-10:00pm @CBA | Dr. David CW Ng (p26)
    - 周二 7:30pm-10:00pm @CBA | Dr David CW Ng | 班次A (p9,16)
    - 周五 7:00pm-10:00pm @Lecture room 1, MSc Student Commons | Dr. David CW Ng (p26)
    - 周五 7:30pm-10:00pm @Lecture room 1, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun | Dr David CW Ng | 班次B (p10,16)
- **ELEC7043** [XD] 班次[A,C] Digital image processing and computer vision
    - 周二 1:00pm-4:00pm @Lecture room 1, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun | Prof Xiaojuan Qi | 班次A (p6)
    - 周二 1:00pm-4:00pm @Lecture room 1&2, MSc Student Commons, 6/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun | TBC | 班次C (p6)
- **ELEC7082** [XD] 班次[A] Artificial intelligence in finance
    - 周一 7:00pm-10:00pm @CPD-LG.10 | Dr Joch Z Lin (p10)
- **ELEC7084** [XD] 班次[A] Advanced database
    - 周三 9:00am-11:30am @MW325 | Dr Victor CS Lee (p5)
- **ELEC7402** [XD] 班次[A] Advanced electric vehicle technology
    - 周二 7:00pm-9:30pm @MB142 | Dr Herman TW Ching (p10)
- **ELEC7403** [XD] 班次[A] Advanced power electronics
    - 周六 3:00pm-6:00pm @CPD3.15 | Dr Jason Chow (p8)
- **ELEC7404** [XD] 班次[A] Advanced railway engineering
    - 周四 7:00pm-10:00pm @KB132 | Dr KM Leung (p10)
- **ELEC7467** [XD] 班次[A] Power system protection
    - 周六 12:00pm-3:00pm @CPD-2.45 | Ir Prof FC Chan (p6)
- **ELEC7469** [XD] 班次[A] Advanced electrical energy and power conversion systems
    - 周五 7:00pm-10:00pm @CYPP3 | Dr Daniel YC Cheng (p10)
- **EMEE6002** [XD] 班次[A,B] Sustainability and climate change
    - 周二 7:00pm-9:30pm @CYCC501 | Dr Wilton WT Fok / Dr Albert TL Lee | 班次A (p13)
    - 周五 2:00pm-6:00pm @TBC (HKU Shenzhen Qianhai campus) MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun | Dr Wilton WT Fok / Dr Albert TL Lee | 班次B | 日期:23.10.2026, 30.10.2026, 06.11.2026, 13.11.2026, 20.11.2026 (p12)
    - 周六 9:00am-1:00pm @TBC (HKU Shenzhen Qianhai campus) | Dr Wilton WT Fok / Dr Albert TL Lee | 班次B | 日期:24.10.2026, 31.10.2026, 14.11.2026 (p12)
- **EMEE6005** [XD] 班次[A] Renewable energy technology I: Fundamental
    - 周五 7:00pm-9:30pm @MB217 | Dr Match WL Ko (p13)
    - 周五 7:00pm-10:00pm @MB217 | Dr. Match Ko, Prof. Y.C.D. Leung (p25)
- **EMEE6007** [XD] 班次[A] Energy and carbon audit
    - 周二 7:00pm-9:30pm @Lecture room 1&2, MSc Student Commons, 6/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun | Dr WWH Ching / Dr Raymond CL Fong (p14)
    - 周二 7:00pm-10:00pm @Lecture room 1&2, MSc Student Commons | Dr. M.W.H. Ching, Dr. R.C.L. Fong (p25)
- **EMEE6011** [XD] 班次[A] Energy saving lighting
    - 周一 7:00pm-9:30pm @CPD-4.17 | Prof Anthony HW Choi (p13)
- **EMEE7013** [XD] 班次[A] Leadership in future energy industry
    - 周六 9:00am-12:00pm @CPD-3.15 | Ir Prof Paul WY Poon / Ir CC Ngan (p5,12)
- **ICES7001** [XD] 班次[A] Advanced semiconductor device
    - 周一 9:00am-12:00pm @Lecture room 1, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun | Prof Tianshuo Zhao (p15)
- **ICES7008** [XD] 班次[A] Advanced electronic packaging and integration
    - 周六 9:00am-12:00pm @KKLG103 | Prof Ziyang Gao (p15)
- **ICES7009** [XD] 班次[A] Integrated silicon photonics
    - 周二 1:00pm-4:00pm @Lecture room 2, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun | Prof Chao Xiang (p15)
- **MEBS6001** [XD] 班次[A] Electrical installations
    - 周三 7:00pm-10:00pm @CYPP3 | Dr Tsz Wood Ching (p4)
- **MEBS6002** [XD] 班次[A] Lighting engineering
    - 周一 7:00pm-10:00pm @CYCP1 | Ir KF Chan / Dr Edward WC Lo (p4)
- **MEBS6014** [XD] 班次[A] Computer modelling and simulation
    - 周六 10:00am-1:00pm @KB223 | Ir YW Lam (p4)
- **MEBS6015** [XD] 班次[A] Natural and hybrid ventilation of buildings
    - 周二 7:00pm-10:00pm @KB223 | Prof Y Li (p4)
- **MEBS6019** [XD] 班次[A] Extra-low-voltage electrical systems in buildings
    - 周四 7:00pm-10:00pm @CPD-2.42 | Dr KH Lam (p4)
- **MEBS7013** [XD] 班次[A] Fire service installations
    - 周五 7:00pm-10:00pm @Lecture room 1, MSc Student Commons, 6/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun | Dr MY Ng (p4)