<template>
  <div class="news">
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
      <!-- <pre>{{ getNews }}</pre> -->
      <div class="news__contents">
        <div class="title">Новости</div>
        <div class="row">
          <div class="col-3" v-for="news, index in getNews" :key="index"> <!--  v-for="news, index in getNews.data" :key="index" -->
            <div class="news__content">
              <router-link :to="`/news/${news._id}`" class="news__content-img">
                <!-- <img src="https://i.pinimg.com/564x/a5/68/cd/a568cd085f05a73c525ff79859619504.jpg" alt=""> -->
                <img :src="`${url}/${news.data[0].img[0].response}`" alt="">
              </router-link>
              <div class="news__content-title">{{news.data[0].title}}</div>
              <div class="news__content-text" v-html="news.data[0].text"></div>
            </div>
          </div>
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

    }
  },
  methods: {
    ...mapActions([
      'apiAllNews'
    ])
  },
  computed: {
    ...mapGetters([
      'getNews',
      'url'
    ])
  },
  mounted() {
    this.apiAllNews()
  }
}
</script>

<style lang="scss">
  .news {
    &__contents {
      margin: 40px 0;
    }
    &__content {
      margin-top: 32px;
      width: 100%;
      background: #fff;
      padding: 20px 20px 20px 20px;
      border-radius: 16px;
      box-shadow: 0px 15px 27px rgb(14 26 51 / 8%);
      &-img {
        img {
          border-radius: 15px;
          width: 100%;
        }
      }
      &-title {
        margin-top: 5px;
        font-size: 18px;
        color: #3F4765;
        font-weight: 600;
      }
      &-text {
        margin-top: 8px;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        // font-size: 16px;
        // color: #3F4765;
        // font-weight: 500;
      }
    }
  }
</style>