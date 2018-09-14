<template>
    <transition name="fade">
        <div class="toast" v-show="show">
            <span>{{message}}</span>
        </div>

    </transition>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      message: ''
    }
  }
}
</script>

<style lang="css" scoped>
.toast {
  position: fixed;
  top: 40%;
  left: 50%;
  margin-left: -15vw;
  padding: 10px;
  width:100px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  background-color: hsla(0,0%,7%,.7);
  border-radius: 10px;
  z-index: 999;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.3s ease-out;
}
.fade-enter {
  opacity: 0;
  transform: scale(1.2);
}
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
