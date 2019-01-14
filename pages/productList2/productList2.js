// pages/productList2/productList2.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    screenWidth: wx.getSystemInfoSync().screenWidth,
    navHeight: app.globalData.navHeight,
    //1rpx=（screenWidth / 750）px,
    viewWidth: (wx.getSystemInfoSync().screenWidth - 57 * wx.getSystemInfoSync().screenWidth / 750) / 2,
    dataArray: ['', '', '', '', '', '', '', '', ''],
    selectIndex: 0,
    tab: ['全部', '财务管理', '开票软件', '税务稽查', '还很多很订单']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  clickTab: function (e) {
    const index = parseInt(e.currentTarget.id)
    this.setData({
      selectIndex: index
    })
  },
})