
let plugin = requirePlugin('routePlan');
let key = 'OBVBZ-L6X33-LCN3U-YJNVT-TB2ZJ-PWBVO';  //使用在腾讯位置服务申请的key
let referer = '生命规划线';   //调用插件的app的名称
let endPoint = JSON.stringify({
  'name': ' ',
  'latitude':  
  'longitude'
 }); //终点
let navigation = "1"

Page({

  //接下来触发
  onLoad:function(e){
    wx.switchTab({
      url: "/pages/work/work"
    })
  },
  //首先触发
  onShow:function(e){

    wx.navigateTo({
    url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
    })
  }
})
