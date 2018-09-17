<template>
    <div id="folllow">
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
                <div class="share_btn" @click="join">我也参加</div>
            </div>
          </div>
          <div class="follow_wrap" v-show="isshow">
                <div id="follow">
                    <div class="content">
                        <div class="close">
                            <div class="close_btn" @click="close"></div>
                        </div>
                        <div class="title">关注参加活动</div>
                        <div class="code">
                             <img src="../../static/img/weixin-gzh.jpg" alt="">
                        </div>
                        <div class="text">长按二维码关注公众号</div>
                    </div>
                </div>
          </div>
    </div>
</template>
<script>
    export default{
        name:'Follow',
        data(){
            return{
               isshow:false
            }
        },
        methods:{
            close(){

            },
            join(){

            }
        }
    }
</script>
<style>
    @import '../../static/css/assist';
    @import '../../static/css/follow';
</style>

