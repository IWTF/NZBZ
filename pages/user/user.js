//logs.js
const util = require('../../utils/util.js')
var changeSkin = require('../../skins/changeSkin.js')
var app = getApp()

Page({
  data: {
    skin: '',
    checked: false,
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
  onLoad () {
    if (app.globalData.skin == 'dark-box') {
      this.setData({ checked : true })
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

  navToBookList () {
    wx.navigateTo({
      url: '../bookList/bookList',
    })
  },

  // 更换主题
  switchChange(e) {
    // console.log('switch2 发生 change 事件，携带值为', e.detail.value)
    var skin
    if (e.detail.value) {
      skin = 'dark-box'
    } else {
      skin = ''
    }

    // 设置该页面皮肤
    this.setData({
      skin: skin
    })

    // 设置皮肤全局变量
    app.globalData.skin = skin

    changeSkin.changeSkin(skin)
  },

  /**
   * 跳转个人信息编辑页
   */

  navtoEditProfile:()=>{
    wx.navigateTo({
      url: '../editProfile/editProfile',
    })
  },

  /**
   * 跳转到快递查询页
   */
  navtoExpress:()=>{
    wx.navigateTo({
      url: '../express/express',
    })
  }
})
