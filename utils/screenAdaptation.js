// 传参形式  a * 2

const rpx2px = function createRpx2px() {
  const { windowWidth } = wx.getSystemInfoSync()

  return function (rpx) {
    return windowWidth / 750 * rpx
  }
}

module.exports = {
  rpx2px: rpx2px
}