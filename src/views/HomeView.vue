<template>
  <div class="home">
    <div class="container">
      <div class="home__search">
        <input type="text" class="home__search-inp"
        placeholder="Посик по названию блюда...">
        <div class="home__search-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2222 5.77778C8.21535 5.77778 5.77778 8.21535 5.77778 11.2222C5.77778 14.2291 8.21535 16.6667 11.2222 16.6667C14.2291 16.6667 16.6667 14.2291 16.6667 11.2222C16.6667 8.21535 14.2291 5.77778 11.2222 5.77778ZM4.22223 11.2222C4.22223 7.35624 7.35624 4.22223 11.2222 4.22223C15.0882 4.22223 18.2222 7.35624 18.2222 11.2222C18.2222 15.0882 15.0882 18.2222 11.2222 18.2222C7.35624 18.2222 4.22223 15.0882 4.22223 11.2222Z" fill="#8488B7"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5834 16.5833C16.8871 16.2796 17.3796 16.2796 17.6833 16.5833L19.55 18.45C19.8537 18.7538 19.8537 19.2462 19.55 19.55C19.2462 19.8537 18.7538 19.8537 18.45 19.55L16.5834 17.6833C16.2796 17.3795 16.2796 16.8871 16.5834 16.5833Z" fill="#8488B7"/>
  </svg>
        </div>
      </div>
      <div class="home__advertising">
        <div class="home__advertising-bgc">
          <div class="home__advertising-grt">
            <span class="title">Добро пожаловать в Halol Luqma,</span>
            <span class="bold">Закажите прямо сейчас</span>
          </div>
          <span class="divider"></span>
          <div class="home__advertising-bonus">
            <div class="title">Салат, хлеб, вода</div>
            <div class="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="37" viewBox="0 0 25 37" fill="none">
  <path d="M1.27754 0.539286C0.746952 0.386005 0.192567 0.691873 0.0392858 1.22246C-0.113995 1.75305 0.191873 2.30743 0.72246 2.46071L1.27754 0.539286ZM15.134 36.5001C15.4102 36.9783 16.0218 37.1422 16.5001 36.866L24.2939 32.3653C24.7722 32.0891 24.936 31.4775 24.6598 30.9993C24.3836 30.521 23.772 30.3572 23.2938 30.6333L16.3659 34.6339L12.3653 27.7061C12.0891 27.2278 11.4775 27.064 10.9993 27.3402C10.521 27.6164 10.3572 28.228 10.6333 28.7062L15.134 36.5001ZM0.72246 2.46071C4.27051 3.48571 9.3055 6.37777 12.7208 11.7024C16.1129 16.991 17.9706 24.7783 15.0341 35.7413L16.9659 36.2587C20.0294 24.8217 18.1371 16.4423 14.4042 10.6226C10.6945 4.8389 5.22949 1.68096 1.27754 0.539286L0.72246 2.46071Z" fill="#FFE8E3"/>
  </svg>
            </div>
            <div class="circle">
              <div class="text">3 в 1</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="184" height="92" viewBox="0 0 184 92" fill="none"><path d="M184 92C184 79.9184 181.62 67.9551 176.997 56.7931C172.373 45.6312 165.597 35.4892 157.054 26.9462C148.511 18.4032 138.369 11.6265 127.207 7.00308C116.045 2.37965 104.082 -5.28102e-07 92 0C79.9184 5.28106e-07 67.9551 2.37965 56.7931 7.00308C45.6312 11.6265 35.4892 18.4032 26.9462 26.9462C18.4032 35.4892 11.6265 45.6312 7.00308 56.7931C2.37965 67.9551 -1.05621e-06 79.9184 0 92L184 92Z" fill="#FFD954"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="home__category">
        <div class="home__title">
          <div class="title">Категории</div>
          <div class="link">
            <router-link to="/category">Просмотреть все</router-link>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
<path d="M10.8831 1.69628C10.6625 1.49126 10.6625 1.15884 10.8831 0.953818C11.1036 0.748792 11.4611 0.748792 11.6817 0.953818L15.6346 4.62882C15.8552 4.83385 15.8552 5.16626 15.6346 5.37128L11.6817 9.04629C11.4611 9.25131 11.1036 9.25131 10.8831 9.04629C10.6625 8.84126 10.6625 8.50885 10.8831 8.30382L13.872 5.52505L1.41189 5.52505C1.10002 5.52505 0.847189 5.29 0.847189 5.00005C0.847189 4.7101 1.10002 4.47505 1.41189 4.47505L13.872 4.47505L10.8831 1.69628Z" fill="#3F4765"/>
            </svg>
          </div>
        </div>
        <Splide :options="{
          type: 'loop',
          perMove: 1,
          // autoplay: true,
          interval: 4000,
          arrows: false,
          perPage: 10,
          gap: 20,
          // breakpoints: {
          //   1945: {
          //     perPage: 13,
          //     perMove: 1
          //   },
          //   768: {
          //     perPage: 8
          //   }
          // }
        }">
          <SplideSlide v-for="category of getCategory" :key="category">
            <div class="category" style="padding: -40px;">
              <categoryComponent :category="category"/>
            </div>
          </SplideSlide>
        </Splide>
      </div>
      <div class="home__food-today">
        <div class="title">Сегодня в меню</div>
        <div class="home__food">
          <div class="row">
            <div class="col-3"
              v-for="food, index in getFoodsToday" :key="index">
              <foodComponent :food="food"/>
            </div>
          </div>
        </div>
      </div>
      <div class="home__foods" style="margin-bottom: 40px;">
        <div class="home__title">
          <div class="title">Наши блюда</div>
          <div class="link">
            <router-link to="/foods">Просмотреть все</router-link>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
