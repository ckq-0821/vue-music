<template>
  <div class="top-container">
    <div class="left-box">
      <div class="icon-wrapper">
        <span @click="$router.replace('/')" class="iconfont icon-home"></span>
       <span class="iconfont icon-sami-select" @click="exitFullscreen"></span>
        <span class="iconfont icon-full-screen" @click="fullscreen"></span>
      </div>
      <div class="history-wrapper">
        <span @click="$router.go(-1)" class="iconfont icon-arrow-lift"></span>
        <span @click="$router.go(1)" class="iconfont icon-arrow-right"></span>
      </div>
    </div>
    <div class="middle-box">
      <el-input size="small" @keyup.enter.native="toResult" placeholder="搜索" v-model.trim="query">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <div class="right-box">
      <div class="content">
            <div class="loginc" @click="showLogin()" >
              <div class="profile">
                <img :src="getImage" alt />
              </div>
              <div>{{getUserName}}</div>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
import { requestFullScreen, exitFullscreen, isFullscreen } from "@/utils/common";
export default {
  name: 'top',
  data(){
    return {
      query:'',
       image: "",
      statu: "未登录",
    }
  },
  computed: {
    getImage() {
      return this.upimage();
    },
    getUserName() {
      return this.upusername();
    },
  },
  
  methods:{
    toResult(){
      if(!this.query){
        this.$message.warning('请输入查询内容')
      }else{
        this.$router.push(`/result?keywords=${this.query}`)
      }
    },
    fullscreen() {
      requestFullScreen(document.documentElement);
    },
    exitFullscreen() {
      if (isFullscreen()) {
        exitFullscreen();
      }
    },
    toggleFullscreen() {
      this.isFullscreen = !this.isFullscreen;
    },
     showLogin() {
      this.$store.commit("showLogin");
      // this.$router.push(`/Login`);
    },
    upimage() {
      this.image =
        this.$store.state.user && this.$store.state.user.profile.avatarUrl;
      return this.image;
    },
    upusername() {
      if (this.$store.state.user == null) return this.statu;
      return (this.statu =
        this.$store.state.user && this.$store.state.user.profile.nickname);
    },
  },
};
</script>

<style lang="less" scoped>

.top-container {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #f9f9f9;
  width: 100%;
  .left-box {
    display: flex;
    // 图标
    .icon-wrapper {
      margin-right: 80px;
      margin-top: 20px;
      .iconfont {
        margin-right: 10px;
        font-size: 12px;
        width: 18px;
        height: 18px;
        display: inline-block;
        text-align: center;
        line-height: 18px;
        &::before {
          opacity: 0;
          transition: 0.2s;
        }
        &:hover::before {
          opacity: 1;
        }
        &.icon-home {
          background-color: #dd6d60;
          border-radius: 50%;
        }
        &.icon-sami-select {
          background-color: #dcc060;
          border-radius: 50%;
        }
        &.icon-full-screen {
          background-color: #84bb58;
          border-radius: 50%;
        }
      }
    }
    // 历史管理
    .history-wrapper {
      display: flex;
      align-items: center;
      .iconfont {
        width: 35px;
        height: 35px;
        font-size: 30px;
        text-align: center;
        line-height: 35px;
        color: gray;
        border-radius: 50%;
        transition: 0.2s;
        cursor: pointer;
        &:first-child {
          margin-right: 10px;
        }
        &:hover {
          background-color: #ebebeb;
        }
      }
    }
  }
  .middle-box {
    display: flex;
    align-items: center;
  }
  
  .content {
    float: right;
    height: 100%;
  }
  .loginc {
    cursor: pointer;
    height: 100%;
    float: left;
    margin-right: 50px;
    display: flex;
    align-items: center;
  }
  .profile {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: rgb(0, 0, 0);
    margin-right: 10px;
  }
  .profile img {
    width: 100%;
    border-radius: 50%;
  }
}
</style>
