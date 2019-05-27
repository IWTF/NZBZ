// pages/bookGroup/bookGroup.js
var changeSkin = require('../../skins/changeSkin.js')
var app = getApp()

Page({
  data: {
    skin: '',
    showTalks: false,
    currentScrollTop: 0,
    publishBtnClass: 'publishBtnShow', // 发表按钮的显示样式类
    notes: [{
        avatarUrl: './images/avatar.png',
        publisher: '仙人球',
        time: '八月31',
        topic: '计算机组成原理真香',
        content: '喜欢乍见之欢，是在阳光的午后穿的那件白衬衫，是操场上那个飞驰而过奔跑的身影，或者是窗帘掀起一角时那低头的温柔。相见之欢，一见钟情。是“这个妹妹我曾见过”，也是“襄阳城里生日的烟花”。',
        imgs: [
          './images/test1.png',
          './images/test2.png',
          './images/test3.png'
        ]
      },
      {
        avatarUrl: './images/avatar.png',
        publisher: '仙人球',
        time: '八月25',
        topic: '望庐山瀑布',
        content: '',
        imgs: [
          './images/test5.png'
        ]
      },
      {
        avatarUrl: './images/avatar.png',
        publisher: '仙人球',
        time: '八月25',
        topic: 'Winnnnnndow7',
        content: '相见之欢，一见钟情',
        imgs: [
          './images/test4.png',
          './images/test3.png'
        ]
      }
    ],
    talks: [{
        avatarUrl: './images/avatar.png',
        name: '仙人球',
        time: '2019-4-12',
        discuss: '从小被寄养在姨丈家里的哈利波特，饱受姨丈一家人的歧视与欺侮.'
      },
      {
        avatarUrl: './images/avatar.png',
        name: '仙人球',
        time: '2019-4-12',
        discuss: '从小被寄养在姨丈家里的哈利波特，饱受姨丈一家人的歧视与欺侮，然而就在11岁生日那天，哈利波特得知了自己原本是巫师，并且被录取为霍格沃茨魔法学校中的一员。'
      },
      {
        avatarUrl: './images/avatar.png',
        name: '仙人球',
        time: '2019-4-12',
        discuss: '从小被寄养在姨丈家里的哈利波特.'
      },
      {
        avatarUrl: './images/avatar.png',
        name: '仙人球',
        time: '2019-4-12',
        discuss: '从小被寄养在姨丈家里的哈利波特，饱受姨丈一家人的歧视与欺侮.'
      },
      {
        avatarUrl: './images/avatar.png',
        name: '仙人球',
        time: '2019-4-12',
        discuss: '从小被寄养在姨丈家里的哈利波特，饱受姨丈一家人的歧视与欺侮，然而就在11岁生日那天，哈利波特得知了自己原本是巫师，并且被录取为霍格沃茨魔法学校中的一员。'
      },
      {
        avatarUrl: './images/avatar.png',
        name: '仙人球',
        time: '2019-4-12',
        discuss: '从小被寄养在姨丈家里的哈利波特.'
      }
    ]
  },

  onLoad: function(options) {

  },

  onShow: function(options) {
    var skin = app.globalData.skin
    this.setData({
      skin: app.globalData.skin
    })

    changeSkin.changeSkin(skin)
  },

  previewImg(e) {
    var index = e.currentTarget.dataset.index
    var cindex = e.currentTarget.dataset.cindex
    // 只能显示http链接
    // var arr = this.data.notes[index].imgs

    var arr = [
      'https://iwtf.github.io/posts/uncategorized/2019-02-11-css%E7%AB%96%E7%9B%B4%E5%B1%85%E4%B8%AD/position.PNG',
      'https://iwtf.github.io/posts/uncategorized/2019-02-11-css%E7%AB%96%E7%9B%B4%E5%B1%85%E4%B8%AD/zhan.PNG',
      'https://iwtf.github.io/posts/uncategorized/2019-02-11-css%E7%AB%96%E7%9B%B4%E5%B1%85%E4%B8%AD/text.PNG'
    ]

    wx.previewImage({
      // current: arr[cindex],
      urls: arr
    })
  },

  navToPublishNote: () => {
    wx.navigateTo({
      url: '../publishNote/publishNote',
    })
  },

  showTalks() {
    // 通过后端接口获取数据
    var talks = [
      '发的说法积分卡大家来看看尽快发',
      '发的说法积分卡大家来看看尽快发',
      '发的说法积分卡大家来看看尽快发',
      '发的说法积分卡大家来看看尽快发',
      '发的说法积分卡大家来看看尽快发'
    ]

    this.setData({
      showTalks: true
    })
    console.log('click talk button')
  },

  closeTalk() {
    this.setData({
      showTalks: false
    })
  },

  // 页面跳转函数
  navTolaunch() {
    wx.navigateTo({
      url: '../launch/launch'
    })
  },

  navTohoster() {
    wx.navigateTo({
      url: '../createHoster/createHoster'
    })
  },

  /**
   * 监听页面滑动
   */
  onPageScroll(res) {
    // console.log('onPageScroll :', res.scrollTop, this.data.currentScrollTop)
    var top = res.scrollTop
    if (top >= this.data.currentScrollTop + 5) {
      this.setData({
        publishBtnClass: 'publishBtnHide',
        currentScrollTop: top
      })
    } else if (top <= this.data.currentScrollTop - 5) {
      this.setData({
        publishBtnClass: 'publishBtnShow',
        currentScrollTop: top
      })
    }
  }
})