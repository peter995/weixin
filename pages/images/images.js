// pages/images/images.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:''
  },
  hh(){
    console.log("加载完成")
  },
  h(){
    wx.chooseImage({
      success: (res)=> {
        // console.log(res)
        const path=res.tempFilePaths[0];

        this.setData({
          imagePath:path
        })
        
      },
    })
  }
})