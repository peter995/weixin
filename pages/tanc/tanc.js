// pages/tanc/tanc.js
Page({
han(){
  wx.showToast({
    title:'加载中',
    duration:2000,
    icon:'loading',
    mask:true,
    
  })
},
haa(){
  wx.showModal({
    title: '我是标题',
    content: '我是内容',
  })
},
onShareAppMessage:function(options){
  return{
    title:'你好啊，李银河',
    path:'/pages/about/about',
    imageUrl: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1208538952,1443328523&fm=26&gp=0.jpg'
  }
}
})