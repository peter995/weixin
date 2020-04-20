// 注册小程序实例

const TOKEN='token'

App({
globaData:{
  token:''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {


    console.log("小程序初始化完成")
    // 异步调用->

    wx.getUserInfo({
      // 数据拿到之后，在进行回调的
      success:function(res){
        console.log(res)
      }
    })

     const token= wx.getStorageSync('TOKEN')

     if(token && token.length !==0){
       //验证
       this.check_token(token)
     }else{
       this.login()
     }


    // 登录操作
   
  },
  check_token(token){

    console.log('执行了登录操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'post',
      header:{
        token
      },
      success:(res)=>{
        if(!res.data.errCode){
          console.log('token有效')
          this.globaData.token = token;
        }else{
          this.login()
        }
      },
      fail:function(err){
        console.log(err)
      }
    })
  },
  login(){
    console.log('执行了登录操作')
    wx.login({
      success: (res) => {
        const code = res.code;

        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            const token = res.data.token;
            this.globaData.token = token;
            // console.log(this.globaData.token)

            // 进行本地存储
            wx.setStorageSync('TOKEN', token)
          }
        })
      }
    })
  },

  /**
   * 当小程序界面显示出来之后的执行的生命周期函数 onShow
   */
  onShow: function (options) {
    console.log("显示页面")
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("界面隐藏起来了")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("小程序中发生错误")
  }
})

