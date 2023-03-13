<template>
  <div class="food" v-for="data, index in food.data" :key="index">
    <!-- <pre>{{ food.data }}</pre> -->
    <div class="food__img" @click="open(food._id)">
      <img :src="`${url}/${data.img[0].response.webp}`">
      <!-- <button class="like" :class="{'liked': like === true}" @click="like =! like">
        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.76797 8.95413e-05C4.14597 0.0111818 4.51196 0.074865 4.86656 0.191231H4.90196C4.92596 0.202231 4.94396 0.214389 4.95596 0.225389C5.08856 0.266493 5.21396 0.312808 5.33395 0.376492L5.56195 0.474911C5.65195 0.521226 5.75995 0.607488 5.81995 0.642803C5.87995 0.67696 5.94595 0.712275 5.99995 0.752222C6.66654 0.260704 7.47593 -0.0056074 8.30992 8.95413e-05C8.68852 8.95413e-05 9.06651 0.0517074 9.42591 0.168074C11.6405 0.862799 12.4385 3.2075 11.7719 5.25694C11.3939 6.30424 10.7759 7.26006 9.96651 8.04105C8.80792 9.12366 7.53653 10.0847 6.16795 10.9126L6.01795 11L5.86195 10.9068C4.48856 10.0847 3.20998 9.12366 2.04059 8.03526C1.2366 7.25427 0.618003 6.30424 0.234007 5.25694C-0.443985 3.2075 0.354006 0.862799 2.59258 0.155916C2.76658 0.0980225 2.94598 0.0574968 3.12598 0.0349182H3.19798C3.36657 0.0111818 3.53397 8.95413e-05 3.70197 8.95413e-05H3.76797ZM9.11391 1.82963C8.86792 1.748 8.59792 1.87594 8.50792 2.11909C8.42392 2.36225 8.55592 2.62856 8.80792 2.71482C9.19251 2.85377 9.44991 3.21908 9.44991 3.62375V3.6417C9.43851 3.77428 9.47991 3.90222 9.56391 4.00064C9.64791 4.09906 9.77391 4.15638 9.90591 4.16853C10.1519 4.16217 10.3619 3.9717 10.3799 3.72796V3.65907C10.3979 2.84798 9.88851 2.1133 9.11391 1.82963Z" fill="#9FA8C7"/>
    </svg>
      </button> -->
    </div>
    <div class="food__title">{{ data.title }}</div>
    <div class="food__bottom">
      <div class="food__bottom-price">
        <div class="text">Цена:</div>
        <div class="price">{{ data.price.toLocaleString() }} sum</div>
      </div>
      <button class="food__cart" @click="addCart(food._id)">+</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  props: ['food'],
  data() {
    return {
      price: Number,
    }
  },
  computed: {
    ...mapGetters([
      'url',
      'getOneFood'
    ]),
  },
  methods: {
    ...mapActions([
      'modalAction',
      'apiOneFood',
      'msgAction'
    ]),
    addCart(_id) {
      let arr = []
      if (this.$cookies.isKey('cart')) {
        arr = this.$cookies.get('cart')
      }
      let index = arr.findIndex(el => el._id === this.food._id)
      if (index !== -1) {
        arr[index].count += 1
        this.msgAction({status: true, title: `Добавлено в корзину. Кол-во: ${arr[index].count}`})
      } else {
        arr.push({_id: _id, count: 1})
        this.msgAction({status: true, title: `Добавлено в корзину`})
      }
      this.$cookies.set('cart', JSON.stringify(arr))
    },
    open(_id) {
      this.modalAction(true)
      this.apiOneFood(_id)
    }
  }
}
</script>

<style lang="scss">
  .food {
    cursor: pointer;
    margin-top: 20px;
    background-color: #fff;
    width: 100%;
    padding: 20px 20px 0px 20px;
    border-radius: 16px;
    box-shadow: 0px 15px 27px rgba(14, 26, 51, 0.08);
    &__img {
      position: relative;
      height: 250px;
      border-radius: 12px;
      .like {
        position: absolute;
        z-index: 1;
        top: 230px;
        right: 15px;
        border: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #fff;
        padding: 10px;
        &.liked {
          svg {
            path {
              fill: #FF5A64;
            }
          }
        }
        svg {
          width: 20px;
          height: 20px;
        }
      }
      img {
        height: 250px;
        border-radius: 12px;
        object-fit: contain;
        width: 100%;
      }
    }
    &__title  {
      margin-top: 20px;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #3F4765;
    }
    &__bottom {
      padding: 15px 0;
      display: flex;
      justify-content: space-between;
      &-price {
        display: flex;
        align-items: center;
        .text {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #7B85A8;
        }
        .price {
          margin-left: 10px;
          font-weight: 700;
          font-size: 22px;
          line-height: 32px;
          color: #38C188;
        }
      }
    }
    &__cart {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      border: 0;
      color: #fff;
      font-size: 34px;
      background: #FF6A49;
    }
  }
</style>