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
    positions: []
  },

  switchL () {
    if (this.data.currentItemId > 0) {
      this.setData({ currentItemId: this.data.currentItemId - 1 })
    } else {
      this.setData({ currentItemId: this.data.books.length - 1 })
    }
  },

  switchR () {
    if (this.data.currentItemId < (this.data.books.length-1)) {
      this.setData({ currentItemId: this.data.currentItemId + 1 })
    } else {
      this.setData({ currentItemId: 0 })
    }
  },

  changePage (e) {
    const r = 40
    var index = e.currentTarget.dataset.index
    var item = this.data.books[index]
    
    this.setData({ front: !this.data.front})
    if (!this.data.front) {
      var si = Math.sin(2 * Math.PI / item.friends.length)
      console.log('角度为： ', si)

      var positions = {x:0,y:0}
      console.log(positions)
      for(var i=0; i<item.friends.length; i++) {
        positions.x = i*si
        positions.y = Math.sqrt(r*r - (i*si)*(i*si))
        this.data.positions.push(positions)
      }
      console.log('positions: ', this.data.positions)
    }
  }
})