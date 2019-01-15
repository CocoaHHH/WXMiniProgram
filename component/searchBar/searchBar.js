// component/searchBar/searchBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //是否能时时搜索
    isInput:{
      type: Boolean,
      value: false,
    },
    tips: {
      type: String,
      value: '搜索',
    },
    //搜索框文字内容
    searchText:{
      type: String,
      value: '',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

    /**
    * author 韩可可
    * date 2019/01/09
    * 点击整个搜索框事件
    */
    tapSearch: function () {
      this.triggerEvent('tapSearch');
    }
  }
})
