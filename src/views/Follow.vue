<template>
    <div id="folllow">
          <div class="follow_wrap" v-show="isFollow">
                <div id="follow">
                    <div class="content">
                        <div class="close">
                            <div class="close_btn" @click="closeFollow"></div>
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
              
            }
        },
        props:{
           isFollow:{
              type:Boolean,
              default:false
           }
        },
        methods:{
            closeFollow(){
                this.$emit('closefollow')
            },
            join(){
                this.isFollow = true
            }
        }
    }
</script>
<style>
    @import '../../static/css/follow';
</style>

