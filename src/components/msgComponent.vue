<template>
  <div class="message" :class="{'active': getMsg.status}">
    <div class="message__content">
      <div class="message__text">{{ getMsg.title }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'getMsg'
    ])
  },
  methods: {
    ...mapActions([
      'msgAction'
    ])
  }
}
</script>

<style lang="scss">
  .message {
    z-index: 5;
    display: flex;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: -100px;
    transition: .3s ease;
    &.active{
      bottom: 100px;
      .message__content{
        width: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        background-color: #FF6A49;
        border-radius: 15px;
        box-shadow: 0px 0px 10px #FF6A49
      }
      .message__text {
        color: #fff;
      }
    }
  }
</style>