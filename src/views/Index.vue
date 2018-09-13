<template>
    <div id="index">
         <div class="rule">活动规则</div>
         <div class="join"  @click="join">参加活动</div>
         <!-- 登陆 -->
         <login v-if="loginShow" @closelogin="closeLogin"></login>
         <rule v-if="ruleShow" @closerule="closeRule"></rule>
    </div>
</template>
<script>
    import Login from '@/views/Login'
    import Rule from '@/views/Rule'
    export default{
        name:'Index',
        components:{
            login:Login,
            rule:Rule
        },
        data(){
            return{
               loginShow:false,
               ruleShow:false,
            }
        },
        methods:{
            closeLogin(){
                this.loginShow = false
            },
              // 参加活动
            join(){
                this.loginShow = true
            },
        }
    }
</script>
<style lang="less">
  @import '../../static/css/index';
</style>



