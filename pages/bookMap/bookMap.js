// pages/bookMap/bookMap.js
var screenAdaptation = require('../../utils/screenAdaptation.js')

Page({
  data: {
    currentItemId: 0,
    screenH: Number,
    screenW: Number,
    friends: [
      {
        bookId: '213',
        bookName: '爱的教育',
        disc: '发呆发呆阿斯蒂芬阿道夫按时发的阿道夫爱的色放发呆发呆阿斯蒂芬阿道夫按时发的阿道夫爱的色放发呆发呆阿斯蒂芬阿道夫按时发的阿道夫爱的色放发呆发呆阿斯蒂芬阿道夫按时发的阿道夫爱的色放发呆发呆阿斯蒂芬阿道夫按时发的阿道夫爱的色放',
        imgUrl: './images/test.png',
        friends: [
          './images/test.png',
          './images/test.png',
          './images/test.png',
          './images/test.png',
          './images/test.png'
        ]
      },
      {
        bookId: '213',
        bookName: '爱的教育',
        disc: '发呆发呆阿斯蒂芬阿道夫按时发的阿道夫爱的色放',
        imgUrl: './images/test.png',
        friends: [
          './images/test.png',
          './images/test.png',
          './images/test.png',
          './images/test.png',
          './images/test.png'
        ]
      },
      {
        bookId: '213',
        bookName: '爱的教育',
        disc: '发呆发呆阿斯蒂芬阿道夫按时发的阿道夫爱的色放',
        imgUrl: './images/test.png',
        friends: [
          './images/test.png',
          './images/test.png',
          './images/test.png',
          './images/test.png',
          './images/test.png'
        ]
      }
    ],
  },

  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          screenH: res.screenHeight,
          screenW: res.screenWidth
        })
      },
    })
  },

  changeCard(res) {
    console.log(res)
    this.setData({ currentItemId:res.detail.current })
  }
})