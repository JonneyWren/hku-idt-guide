// 2026-27 第一学期开课安排
// 来源:2026-Sem1-Engg.pdf(香港大学工程学院 2026-27 第一学期全院课表,共 27 页)
// 逐页坐标解析后按「课程代码 + 星期 + 时间 + 班次」去重;同一课程出现在多个专业页时取信息最完整的一份
// term: 1 = 第一学期。第二学期排课待官方第二学期课表公布,本文件暂不收录
// section: 课表标注的班次字母;留空表示官方课表未标注班次
// dateNote: 官方课表标注的指定上课日期(密集课程 / 分段授课)

export const TIMETABLE = {
  IDAT7211: [
    { term: 1, section: 'A', day: 'MON', start: '16:00', end: '18:30', venue: 'MWT2', instructor: 'Dr. Carman Xiaoyan Yu', dateNote: '' }
  ],
  IDAT7212: [
    { term: 1, section: 'A', day: 'TUE', start: '19:00', end: '21:30', venue: 'LE2', instructor: 'Dr. Z. Ali', dateNote: '' }
  ],
  IDAT7213: [
    { term: 1, section: 'A', day: 'WED', start: '12:00', end: '14:30', venue: 'MWT2', instructor: 'Prof. P. Lu, Prof. Fu Zhang', dateNote: '' }
  ],
  IDAT7215: [
    { term: 1, section: 'A', day: 'THU', start: '19:00', end: '21:30', venue: 'KKLG109', instructor: 'Dr. Z. Ali', dateNote: '' }
  ],
  IDAT7222: [
    { term: 1, section: 'A', day: 'MON', start: '19:00', end: '21:30', venue: '31/F, HK Plaza', instructor: 'Dr. C.K. Chan, Dr. Z. Ali', dateNote: '' }
  ],
  IDAT7224: [
    { term: 1, section: 'A', day: 'FRI', start: '19:00', end: '21:30', venue: 'KK201', instructor: 'Dr. C.K. Chan', dateNote: '' }
  ],
  CIVL6054: [
    { term: 1, section: 'A', day: 'THU', start: '19:00', end: '21:30', venue: 'LE9', instructor: 'Prof. X.T. Yan / Ir Prof. M.K.R. Luk / Prof. C.K. Mak', dateNote: '' }
  ],
  CIVL6061: [
    { term: 1, section: 'A', day: 'TUE', start: '10:00', end: '12:30', venue: 'Lecture Rooms 801A & 801B, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Shek Tong Tsui, Hong Kong.', instructor: 'Prof. T.F.M. Chui / Ir Prof. K. Shih / Ir Prof. T. Zhang', dateNote: '' }
  ],
  DASE7034: [
    { term: 1, section: '', day: 'FRI', start: '15:00', end: '18:00', venue: 'MWT7', instructor: 'Dr JW Wang', dateNote: '' },
    { term: 1, section: '', day: 'SAT', start: '14:30', end: '17:30', venue: 'KK202', instructor: 'Dr JW Wang', dateNote: '' }
  ],
  DASE7111: [
    { term: 1, section: 'A', day: 'FRI', start: '19:00', end: '22:00', venue: 'KKLG109 & HW101 (lab sessions)', instructor: 'Dr JW Wang', dateNote: '' }
  ],
  DASE7139: [
    { term: 1, section: 'A', day: 'WED', start: '19:00', end: '22:00', venue: 'HW103, HW104A, HW104B, HW105 & HW106', instructor: 'Dr JC Chen', dateNote: '' }
  ],
  ELEC6098: [
    { term: 1, section: 'A', day: 'MON', start: '19:00', end: '22:00', venue: 'TT404', instructor: 'Dr Victor Ng / Dr Andrew HC Wu', dateNote: '' },
    { term: 1, section: 'B', day: 'WED', start: '16:00', end: '19:00', venue: 'Lecture room 1, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun', instructor: 'Dr Victor Ng / Dr Andrew HC Wu', dateNote: '' }
  ],
  ELEC6603: [
    { term: 1, section: 'A', day: 'THU', start: '15:00', end: '18:00', venue: 'Lecture room 1&2, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun', instructor: 'Mr Vincent Wong', dateNote: '' },
    { term: 1, section: 'B', day: 'THU', start: '19:00', end: '22:00', venue: 'KB223', instructor: 'Mr Vincent Wong', dateNote: '' }
  ],
  ELEC6604: [
    { term: 1, section: 'A', day: 'MON', start: '13:00', end: '16:00', venue: 'Lecture room 1, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun', instructor: 'Dr Grantham KH Pang', dateNote: '' },
    { term: 1, section: 'B', day: 'FRI', start: '13:00', end: '16:00', venue: 'Lecture room 1, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun', instructor: 'Dr Grantham KH Pang', dateNote: '' }
  ],
  IDAT7217: [
    { term: 1, section: 'A', day: 'FRI', start: '15:00', end: '17:30', venue: 'MB201', instructor: 'Dr. Z. Ali', dateNote: '' }
  ],
  IDAT7220: [
    { term: 1, section: 'A', day: 'WED', start: '19:00', end: '21:30', venue: 'TBC', instructor: 'Mr. Donn Gonda', dateNote: '' }
  ],
  MECH6010: [
    { term: 1, section: 'A', day: 'TUE', start: '19:00', end: '21:30', venue: 'CYPP2', instructor: 'Prof. Yue Chen, Prof. Y. Lu', dateNote: '' }
  ],
  MECH6034: [
    { term: 1, section: '', day: 'TUE', start: '15:00', end: '17:30', venue: 'CYPP2', instructor: 'Prof. Y.H. Chen, Dr. C.K. Chan', dateNote: '' },
    { term: 1, section: '', day: 'THU', start: '16:00', end: '18:30', venue: 'TBC', instructor: 'Prof. Y.H. Chen, Dr. C.K. Chan', dateNote: '' }
  ],
  MECH6046: [
    { term: 1, section: 'A', day: 'FRI', start: '17:00', end: '19:30', venue: '31/F, HK Plaza', instructor: 'Prof. Dong-Myeong Shin, Prof. Lizhi Xu', dateNote: '' }
  ],
  MECH7010: [
    { term: 1, section: 'A', day: 'FRI', start: '19:00', end: '21:30', venue: 'MWT1', instructor: 'Prof. Y.H. Chen, Prof. Fu Zhang', dateNote: '' }
  ],
  RECO7605: [
    { term: 1, section: '', day: 'TUE', start: '18:30', end: '21:30', venue: 'TBC', instructor: 'Dr. Jing Wang', dateNote: 'October 20, 2026' },
    { term: 1, section: '', day: 'SAT', start: '10:00', end: '13:00', venue: 'TBC', instructor: 'Dr. Jing Wang', dateNote: 'October 3, 17, 31; November 7, 14, 21, 28' }
  ],
  TDLL6024: [
    { term: 1, section: 'A', day: 'TUE', start: '14:00', end: '17:00', venue: 'Room 101, Runme Shaw Building', instructor: 'Mr Thomas Underwood', dateNote: '' },
    { term: 1, section: 'B', day: 'THU', start: '14:00', end: '17:00', venue: 'Room 101, Runme Shaw Building', instructor: 'Mr Thomas Underwood', dateNote: '' },
    { term: 1, section: 'C', day: 'SAT', start: '09:00', end: '12:00', venue: 'Room 101, Runme Shaw Building', instructor: 'Mr Thomas Underwood', dateNote: '' }
  ],
  TDLL6334: [
    { term: 1, section: 'A', day: 'FRI', start: '18:30', end: '21:30', venue: 'Room 101, Runme Shaw Building', instructor: 'Mr. Donn Gonda', dateNote: '' }
  ],
  URBA6011: [
    { term: 1, section: 'A', day: 'WED', start: '14:00', end: '16:00', venue: 'TBC', instructor: 'Prof. Yimeng Song', dateNote: '' }
  ],
  LATX7513: [
    { term: 1, section: 'A', day: 'FRI', start: '16:00', end: '18:30', venue: 'CYCP1', instructor: 'Prof. Chuyu Wei, Prof. LX Huang, Prof. MX Huang, Prof. Shijun Guo, Dr. Ziqing Ma', dateNote: '' }
  ],
  LATX7517: [
    { term: 1, section: 'A', day: 'TUE', start: '13:00', end: '15:30', venue: '31/F, HK Plaza', instructor: 'Prof. Joseph Chan (Business)', dateNote: '' }
  ],
  LATX7518: [
    { term: 1, section: 'A', day: 'WED', start: '19:00', end: '21:30', venue: 'KK201', instructor: 'Prof. Yuanwei Liu (EEE)', dateNote: '' }
  ],
  MECH6019: [
    { term: 1, section: 'A', day: 'THU', start: '19:00', end: '21:30', venue: 'CYPP3', instructor: 'Prof. Y.C.D. Leung, Dr. Raymond Fong', dateNote: '' }
  ],
  MECH6045: [
    { term: 1, section: 'A', day: 'WED', start: '19:00', end: '21:30', venue: 'CPD-LG.07', instructor: 'Prof. W.D. Li, Dr. Cuiping Zhang', dateNote: '' }
  ],
  MECH7014: [
    { term: 1, section: 'A', day: 'SAT', start: '14:30', end: '17:00', venue: 'MWT1', instructor: 'Prof. K. M. Leung', dateNote: '' }
  ],
  MECH7016: [
    { term: 1, section: 'A', day: 'SAT', start: '10:00', end: '12:30', venue: 'MWT1', instructor: 'Prof. K. M. Leung, Mr. Andy Pang', dateNote: '' }
  ],
  MECH7020: [
    { term: 1, section: 'A', day: 'MON', start: '13:00', end: '15:30', venue: '31/F, HK Plaza', instructor: 'Prof. Peng Lu, Dr. Nan Chen', dateNote: '' }
  ],
  MECH7029: [
    { term: 1, section: 'A', day: 'WED', start: '16:00', end: '18:30', venue: '601A + 601B, MSc Student Commons', instructor: 'Prof. LX Huang', dateNote: '' }
  ],
  MECH7030: [
    { term: 1, section: 'A', day: 'MON', start: '16:00', end: '18:30', venue: '801A + 801B, MSc Student Commons', instructor: 'Prof. Penghao Duan, Prof. C.H. Liu', dateNote: '' }
  ],
  MEST7412: [
    { term: 1, section: 'A', day: 'FRI', start: '19:00', end: '21:30', venue: 'LE2', instructor: 'Prof. Yue Chen', dateNote: '' }
  ],
  MEST7418: [
    { term: 1, section: 'A', day: 'MON', start: '19:00', end: '21:30', venue: 'KKLG109', instructor: 'Prof. Wen Di Li, Prof. Nicholas Fang', dateNote: '' }
  ],
  MEST7419: [
    { term: 1, section: 'A', day: 'TUE', start: '19:00', end: '21:30', venue: 'CPD-LG.10', instructor: 'Dr. Cuiping Zhang', dateNote: '' }
  ],
  MEST7420: [
    { term: 1, section: 'A', day: 'WED', start: '15:00', end: '17:30', venue: '31/F, HK Plaza', instructor: 'Dr. Cuiping Zhang', dateNote: '' }
  ],
  MEST7421: [
    { term: 1, section: 'A', day: 'THU', start: '19:00', end: '21:30', venue: 'KK202', instructor: 'Dr. Cuiping Zhang', dateNote: '' }
  ],
  CIVL6004: [
    { term: 1, section: 'A', day: 'WED', start: '19:00', end: '21:30', venue: 'Lecture Rooms 601A & 601B, MSc Student Commons, 6/F, Pacific Plaza, 418 Des Voeux Road West, Shek Tong Tsui, Hong Kong.', instructor: 'Ir Prof. J. Yang / Prof. Y. Zhao', dateNote: '' }
  ],
  CIVL6006: [
    { term: 1, section: 'A', day: 'MON', start: '19:00', end: '21:30', venue: 'KKLG102', instructor: 'Prof. H.R. Duan', dateNote: '' }
  ],
  CIVL6007: [
    { term: 1, section: 'A', day: 'MON', start: '19:00', end: '21:30', venue: 'LE7', instructor: 'Ir Dr. C.P. Wong', dateNote: '' }
  ],
  CIVL6013: [
    { term: 1, section: 'A', day: 'WED', start: '19:00', end: '21:30', venue: 'Lecture Rooms 801A & 801B, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Shek Tong Tsui, Hong Kong.', instructor: 'Ir Prof. A.K.H. Kwan', dateNote: '' }
  ],
  CIVL6026: [
    { term: 1, section: 'A', day: 'THU', start: '19:00', end: '21:30', venue: 'LE7', instructor: 'Ir Prof. S.H. Lo', dateNote: '' }
  ],
  CIVL6053: [
    { term: 1, section: 'A', day: 'FRI', start: '19:00', end: '21:30', venue: 'CYPP2', instructor: 'Prof. X.W. Deng / Dr. Neptune Yu', dateNote: '' }
  ],
  CIVL7019: [
    { term: 1, section: 'A', day: 'FRI', start: '19:00', end: '21:30', venue: 'LE8', instructor: 'Prof. J.T. Ke', dateNote: '' }
  ],
  CIVL7023: [
    { term: 1, section: 'A', day: 'THU', start: '19:00', end: '21:30', venue: 'KKLG102', instructor: 'Prof. X. Li', dateNote: '' }
  ],
  CIVL7024: [
    { term: 1, section: 'A', day: 'MON', start: '19:00', end: '21:30', venue: 'LE8', instructor: 'Prof. X.G. Wang', dateNote: '' }
  ],
  DASE7015: [
    { term: 1, section: '', day: 'MON', start: '19:00', end: '22:00', venue: 'KK201', instructor: 'Mr. Wilson Chow', dateNote: '' },
    { term: 1, section: '', day: 'THU', start: '19:00', end: '22:00', venue: 'LE4', instructor: 'Mr. Wilson Chow', dateNote: '' }
  ],
  DASE7020: [
    { term: 1, section: '', day: 'TUE', start: '19:00', end: '22:00', venue: 'MB237', instructor: 'Dr JWC Ng', dateNote: '' },
    { term: 1, section: '', day: 'FRI', start: '10:00', end: '13:00', venue: 'HW103', instructor: 'Dr JWC Ng', dateNote: '' }
  ],
  DASE7113: [
    { term: 1, section: 'A', day: 'MON', start: '19:00', end: '22:00', venue: 'KK202', instructor: 'Prof. JY Li', dateNote: '' }
  ],
  DASE7119: [
    { term: 1, section: 'A', day: 'WED', start: '14:00', end: '17:00', venue: 'HW106', instructor: 'Dr SH Choi', dateNote: '' }
  ],
  DASE7137: [
    { term: 1, section: '', day: 'TUE', start: '10:00', end: '13:00', venue: 'HW106', instructor: 'Dr. Leith Chan', dateNote: '' },
    { term: 1, section: '', day: 'FRI', start: '15:00', end: '18:00', venue: 'HW106', instructor: 'Dr. Leith Chan', dateNote: '' }
  ],
  DASE7138: [
    { term: 1, section: 'A', day: 'MON', start: '15:00', end: '18:00', venue: 'LE5', instructor: 'Prof. Calvin Or', dateNote: '' }
  ],
  DASE7140: [
    { term: 1, section: '', day: 'SAT', start: '10:00', end: '13:00', venue: 'KK202', instructor: 'Dr. SJ Qin', dateNote: '' },
    { term: 1, section: '', day: 'SAT', start: '14:30', end: '17:30', venue: 'KK201', instructor: 'Dr. SJ Qin', dateNote: '' }
  ],
  DASE7141: [
    { term: 1, section: 'A', day: 'THU', start: '10:00', end: '13:00', venue: 'HW103 & HW101 (lab session)', instructor: 'Prof. RY Zhong', dateNote: '' }
  ],
  DASE7142: [
    { term: 1, section: 'A', day: 'WED', start: '14:00', end: '17:00', venue: 'HW103', instructor: 'Prof. SC Lin', dateNote: '' }
  ],
  DASE7143: [
    { term: 1, section: 'A', day: 'MON', start: '10:00', end: '13:00', venue: 'HW101', instructor: 'Prof. SY Hu', dateNote: '' }
  ],
  DASE7154: [
    { term: 1, section: '', day: 'MON', start: '14:00', end: '17:00', venue: 'CYPP3', instructor: 'Prof. E Ballot', dateNote: 'January 4 & 11, 2027' },
    { term: 1, section: '', day: 'TUE', start: '14:00', end: '17:00', venue: 'CYPP1', instructor: 'Prof. E Ballot', dateNote: 'January 5 & 12, 2027' },
    { term: 1, section: '', day: 'WED', start: '14:00', end: '17:00', venue: 'CYPP3', instructor: 'Prof. E Ballot', dateNote: 'January 6 & 13, 2027' },
    { term: 1, section: '', day: 'THU', start: '14:00', end: '17:00', venue: 'CYPP3', instructor: 'Prof. E Ballot', dateNote: 'January 7 & 14, 2027' },
    { term: 1, section: '', day: 'FRI', start: '14:00', end: '17:00', venue: 'CYPP3', instructor: 'Prof. E Ballot', dateNote: 'January 8 & 15, 2027' }
  ],
  DASE7155: [
    { term: 1, section: '', day: 'MON', start: '14:00', end: '17:00', venue: 'CYCP1', instructor: 'Prof. Abdullah Konak and Prof. Sadan Kulturel-Konak', dateNote: 'January 4 & 11, 2027' },
    { term: 1, section: '', day: 'TUE', start: '14:00', end: '17:00', venue: 'CYCP4', instructor: 'Prof. Abdullah Konak and Prof. Sadan Kulturel-Konak', dateNote: 'January 5 & 12, 2027' },
    { term: 1, section: '', day: 'WED', start: '14:00', end: '17:00', venue: 'CYCP1', instructor: 'Prof. Abdullah Konak and Prof. Sadan Kulturel-Konak', dateNote: 'January 6 & 13, 2027' },
    { term: 1, section: '', day: 'THU', start: '14:00', end: '17:00', venue: 'CYCP1', instructor: 'Prof. Abdullah Konak and Prof. Sadan Kulturel-Konak', dateNote: 'January 7 & 14, 2027' },
    { term: 1, section: '', day: 'FRI', start: '14:00', end: '17:00', venue: 'CYCP1', instructor: 'Prof. Abdullah Konak and Prof. Sadan Kulturel-Konak', dateNote: 'January 8, 2027' },
    { term: 1, section: '', day: 'SAT', start: '14:00', end: '17:00', venue: 'CYCP3', instructor: 'Prof. Abdullah Konak and Prof. Sadan Kulturel-Konak', dateNote: 'January 9, 2027' }
  ],
  DASE7212: [
    { term: 1, section: '', day: 'MON', start: '14:00', end: '17:00', venue: 'CYPP3', instructor: 'Prof. E Ballot', dateNote: 'January 4 & 11, 2027' },
    { term: 1, section: '', day: 'TUE', start: '14:00', end: '17:00', venue: 'CYPP1', instructor: 'Prof. E Ballot', dateNote: 'January 5 & 12, 2027' },
    { term: 1, section: '', day: 'WED', start: '14:00', end: '17:00', venue: 'CYPP3', instructor: 'Prof. E Ballot', dateNote: 'January 6 & 13, 2027' },
    { term: 1, section: '', day: 'THU', start: '14:00', end: '17:00', venue: 'CYPP3', instructor: 'Prof. E Ballot', dateNote: 'January 7 & 14, 2027' },
    { term: 1, section: '', day: 'FRI', start: '14:00', end: '17:00', venue: 'CYPP3', instructor: 'Prof. E Ballot', dateNote: 'January 8 & 15, 2027' }
  ],
  DASE7310: [
    { term: 1, section: 'A', day: 'MON', start: '19:00', end: '22:00', venue: 'KK102', instructor: 'Prof. PC Chen', dateNote: '' }
  ],
  DASE7341: [
    { term: 1, section: 'A', day: 'FRI', start: '19:00', end: '22:00', venue: 'LE4', instructor: 'Mr. N Xu', dateNote: '' }
  ],
  DASE7501: [
    { term: 1, section: '', day: 'THU', start: '14:00', end: '17:00', venue: 'HW103, HW104B, HW105 & HW106', instructor: 'Prof. HP Chen', dateNote: '' },
    { term: 1, section: '', day: 'THU', start: '19:00', end: '22:00', venue: 'HW103, HW104B, HW105 & HW106', instructor: 'Prof. HP Chen', dateNote: '' }
  ],
  DASE7502: [
    { term: 1, section: '', day: 'TUE', start: '15:00', end: '18:00', venue: 'HW101 & HW104A & B', instructor: 'Prof. J Liu', dateNote: '' },
    { term: 1, section: '', day: 'FRI', start: '10:00', end: '13:00', venue: 'HW101 & HW104A & B', instructor: 'Prof. J Liu', dateNote: '' }
  ],
  DASE7503: [
    { term: 1, section: '', day: 'MON', start: '15:00', end: '18:00', venue: 'HW104A & B, HW105 & HW106', instructor: 'Dr. HH Cheung', dateNote: '' },
    { term: 1, section: '', day: 'THU', start: '10:00', end: '13:00', venue: 'HW104 A & B, HW105 & HW106', instructor: 'Dr. HH Cheung', dateNote: '' }
  ],
  DASE7506: [
    { term: 1, section: 'A', day: 'WED', start: '19:00', end: '22:00', venue: 'LE2', instructor: 'Prof. JY Chen', dateNote: '' }
  ],
  DASE7507: [
    { term: 1, section: 'A', day: 'WED', start: '10:00', end: '13:00', venue: 'MWT7', instructor: 'Dr X Ma', dateNote: '' }
  ],
  DASE7508: [
    { term: 1, section: 'A', day: 'TUE', start: '19:00', end: '22:00', venue: 'KK202', instructor: 'Prof. SN Liu', dateNote: '' }
  ],
  DASE7509: [
    { term: 1, section: 'A', day: 'TUE', start: '10:00', end: '13:00', venue: 'HW103 & HW104A & B', instructor: 'Prof. Y Xu', dateNote: '' }
  ],
  DASE7902: [
    { term: 1, section: 'A', day: 'THU', start: '19:00', end: '22:00', venue: 'MB201', instructor: 'Mr. Bill Chan', dateNote: '' }
  ],
  ELEC6008: [
    { term: 1, section: 'A', day: 'WED', start: '13:00', end: '16:00', venue: 'Lecture room 1&2, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun', instructor: 'Dr Andrew HC Wu', dateNote: '' }
  ],
  ELEC6026: [
    { term: 1, section: 'A', day: 'THU', start: '09:00', end: '12:00', venue: 'CPD-3.04', instructor: 'Prof SC Chan', dateNote: '' }
  ],
  ELEC6027: [
    { term: 1, section: 'A', day: 'WED', start: '19:00', end: '21:30', venue: 'CYCP1', instructor: 'Dr Albert TL Lee', dateNote: '' }
  ],
  ELEC6036: [
    { term: 1, section: 'A', day: 'SAT', start: '09:00', end: '12:00', venue: 'CYPP3', instructor: 'Dr Vincent WL Tam', dateNote: '' }
  ],
  ELEC6063: [
    { term: 1, section: 'A', day: 'THU', start: '13:00', end: '15:30', venue: 'Lecture room 1, MSc Student Commons, 6/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun', instructor: 'Prof. Wallace CH Choy', dateNote: '' }
  ],
  ELEC6080: [
    { term: 1, section: 'A', day: 'FRI', start: '13:00', end: '16:00', venue: 'CBA', instructor: 'Mr Vincent Wong', dateNote: '' },
    { term: 1, section: 'B', day: 'FRI', start: '19:00', end: '22:00', venue: 'CBA', instructor: 'Mr Vincent Wong', dateNote: '' }
  ],
  ELEC6081: [
    { term: 1, section: 'A', day: 'TUE', start: '09:00', end: '12:00', venue: 'RHT', instructor: 'Dr Andrew HC Wu', dateNote: '' }
  ],
  ELEC6085: [
    { term: 1, section: 'A', day: 'WED', start: '19:00', end: '22:00', venue: 'KB132', instructor: 'Ir Patrick YC Yeung', dateNote: '' }
  ],
  ELEC6095: [
    { term: 1, section: 'A', day: 'MON', start: '19:00', end: '22:00', venue: 'LE5', instructor: 'Dr KH Lam / Prof Jin Zhong', dateNote: '' }
  ],
  ELEC6097: [
    { term: 1, section: 'A', day: 'THU', start: '16:00', end: '18:30', venue: 'MW103', instructor: 'Prof Lawrence K Yeung', dateNote: '' }
  ],
  ELEC6099: [
    { term: 1, section: 'A', day: 'MON', start: '16:00', end: '18:30', venue: 'MBG07', instructor: 'Dr Qunsong Zeng', dateNote: '' }
  ],
  ELEC6103: [
    { term: 1, section: 'A', day: 'FRI', start: '16:00', end: '19:00', venue: 'CBA', instructor: 'Mr Richard CK Pang', dateNote: '' }
  ],
  ELEC7011: [
    { term: 1, section: 'A', day: 'MON', start: '11:00', end: '13:30', venue: 'TBC', instructor: 'Prof Yi Wang', dateNote: '' },
    { term: 1, section: 'B', day: 'TUE', start: '19:00', end: '21:30', venue: 'CYPP3', instructor: 'Prof Yi Wang', dateNote: '' }
  ],
  ELEC7013: [
    { term: 1, section: 'A', day: 'SAT', start: '09:00', end: '12:00', venue: 'CPD-3.15', instructor: 'Ir Prof Paul WY Poon / Ir CC Ngan', dateNote: '' }
  ],
  ELEC7029: [
    { term: 1, section: 'A', day: 'TUE', start: '19:30', end: '22:00', venue: 'CBA', instructor: 'Dr David CW Ng', dateNote: '' },
    { term: 1, section: 'B', day: 'FRI', start: '19:30', end: '22:00', venue: 'Lecture room 1, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun', instructor: 'Dr David CW Ng', dateNote: '' }
  ],
  ELEC7043: [
    { term: 1, section: 'A', day: 'TUE', start: '13:00', end: '16:00', venue: 'Lecture room 1, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun', instructor: 'Prof Xiaojuan Qi', dateNote: '' },
    { term: 1, section: 'C', day: 'TUE', start: '13:00', end: '16:00', venue: 'Lecture room 1&2, MSc Student Commons, 6/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun', instructor: 'TBC', dateNote: '' }
  ],
  ELEC7082: [
    { term: 1, section: 'A', day: 'MON', start: '19:00', end: '22:00', venue: 'CPD-LG.10', instructor: 'Dr Joch Z Lin', dateNote: '' }
  ],
  ELEC7084: [
    { term: 1, section: 'A', day: 'WED', start: '09:00', end: '11:30', venue: 'MW325', instructor: 'Dr Victor CS Lee', dateNote: '' }
  ],
  ELEC7402: [
    { term: 1, section: 'A', day: 'TUE', start: '19:00', end: '21:30', venue: 'MB142', instructor: 'Dr Herman TW Ching', dateNote: '' }
  ],
  ELEC7403: [
    { term: 1, section: 'A', day: 'SAT', start: '15:00', end: '18:00', venue: 'CPD3.15', instructor: 'Dr Jason Chow', dateNote: '' }
  ],
  ELEC7404: [
    { term: 1, section: 'A', day: 'THU', start: '19:00', end: '22:00', venue: 'KB132', instructor: 'Dr KM Leung', dateNote: '' }
  ],
  ELEC7467: [
    { term: 1, section: 'A', day: 'SAT', start: '12:00', end: '15:00', venue: 'CPD-2.45', instructor: 'Ir Prof FC Chan', dateNote: '' }
  ],
  ELEC7469: [
    { term: 1, section: 'A', day: 'FRI', start: '19:00', end: '22:00', venue: 'CYPP3', instructor: 'Dr Daniel YC Cheng', dateNote: '' }
  ],
  EMEE6002: [
    { term: 1, section: 'A', day: 'TUE', start: '19:00', end: '21:30', venue: 'CYCC501', instructor: 'Dr Wilton WT Fok / Dr Albert TL Lee', dateNote: '' },
    { term: 1, section: 'B', day: 'FRI', start: '14:00', end: '18:00', venue: 'TBC (HKU Shenzhen Qianhai campus)', instructor: 'Dr Wilton WT Fok / Dr Albert TL Lee', dateNote: '23.10.2026, 30.10.2026, 06.11.2026, 13.11.2026' },
    { term: 1, section: 'B', day: 'FRI', start: '16:00', end: '18:00', venue: 'Lecture room 1&2, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun', instructor: 'Dr Wilton WT Fok / Dr Albert TL Lee', dateNote: '20.11.2026' },
    { term: 1, section: 'B', day: 'SAT', start: '09:00', end: '13:00', venue: 'TBC (HKU Shenzhen Qianhai campus)', instructor: 'Dr Wilton WT Fok / Dr Albert TL Lee', dateNote: '24.10.2026, 31.10.2026, 14.11.2026' }
  ],
  EMEE6005: [
    { term: 1, section: 'A', day: 'FRI', start: '19:00', end: '21:30', venue: 'MB217', instructor: 'Dr Match WL Ko', dateNote: '' }
  ],
  EMEE6007: [
    { term: 1, section: 'A', day: 'TUE', start: '19:00', end: '21:30', venue: 'Lecture room 1&2, MSc Student Commons, 6/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun', instructor: 'Dr WWH Ching / Dr Raymond CL Fong', dateNote: '' }
  ],
  EMEE6011: [
    { term: 1, section: 'A', day: 'MON', start: '19:00', end: '21:30', venue: 'CPD-4.17', instructor: 'Prof Anthony HW Choi', dateNote: '' }
  ],
  EMEE7013: [
    { term: 1, section: 'A', day: 'SAT', start: '09:00', end: '12:00', venue: 'CPD-3.15', instructor: 'Ir Prof Paul WY Poon / Ir CC Ngan', dateNote: '' }
  ],
  ICES7001: [
    { term: 1, section: 'A', day: 'MON', start: '09:00', end: '12:00', venue: 'Lecture room 1, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun', instructor: 'Prof Tianshuo Zhao', dateNote: '' }
  ],
  ICES7008: [
    { term: 1, section: 'A', day: 'SAT', start: '09:00', end: '12:00', venue: 'KKLG103', instructor: 'Prof Ziyang Gao', dateNote: '' }
  ],
  ICES7009: [
    { term: 1, section: 'A', day: 'TUE', start: '13:00', end: '16:00', venue: 'Lecture room 2, MSc Student Commons, 8/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun', instructor: 'Prof Chao Xiang', dateNote: '' }
  ],
  MEBS6001: [
    { term: 1, section: 'A', day: 'WED', start: '19:00', end: '22:00', venue: 'CYPP3', instructor: 'Dr Tsz Wood Ching', dateNote: '' }
  ],
  MEBS6002: [
    { term: 1, section: 'A', day: 'MON', start: '19:00', end: '22:00', venue: 'CYCP1', instructor: 'Ir KF Chan / Dr Edward WC Lo', dateNote: '' }
  ],
  MEBS6014: [
    { term: 1, section: 'A', day: 'SAT', start: '10:00', end: '13:00', venue: 'KB223', instructor: 'Ir YW Lam', dateNote: '' }
  ],
  MEBS6015: [
    { term: 1, section: 'A', day: 'TUE', start: '19:00', end: '22:00', venue: 'KB223', instructor: 'Prof Y Li', dateNote: '' }
  ],
  MEBS6019: [
    { term: 1, section: 'A', day: 'THU', start: '19:00', end: '22:00', venue: 'CPD-2.42', instructor: 'Dr KH Lam', dateNote: '' }
  ],
  MEBS7013: [
    { term: 1, section: 'A', day: 'FRI', start: '19:00', end: '22:00', venue: 'Lecture room 1, MSc Student Commons, 6/F, Pacific Plaza, 418 Des Voeux Road West, Sai Ying Pun', instructor: 'Dr MY Ng', dateNote: '' }
  ]
};

const DAY_ZH = { MON: '周一', TUE: '周二', WED: '周三', THU: '周四', FRI: '周五', SAT: '周六', SUN: '周日' };

export function getSections(code) {
  return TIMETABLE[code] || [];
}

export function dayText(day) {
  return DAY_ZH[day] || '';
}
