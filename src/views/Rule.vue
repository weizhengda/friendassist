<template>
    <div id="_rule" v-show="isshow">
         <div class="rule">活动规则</div>
          <div class="join">参加活动</div>
          <div class="rule_wrap">
                <div id="rule">
                    <div class="content">
                        <div class="close">
                            <span @click="close"></span>
                        </div>
                        <div class="title">活动规则</div>
                        <div class="rules">
                            <p>1.邀请好友助力，达到助力人数，即可享受免单权利;</p>
                            <p>2.每个新用户仅可助力一次，同一设、微信号视为同一用户</p>
                            <p>3.若发现用户存在刷单、虚拟用户助力等违规行为，平台有权利判定助力失败;</p>
                            <p>4.邀请到足够好友帮你助力成功之后，可以前往我的订单查看发货与物流详情;</p>
                            <p>5.对物流、商品有疑问或者需要修改收货地址请联系商家客服处理;</p>
                            <p>6.拼多多可在法律法规允许范围内对本次活动规则进行解释并作适当修改;</p>
                        </div>
                    </div>
                </div>
          </div>
    </div>
</template>
<script>
    export default{
        name:'Rule',
        props:{
            isshow:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            close(){
                this.isshow = false
                this.$emit('closerule')
            }
        }
    }
</script>
<style>
    @import '../../static/css/rule';
</style>

