// pages/wxss/wxss.js
// import request from '/service/network.js'

Page({

  data: {
    message:'你好小程序',
    firstname:'kode',
    lastname:'bryant',
    ll:'bode',
    age:12,
    nowTime:new Date().toLocaleString(),
    iss:false
  },
  onLoad(){
    setInterval(() =>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },
  s(){
    this.setData({
      iss: !this.data.iss
    })
  },
  onItemTap(e){
    const index = e.currentTarget.dataset.index;
    this.setData({
      currentIndex:index
    })
  },
  ll(){
    // console.log('-------')
    const my_sel=this.selectComponent('.sel-class')
    // console.log(my_sel)

    // my_sel.setData({
    //   counter:my_sel.data.counter+ 20
    // })
    my_sel.incrementCounter(5)

  },
  // onLoad:function(options){
  //   // wx.request({
  //   //   url: 'http://123.207.32.32:8000/recommend',
  //   //   success:function(res){
  //   //     console.log(res)
  //   //   }
  //   // })
  //   // wx.request({
  //   //   url: 'http://123.207.32.32:8000/home/data',
  //   //   data:{
  //   //     type:'sell',
  //   //     page:1
  //   //   },
  //   //   success:function(res){
  //   //     console.log()
  //   //   }
  //   // })
  //   this.get_data_origin()

  //   request({
  //     url:'http://123.207.32.32:8000/home/data'
  //   }).then(res =>{
  //     console.log(res)
  //   }).catch(err =>{
  //     console.log(err)
  //   })
  // }

  tz(){
    wx.navigateTo({
      url: '/pages/cate/cate',
    })
  }
})