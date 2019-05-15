const app = getApp()


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
    num: function() {
      return Math.floor(Math.random() * 10 + 1) % 3;
    },
    topBarH: 135   // 顶部标签的高度
  },
  onShow: function (options) {
    var skin = app.globalData.skin
    this.setData({
      skin: app.globalData.skin
    })

    switch (skin) {
      case 'dark-box':
        wx.setNavigationBarColor({frontColor: '#ffffff', backgroundColor: '#14161a',
          animation: {duration: 400, timingFunc: 'easeIn'}
        })
        break;
      case '':
        wx.setNavigationBarColor({
          frontColor: '#000000', backgroundColor: '#d1e7da',
          animation: { duration: 400, timingFunc: 'easeIn' }
        })
        break;
      default:
        break;
    }
    
  },

  navToDetail () {
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  
  onPageScroll (res) {
    // console.log('onPageScroll :', res)
    var top = res.scrollTop
    if (top <= 55) {
      this.setData({ topBarH: 135 - top })
    }
  }
})
