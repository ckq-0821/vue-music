<template>
    <div class="song" >
      
         <dd v-for="(item,index) in getSongList" :key="index" @click="enterDetail(item.id)">
          <div>
            <img :src="item.coverImgUrl" alt />
          </div>
          {{item.name}}
        </dd>
       
    </div>
</template>
<script>
export default {
    name:'MySongList',
    data(){
        return{
            songList:[],
        }
    },
    computed:{
        getSongList(){
          return this.musiclist()
        },
    },
    methods:{
      enterDetail(id){
        // console.log(this.songList[index].id);
        // this.$router.push("/playlist/" + this.songList[index].id+"/"+new Date().getTime());
        this.$router.push(`/playlist?id=${id}`)
      },
      musiclist(){
            return this.songList=this.$store.state.SongList;

      }
    }
}
</script>
<style scope>
.song dd {
  height: 60px;
  line-height: 30px;
  padding: 2px 15px;
  font-size: 14px;
  opacity: 1;
  display: flex;
  align-items: center;
}
.song dd div {
  margin-top: 10px;
  margin-right: 10px;
}
.song dd img {
  width: 40px;
  height: 40px;
}

.song dd:hover {
  opacity: 1;
  background: #a7a7a7;
}

</style>