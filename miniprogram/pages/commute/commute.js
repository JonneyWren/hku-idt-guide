const { ROUTES, GENERAL_TIPS } = require('../../data/commute');

Page({
  data: {
    routes: ROUTES,
    tips: GENERAL_TIPS,
    expandedId: ''
  },

  toggle(e) {
    const id = e.currentTarget.dataset.id;
    this.setData({ expandedId: this.data.expandedId === id ? '' : id });
  }
});
