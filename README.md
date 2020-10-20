# vue-music
> 网页版本的播放器

## 感谢
https://github.com/sl1673495/vue-netease-music

## 后端接口

https://binaryify.github.io/NeteaseCloudMusicApi


## 技术栈
[vue-cli3](https://cli.vuejs.org/zh/) 创建的项目

[sass](https://cli.vuejs.org/zh/guide/css.html#%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8)(vue-cli中使用sass)

[Element-ui](https://element.eleme.cn/#/zh-CN/component/quickstart)(轮播，分页，tab切换，图片懒加载)

[Vuex（状态管理）](https://vuex.vuejs.org/zh/)


## 进度
- [x] 发现页
- [x] 推荐歌单
- [x] 最新音乐
- [x] 最新mv
- [x] 登录(网易云 手机号码 登录)
- [x] 播放（版权歌曲无法播放)
- [x] 搜索详情
- [x] 歌单详情
- [x] MV详情
- [x] 用户歌单

##
本项目仿这个大佬(https://github.com/sl1673495/vue-netease-music)

**项目存在的问题**
   本人是在自学的过程中所做的项目，逻辑，布局，功能等等都还没完善，
1. 登陆账号后显示的用户歌单点击歌单不跳转，这里的问题我还在想，可以通过左上角的点击回到主页再点击歌单就能显示了。
2. 点击登陆后显示的登陆页面现在只是显示在主页面上方，这里还在想怎样才能让他显示在界面上，做的不好请原谅。
3. 最新音乐那里显示慢是因为歌曲数量很多加载慢，若网速好就很快加载出来了，后续会加个loading组件。


 **运行** 

# vue-music

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).