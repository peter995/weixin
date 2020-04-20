// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'Hi',
    age:12,
    students:[
      { name: "x", age: 13 },
      { name: "l", age: 13 },
      { name: "h", age: 13 },
      { name: "g", age: 13 },
      { name: "y", age: 13 }
    ],
    counter:0
  },
  handleBtClick(){
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handleBt(){
    this.setData({
      counter:this.data.counter - 1
    })
  },
  h(even){
    console.log(even)
  
  },
  // 监听页面的滚动
  onPageScroll(obj){
    // console.log(obj)
  },
  // 监听页面滚动到顶部
  onReachBottom(){
    console.log('页面滚动到顶部')
  },
  // 
  onPullDownRefresh(){
    console.log('下拉刷新的事件')
  }
})