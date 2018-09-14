<template>
   <div id="alert" v-show="show">
             <div class="title">提示</div>
             <div class="msg">{{message}}</div>
             <div class="sure_btn" @click="close">确认</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      message: ''
    }
  },
  methods:{
        close(){
         this.show = false
        }
    }
}
</script>

<style lang="css" scoped>
#alert{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width:5rem;
    height:5rem;
    border:1px solid rgba(27,210,173);
    border-radius: 0.1rem;
    background:#fff;
    z-index:99999;
}

#alert .title{
    height:1rem;
    line-height:1rem;
    font-size:0.5rem;
    color:#000;
    font-weight: 700;
    text-align: center;
}

#alert .msg{
    height:2.5rem;
    line-height:2.5rem;
    text-align: center;
}

#alert .sure_btn{
    width:2rem;
    height:1rem;
    line-height:1rem;
    border-radius:0.3rem;
    text-align: center;
    margin:0 auto;
    color:#fff;
    background:rgba(27,210,173);
}
</style>



