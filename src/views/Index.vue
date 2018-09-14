<template>
    <div id="index">
         <div class="rule" @click="ruleTaggle">活动规则</div>
         <div class="join"  @click="join">参加活动</div>
         <!-- 登陆 -->
         <login v-if="loginShow" @closelogin="closeLogin"></login>
         <rule :isshow="ruleShow" @closerule="closeRule"></rule>
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
            ruleTaggle(){
              this.ruleShow = true
            },
            closeLogin(){
                this.loginShow = false
            },
            closeRule(){
                this.ruleShow = false
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



