// pages/cate/cate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('页面退出')
    const pages = getCurrentPages()
    const wxss = pages[pages.length - 2]
    console.log(pages)

    wxss.setData({
      message:'呵呵呵'
    })
  },
 


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})