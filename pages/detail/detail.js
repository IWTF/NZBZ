// pages/detail/detail.js
var changeSkin = require('../../skins/changeSkin.js')
var app = getApp()

Page({
  data: {
    skin: '',
    tags: [
      "2030",
      "众筹电影",
      "八点半",
      "微电影"
    ],
    talks: [
      {
        avatarUrl: './images/exam.png',
        name: '仙人球',
        time: '2019-4-12',
        discuss: '从小被寄养在姨丈家里的哈利波特，饱受姨丈一家人的歧视与欺侮.'
      },
      {
        avatarUrl: './images/exam.png',
        name: '仙人球',
        time: '2019-4-12',
        discuss: '从小被寄养在姨丈家里的哈利波特，饱受姨丈一家人的歧视与欺侮，然而就在11岁生日那天，哈利波特得知了自己原本是巫师，并且被录取为霍格沃茨魔法学校中的一员。'
      },
      {
        avatarUrl: './images/exam.png',
        name: '仙人球',
        time: '2019-4-12',
        discuss: '从小被寄养在姨丈家里的哈利波特.'
      }
    ],
    disc: '从小被寄养在姨丈家里的哈利波特，饱受姨丈一家人的歧视与欺侮，然而就在11岁生日那天，哈利波特得知了自己原本是巫师，并且被录取为霍格沃茨魔法学校中的一员。登上霍格沃茨特快列车，哈利开始了他的魔幻旅程，一切都那么新奇，在那里，他第一次有了自己的好朋友：罗恩和赫敏。许多魔法课程也正在等着他研习：有飞行课、黑魔法防御术、魔药学与变形魔法等等，当然还有让所有魔法师疯狂的魁地奇球赛。另一方面，魔药学的斯内普教授似乎总是对哈利不友善；哈利也无意间发现了魔法石的秘密。邪恶的阴谋在平静的霍格沃茨里悄悄地滋长，哈利、罗恩与赫敏决定一同去探个究竟，凭借他们的勇敢智慧，哈利最终阻止邪恶阴谋的发生保护了魔法石，同时哈利也第一次直面他的宿敌：伏地魔。',
    show: false
  },

  onShow: function (options) {
    var skin = app.globalData.skin
    this.setData({
      skin: app.globalData.skin
    })

    changeSkin.changeSkin(skin)
  },

  showDisc () {
    this.setData({
      show: !this.data.show
    })
  },

  hideDisc () {
    this.setData({
      show: !this.data.show
    })
  }
})