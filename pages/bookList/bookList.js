// pages/bookList/bookList.js
Page({
  data: {
    front: true,
    skin: '',
    currentItemId: 0,
    books: [
      {
        bookId: '213',
        bookName: '爱的教育',
        disc: '发呆发呆阿斯蒂芬阿道夫按时发的阿道夫爱的色放发呆发呆阿斯蒂芬阿道夫按时发的阿道夫爱的色放发呆发呆阿斯蒂芬阿道夫按时发的阿道夫爱的色放发呆发呆阿斯蒂芬阿道夫按时发的阿道夫爱的色放发呆发呆阿斯蒂芬阿道夫按时发的阿道夫爱的色放',
        imgUrl: './images/test.png',
        friends: [
          './images/test.png',
          './images/test.png',
          './images/test.png',
          './images/test.png',
          './images/test.png'
        ]
      },
      {
        bookId: '213',
        bookName: '爱的教育',
        disc: '发呆发呆阿斯蒂芬阿道夫按时发的阿道夫爱的色放',
        imgUrl: './images/test.png',
        friends: [
          './images/test.png',
          './images/test.png',
          './images/test.png',
          './images/test.png',
          './images/test.png'
        ]
      },
      {
        bookId: '213',
        bookName: '爱的教育',
        disc: '发呆发呆阿斯蒂芬阿道夫按时发的阿道夫爱的色放',
        imgUrl: './images/test.png',
        friends: [
          './images/test.png',
          './images/test.png',
          './images/test.png',
          './images/test.png',
          './images/test.png'
        ]
      }
    ],
    curFriends: [],
    positions: []
  },

  switchL () {
    if (this.data.currentItemId > 0) {
      this.setData({ currentItemId: this.data.currentItemId - 1 })
    } else {
      this.setData({ currentItemId: this.data.books.length - 1 })
    }
    this.setData({ front:true })
  },

  switchR () {
    if (this.data.currentItemId < (this.data.books.length-1)) {
      this.setData({ currentItemId: this.data.currentItemId + 1 })
    } else {
      this.setData({ currentItemId: 0 })
    }
    this.setData({ front: true })
  },

  changePage (e) {
    const r = 140
    var index = e.currentTarget.dataset.index
    var item = this.data.books[index]
    
    this.setData({ front: !this.data.front})
    if (!this.data.front) {

      var positions = []
      var len = item.friends.length
      for(var i=0; i<len; i++) {
        var position = { x: 0, y: 0 }
        // 计算角度
        var sin = Math.sin((2 * Math.PI / item.friends.length) * i)

        // 计算x方向偏移量  x = sin * r
        var x = sin*r
        position.x = x

        if (i <= (len / 2)) {
          if (i <= (len / 4)) {
            position.y = Math.sqrt(r * r - x*x)
          } else {
            position.y = -(Math.sqrt(r * r - x*x))
          }
        } else {
          if (i <= (len / 4 * 3)) {
            position.y = -(Math.sqrt(r * r - x * x))
          } else {
            position.y = Math.sqrt(r * r - x * x)
          }
        }
        console.log('cur position: ', position)
        positions.splice(i, 0, position)
      }
      this.setData({
        positions: positions,
        curFriends: item.friends
      })
      console.log('positions: ', this.data.positions)
    }
  },

  clickImg () {
    console.log('fadsfadsfadsfa')
  },

  navTomap() {
    wx.navigateTo({
      url: '../bookMap/bookMap',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})