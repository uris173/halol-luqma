<template>
  <div>
    {{ id }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    ...mapGetters([
      'getOneNews'
    ])
  },
  methods: {
    ...mapActions([
      'apiOneNews'
    ])
  },
  mounted() {
    this.apiOneNews(this.id)
  }
}
</script>

<style>

</style>