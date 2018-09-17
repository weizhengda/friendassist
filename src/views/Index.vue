<template>
    <div id="index">
         <div class="join"  @click="joinTo">坂加活动</div>
         <Login :isLogin="isLogin" @closelogin="closeLogin" @loginto="loginTo"></Login>
    </div>
</template>
<script>
  import Login from '@/views/Login'
    export default{
        name:'Index',
        components:{
            Login
        },
        data(){
            return{
               isRule:false,
               isLogin:false
            }
        },
        methods:{
            closeLogin(){
              this.isLogin = false
            },
            joinTo(){
              this.isLogin = true
            },
            loginTo(){
              this.$router.push('/assist')
            }
        }
    }
</script>
<style>
  @import '../../static/css/index.css';
  @import '../../static/css/rule.css';
</style>



