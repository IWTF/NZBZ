const app = getApp()
var changeSkin = require('../../skins/changeSkin.js')

Page({
  data: {
    sorts: [
      {
        imgUrl: './images/test.png',
        name: '科幻'
      },
      {
        imgUrl: './images/test.png',
        name: '言情'
      },
      {
        imgUrl: './images/test.png',
        name: '纪实'
      },
      {
        imgUrl: './images/test.png',
        name: '玄幻'
      },
      {
        imgUrl: './images/test.png',
        name: '科幻'
      },
    ],
    like_tags: [
      { name: '科幻' },
      { name: '言情' },
      { name: '玄幻' }
    ],
    tags: [
      "2030",
      "众筹电影",
      "八点半",
      "微电影"
    ],
    topBarH: 135   // 顶部标签的高度
  },
  onShow: function (options) {
    var skin = app.globalData.skin
    this.setData({
      skin: app.globalData.skin
    })

    changeSkin.changeSkin(skin)

  },

  navToDetail () {
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  
  onPageScroll (res) {
    // console.log('onPageScroll :', res)
    var top = res.scrollTop
    if (top <= 60) {
      this.setData({ topBarH: 135 - top })
    }
  }
})