<path d="M10.8831 1.69628C10.6625 1.49126 10.6625 1.15884 10.8831 0.953818C11.1036 0.748792 11.4611 0.748792 11.6817 0.953818L15.6346 4.62882C15.8552 4.83385 15.8552 5.16626 15.6346 5.37128L11.6817 9.04629C11.4611 9.25131 11.1036 9.25131 10.8831 9.04629C10.6625 8.84126 10.6625 8.50885 10.8831 8.30382L13.872 5.52505L1.41189 5.52505C1.10002 5.52505 0.847189 5.29 0.847189 5.00005C0.847189 4.7101 1.10002 4.47505 1.41189 4.47505L13.872 4.47505L10.8831 1.69628Z" fill="#3F4765"/>
            </svg>
          </div>
        </div>
        <div class="home__food">
          <div class="row">
            <div class="col-3" v-for="food in getFoodsMain" :key="food._id">
              <foodComponent :food="food"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

import categoryComponent from '@/components/categoryComponent';
import foodComponent from '@/components/foodComponent';
export default {
  data() {
    return {
      modal: false,
      // card:false
    }
  },
  computed: {
    ...mapGetters([
      'getCategory',
      'getFoodsToday',
      'getFoodsMain',
      'getOneFood',
      'getModal'
    ])
  },
  methods: {
    ...mapActions([
      'apiMainCategory',
      'apiFoodsToday',
      'apiMainFoods',
      'apiOneFood',
    ]),
  },
  mounted() {
    this.apiMainCategory()
    this.apiFoodsToday()
    this.apiMainFoods()
  },
  components: {
    categoryComponent,
    foodComponent,
    Splide,
    SplideSlide,
  }
}
</script>

<style lang="scss">
@import '@splidejs/vue-splide/css';
  .home {
    &__search {
      margin-top: 24px;
      display: flex;
      position: relative;
      &-inp {
        width: 860px;
        height: 38px;
        border: 0;
        border-radius: 7px;
        background: #FFFFFF;
        box-shadow: 0px 19px 56px rgba(49, 79, 124, 0.08);
        border-radius: 48px;
        padding: 12px 0px 12px 52px;
        color: #8488B7;
        font-size: 16px;
        font-weight: 400;
        &::placeholder {
          color: #8488B7;
          font-size: 16px;
          font-weight: 400;
        }
        &:focus {
          outline: unset;
        }
      }
      &-icon {
        position: absolute;
        left: 16px;
        top: 18px;
        bottom: 12px;
      }
    }
    &__advertising {
      margin-top: 32px;
      height: 200px;
      &-bgc {
        height: 100%;
        border-radius: 16px;
        display: flex;
        position: relative;
        background: #FF6A49;
        .divider {
          margin: 40px 0 40px 0;
          width: 3px;
          height: 120px;
          background-color: #FF9D87;
        }
      }
      &-grt {
        margin: 38px 0px 38px 32px;
        color: #FFE0D9;
        width: 400px;
        display: flex;
        flex-direction: column;
        .title {
          color: #FFE0D9;
          font-weight: 400;
          font-size: 20px;
        }
        .bold {
          padding-top: 20px;
          font-size: 40px;
          font-weight: 600;
          line-height: 44px;
        }
      }
      &-bonus {
        margin-top: 25px;
        margin-left: 50px;
        position: relative;
        display: flex;
        flex-direction: column;
        .title {
          padding: 0px 0px 0px 20px;
          width: 200px;
          font-weight: 700;
          font-size: 24px;
          line-height: 28px;
          color: #FFFFFF;
        }
        .arrow {
          position: absolute;
          left: 130px;
          top: 50px;
        }
        .circle {
          margin-top: 27px;
          position: relative;
          display: flex;
          flex-direction: column;
          .text {
            position: absolute;
            font-weight: 700;
            font-size: 44px;
            line-height: 44px;
            color: #FF6A49;
            left: 40px;
            bottom: 10px;
          }
        }
      }
    }
    &__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .link {
        display: flex;
        align-items: center;
        a {
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #3F4765;
        }
        svg {
          margin-left: 8px;
        }
      }
    }
    &__category, &__food-today, &__foods {
      margin-top: 35px;
    }
  }
</style>