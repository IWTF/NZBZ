const changeSkin = skin => {
  switch (skin) {
    case 'dark-box':
      wx.setNavigationBarColor({
        frontColor: '#ffffff', backgroundColor: '#14161a',
        animation: { duration: 400, timingFunc: 'easeIn' }
      })
      wx.setBackgroundColor({
        backgroundColor: '#14161a',
      })
      wx.setTabBarStyle({
        color: '#66707f',
        selectedColor: '#8e95a1',
        backgroundColor: '#14161a',
        borderStyle: 'black'
      })
      break;
    case '':
      wx.setNavigationBarColor({
        frontColor: '#000000', backgroundColor: '#d1e7da',
        animation: { duration: 400, timingFunc: 'easeIn' }
      })
      wx.setTabBarStyle({
        color: '#ffba00',
        selectedColor: 'a87dff',
        backgroundColor: '#fff',
        borderStyle: 'white'
      });
      break;
    default:
      break;
  }
}

module.exports = {
  changeSkin: changeSkin
}