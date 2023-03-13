<template>
  <!-- <div class="modal" v-show="getModal === true" v-for="data, index in getOneFood.data" :key="index">
    <modalComponent :food="data"/>
  </div> -->
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
    <div class="foods__foods" style="margin-top: 40px; margin-bottom: 40px;">
      <div class="foods__foods-title">
        <div class="title">Все хавки</div>
      </div>
      <div class="foods__food">
        <div class="row">
          <div class="col-3" v-for="food in getFoodsAll" :key="food._id">
            <foodComponent :food="food"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import foodComponent from '@/components/foodComponent';
// import modalComponent from '@/components/modalComponent'
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      modal: false
    }
  },
  computed: {
    ...mapGetters([
      'getFoodsAll',
      'getOneFood',
      'getModal'
    ])
  },
  methods: {
    ...mapActions([
      'apiAllFoods',
      'apiOneFood'
    ]),
  },
  mounted() {
    this.apiAllFoods()
  },
  components: {
    foodComponent,
    // modalComponent
  }
}
</script>

<style lang="scss">
  .foods {
    // .title {
    //   color: #3F4765;
    //   font-weight: 500;
    //   font-size: 20px;
    //   line-height: 32px;
    // }
    &__foods {
      margin-top: 35px;
      &-title {
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
    }
  }
</style>