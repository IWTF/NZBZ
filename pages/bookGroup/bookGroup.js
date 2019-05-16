// pages/bookGroup/bookGroup.js
var changeSkin = require('../../skins/changeSkin.js')
var app = getApp()

Page({
  data: {
    skin: '',
    notes: [
      {
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
    note_bot: [
      {
        url: './images/love.png',
        num: 8721
      },
      {
        url: './images/talk.png',
        num: 8721
      },
      {
        url: './images/share.png'
      }
    ]
  },

  onLoad: function (options) {

  },

  onShow: function (options) {
    var skin = app.globalData.skin
    this.setData({
      skin: app.globalData.skin
    })

    changeSkin.changeSkin(skin)
  },

  previewImg (e) {
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
  }
})