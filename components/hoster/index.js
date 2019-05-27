// 屏幕适配函数实现
function createRpx2px() {
  const { windowWidth } = wx.getSystemInfoSync()

  return function(rpx) {
    return windowWidth / 750 * rpx
  }
}

const rpx2px = createRpx2px()

// 海报保存临时路径
function canvasToTempFilePath(option, context) {
  return new Promise((resolve, reject) => {
    wx.canvasToTempFilePath({
      ...option,
      success: resolve,
      fail: reject,
    }, context)
  })
}

// 保存海报到本地
function saveImageToPhotosAlbum(option) {
  return new Promise((resolve, reject) => {
    wx.saveImageToPhotosAlbum({
      ...option,
      success: resolve,
      fail: reject,
    })
  })
}

Component({
  properties: {
    visible: {
      type: Boolean,
      value: false,
      observer(visible) {
        if (visible && !this.beginDraw) {
          this.draw()
          this.beginDraw = true
        }
      }
    },
    item: {
      type: Object,
      value: {}
    }
  },

  data: {
    beginDraw: false,
    isDraw: false,

    canvasWidth: 843,
    canvasHeight: 1500,

    imageFile: '',

    responsiveScale: 1,
  },

  lifetimes: {
    ready() {
      const designWidth = 375
      const designHeight = 603 // 这是在顶部位置定义，底部无tabbar情况下的设计稿高度

      // 以iphone6为设计稿，计算相应的缩放比例
      const { windowWidth, windowHeight } = wx.getSystemInfoSync()
      const responsiveScale =
        windowHeight / ((windowWidth / designWidth) * designHeight)
      if (responsiveScale < 1) {
        this.setData({
          responsiveScale,
        })
      }
    },
  },

  methods: {
    handleClose() {
      this.triggerEvent('close')
    },
    handleSave() {
      const { imageFile } = this.data

      if (imageFile) {
        saveImageToPhotosAlbum({
          filePath: imageFile,
        }).then(() => {
          wx.showToast({
            icon: 'none',
            title: '分享图片已保存至相册',
            duration: 2000,
          })
        })
      }
    },
    draw() {
      console.log('canvas data is: ', this.properties.item)
      wx.showLoading()
      const { canvasWidth, canvasHeight } = this.data
      // 创建绘图上下文
      const ctx = wx.createCanvasContext('share', this)
      
      // 屏幕适配
      const canvasW = rpx2px(canvasWidth * 2)
      const canvasH = rpx2px(canvasHeight * 2)
      const margin = rpx2px(20 * 2)

      ctx.save()

      // 绘制顶部卡片
      const bgW = rpx2px(canvasWidth * 2 - 40 * 2)
      const bgH = rpx2px(canvasHeight + 20 * 2)
      ctx.drawImage(
        this.properties.item.img,
        margin,
        margin,
        bgW,
        bgH
      )

      const beginY = rpx2px(bgH * 2.25 + margin * 2)
      const item = this.properties.item

      // 绘制第四行详情内容
      // 设置距首行距离
      // console.log('====canvas==== content: ', this.properties.item.content)
      var content = this.properties.item.content
      const lineHeight = rpx2px(70 * 2)
      const contentWidth = canvasWidth - 5 * margin
      const fontSize = 50

      var td = Math.ceil(contentWidth / fontSize)
      var tr = Math.ceil(content.length / td)

      ctx.setFontSize(fontSize)
      ctx.setFillStyle('#000000')
      for (var i = 0; i < tr; i++) {
        var text = content.substring(i * td, (i + 1) * td)
        ctx.fillText(text, margin * 2, beginY + i * lineHeight)
      }
      ctx.stroke()

      // 绘制title
      console.log('====canvas==== title: ',this.properties.item.title)
      var title = this.properties.item.title
      var titleW = rpx2px(title.length * fontSize * 2)

      ctx.setFontSize(fontSize)
      ctx.setFillStyle('#000')
      ctx.fillText(
        title,
        canvasW - titleW - margin,
        beginY + rpx2px(lineHeight * tr * 4),
      )
      ctx.stroke()

      // 底部左侧介绍
      ctx.setFontSize(30)
      ctx.setFillStyle('#000000')

      var discW = rpx2px(6 * 25 * 2)
      ctx.fillText('有xx提供技术支持', margin * 2, canvasH - 2 * margin)
      ctx.stroke()

      ctx.drawImage(
        this.properties.item.img,
        2 * margin,
        canvasH - 2 * margin - rpx2px(100 * 2),
        rpx2px(60 * 2),
        rpx2px(60 * 2)
      )

      // 二维码和文字绘制
      ctx.setTextAlign('center')
      ctx.setFontSize(30)
      ctx.setFillStyle('#000000')

      var discW = rpx2px(6 * 25 * 2)  // 为了使其更靠内，这里fontsize没有取30
      ctx.fillText('扫码生成笔记', canvasW - discW - margin, canvasH - rpx2px(20 * 2))
      ctx.stroke()

      ctx.drawImage(
        this.properties.item.img,
        canvasW - rpx2px(270 * 2),
        canvasH - rpx2px(260 * 2),
        rpx2px(200 * 2),
        rpx2px(200 * 2)
      )

      ctx.draw(false, () => {
        setTimeout(()=>{
          canvasToTempFilePath({
            canvasId: 'share',
          }, this).then(({ tempFilePath }) => this.setData({ imageFile: tempFilePath }))
        }, 100)
      })


      wx.hideLoading()
      this.setData({ isDraw: true })
    }
  }
})