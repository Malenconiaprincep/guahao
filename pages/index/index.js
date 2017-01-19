import * as data from '../../model/index'
//index.js
//获取应用实例
console.log(data)
var app = getApp()
Page({
  data,
  lower(e) {
      console.log(e)
  }
})
