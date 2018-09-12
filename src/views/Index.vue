<template>
    <div id="index">
         <div class="rule">活动规则</div>
         <div class="join">参加活动</div>
         <!-- 登陆 -->
         <login v-if="isLogin"></login>
    </div>
</template>
<script>
    import Login from '@/views/Login'
    export default{
        name:'Index',
        components:{
            login:Login
        },
        data(){
            return{
               isLogin:false
            }
        }
    }
</script>
<style lang="less">
  @import '../../static/css/index';
</style>



