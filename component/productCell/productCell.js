// component/productCell.js

const redText = '#ed6d67'
const blueText = '#65bef9'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
    index: {
      type: String,
      value: ''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    buttonTitle: '续费',
    typeColor: blueText,
    timeLeft: '开课时间',
  },

  /**
   * 组件的方法列表
   */
  methods: {
  
    didSelectedCell: function (e) {
      var detail = {
        index: this.properties.index,
      }
      this.triggerEvent('didSelectedCell', detail);
    },


  }
})