<template>
    <div id="login_wrap">
        <div class="login">
          <div class="title">立即参加好友助力活动</div>
          <div class="phone">
              <input v-model="tel" type="number">
          </div>
          <div class="code">
              <input v-model="code" type="text">
          </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'Login',
        data(){
            return{
               tel:'',  // 手机号码
               code:''  // 验证码
            }
        }
    }
</script>
<style lang="less">
   @import '../../static/css/login';
</style>

