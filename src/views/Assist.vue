<template>
     <div id="assist">
          <div class="share_wrap">
              <div class="share">
                  <!-- 最多显示6个头像 -->
                <div class="face">
                        <img src="../../static/img/face.png" alt="">
                        <img src="../../static/img/face.png" alt="">   
                        <img src="../../static/img/face.png" alt=""> 
                        <img src="../../static/img/face.png" alt="">
                        <img src="../../static/img/face.png" alt="">
                        <img src="../../static/img/face.png" alt="">
                </div>
                <div class="info">你已经帮他助力啦！</div>
                <div class="share_btn" @click="joinTo">我也参加</div>
            </div>
          </div>
          <Follow :isFollow="isFollow" @closefollow="closeFollow"></Follow>
     </div>
</template>
<script>
  import Follow from '@/views/Follow'
     export default{
        name:'Assist',
        components:{
           Follow
        },
        data(){
            return{
              isFollow:false
            }
        },
        methods:{
            closeFollow(){
              this.isFollow = false
            },
            joinTo(){
              this.isFollow = true
            },
        }
    }
</script>
<style>
    @import '../../static/css/assist';
    @import '../../static/css/rule.css';
</style>

