<template>
    <div id="login_wrap">
          <index></index>
          <div class="join"  @click="join">参加活动</div>
          <div class="login_wrap" v-show="isLogin">
                <div class="login">
                    <div class="form">
                        <div class="close">
                            <span @click="close"></span>
                        </div>
                        <div class="title">立即参加活动</div>
                        <div class="phone">
                            <img src="/static/img/icon_account.png" alt="">
                            <input v-model="phone" type="number" placeholder="请输入手机号码，新用户登陆即注册">
                        </div>
                        <div class="code">
                            <img src="/static/img/icon_pwd.png" alt="">
                            <input v-model="code" type="number" placeholder="请输入验证码">
                            <span @click="sendCode">发送验证码</span>
                        </div>
                        <div class="sign" @click="login">马上报名</div>
                      </div>
                </div>
          </div>
    </div>
</template>
<script> 
    import Index from '@/views/Index'
    import Alert from '@/components/alert'
    export default{
        name:'Login',
        components:{
           index:Index
        },
        data(){
            return{
               phone:'',  // 手机号码
               code:'',  // 验证码
               isLogin:false
            }
        },
         methods:{
            join(){
                this.isLogin = true
            },
            // 关闭登陆弹窗
            close(){
                this.isLogin = false
            },
            // 发送验证码
            sendCode(){
               
            },
            //登陆
            login(){
               if(this.phone === ''){
                  Alert.show('请输入手机号码！')
               }else if(this.code === ''){
                  Alert.show('请输入验证码！')
               }
            }
        }
    }
</script>
<style>
   @import '../../static/css/login.css';
     .join{
         width: 9.4rem;
         height: 1.3rem;
         line-height:1.3rem;
         font-size: 0.6rem;
         position: absolute;
         bottom:0.3rem;
         left:0.3rem;
         z-index:9;
         color:#fff;
         background-color: #ff5d5d;
    }
</style>

