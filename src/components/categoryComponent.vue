<template>
  <router-link v-for="data of category.data" :key="data" :to="`/foods/${category.slug}`" class="category__link">
    <div class="category__img">
      <img :src="`${url}/${data.img[0].response.webp}`" alt="">
    </div>
    <div class="category__title" >{{data.title}}</div>
  </router-link>
</template>

<script>
// import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { mapGetters } from 'vuex';
export default {
  props: ['category'],
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'url'
    ])
  },
}
</script>

<style lang="scss">
  .category {
    margin-top: 20px;
    background-color: #fff;
    border: 2px solid #FFAB98;
    // box-shadow: 0px 59px 58px rgba(49, 79, 124, 0.08);
    border-radius: 16px;
    width: 98%;
    &__link {
      width: 120px;
      height: 120px;
      // width: 100%;
      // height: 100%;
    }
    &__img {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 20px;
      img {
        height: 40px;
      }
    }
    &__title {
      padding: 10px 0 27px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      color: #3F4765;
    }
  }
</style>
