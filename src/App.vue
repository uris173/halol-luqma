<template>
  <menu-component />
  <modalComponent />
  <formComponent />
  <msgComponent />
  <chatComponent />
  <div class="main">
    <router-view/>
  </div>
  <rightbarComponent />
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import menuComponent from './components/menuComponent.vue';
  import rightbarComponent from './components/rightbarComponent.vue';
  import modalComponent from './components/modalComponent.vue';
  import formComponent from './components/formComponent.vue'
  import msgComponent from './components/msgComponent.vue';
  import chatComponent from './components/chatComponent.vue';
  export default {
    components: {
      menuComponent,
      rightbarComponent,
      modalComponent,
      formComponent,
      msgComponent,
      chatComponent
    },
    // data() {
    //   return {
    //     socket: null
    //   }
    // },
    computed: {
      ...mapGetters([
        'getModal',
        // 'getOneFood'
      ])
    },
    methods: {
      ...mapActions([
        'apiGetCartFoods',
      ])
    },
    mounted() {
      this.apiGetCartFoods()
      // this.apiAllDelivery()
      // console.log(this.$cookies.get('address'));
    }
  }
</script>

<style lang="scss">
  body {
    background-color: #FAFAFA;
    font-family: 'Montserrat';
    padding: 0;
    margin: 0;
  }
  * {
    font-weight: 500;
    margin: 0;
    padding: 0;
    &::after, &::before {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      height: 100%;
      // width: 100vw;
    }
  }
  .main{
    width: 100%;
    height: 100vh;
    overflow-y: auto;
  }
  
  #app {
    display: flex;
    // width: 100vw;
  }

  .container {
    // margin-left: 120px;
    // margin-right: 25px;
    // width: 100%;
    padding: 0px 20px;
  }

  @mixin fb($w){
    flex-basis: $w;
    max-width: $w;
    width: $w;
  }
  .row {
    margin: 0 -15px;
    width: 100%;
    display: flex;
    flex-wrap: wrap
  }
  .col-6 {
    @include fb(100%);
    // padding: 0px 10px;
  }
  .col-6 {
    @include fb(50%);
    // padding: 0px 10px;
  }
  .col-4 {
    @include fb(33.33%);
    // padding: 0px 20px;
  }
  .col-3 {
    @include fb(25%);
    padding: 0px 15px;
    display: flex;
  }
  .col-2 {
    @include fb(16.66%);
    padding: 0px 15px;
    display: flex;
  }
  .col-1 {
    @include fb(8.33%);
    // padding: 0px 15px;
    display: flex;
  }

  .title {
    color: #3F4765;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
  }
  li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
  
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

</style>
