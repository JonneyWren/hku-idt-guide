App({
  onLaunch() {
    // 纯前端项目:首次启动时初始化本地存储键,避免旧版本脏数据
    const keys = ['idt_reviews', 'idt_selection', 'idt_slots'];
    keys.forEach((k) => {
      const v = wx.getStorageSync(k);
      if (v === '' || v === undefined || v === null) {
        wx.setStorageSync(k, k === 'idt_reviews' ? {} : []);
      }
    });
  },
  globalData: {
    themeColor: '#00573F',
    programName: 'MSc(Eng) in Innovative Design and Technology'
  }
});
