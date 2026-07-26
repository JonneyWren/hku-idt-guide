// 2026-27 学年 TPG 开课安排
// 来源:Filtered_TPG_Courses_Timetable.xlsx(官方课表)
// 同一班次的多个日期区间已合并;day 为空表示无固定上课时间(时间地点待定/自学安排)
// term: 1 = 第一学期, 2 = 第二学期

export const TIMETABLE = {
  COMP7103: [
    { term: 1, section: '1B', day: 'THU', start: '19:00', end: '21:50', venue: 'CPD-3.04', instructor: '' },
    { term: 1, section: '1C', day: 'THU', start: '09:00', end: '11:50', venue: '', instructor: '' },
    { term: 1, section: '1A', day: '', start: '', end: '', venue: '', instructor: '' },
    { term: 2, section: '2D', day: 'FRI', start: '19:00', end: '21:50', venue: 'KB223', instructor: '' },
    { term: 2, section: '2E', day: 'MON', start: '19:00', end: '21:50', venue: 'KB223', instructor: '' }
  ],
  COMP7404: [
    { term: 1, section: '1A', day: 'WED', start: '19:00', end: '21:50', venue: '', instructor: 'Schnieders,Dirk' },
    { term: 1, section: '1B', day: 'FRI', start: '19:00', end: '21:50', venue: '', instructor: 'Xu,Dong' },
    { term: 2, section: '2C', day: 'TUE', start: '19:00', end: '21:50', venue: 'CPD-3.04', instructor: '' },
    { term: 2, section: '2D', day: 'WED', start: '19:00', end: '21:50', venue: 'CPD-3.04', instructor: '' },
    { term: 2, section: '2E', day: 'TUE', start: '19:00', end: '21:50', venue: '', instructor: '' }
  ],
  COMP7408: [
    { term: 1, section: '1A', day: 'TUE', start: '09:00', end: '11:50', venue: '', instructor: '' },
    { term: 2, section: '2A', day: 'SAT', start: '14:00', end: '16:50', venue: 'MWT1', instructor: '' }
  ],
  COMP7503: [
    { term: 1, section: '1A', day: 'MON', start: '19:00', end: '21:50', venue: 'LE1', instructor: 'Luo,Tao' },
    { term: 1, section: '1B', day: 'FRI', start: '19:00', end: '21:50', venue: 'MWT2', instructor: '' },
    { term: 2, section: '2C', day: 'MON', start: '19:00', end: '21:50', venue: 'CPD-3.04', instructor: 'Luo,Tao' }
  ],
  COMP7506: [
    { term: 1, section: '1A', day: 'MON', start: '19:00', end: '21:50', venue: 'CYCC501', instructor: 'Chim,Tat Wing' },
    { term: 2, section: '2B', day: 'THU', start: '19:00', end: '21:50', venue: 'KB223', instructor: 'Chim,Tat Wing' },
    { term: 2, section: '2C', day: 'WED', start: '14:00', end: '16:50', venue: '', instructor: '' },
    { term: 2, section: '2D', day: 'TUE', start: '14:00', end: '16:50', venue: '', instructor: '' }
  ],
  COMP7802: [
    { term: 1, section: '1A', day: 'TUE', start: '19:00', end: '21:50', venue: 'MWT2', instructor: '' },
    { term: 1, section: '1B', day: '', start: '', end: '', venue: '', instructor: 'Ng,Tat Lun' },
    { term: 1, section: '1C', day: '', start: '', end: '', venue: '', instructor: '' }
  ],
  COMP7901: [
    { term: 2, section: '2A', day: 'THU', start: '19:00', end: '21:50', venue: 'CPD-LG.18', instructor: 'Pun,Kwok Hung' }
  ],
  COMP7906: [
    { term: 1, section: '1A', day: '', start: '', end: '', venue: '', instructor: 'Yiu,Siu Wai Russell' },
    { term: 1, section: '1B', day: 'TUE', start: '19:00', end: '21:50', venue: 'LE1', instructor: '' },
    { term: 2, section: '2C', day: 'TUE', start: '19:00', end: '21:50', venue: 'LE1', instructor: '' }
  ],
  DASC7606: [
    { term: 1, section: '1B', day: 'THU', start: '19:00', end: '21:50', venue: 'MWT2', instructor: '' },
    { term: 1, section: '1C', day: 'THU', start: '14:00', end: '16:50', venue: '', instructor: '' },
    { term: 1, section: '1A', day: '', start: '', end: '', venue: '', instructor: '' },
    { term: 2, section: '2D', day: 'SAT', start: '19:00', end: '21:50', venue: 'CYCP1', instructor: '' },
    { term: 2, section: '2E', day: 'THU', start: '19:00', end: '21:50', venue: '', instructor: '' }
  ],
  DASE7034: [
    { term: 1, section: '1A', day: 'FRI', start: '15:00', end: '17:50', venue: 'MWT7', instructor: 'Wang,Junwei' },
    { term: 1, section: '1B', day: 'SAT', start: '14:30', end: '17:20', venue: 'KK201', instructor: 'Wang,Junwei' },
    { term: 2, section: '2C', day: 'SAT', start: '14:00', end: '16:50', venue: 'CBA', instructor: 'Wang,Junwei' }
  ],
  DASE7111: [
    { term: 1, section: '1A', day: 'FRI', start: '19:00', end: '21:50', venue: 'KKLG109', instructor: 'Wang,Junwei' }
  ],
  DASE7128: [
    { term: 2, section: '2A', day: 'FRI', start: '14:00', end: '16:50', venue: '', instructor: 'Or,Ka Lun' }
  ],
  DASE7139: [
    { term: 1, section: '1A', day: 'WED', start: '19:00', end: '21:50', venue: 'HW106', instructor: 'Chen,Jiangcheng' },
    { term: 2, section: '2B', day: 'WED', start: '19:00', end: '21:50', venue: 'HW103', instructor: 'Chen,Jiangcheng' }
  ],
  ELEC6098: [
    { term: 1, section: '1A', day: 'MON', start: '19:00', end: '21:50', venue: 'TT404', instructor: 'Ng,Hon; Wu,Ho Chun' },
    { term: 1, section: '1B', day: 'WED', start: '16:00', end: '18:50', venue: '', instructor: 'Ng,Hon; Wu,Ho Chun' },
    { term: 2, section: '2C', day: 'SAT', start: '09:00', end: '15:50', venue: 'MB217', instructor: 'Sin,Chiu Shun Charleston' }
  ],
  ELEC6603: [
    { term: 1, section: '1A', day: 'THU', start: '15:00', end: '17:50', venue: '', instructor: '' },
    { term: 1, section: '1B', day: 'THU', start: '19:00', end: '21:50', venue: 'KB223', instructor: '' }
  ],
  ELEC6604: [
    { term: 1, section: '1A', day: 'MON', start: '13:00', end: '15:50', venue: '', instructor: 'Pang,Kwok Hung Grantham' },
    { term: 1, section: '1B', day: 'FRI', start: '13:00', end: '15:50', venue: '', instructor: 'Pang,Kwok Hung Grantham' }
  ],
  IDAT7100: [
    { term: 1, section: '1A', day: '', start: '', end: '', venue: '', instructor: '' },
    { term: 2, section: '2A', day: '', start: '', end: '', venue: '', instructor: '' }
  ],
  IDAT7211: [
    { term: 1, section: '1A', day: 'MON', start: '16:00', end: '18:20', venue: 'MWT2', instructor: '' },
    { term: 2, section: '2A', day: 'THU', start: '16:00', end: '18:20', venue: 'CPD-LG.07', instructor: '' }
  ],
  IDAT7212: [
    { term: 1, section: '1A', day: 'TUE', start: '19:00', end: '21:20', venue: 'LE2', instructor: 'Ali,Zulfiqar' },
    { term: 2, section: '2A', day: 'TUE', start: '19:00', end: '21:20', venue: 'LE5', instructor: 'Ali,Zulfiqar' }
  ],
  IDAT7213: [
    { term: 1, section: '1A', day: 'THU', start: '12:00', end: '14:50', venue: 'MWT2', instructor: 'Lu,Peng; Zhang,Fu' },
    { term: 2, section: '2A', day: 'FRI', start: '19:00', end: '21:20', venue: '', instructor: 'Wang,Liuping; Zhang,Fu' }
  ],
  IDAT7214: [
    { term: 2, section: '2A', day: 'FRI', start: '15:00', end: '17:20', venue: 'CBA', instructor: 'Ali,Zulfiqar' }
  ],
  IDAT7218: [
    { term: 2, section: '2A', day: 'THU', start: '19:00', end: '21:20', venue: 'KK201', instructor: 'Ali,Zulfiqar; Chan,Chi Keung' }
  ],
  IDAT7220: [
    { term: 2, section: '2A', day: 'SAT', start: '10:00', end: '12:20', venue: 'KK201', instructor: 'Gonda,Donn Emmanuel Ventura' }
  ],
  IDAT7221: [
    { term: 2, section: '2A', day: 'MON', start: '19:00', end: '21:20', venue: 'CPD-LG.09', instructor: 'Chan,Chi Keung' }
  ],
  MECH6010: [
    { term: 1, section: '1A/1B', day: 'TUE', start: '19:00', end: '21:20', venue: 'CYPP2', instructor: 'Chen,Yue; Lu,Yang' },
    { term: 2, section: '2C/2D', day: 'WED', start: '12:00', end: '14:20', venue: 'CPD-2.40', instructor: 'Chen,Yue; Lu,Yang' }
  ],
  MECH6034: [
    { term: 1, section: '1A/1C', day: 'TUE', start: '15:00', end: '17:20', venue: 'CYPP2', instructor: 'Chan,Chi Keung; Chen,Yong Hua' },
    { term: 1, section: '1B/1D', day: 'THU', start: '16:00', end: '18:20', venue: '', instructor: 'Chan,Chi Keung; Chen,Yong Hua' },
    { term: 2, section: '2A', day: 'MON', start: '15:00', end: '17:20', venue: 'RHT', instructor: 'Chan,Chi Keung; Chen,Yong Hua' }
  ],
  MECH6046: [
    { term: 1, section: '1A/1B', day: 'FRI', start: '15:00', end: '17:20', venue: '', instructor: 'Shin,Dongmyeong; Xu,Lizhi' },
    { term: 2, section: '2A/2B', day: 'FRI', start: '19:00', end: '21:20', venue: 'MWT1', instructor: 'Shin,Dongmyeong; Xu,Lizhi' }
  ],
  MECH7010: [
    { term: 1, section: '1A/1B', day: 'FRI', start: '19:00', end: '21:20', venue: 'MWT1', instructor: 'Chen,Yong Hua; Zhang,Fu' },
    { term: 2, section: '2A/2B', day: 'TUE', start: '16:00', end: '18:20', venue: 'CPD-3.25', instructor: 'Chen,Yong Hua; Zhang,Fu' }
  ],
  RECO7605: [
    { term: 1, section: '1A', day: '', start: '', end: '', venue: '', instructor: 'Wang,Jing' }
  ]
};

const DAY_ZH = { MON: '周一', TUE: '周二', WED: '周三', THU: '周四', FRI: '周五', SAT: '周六', SUN: '周日' };

export function getSections(code) {
  return TIMETABLE[code] || [];
}

export function dayText(day) {
  return DAY_ZH[day] || '';
}
