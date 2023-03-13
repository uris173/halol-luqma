<template>
  <div class="modal" :class="{'active': getModal}">
    <div class="modal__content" :class="{'active': getModal}" 
    v-for="data, index in getOneFood.data" :key="index">
      <button class="close" @click="close">×</button>
      <div class="modal__content-left">
        <img :src="`${url}/${data.img[0].response.webp}`" alt="">
      </div>
      <div class="modal__content-right">
        <div class="title">{{ data.title }}</div>
        <div class="calory">Калории: {{ data.calory }}</div>
        <div class="description" >{{ data.description }}</div>
        <div class="bottom">
          <div class="price">{{ data.price }} sum</div>
          <button class="button">Добавить в корзину</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      data: {}
    }
  },
  methods: {
    ...mapActions([
      'modalAction'
    ]),
    close() {
      this.modalAction(false)
    },
  },
  computed: {
    ...mapGetters([
      'url',
      'getModal',
      'getData',
      'getOneFood'
    ]),
  },
}
</script>

<style lang="scss">
  .modal {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100vw;
    z-index: 3;
    // height: 100vh;
    // // z-index: -1;
    // opacity: 0;
    &.active {
      // opacity: 1;
      // position: absolute;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.233);
      margin: auto;
    }
    &__content {
      top: -600px;
      transition: 1s;
      position: fixed;
      width: 950px;
      height: 490px;
      background-color: #fff;
      border-radius: 20px;
      padding: 20px;
      display: flex;
      z-index: 5;
      // right: 0;
      // left: 0;
      &.active {
        transition: 1s;
        position: fixed;
        z-index: 5;
        top: 150px;
      }
      .close {
        position: absolute;
        background: unset;
        border: 0;
        font-size: 28px;
        color: #3F4765;
        right: 25px;
      }
      &-left {
        img {
          width: 100%;
          height: 100%;
        }
        // width: 520px;
      }
      &-right {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        width: 48%;
        .title {
          font-size: 26px;
          font-weight: 700;
          color: #3F4765;
        }
        .calory {
          margin-top: 15px;
          font-size: 18px;
          font-weight: 600;
          color: #3F4765; //#7B85A8
        }
        .description {
          margin-top: 20px;
          font-size: 18px;
          font-weight: 400;
          color: #7B85A8;
        }
        .bottom {
          margin-top: auto;
          margin-bottom: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .price {
            color: #38C188;
            font-size: 24px;
            font-weight: 600;
          }
          .button {
            width: 250px;
            height: 50px;
            border-radius: 25px;
            border: 1px solid #FF6A49;
            background: #fff;
            color: #FF6A49;
            font-size: 20px;
            font-weight: 500;
            transition: .4s;
            &:hover {
              background: #FF6A49;
              color: #fff;
            }
          }
        }
      }
    }
  }
</style>