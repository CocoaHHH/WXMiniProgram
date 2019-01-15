// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //九宫格初始化数据列表
    cellWidth: wx.getSystemInfoSync().windowWidth * 0.25,//九宫格宽度
    cellHeight: wx.getSystemInfoSync().windowWidth * 0.30,//九宫格高度
    /**
     * 九宫格初始化数据
    */
    items: [
      {
        imgPath: "../../images/home_more.png",
        title: '哈哈哈',
        index: "0"
      },
      {
        imgPath: "../../images/home_more.png",
        title: '啦啦啦',
        index: "1"
      },
      {
        imgPath: "../../images/home_more.png",
        title: '充值',
        index: "2"
      },
      {
        imgPath: "../../images/home_more.png",
        title: '咨询',
        index: "3"
      },
      { imgPath: "../../images/home_more.png", title: '服务', index: "4" },
      { imgPath: "../../images/home_more.png", title: '卡包', index: "5" },
      { imgPath: "../../images/home_more.png", title: '更多', index: "6" },
      { imgPath: "../../images/home_more.png", title: '更多', index: "6" },
      { imgPath: "../../images/home_more.png", title: '更多', index: "6" },
      { imgPath: "../../images/home_more.png", title: '更多', index: "6" },
      { imgPath: "../../images/home_more.png", title: '更多', index: "6" },
      { imgPath: "../../images/home_more.png", title: '更多', index: "6" },
    
    ],//九宫格初始化数据列表
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

  }
})