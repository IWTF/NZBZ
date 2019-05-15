//logs.js
const util = require('../../utils/util.js')
var app = getApp()

Page({
  data: {
    skin: '',
    user_info: {
      avatarUrl: './images/avatar.png',
      sex: 'm',
      age: 18,
      address: '南京江宁',
      hobby: [
        '信息安全',
        '计算机',
        '本科生'
      ],
      disc: '科技控， 程序员， 喜欢热血图书'
    }
  },
  onShow: function () {
    var skin = app.globalData.skin
    this.setData({
      skin: app.globalData.skin
    })

    switch (skin) {
      case 'dark-box':
        wx.setNavigationBarColor({
          frontColor: '#ffffff', backgroundColor: '#14161a',
          animation: { duration: 400, timingFunc: 'easeIn' }
        })
        break;
      default:
        break;
    }
  },

  // 跳转收藏页面
  navToCollect () {
    wx.navigateTo({
      url: '../collect/collect',
    })
  },

  // 更换主题
  switchChange(e) {
    // console.log('switch2 发生 change 事件，携带值为', e.detail.value)
    var chosenSkin
    var frontColor
    var backgroundColor
    if (e.detail.value) {
      chosenSkin = 'dark-box'
      frontColor = '#ffffff'
      backgroundColor = '#14161a'
    } else {
      chosenSkin = ''
      frontColor = '#000000'
      backgroundColor = '#d1e7da'
    }

    // 设置该页面皮肤
    this.setData({
      skin: chosenSkin
    })

    // 设置皮肤全局变量
    app.globalData.skin = chosenSkin

    // 更改navigationBar的颜色
    // 此处有些麻烦，需要根据skin设置其深色背景
    wx.setNavigationBarColor({
      frontColor: frontColor,
      backgroundColor: backgroundColor,
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  }
})
