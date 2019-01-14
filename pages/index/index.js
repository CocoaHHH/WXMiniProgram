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
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../previewCard/previewCard'
    })
  },

  // 小程序支付功能
  gotopPay:function() {
    document.getElementById('imageId').src = '../../res/dksq/sys.png'
    
    //1、先调登录接口获取 用户登录凭证(code)
    // const thisPage = this
    // wx.login({
    //   success(res) {
    //     if (res.code) {
    //       //获取code成功之后，调用code2Session 接口获取openid
    //       thisPage.code2Session(res.code)
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })
  },

  //获取 openid
  code2Session:function(code) {
    wx.request({
      url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wxf1f28d764d1475c4&secret=ee689d84779de2d56886d60382224f7c&js_code=' + code + '&grant_type=authorization_code',
      method: 'GET',
      success: function (res) {
        console.log(res.code)
        //获取openid 成功之后，调用统一下单接口
      }
    })
  },

  //调用微信统一下单接口
  wxOrder:function() {
    wx.request({
      url: 'https://api.mch.weixin.qq.com/pay/unifiedorder',
      data: {
        'appid':'wxf1f28d764d1475c4',
        'mch_id':'',
      }
    })
  },

  gotoVideo:function() {
    wx.navigateTo({
      url: '../video/videoPage'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  clickShouquan:function(e) {
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.record']) {
          wx.authorize({
            scope: 'scope.record',
            success() {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              wx.startRecord()
            }
          })
        }
      }
    })
  },

  generateCode:function() {
    const thisPage = this
    // this.getCodeImage('15_4rCIoqdTcqzObFF1zzYRYWXbwgxj2cUZvbcl2pIMrfM47RH…yQtIyXVxPuz1g-Vf7swwvCo03mfshRbuYyqYo79KQJiAIACIB')
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxf82920b907c4f93a&secret=f106a4c83eea80dd8531cbedf71ee89d',
      method: 'GET',
      success: function (res) {
        wx.hideLoading()
        thisPage.getWXACodeUnlimit(res.access_token)

      },
      fail: function (res) {

      }
    })
  },

  getCodeImage:function(token) {
    let param = { "scene": "a=100", "page": "pages/index/index", "width": 430, "auto_color": false, "line_color": { "r": "0", "g": "0", "b": "0" } }
    wx.request({
      url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=' + token,
      method: 'POST',
      data: param,
      success: function (res) {
        wx.hideLoading()
        var data = res
        that.setData({
          codeImage: 'data:image/png;base64,' + data,  // data 为接口返回的base64字符串
        })

      },
      fail: function (res) {

      }
    })
  },

  gotoAnimation:function() {
    wx.navigateTo({
      url: '../animation/animation',
    })
  },

  gotoFlex:function(){
    wx.navigateTo({
      url: '../flexDemo',
    })
  },

  
})
