// pages/publishNote/publishNote.js
var changeSkin = require('../../skins/changeSkin.js')
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    skin: '',
    images: null,
    watcherArray: ['公开', '好友', '仅自己'],
    watcherIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var skin = app.globalData.skin
    this.setData({
      skin: app.globalData.skin
    })

    changeSkin.changeSkin(skin)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /*
  选择添加图片
  */
  addImage: function() {
    var that = this;
    wx.showLoading({
      title: '稍等...',
    })
    wx.chooseImage({
      success: function(res) {
        that.setData({
          images: res.tempFilePaths
        })
      },
      complete: function() {
        wx.hideLoading()
      }
    })
  },

  /**
   * 选择谁可以查看
   */
  pickWatcher: function(e) {
    this.setData({
      watcherIndex: e.detail.value
    })
  }
})