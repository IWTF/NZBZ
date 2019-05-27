// pages/createHoster/createHoster.js
Page({
  data: {
    visible: false,
    showTextarea: false,
    showInput: false,
    item: {}
  },

  // 海报分享和关闭
  share: function (res) {
    console.log('click share', res)
    var data = res.detail.value
    // if (data.console == '' || data.title == '') {
    //   wx.showToast({
    //     title: '请补全您的海报',
    //     icon: 'none'
    //   })
    //   return
    // }

    var item = {}
    // item.content = data.content
    // item.title = data.title
    item.content = '如果我们有勇气去追求，所有的梦想都可以实现。'
    item.title = '《哈利波特》'
    item.img = '../../pages/createHoster/images/test.png'

    this.setData({
      visible: true,
      item: item
    })
  },
  close: function () {
    this.setData({
      visible: false
    })
  },
})