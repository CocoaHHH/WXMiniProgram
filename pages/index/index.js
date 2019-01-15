//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    codeImage:'',
  },

  gotoJiugongge: function(e) {
    wx.navigateTo({
      url: '../home/home',
    })
  },



  gotopList:function() {
    wx.navigateTo({
      url: '../productList/productList',
    })
  },

  gotopList2: function () {
    wx.navigateTo({
      url: '../productList2/productList2',
    })
  },

  gotoFlex:function(){
    
  },

  
})
