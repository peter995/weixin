// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  haa(event){
    console.log('用户输入内容：',event)
  },
  hf(event){
    console.log('input获取焦点',event)
  },
  hb(event){
    console.log('input失去焦点',event)
  }
})