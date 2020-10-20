<template>
  <div class="index-container">
    <div class="nav">
      <ul>
        <li>
          推荐
        </li>
        <li>
          <router-link to="/discovery">
            <span class="iconfont icon-music1"></span>
            发现音乐
          </router-link>
        </li>
        <li>
          <router-link to="/playlists">
            <span class="iconfont icon-gedan1"></span>
            推荐歌单
          </router-link>
        </li>
        <li>
          <router-link to="/songs">
            <span class="iconfont icon-music"></span>
            最新音乐
          </router-link>
        </li>
        <li>
          <router-link to="/mvs">
            <span class="iconfont icon-mv"></span>
            最新MV
          </router-link>
        </li>
         
        <li>
         
          创建的歌单
        </li>
        <my-song-list />
      </ul>
     
    </div>
    <div class="main">
      <login class="login" v-show="$store.getters.getShowLogin" />
<router-view></router-view>
    </div>
    <div class="player">
      <audio controls autoplay :src="url" loop></audio>
    </div>
    
  </div>
</template>

<script>


import Login from "../views/Login";
import MySongList from "./user/MySongList";
export default {
  name: "index",
  data() {
    return {
      activeIndex: 0,
      url: "",
     
    };
  },


  components: {
    Login,
    MySongList,
    
  },
};
</script>

<style lang="less">
  .login {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin: auto;
  }

</style>
