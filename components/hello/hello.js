// components/hello/hello.js
Component({
  behaviors: [require("../my-behavior")],
  data:{
    num: 0
  },
  methods:{
    unpdate(){
      this.setData({
        num: ++this.data.num
      })
    }
  },
  observers:{
    "num":function(value){
      console.log(value)
    },
    "**":function(value){
      console.log(value)
    }
  },
  created(){
    console.log("#1 created")
    console.log(this.data.title)
  },
  attached(){
    console.log("#2 attached")
  },
  pageLifetimes: {
    show: function() {
      // 页面被展示
      console.log("#3 show")
    },
    hide: function() {
      // 页面被隐藏
      console.log("#4 hide")
    },
    resize: function(size) {
      // 页面尺寸变化
      console.log("#5 resize")
    }
  }
})
