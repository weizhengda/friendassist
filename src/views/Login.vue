<template>
    <div id="login_wrap">
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
    import Alert from '@/components/alert'
    export default{
        name:'Login',
        data(){
            return{
               phone:'',  // 手机号码
               code:''  // 验证码
            }
        },
        props:{
            isLogin:{
                type:Boolean,
                default:false,
            }
        },
        methods:{
            join(){
                this.isLogin = true
            },
            // 关闭登陆弹窗
            close(){
                this.$emit('closelogin')
            },
            // 发送验证码
            sendCode(){
               
            },
            //登陆
            login(){
                this.$emit('loginto')
            //    if(this.phone === ''){
            //       Alert.show('请输入手机号码！')
            //    }else if(this.code === ''){
            //       Alert.show('请输入验证码！')
            //    }
            }
        }
    }
</script>
<style>
   @import '../../static/css/login.css';
</style>

